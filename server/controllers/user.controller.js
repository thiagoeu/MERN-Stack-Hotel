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

export async function userLoginController(req, res) {
  try {
    const { email, password } = req.body;

    // Verificar se o usuario possui cadastro
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email nao cadastrado",
        error: true,
        success: false,
      });
    }

    // Verificar se a senha esta correta
    const isValidPassword = await bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Senha incorreta",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      message: "Login realizado com sucesso",
      error: false,
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
}
