package com.kps.vo;

public class RegistrationRateVO {

	private String jisaClientName;
	private String clientName;
	private String allCount;
	private String enrollCount;
	private String registerEnrollCount;
	private String restCount;
	private String registerRestCount;
	private String courseCode;
	private String courseName;
	private String gradeGbn;
	private String rowNum;
	private String allEnrollCount;
	private String allRegisterCount;
	private String enrollRate;
	private String restEnrollRate;
	private String allenrollRate;
	private String existingEnrollRate;


	public String getAllEnrollCount() {
		return allEnrollCount;
	}
	public void setAllEnrollCount(String allEnrollCount) {
		this.allEnrollCount = allEnrollCount;
	}
	public String getAllRegisterCount() {
		return allRegisterCount;
	}
	public void setAllRegisterCount(String allRegisterCount) {
		this.allRegisterCount = allRegisterCount;
	}
	public String getEnrollRate() {
		return enrollRate;
	}
	public void setEnrollRate(String enrollRate) {
		this.enrollRate = enrollRate;
	}
	public String getRestEnrollRate() {
		return restEnrollRate;
	}
	public void setRestEnrollRate(String restEnrollRate) {
		this.restEnrollRate = restEnrollRate;
	}
	public String getAllenrollRate() {
		return allenrollRate;
	}
	public void setAllenrollRate(String allenrollRate) {
		this.allenrollRate = allenrollRate;
	}
	public String getExistingEnrollRate() {
		return existingEnrollRate;
	}
	public void setExistingEnrollRate(String existingEnrollRate) {
		this.existingEnrollRate = existingEnrollRate;
	}
	public String getRowNum() {
		return rowNum;
	}
	public void setRowNum(String rowNum) {
		this.rowNum = rowNum;
	}
	public String getGradeGbn() {
		return gradeGbn;
	}
	public void setGradeGbn(String gradeGbn) {
		this.gradeGbn = gradeGbn;
	}
	public String getCourseCode() {
		return courseCode;
	}
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getJisaClientName() {
		return jisaClientName;
	}
	public void setJisaClientName(String jisaClientName) {
		this.jisaClientName = jisaClientName;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getAllCount() {
		return allCount;
	}
	public void setAllCount(String allCount) {
		this.allCount = allCount;
	}
	public String getEnrollCount() {
		return enrollCount;
	}
	public void setEnrollCount(String enrollCount) {
		this.enrollCount = enrollCount;
	}
	public String getRegisterEnrollCount() {
		return registerEnrollCount;
	}
	public void setRegisterEnrollCount(String registerEnrollCount) {
		this.registerEnrollCount = registerEnrollCount;
	}
	public String getRestCount() {
		return restCount;
	}
	public void setRestCount(String restCount) {
		this.restCount = restCount;
	}
	public String getRegisterRestCount() {
		return registerRestCount;
	}
	public void setRegisterRestCount(String registerRestCount) {
		this.registerRestCount = registerRestCount;
	}
	@Override
	public String toString() {
		return "RegistrationRateVO [jisaClientName=" + jisaClientName + ", clientName=" + clientName + ", allCount="
				+ allCount + ", enrollCount=" + enrollCount + ", registerEnrollCount=" + registerEnrollCount
				+ ", restCount=" + restCount + ", registerRestCount=" + registerRestCount + ", courseCode=" + courseCode
				+ ", courseName=" + courseName + ", gradeGbn=" + gradeGbn + ", rowNum=" + rowNum + ", allEnrollCount="
				+ allEnrollCount + ", allRegisterCount=" + allRegisterCount + ", enrollRate=" + enrollRate
				+ ", restEnrollRate=" + restEnrollRate + ", allenrollRate=" + allenrollRate + ", existingEnrollRate="
				+ existingEnrollRate + "]";
	}

}
