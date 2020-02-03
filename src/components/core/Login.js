import React from "react";
import Button from "@material-ui/core/Button";

const Login = () => {

  
  return (
    <div className="bea-portal-theme-alibrisInvisible">
    <div className="bea-portal-book-primary">
      <div className="bea-portal-book-primary-content">
        <div className="bea-portal-theme-alibrisMain">
          <div className="bea-portal-book-invisible">
            <div className="bea-portal-book-content">
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div id="bea-portal-book-primary" className="bea-portal-book-page">
                <div id="skip-main">
                  <table className="bea-portal-layout-grid" cellSpacing={0}>
                    <tbody>
                      <tr>
                        <td className="bea-portal-layout-placeholder-container-singleColRightBorder" width="100%">
                          <div className="bea-portal-layout-placeholder">
                            <table className="bea-portal-layout-flow" cellSpacing={0}>
                              <tbody>
                                <tr>
                                  <td className="bea-portal-layout-placeholder-container" width="100%">
                                    <div className="bea-portal-layout-placeholder">
                                      {/* w-begin */}
                                      {/* tb-begin */}
                                      {/* tb-end */}
                                      <div id="login">
                                        <div id="loginContainer">
                                          <div className="page-intro">
                                            <h1>Account Sign-In</h1>
                                          </div>
                                          <p>
                                            {/* start left div */}
                                          </p>
                                          <div className="left">
                                            <form>
                                              <div>
                                                <div>
                                                </div><table width="100%" border={0} cellSpacing={0} cellPadding={0} className="fillout-form">
                                                  <tbody>
                                                    <tr className="header-footer" style={{fontSize: '1.5em'}}>
                                                      <td colSpan={2}>
                                                        <h2>Registered users - sign in</h2></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="email">Username</label>
                                                      </td>
                                                      <td>
                                                        <input name="username" required id="username" type="text" size={24} data-emoji_font="true" style={{fontFamily: 'arial, helvetica, "Segoe UI Emoji", "Segoe UI Symbol", Symbola, EmojiSymbols !important'}} />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="password">password</label>
                                                      </td>
                                                      <td>
                                                        <input name="password" required id="password" type="password" size={24} />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger">Sorry! The e-mail address or password you entered was incorrect. Please try again.</span>
                                                      </td>
                                                    </tr>
                                                    <tr className="header-footer">
                                                      <td colSpan={2} align="right">
                                                        <input type="submit" className="btn oneClick" defaultValue="Sign In" />
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <div style={{textAlign: 'center'}}>
                                                  
                                                 
                                                <Button variant="contained" color="primary">
                                                  Forgot your password? Click here
                                                </Button>
                                                </div>
                                              </div>
                                            </form>
                                            <form noValidate>
                                              <div className="show-success-panel">
                                                <div className="alert alert-success alert-dismissible">
                                                  <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                                                  <strong>An email with temporary password has been sent to your email address!</strong>
                                                </div>
                                                <div className="smallgreytype" style={{textAlign: 'center'}}>
                                                  
                                                  <Button size="large" variant="contained" color="primary">
                                                  Back to Sign In
                                                </Button>
                                                </div>
                                              </div>
                                              <div>
                                                <h5> &gt;&gt; Please enter the e-mail address you use for your account, then click the Enter button. 
                                                  A new password will be sent to the e-mail address you submit.</h5>
                                                <table width="100%" border={0} cellSpacing={0} cellPadding={0} className="fillout-form">
                                                  <tbody>
                                                    <tr className="header-footer" style={{fontSize: '1.5em'}}>
                                                      <td colSpan={2}>
                                                        <h2>Retrieve your password</h2></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="email">Your Email Address</label>
                                                      </td>
                                                      <td>
                                                        <input name="email" required id="email" type="email" size={24} data-emoji_font="true" style={{fontFamily: 'arial, helvetica, "Segoe UI Emoji", "Segoe UI Symbol", Symbola, EmojiSymbols !important'}} />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger">We cannot find your email in our database. Please try again! </span>
                                                      </td>
                                                    </tr>
                                                    <tr className="header-footer">
                                                      <td colSpan={2} align="right">
                                                        <button type="submit" className="btn oneClick">Enter</button>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <div style={{textAlign: 'center'}}>
                                                <Button size="large" variant="contained" color="primary">
                                                Back to Sign In
                                              </Button>
                                                  
                                                </div>
                                              </div>
                                            </form>
                                            <br />
                                            <br />
                                            <br />
                                          </div>
                                          {/* end left div */}
                                          {/* start right div */}
                                          <div className="right">
                                            <form>
                                              <div>
                                                {/* start new customer form */}
                                                <table width="100%" border={0} cellPadding={0} cellSpacing={0} className="fillout-form">
                                                  <tbody>
                                                    <tr className="header-footer" style={{fontSize: '1.5em'}}>
                                                      <td colSpan={2}>
                                                        <h2>Create a new account !</h2></td>
                                                    </tr>
                                                    <tr><td colSpan={2}><div className="alert alert-warning">
                                                          <strong>Your must type all fields below to register</strong> 
                                                        </div></td></tr>
                                                    <tr>
                                                      <td width="42%" align="right">
                                                        <label htmlFor="field0">your name</label>
                                                      </td>
                                                      <td width="58%" align="left" valign="top">
                                                        <input name="name" required id="name" type="text" />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="field1">your username</label>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <input name="username" required id="username" type="text" />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger" >Your username is already used</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="field1">your e-mail</label>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <input name="email1" required id="email1" type="email" />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger">Your email is already used</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="field2">confirm your e-mail</label>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <input name="confirmEmail" required id="confirmEmail" type="email" />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger">Your email does not match</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">&nbsp;</td>
                                                      <td align="left" valign="top"><span className="smallgreytype"><b>Privacy Policy:</b> We do not share your email address.</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="field3">select a password</label>
                                                      </td>
                                                      <td align="left" valign="top">
                                                        <input name="password" required id="password" type="password" />
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger" >Your password must be at least 6 characters</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">&nbsp;</td>
                                                      <td align="left" valign="top"><span className="smallgreytype">Passwords must contain between 6 and 15 characters,<br /> and cannot contain spaces or non-English characters.</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="field4">re-enter password</label>
                                                      </td>
                                                      <td align="left" valign="top"><span className="header">
                                                          <input name="confirmPassword" required id="confirmPassword" type="password" />
                                                        </span></td>
                                                    </tr>
                                                    <tr>
                                                      <td />
                                                      <td><span className="label label-danger">Your password does not match</span></td>
                                                    </tr>
                                                    <tr>
                                                      <td align="right">
                                                        <label htmlFor="field4">Upload Image</label>
                                                      </td>
                                                      <td align="left" valign="top"><span className="header">
                                                          <input type="file" id="userImage" name="userImage"/>
                                                        </span></td>
                                                    </tr>
                                                    <tr>
                                                      <td colSpan={2} align="left" valign="top">
                                                        <table border={0} className="table-btm">
                                                          <tbody>
                                                            <tr>
                                                              <td width={15} align="right" valign="top" style={{borderWidth: 0}}>
                                                                <input type="hidden" name="accountwlw-checkbox_key:{actionForm.receiveNewsletters}OldValue" defaultValue="false" />
                                                                <input type="checkbox" name="accountwlw-checkbox_key:{actionForm.receiveNewsletters}" id="field5" defaultChecked />
                                                              </td>
                                                              <td align="left" valign="top" style={{borderWidth: 0}} className="td-wide">
                                                                <label htmlFor="field5">
                                                                  <div className="nlSign">I agree to all of terms and services</div>
                                                                </label>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <tr className="header-footer">
                                                      <td colSpan={2} align="right" valign="middle">
                                                        <input type="submit" name="continue2" className="btn oneClick" aria-label="sign in" defaultValue="Register"/>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                {/* end new customer form */}
                                              </div>
                                            </form>
                                            {/* start new customer form */}
                                            <table>
                                              <tbody>
                                                <tr>
                                                  <td colSpan={2}>
                                                    <div className="alert alert-success alert-dismissible">
                                                      <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                                                      <h3>Thank you, <strong>newUser.name</strong> ! You have been registered your account successfully. A confirmation email has been sent to your email address <strong>newUser.email</strong>
                                                        .Please Sign In by using username <strong>newUser.username</strong>.
                                                      </h3>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          {/* end right div */}
                                          <div className="clear-space" />
                                        </div>
                                      </div>
                                      {/* w-end */}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
              <div className="bea-portal-theme-alibrisInvisible">
              </div>
            </div>
          </div>
        </div>
        <div className="bea-portal-theme-alibrisMain">
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
