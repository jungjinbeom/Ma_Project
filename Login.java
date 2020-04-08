
public class Login2 {

	private String userid;
	private String userpwd;
	
	public Login2() {
		
	}
    public Login2(String userid, String userpwd) {
		this.userid = userid;
		this.userpwd = userpwd;
	}
    public boolean logchk() {
    	boolean logResult;
    	if(userid.equals("zxc61") && userpwd.equals("4561230")) {
    		logResult = true;
    	}else {
    		logResult = false;
    	}
    	return logResult;
    }

}
