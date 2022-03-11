package com.kps.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kps.dao.DataOutputDao;
import com.kps.vo.PreRegistDataVO;
import com.kps.vo.RegistrationRateVO;
import com.kps.vo.SearchParamVO;

@Service
public class DataOutputService {

	@Autowired
	DataOutputDao dataOutputDao;

	public List<RegistrationRateVO> getEpolyRegistRate(SearchParamVO searchParamVO) {
		RegistrationRateVO registrationRateVO = new RegistrationRateVO();
		List<RegistrationRateVO> list = new ArrayList<RegistrationRateVO>();
		try {
			list = dataOutputDao.getEpolyRegistRate(searchParamVO);
			//list.add(registrationRateVO);
		} catch (Exception e) {
			//list.add(registrationRateVO);
			e.printStackTrace();
		}
		return list;
	}

	public List<PreRegistDataVO> getEpolyPreRegistData(SearchParamVO searchParamVO) {
		PreRegistDataVO preRegistDataVO = new PreRegistDataVO();
		List<PreRegistDataVO> list = new ArrayList<PreRegistDataVO>();
		try {
			list = dataOutputDao.getEpolyPreRegistData(searchParamVO);
			list.add(preRegistDataVO);
		} catch (Exception e) {
			list.add(preRegistDataVO);
			e.printStackTrace();
		}
		return list;
	}


	public List<List<Object>> getLeadersBoardPoint(SearchParamVO searchParamVO) throws Exception {
		if("new".equals(searchParamVO.getEpolyType())) {
			return dataOutputDao.getNewLeadersBoardPoint(searchParamVO);
		} else {
			return dataOutputDao.getOldLeadersBoardPoint(searchParamVO);
		}
	}

	public List<List<Object>> getLeadersBoardIncrease(SearchParamVO searchParamVO) throws Exception {
		if("new".equals(searchParamVO.getEpolyType())) {
			return dataOutputDao.getNewLeadersBoardIncrease(searchParamVO);
		} else {
			return dataOutputDao.getOldLeadersBoardIncrease(searchParamVO);
		}
	}
}
