package com.kps.vo;

public class PreRegistDataVO {

	private String clientName;
	private String courseName;
	private String memberCode;
	private String memberKrName;
	private String memberEnName;
	private String birthdayYmd;
	private String studentStt;
	private String registYn;
	private String registDate;
	private String productName;
	private String phoneNo;
	private String rowNum;

	public String getRowNum() {
		return rowNum;
	}
	public void setRowNum(String rowNum) {
		this.rowNum = rowNum;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getMemberCode() {
		return memberCode;
	}
	public void setMemberCode(String memberCode) {
		this.memberCode = memberCode;
	}
	public String getMemberKrName() {
		return memberKrName;
	}
	public void setMemberKrName(String memberKrName) {
		this.memberKrName = memberKrName;
	}
	public String getMemberEnName() {
		return memberEnName;
	}
	public void setMemberEnName(String memberEnName) {
		this.memberEnName = memberEnName;
	}
	public String getBirthdayYmd() {
		return birthdayYmd;
	}
	public void setBirthdayYmd(String birthdayYmd) {
		this.birthdayYmd = birthdayYmd;
	}
	public String getStudentStt() {
		return studentStt;
	}
	public void setStudentStt(String studentStt) {
		this.studentStt = studentStt;
	}
	public String getRegistYn() {
		return registYn;
	}
	public void setRegistYn(String registYn) {
		this.registYn = registYn;
	}
	public String getRegistDate() {
		return registDate;
	}
	public void setRegistDate(String registDate) {
		this.registDate = registDate;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	@Override
	public String toString() {
		return "PreRegistDataVO [clientName=" + clientName + ", courseName=" + courseName + ", memberCode=" + memberCode
				+ ", memberKrName=" + memberKrName + ", memberEnName=" + memberEnName + ", birthdayYmd=" + birthdayYmd
				+ ", studentStt=" + studentStt + ", registYn=" + registYn + ", registDate=" + registDate
				+ ", productName=" + productName + ", phoneNo=" + phoneNo + ", rowNum=" + rowNum + "]";
	}
}
