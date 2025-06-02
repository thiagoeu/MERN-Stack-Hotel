import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// Listar todos os usuários
export async function listAllUsersController(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
}

// Criar um usuário
export async function userRegisterController(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message:
          "Verifique se os campos name, email e password estao preenchidos corretamente",
        error: true,
        success: false,
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({
        message: "Email ja cadastrado",
        error: true,
        success: false,
      });
    }

    // Criptografar a senha
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    // Criar o usuário
    const payload = {
      name,
      email,
      password: hashedPassword,
    };

    const user = await User.create({ ...payload });

    res.status(201).json({
      message: "Cadastro realizado com sucesso",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, error: true, success: false });
  }
}
