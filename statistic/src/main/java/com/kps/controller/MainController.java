package com.kps.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kps.service.MainService;
import com.kps.vo.MemberVO;
import com.kps.vo.SearchParamVO;

@Controller
@RequestMapping(value = "/")
public class MainController {

	@Autowired
	MainService mainService;

	@Value("${spring.profiles.active}")
	private String profilesActive;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String mainPage(Model model, HttpSession session) {
		if("".equals(session.getAttribute("memberInfo")) || session.getAttribute("memberInfo") == null) {
			return "/loginPage";
		} else {
			return "/epolyStats";
		}
	}

	@PostMapping(value = "/loginAction")
	@ResponseBody
	public MemberVO loginAction(HttpSession session, MemberVO memberVO) throws Exception {
		memberVO = mainService.getMemberYn(memberVO);
		if(!"N".equals(memberVO.getMemberYn())) {
			session.setAttribute("memberInfo", memberVO);
		}
		return memberVO;
	}

	@RequestMapping(value = "/logoutAction")
	public String logoutAction(HttpSession session) {
		session.invalidate();
		return "/loginPage";
	}
}
