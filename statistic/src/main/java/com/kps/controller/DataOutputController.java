package com.kps.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kps.service.DataOutputService;
import com.kps.vo.PreRegistDataVO;
import com.kps.vo.SearchParamVO;

@Controller
@RequestMapping(value = "/data")
@ResponseBody /* data추출 시 전부 ajax형태로 호출 = ajaxController 처리 */
public class DataOutputController {

	@Autowired
	DataOutputService dataOutputService;

	@RequestMapping(value = "/getEpolyRegistRate")
	public List<Object> getEpolyRegistRate(SearchParamVO searchParamVO){
		Map<String, Object> map = new HashMap<String, Object>();

		if(Integer.parseInt(searchParamVO.getSearchMonth()) < 10) {
			searchParamVO.setSearchMonth("0" + searchParamVO.getSearchMonth());
		}

		if(Integer.parseInt(searchParamVO.getSearchDay()) < 10) {
			searchParamVO.setSearchDay("0" + searchParamVO.getSearchDay());
		}

		searchParamVO.setTermGbn("0" + searchParamVO.getTermGbn());

		List<Object> list = new ArrayList<Object>();
		try {
			list.add(dataOutputService.getEpolyRegistRate(searchParamVO));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	@RequestMapping(value = "/getEpolyPreRegistData")
	public List<Object> getEpolyPreRegistData(SearchParamVO searchParamVO){
		searchParamVO.setSemesterGbn(searchParamVO.getTermGbn());
		searchParamVO.setTermGbn("0" + searchParamVO.getTermGbn());

		if(Integer.parseInt(searchParamVO.getSearchMonth()) < 10) {
			searchParamVO.setSearchMonth("0" + searchParamVO.getSearchMonth());
		}

		if(Integer.parseInt(searchParamVO.getSearchDay()) < 10) {
			searchParamVO.setSearchDay("0" + searchParamVO.getSearchDay());
		}

		List<Object> list = new ArrayList<Object>();
		list.add(dataOutputService.getEpolyPreRegistData(searchParamVO));
		//System.out.println(list);
/*		try {
		} catch (Exception e) {
			e.printStackTrace();
			//list.addAll("Error");
		}*/
		return list;
	}

	/* 한꺼번에 넘어오는 데이터를 리스트형태로 뿌일 수 있는 메서드 구현 */
	private <T> List<T> getDataset(List<List<Object>> datasets, int index){
		return (List<T>) datasets.get(index);
	}

	@RequestMapping(value = "/getLeadersBoardPoint")
	public List<List<Object>> getLeadersBoardPoint(SearchParamVO searchParamVO) throws Exception {
		List<List<Object>> datas = dataOutputService.getLeadersBoardPoint(searchParamVO);
		return datas;
	}

	@RequestMapping(value = "/getLeadersBoardIncrease")
	public List<List<Object>> getLeadersBoardIncrease(SearchParamVO searchParamVO) throws Exception {
		List<List<Object>> datas = dataOutputService.getLeadersBoardIncrease(searchParamVO);
		return datas;
	}
}
