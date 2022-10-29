import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

export default () => {
  return (
    <div className="fundo">
      <div className="header">
        <div className="logo">
          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Logo"
            />
          </a>
        </div>
      </div>
      <div className="login_body">
        <div className="login_box">
          <h2>Entrar</h2>
          <form>
            <div class="input_box">
              <input type="textbox" placeholder="Email ou número de telefone" />
            </div>
            <div class="input_box">
              <input type="password" placeholder="Senha" />
            </div>

            <div>
              <Link to="/inicial/" class="link">
                <Button></Button>
              </Link>
            </div>
          </form>
          <div class="support">
            <div class="remember">
              <span>
                <input type="checkbox" />
              </span>
              <span>Lembre-se de mim</span>
            </div>
            <div class="help">
              <a href="">Precisa de ajuda?</a>
            </div>
          </div>
          <div class="login_footer">
            <br /> <br />
            <div class="sign_up">
              <p>
                Novo por aqui?<a href=""> Assine agora.</a>
              </p>
            </div>
            <div class="terms">
              <p>
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô. <a href="#">Saiba mais</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
