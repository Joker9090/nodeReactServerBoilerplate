import React , { Component } from 'react';

export default class Auth extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <form className="col-xs-12 col-sm-6 col-sm-offset-3 form-horizontal" method="post" action="#">
        <div className="form-group">
					<label className="cols-sm-2 control-label">Username</label>
					<div className="cols-sm-10">
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
							<input type="text" className="form-control" name="username" placeholder="Enter your username"/>
						</div>
					</div>
				</div>

        <div className="form-group">
					<label className="cols-sm-2 control-label">Password</label>
					<div className="cols-sm-10">
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
							<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
						</div>
					</div>
				</div>
        <div className="form-group ">
          <input type="submit" value="Login" className="btn btn-primary btn-lg btn-block login-button" />
        </div>

      </form>
    )
  }

}
