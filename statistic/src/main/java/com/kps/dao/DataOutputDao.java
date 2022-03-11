package com.kps.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.kps.vo.PreRegistDataVO;
import com.kps.vo.RegistrationRateVO;
import com.kps.vo.SearchParamVO;

@Mapper
public interface DataOutputDao {
	public List<RegistrationRateVO> getEpolyRegistRate(SearchParamVO searchParamVO) throws Exception;
	public List<PreRegistDataVO> getEpolyPreRegistData(SearchParamVO searchParamVO) throws Exception;
	public List<List<Object>> getNewLeadersBoardPoint(SearchParamVO searchParamVO) throws Exception;
	public List<List<Object>> getNewLeadersBoardIncrease(SearchParamVO searchParamVO) throws Exception;
	public List<List<Object>> getOldLeadersBoardPoint(SearchParamVO searchParamVO) throws Exception;
	public List<List<Object>> getOldLeadersBoardIncrease(SearchParamVO searchParamVO) throws Exception;
}
