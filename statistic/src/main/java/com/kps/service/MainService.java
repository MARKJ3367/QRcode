package com.kps.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kps.dao.MainDao;
import com.kps.vo.MemberVO;

@Service
public class MainService {

	@Autowired
	MainDao mainDao;


	public String getMemberInfo(MemberVO memberVO) {
		String webId = "";
		try {
			webId = mainDao.getMemberInfo(memberVO);
		} catch(Exception e) {
			e.printStackTrace();
		}
		return webId;
	}

	public MemberVO getMemberYn(MemberVO memberVO) throws Exception {
		memberVO = mainDao.getMemberYn(memberVO);
		return memberVO;
	}

}
