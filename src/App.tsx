import { useState } from "react";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginClick, setLoginClick] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const logClick = () => {
    if (email === "ashish@gmail.com" && password === "ashish@123") {
      setLoginClick(false);
    } else {
      alert("Invalid details")
    }
  };

  const LogOut = () => {
    setLoginClick(true);
  }

  const handleSignup = () => {
    setIsLogin(false);
    setActive(true);
  }

  return (
    <>
      {loginClick ? (
        <div className="main">
          <div className="main-bg">
            {isLogin ? (
              <div className={`login-box ${active ? "active" : ""}`}>
                <div className="signin">
                  <div className="signin-inner">
                    <h2>Sign In</h2>
                    <div className="sign-in-option">
                      <ul>
                        <li>
                          <FaGoogle />
                        </li>
                        <li>
                          <FaFacebookF />
                        </li>
                        <li>
                          <FaGithub />
                        </li>
                        <li>
                          <FaLinkedinIn />
                        </li>
                      </ul>
                    </div>
                    <p>or use your email password</p>
                    <div className="form">
                      <form action="">
                        <div className="form-group">
                          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="button" onClick={() => logClick()}>
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="signin-text">
                  <div className="inner-signin-text">
                    <h2>Hello Friend!</h2>
                    <p>
                      Register with your personal details to use all of site
                      feature.
                    </p>
                    <button type="button" onClick={handleSignup}>
                      SIGN UP
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sign-up">
                <div className="signin-text">
                  <div className="inner-signin-text">
                    <h2>Hello Friend!</h2>
                    <p>
                      Register with your personal details to use all of site
                      feature.
                    </p>
                    <button type="button">Login</button>
                  </div>
                </div>
                <div className="signin">
                  <div className="signin-inner">
                    <h2>Sign Up</h2>
                    <div className="form">
                      <form action="">
                        <div className="form-group">
                          <input type="text" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <input type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </div>
                        <button type="button">Register</button>
                      </form>
                    </div>
                    <p className="mt-15">OR</p>
                    <div className="sign-in-option mt-15">
                      <ul>
                        <li>
                          <FaGoogle />
                        </li>
                        <li>
                          <FaFacebookF />
                        </li>
                        <li>
                          <FaGithub />
                        </li>
                        <li>
                          <FaLinkedinIn />
                        </li>
                      </ul>
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        margin: "0 auto",
                        width: "100%",
                      }}
                    >
                      Already have a account ? &nbsp;{" "}
                      <p
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => setIsLogin(true)}
                      >
                        {" "}
                        Login
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="app">
          <aside className="sidebar">
            <div className="sidebar__logo">
              <span className="sidebar__logo-mark">D</span>
              <span className="sidebar__logo-text">Dashly</span>
            </div>

            <nav className="nav">
              <a href="#" className="nav__item nav__item--active">
                <span className="nav__icon">🏠</span>
                <span className="nav__label">Dashboard</span>
              </a>
              <a href="#" className="nav__item">
                <span className="nav__icon">📊</span>
                <span className="nav__label">Analytics</span>
              </a>
              <a href="#" className="nav__item">
                <span className="nav__icon">🛒</span>
                <span className="nav__label">Orders</span>
              </a>
              <a href="#" className="nav__item">
                <span className="nav__icon">👥</span>
                <span className="nav__label">Customers</span>
              </a>
              <a href="#" className="nav__item">
                <span className="nav__icon">📦</span>
                <span className="nav__label">Products</span>
              </a>
              <a href="#" className="nav__item">
                <span className="nav__icon">⚙️</span>
                <span className="nav__label">Settings</span>
              </a>
            </nav>

            <div className="sidebar__footer">
              <div className="upgrade">
                <p className="upgrade__title">Pro Plan</p>
                <p className="upgrade__text">Zyada features unlock karein</p>
                <button className="btn btn--light">Upgrade</button>
              </div>
            </div>
          </aside>

          <div className="main2">
            <header className="topbar">
              <div className="topbar__title">
                <h1>Dashboard</h1>
                <p>Wapas swagat hai, yahan aapke business ka overview hai</p>
              </div>
              <div className="topbar__actions">
                <input
                  className="search"
                  type="search"
                  placeholder="Search karein..."
                />
                <button className="icon-btn" aria-label="Notifications">
                  🔔<span className="icon-btn__dot"></span>
                </button>
                <div className="profile">
                  <span className="avatar">AK</span>
                  <div className="profile__info">
                    <strong>Ashish Kumar</strong>
                    <small>Admin</small>
                  </div>
                </div>

                <div className="logout" style={{ marginLeft: "15px" }}>
                  <button type="button" onClick={() => LogOut()} style={{ cursor: "pointer", padding: "8px 16px", borderRadius: "10px", backgroundColor: "#165823", color: "#fff", border: "0", outline: "none" }}>Logout</button>
                </div>
              </div>
            </header>

            <main className="content">
              <section className="stats">
                <article className="card stat">
                  <div className="stat__icon stat__icon--purple">💰</div>
                  <div className="stat__body">
                    <p className="stat__label">Total Revenue</p>
                    <h2 className="stat__value">₹4,52,300</h2>
                    <span className="stat__trend stat__trend--up">▲ 12.5%</span>
                  </div>
                </article>
                <article className="card stat">
                  <div className="stat__icon stat__icon--blue">🛒</div>
                  <div className="stat__body">
                    <p className="stat__label">Orders</p>
                    <h2 className="stat__value">1,284</h2>
                    <span className="stat__trend stat__trend--up">▲ 8.2%</span>
                  </div>
                </article>
                <article className="card stat">
                  <div className="stat__icon stat__icon--green">👥</div>
                  <div className="stat__body">
                    <p className="stat__label">Customers</p>
                    <h2 className="stat__value">8,940</h2>
                    <span className="stat__trend stat__trend--up">▲ 4.1%</span>
                  </div>
                </article>
                <article className="card stat">
                  <div className="stat__icon stat__icon--orange">↩️</div>
                  <div className="stat__body">
                    <p className="stat__label">Refunds</p>
                    <h2 className="stat__value">42</h2>
                    <span className="stat__trend stat__trend--down">
                      ▼ 2.4%
                    </span>
                  </div>
                </article>
              </section>

              <section className="grid-2">
                <article className="card">
                  <div className="card__head">
                    <h3>Weekly Sales</h3>
                    <select className="select">
                      <option>Is hafte</option>
                      <option>Pichle hafte</option>
                    </select>
                  </div>
                  <div className="chart">
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Tue</span>
                    </div>
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Mon</span>
                    </div>
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Wed</span>
                    </div>
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Thu</span>
                    </div>
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Fri</span>
                    </div>
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Sat</span>
                    </div>
                    <div className="chart__col">
                      <div className="chart__bar"></div>
                      <span>Sun</span>
                    </div>
                  </div>
                </article>

                <article className="card">
                  <div className="card__head">
                    <h3>Recent Activity</h3>
                  </div>
                  <ul className="activity">
                    <li className="activity__item">
                      <span className="activity__dot activity__dot--green"></span>
                      <div>
                        <p>
                          Naya order <strong>#1284</strong> mila
                        </p>
                        <small>2 min pehle</small>
                      </div>
                    </li>
                    <li className="activity__item">
                      <span className="activity__dot activity__dot--blue"></span>
                      <div>
                        <p>Rahul ne payment kiya</p>
                        <small>18 min pehle</small>
                      </div>
                    </li>
                    <li className="activity__item">
                      <span className="activity__dot activity__dot--orange"></span>
                      <div>
                        <p>Stock kam hai: Headphones</p>
                        <small>1 ghante pehle</small>
                      </div>
                    </li>
                    <li className="activity__item">
                      <span className="activity__dot activity__dot--purple"></span>
                      <div>
                        <p>Naya customer register hua</p>
                        <small>3 ghante pehle</small>
                      </div>
                    </li>
                  </ul>
                </article>
              </section>

              <section className="card">
                <div className="card__head">
                  <h3>Recent Orders</h3>
                  <button className="btn btn--primary">Sab dekhein</button>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1284</td>
                        <td>Rahul Sharma</td>
                        <td>Wireless Headphones</td>
                        <td>₹2,499</td>
                        <td>
                          <span className="badge badge--success">
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>#1283</td>
                        <td>Priya Singh</td>
                        <td>Smart Watch</td>
                        <td>₹4,999</td>
                        <td>
                          <span className="badge badge--warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>#1282</td>
                        <td>Vikram Rao</td>
                        <td>Laptop Bag</td>
                        <td>₹1,299</td>
                        <td>
                          <span className="badge badge--info">Shipped</span>
                        </td>
                      </tr>
                      <tr>
                        <td>#1281</td>
                        <td>Neha Gupta</td>
                        <td>Bluetooth Speaker</td>
                        <td>₹1,899</td>
                        <td>
                          <span className="badge badge--danger">Cancelled</span>
                        </td>
                      </tr>
                      <tr>
                        <td>#1280</td>
                        <td>Sandeep Jain</td>
                        <td>Keyboard</td>
                        <td>₹3,199</td>
                        <td>
                          <span className="badge badge--success">
                            Delivered
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
