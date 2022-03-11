package com.kps.vo;

public class LeadersBoardDataVO {

	private String memberCode;
	private String rank;
	private String krMemberName;
	private String enMemberName;
	private String point;
	private String clientEnName;
	private String learningYearCode;
	private String termGbn;
	private String courseCode;
	private String round;
	private String courseName;
	private String increasePoint;


	public String getIncreasePoint() {
		return increasePoint;
	}
	public void setIncreasePoint(String increasePoint) {
		this.increasePoint = increasePoint;
	}
	public String getMemberCode() {
		return memberCode;
	}
	public void setMemberCode(String memberCode) {
		this.memberCode = memberCode;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	public String getKrMemberName() {
		return krMemberName;
	}
	public void setKrMemberName(String krMemberName) {
		this.krMemberName = krMemberName;
	}
	public String getEnMemberName() {
		return enMemberName;
	}
	public void setEnMemberName(String enMemberName) {
		this.enMemberName = enMemberName;
	}
	public String getPoint() {
		return point;
	}
	public void setPoint(String point) {
		this.point = point;
	}
	public String getClientEnName() {
		return clientEnName;
	}
	public void setClientEnName(String clientEnName) {
		this.clientEnName = clientEnName;
	}
	public String getLearningYearCode() {
		return learningYearCode;
	}
	public void setLearningYearCode(String learningYearCode) {
		this.learningYearCode = learningYearCode;
	}
	public String getTermGbn() {
		return termGbn;
	}
	public void setTermGbn(String termGbn) {
		this.termGbn = termGbn;
	}
	public String getCourseCode() {
		return courseCode;
	}
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	public String getRound() {
		return round;
	}
	public void setRound(String round) {
		this.round = round;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	@Override
	public String toString() {
		return "LeadersBoardDataVO [memberCode=" + memberCode + ", rank=" + rank + ", krMemberName=" + krMemberName
				+ ", enMemberName=" + enMemberName + ", point=" + point + ", clientEnName=" + clientEnName
				+ ", learningYearCode=" + learningYearCode + ", termGbn=" + termGbn + ", courseCode=" + courseCode
				+ ", round=" + round + ", courseName=" + courseName + ", increasePoint=" + increasePoint + "]";
	}

}
