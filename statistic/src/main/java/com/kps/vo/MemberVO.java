package com.kps.vo;

public class MemberVO {
	private int memberCode;
	private String memberName;
	private int clientCode;
	private String clientName;
	private int authorityLevel;
	private String partnerId;
	private String partnerPw;
	private String phoneNo;
	private String memberYn;
	
	public int getMemberCode() {
		return memberCode;
	}
	public void setMemberCode(int memberCode) {
		this.memberCode = memberCode;
	}
	public int getClientCode() {
		return clientCode;
	}
	public void setClientCode(int clientCode) {
		this.clientCode = clientCode;
	}
	public int getAuthorityLevel() {
		return authorityLevel;
	}
	public void setAuthorityLevel(int authorityLevel) {
		this.authorityLevel = authorityLevel;
	}
	public String getPartnerId() {
		return partnerId;
	}
	public void setPartnerId(String partnerId) {
		this.partnerId = partnerId;
	}
	public String getPartnerPw() {
		return partnerPw;
	}
	public void setPartnerPw(String partnerPw) {
		this.partnerPw = partnerPw;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getMemberYn() {
		return memberYn;
	}
	public void setMemberYn(String memberYn) {
		this.memberYn = memberYn;
	}
	@Override
	public String toString() {
		return "MemberVO [memberCode=" + memberCode + ", memberName=" + memberName + ", clientCode=" + clientCode
				+ ", clientName=" + clientName + ", authorityLevel=" + authorityLevel + ", partnerId=" + partnerId
				+ ", partnerPw=" + partnerPw + ", phoneNo=" + phoneNo + "]";
	}
}
