package com.kps.vo;

public class SearchParamVO {

	private String learningYearCode;
	private String termGbn;
	private String semesterGbn;
	private String searchMonth;
	private String searchDay;
	private String grade;
	private String registDataType; // campus, raw
	private String registCampusGbn; // 직영, 분원
	private String clientEnName;
	private String round;
	private String leadersBoardDataType;
	private String epolyType;


	public String getSemesterGbn() {
		return semesterGbn;
	}
	public void setSemesterGbn(String semesterGbn) {
		this.semesterGbn = semesterGbn;
	}
	public String getEpolyType() {
		return epolyType;
	}
	public void setEpolyType(String epolyType) {
		this.epolyType = epolyType;
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
	public String getSearchMonth() {
		return searchMonth;
	}
	public void setSearchMonth(String searchMonth) {
		this.searchMonth = searchMonth;
	}
	public String getSearchDay() {
		return searchDay;
	}
	public void setSearchDay(String searchDay) {
		this.searchDay = searchDay;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getRegistDataType() {
		return registDataType;
	}
	public void setRegistDataType(String registDataType) {
		this.registDataType = registDataType;
	}
	public String getRegistCampusGbn() {
		return registCampusGbn;
	}
	public void setRegistCampusGbn(String registCampusGbn) {
		this.registCampusGbn = registCampusGbn;
	}
	public String getClientEnName() {
		return clientEnName;
	}
	public void setClientEnName(String clientEnName) {
		this.clientEnName = clientEnName;
	}
	public String getRound() {
		return round;
	}
	public void setRound(String round) {
		this.round = round;
	}
	public String getLeadersBoardDataType() {
		return leadersBoardDataType;
	}
	public void setLeadersBoardDataType(String leadersBoardDataType) {
		this.leadersBoardDataType = leadersBoardDataType;
	}
	@Override
	public String toString() {
		return "SearchParamVO [learningYearCode=" + learningYearCode + ", termGbn=" + termGbn + ", semesterGbn="
				+ semesterGbn + ", searchMonth=" + searchMonth + ", searchDay=" + searchDay + ", grade=" + grade
				+ ", registDataType=" + registDataType + ", registCampusGbn=" + registCampusGbn + ", clientEnName="
				+ clientEnName + ", round=" + round + ", leadersBoardDataType=" + leadersBoardDataType + ", epolyType="
				+ epolyType + "]";
	}

}
