import './Login.css'

function Login() {
    function show() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'text');
        p.type='text';
    }

    function hide() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'password');
    }

    var pwShown = 0;

    function seePassword() {
        if (pwShown == 0) {
            pwShown = 1;
            show();
        } else {
            pwShown = 0;
            hide();
        }
    }
    return (
        <div>
            <div class="overlay">
                <form>
                    <div class="con">
                        <header class="head-form">
                            <h2>Log In</h2>
                            <p>login here using your username and password</p>
                        </header>
                        <br> </br>
                        <div class="field-set">
                            <span class="input-item">
                                <i class="fa fa-user-circle"></i>
                            </span>
                            <input class="form-input" id="txt-input" type="text" placeholder="@UserName" required />
                            <br> </br>
                            <span class="input-item">
                                <i class="fa fa-key"></i>
                            </span>
                            <input class="form-input" type="password" placeholder="Password" id="pwd" name="password" required></input>
                            <span>
                                <i class="fa fa-eye" aria-hidden="true" type="button" id="eye" onClick={seePassword()}></i>
                            </span>
                            <br> </br>
                            <button class="log-in"> Log In </button>
                        </div>
                        <div class="other">
                            <button class="btn submits sign-up">Sign Up
                                 <i class="fa fa-user-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default Login;