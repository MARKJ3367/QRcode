package com.kps.dao;

import org.apache.ibatis.annotations.Mapper;
import com.kps.vo.MemberVO;

@Mapper
public interface MainDao {
	public String getMemberInfo(MemberVO memberVO) throws Exception;
	public MemberVO getMemberYn(MemberVO memberVO) throws Exception;
}
