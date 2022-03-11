/*테이블데이터 리셋*/
function tableReset(){
	  $('.tableWrap').html('');
	  $('.tableWrap').append('<table id="jqGrid" class="scroll" cellpadding="0" cellspacing="0"></table>'
			  				+ '<div id="pager" class="scroll" style="text-align:center;"></div>');
}

/*jqGrid 디자인 변경 함수*/
function ChangejQGridDesign(table, pager) {
    jQuery(table).jqGrid('navGrid', pager, {
    	searchicon: 'ace-icon fa fa-search orange',
    	refreshicon: 'ace-icon fa fa-refresh green',
    	viewicon: 'ace-icon fa fa-search-plus grey',
        edit: false, add: false, del: false,
        search: true, refresh: true, view: true
    });

    jQuery(table).jqGrid('inlineNav', pager, {
    	editicon: 'ace-icon fa fa-pencil blue',
    	addicon: 'ace-icon fa fa-plus-circle purple',
    	delicon: 'ace-icon fa fa-trash-o red',
        edit: true,	add: true, del: true,
    });

    var replacement = {
        'ui-icon-seek-first': 'ace-icon fa fa-angle-double-left bigger-140',
        'ui-icon-seek-prev': 'ace-icon fa fa-angle-left bigger-140',
        'ui-icon-seek-next': 'ace-icon fa fa-angle-right bigger-140',
        'ui-icon-seek-end': 'ace-icon fa fa-angle-double-right bigger-140'
    };

    $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function () {
        var icon = $(this);
        var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

        if ($class in replacement) icon.attr('class', 'ui-icon ' + replacement[$class]);
    });

    $('.navtable .ui-pg-button').tooltip({ container: 'body' });
    $(table).find('.ui-pg-div').tooltip({ container: 'body' });

    var $grid = $(table),
    newWidth = $grid.closest(".ui-jqgrid").parent().width();
    $grid.jqGrid("setGridWidth", newWidth, true);

    $(window).on("resize", function () {
        var $grid = $(table),
            newWidth = $grid.closest(".ui-jqgrid").parent().width();
        $grid.jqGrid("setGridWidth", newWidth, true);
    });
}

/* 등록율 엑셀출력 함수 - 셀 컬러 등 속성값도 가져옴 */
function jqGridToExcel(id, fileNm){
	$('#jqGrid tbody').append('<tr role="row" id=' + $('#jqGrid tr').length + ' tabindex="-1" class="jqgrow ui-row-ltr ui-widget-content"></tr>')
	if(fileNm == 'e-POLY등록율(Campus)'){ // footerData - 등록율
		for(var i=1 ; i < $('.footrow td').length ; i++){
			$('#jqGrid tbody tr#' + ($('#jqGrid tr').length-1)).append(
					'<td role="gridcell" style="text-align:center; background-color:black; color:#ffffff; font-weight:bold" title="' + $('.footrow td').eq(i).html() + '" aria-describedby="jqGrid_footerData" id="footerRows'+ i +'">' + $('.footrow td').eq(i).html() + '</td>'
			);
		}
	}else { // footerData - 등록율 Raw
		for(var i=0 ; i < $('.footrow td').length ; i++){
			$('#jqGrid tbody tr#' + ($('#jqGrid tr').length-1)).append(
					'<td role="gridcell" style="text-align:center; background-color:black; color:#ffffff; font-weight:bold" title="' + $('.footrow td').eq(i).html() + '" aria-describedby="jqGrid_footerData" id="footerRows'+ i +'">' + $('.footrow td').eq(i).html() + '</td>'
			);
		}
	}
	$('#excelDiv').remove();
    var gridDiv = document.getElementById('gbox_' + id);
    var thead = gridDiv.querySelector('.ui-jqgrid-htable>thead');
    var tbody = gridDiv.querySelector('#'+id+'>tbody');
    $('body').append('<div id="excelDiv"></div>');
    $('#excelDiv').append('<table id="excelTable_'+ id +'">');
    $('#excelDiv').append(thead.innerHTML + tbody.innerHTML);
    $('#excelDiv').append('</table>');
    $('#excelDiv').append('</div>');
    $('#wrap').append($('#excelDiv').html());
    var excelDiv = document.getElementById('excelDiv');
    var theadFirstRow = excelDiv.querySelector('.jqg-first-row-header');
    if(theadFirstRow != null) {
        theadFirstRow.outerHTML = "";
    }
    var theadSpans = excelDiv.querySelectorAll('span');
    theadSpans.forEach(function(span){
        span.outerHTML="";
    });
    var tbodyFirstRow = excelDiv.querySelector('.jqgfirstrow');
    tbodyFirstRow.outerHTML = "";
    $('#excelDiv').show();
    $("#excelDiv").table2excel({
        exclude: ".excludeThisClass",
        name: fileNm,
        filename: fileNm + '_' + todayDate + ".xls",
        preserveColors: true
    });
    $('#excelDiv').hide();
    $('#jqGrid tbody tr#' + ($('#jqGrid tr').length-1)).remove();
    setTimeout(function() {
        $('#excelDiv').remove();
    }, 500);
}

function preRegistDataGrid(data){
	$('#jqGrid').jqGrid({
		"datatype": "jsonstring",
        "datastr": data,
        "jsonReader": { repeatitems: false },
		"colModel": [
            {
                "name": "rowNum",
                "index": "rowNum",
                "sorttype": "string",
                "key": true,
                "hidden": true,
                "width": 125, "sortable": true,
            }, {
                "name": "clientName",
                "index": "clientName",
                "sorttype": "string",
                "label": "캠퍼스명",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "courseName",
                "index": "courseName",
                "sorttype": "string",
                "label": "과정명",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "memberCode",
                "index": "memberCode",
                "sorttype": "number",
                "label": "학번",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "memberKrName",
                "index": "memberKrName",
                "sorttype": "string",
                "label": "이름(한글)",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "memberEnName",
                "index": "memberEnName",
                "sorttype": "string",
                "label": "이름(영문)",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "birthdayYmd",
                "index": "birthdayYmd",
                "sorttype": "number",
                "label": "생년월일",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "studentStt",
                "index": "studentStt",
                "sorttype": "string",
                "label": "재학상태",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "registYn",
                "index": "registYn",
                "sorttype": "string",
                "label": "결제여부",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "registDate",
                "index": "registDate",
                "sorttype": "date",
                "label": "결제일자",
                "width": 125, "sortable": true,
                "align": "center"
            }, {
                "name": "productName",
                "index": "productName",
                "sorttype": "string",
                "label": "구매상품",
                "width": 125, "sortable": true,
                "align": "center",
            }, {
                "name": "phoneNo",
                "index": "phoneNo",
                "sorttype": "number",
                "label": "학부모 핸드폰",
                "width": 125, "sortable": true,
                "align": "center",
            }
        ],
        pager: "#pager",
        caption : "e-POLY 사전등록 데이터",
        height : "auto;",
        width : "auto;",
        sortorder: "asc",
        gridview: true,
        viewrecords: true,
        loadonce : true,
        loadui: false,
        footerrow: false,
        userDataOnFooter : false,
        total: data.length,
        "rowNum": 50,
	}).navGrid('#pager',
            {search:true,edit:false,add:false,del:false}
      );
	ChangejQGridDesign("#jqGrid", "#pager");
}

$('#preRegistSearchBtn').click(function(){
	var learningYearCode = $('#preRegistYear').val();
	var month = $('#preRegistMonth').val();
	var day = $('#preRegistDay').val();
	var termGbn = $('#preRegistSemester').val();

	if(month == '' || day == ''){
		alert('필수값을 입력해주세요.');
	} else {
		tableReset();
		$('#jqGrid').clearGridData();
		$.jgrid.gridUnload("#jqGrid");

		$('.dimmedArea').show();

		$.ajax({
			url: '/data/getEpolyPreRegistData',
			data: {
				learningYearCode : learningYearCode,
				termGbn : termGbn,
				searchMonth : month,
				searchDay : day,
			},
			type: 'GET',
			success: function(successData){
				debugger;
				data = successData[0];
				console.log(data)
				preRegistDataGrid(data);
			    $("#jqGrid").jqGrid('navButtonAdd','#pager',{caption:"Excel Export",title : "Excel Export", onClickButton : function(e){
			    	$("#jqGrid").jqGrid("exportToExcel",{
						includeLabels : true,
						includeGroupHeader : true,
						includeFooter: true,
						fileName : "e-POLY_사전등록데이터_" + todayDate + ".xlsx",
						maxlength : 40,
					})
				}});
			    $('.dimmedArea').hide();
			}, error: function(){
				alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요!');
				$('.dimmedArea').hide();
				preRegistDataGrid('');
			}
		})
	}
})

$('#searchBtn').click(function(){
	var learningYearCode = $('#year').val();
	var termGbn = $('#semester').val();
	var month = $('#month').val();
	var day = $('#day').val();
	var selectDataType = $('#selectDataType').val();
	var grade = $('#grade').val();
	var selectCampusType = $('#selectCampusType').val();
	var data = '';

	if(month == '' || day == '' ){
		alert('필수값을 입력해주세요!');
	} else {
		tableReset();
		$('.dimmedArea').show();
		if(selectDataType == 'Campus'){
			$('#jqGrid').clearGridData();
			$.jgrid.gridUnload("#jqGrid");
			$('#jqGrid').jqGrid({
				"colModel": [
		            {
		                "name": "rowNum",
		                "index": "rowNum",
		                "sorttype": "string",
		                "key": true,
		                "hidden": true,
		                "width": 125, "sortable": true,
		            }, {
		                "name": "jisaClientName",
		                "index": "jisaClientName",
		                "sorttype": "string",
		                "label": "지사",
		                "width": 125, "sortable": true,
		                "align": "center",
		            }, {
		                "name": "clientName",
		                "index": "clientName",
		                "sorttype": "string",
		                "label": "캠퍼스명",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "allCount",
		                "index": "allCount",
		                "sorttype": "number",
		                "label": "전체학생 수",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "enrollCount",
		                "index": "enrollCount",
		                "sorttype": "number",
		                "label": "재학생 수",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "registerEnrollCount",
		                "index": "registerEnrollCount",
		                "sorttype": "number",
		                "label": "등록 재학생 수",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "restCount",
		                "index": "restCount",
		                "sorttype": "number",
		                "label": "휴학생 수",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "registerRestCount",
		                "index": "registerRestCount",
		                "sorttype": "number",
		                "label": "등록 휴학생 수",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "allEnrollCount",
		                "index": "allEnrollCount",
		                "sorttype": "number",
		                "label": "e-POLY 전체대상자",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "allRegisterCount",
		                "index": "allRegisterCount",
		                "sorttype": "number",
		                "label": "e-POLY 전체등록자",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "enrollRate",
		                "index": "enrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 재학생등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }, {
		                "name": "restEnrollRate",
		                "index": "restEnrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 휴학생등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }, {
		                "name": "allenrollRate",
		                "index": "allenrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 전체등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }, {
		                "name": "existingEnrollRate",
		                "index": "existingEnrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 기존등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }
		        ],
	            datatype: "local",
	            pager: "#pager",
	            caption : "e-POLY 등록율",
	            height : "auto;",
	            width : "1000px;",
	            sortorder: "asc",
	            viewrecords: true,
	            loadonce : true,
	            loadui: false,
	            footerrow: true,
	            userDataOnFooter : true,
	            gridComplete : function(data){
	            	var sum1 = $("#jqGrid").jqGrid('getCol','allCount', false, 'sum');
	            	var sum2 = $("#jqGrid").jqGrid('getCol','enrollCount', false, 'sum');
	            	var sum3 = $("#jqGrid").jqGrid('getCol','registerEnrollCount', false, 'sum');
	            	var sum4 = $("#jqGrid").jqGrid('getCol','restCount', false, 'sum');
	            	var sum5 = $("#jqGrid").jqGrid('getCol','registerRestCount', false, 'sum');
	            	var sum6 = $("#jqGrid").jqGrid('getCol','allEnrollCount', false, 'sum');
	            	var sum7 = $("#jqGrid").jqGrid('getCol','allRegisterCount', false, 'sum');
	            	$('#jqGrid').jqGrid('footerData'
	            						, 'set'
	            						, { crateName:'합계'
	            							, allCount: sum1
	            							, enrollCount: sum2
	            							, registerEnrollCount: sum3
	            							, restCount: sum4
	            							, registerRestCount: sum5
	            							, allEnrollCount: sum6
	            							, allRegisterCount: sum7
	            							, enrollRate: ((sum3/sum2) * 100).toFixed(2)
	            							, restEnrollRate: ((sum5/sum4) * 100).toFixed(2)
	            							, allenrollRate: ((sum7/sum6) * 100).toFixed(2)
	            							, existingEnrollRate: ((sum7/sum2) * 100).toFixed(2)
	            						}
	            	);

	            	var colors = ['#FFFFB4', '#D1FFCA', '#FFEAEA', '#E7E7E7', '#FF0000', '#E0FFDB'];
	                var ids = $("#jqGrid").getDataIDs();
	                $.each( ids, function(idx, rowId) {
	                	rowData = $("#jqGrid").getRowData(rowId);
	                    	$('#jqGrid').setCell(rowId, "allCount", "", {"background-color": colors[0]});
			            	$('#jqGrid').setCell(rowId, "enrollCount", "", {"background-color": colors[1]});
			            	$('#jqGrid').setCell(rowId, "registerEnrollCount", "", {"background-color": colors[1]});
			            	$('#jqGrid').setCell(rowId, "restCount", "", {"background-color": colors[5]});
			            	$('#jqGrid').setCell(rowId, "registerRestCount", "", {"background-color": colors[5]});
			            	$('#jqGrid').setCell(rowId, "allEnrollCount", "", {"background-color": colors[2], "font-weight": "bold"});
			            	$('#jqGrid').setCell(rowId, "allRegisterCount", "", {"background-color": colors[2], "font-weight": "bold"});

			            	if(rowData.jisaClientName == '직영'){
			            		$('#jqGrid').setCell(rowId, "jisaClientName", "", {"background-color": colors[3]});
			            	}

			            	if(((rowData.registerEnrollCount*1 / rowData.enrollCount*1) * 100) < 90){
			            		$('#jqGrid').setCell(rowId, "enrollRate", "", {"background-color": colors[4], "color": '#ffffff'});
			            	}

			            	if(((rowData.allRegisterCount*1 / rowData.allEnrollCount*1) * 100) < 90){
			            		$('#jqGrid').setCell(rowId, "allenrollRate", "", {"background-color": colors[4], "color": '#ffffff'});
			            	}
	                    }
	                );
	            },
	            rowNum: 9007199254740992,
			}).navGrid('#pager',
	                {search:true,edit:false,add:false,del:false}
              );

			ChangejQGridDesign("#jqGrid", "#pager");

			$.ajax({
				url: '/data/getEpolyRegistRate',
				data: {
					learningYearCode : learningYearCode,
					termGbn : termGbn,
					searchMonth : month,
					searchDay : day,
					grade : grade,
					registDataType : selectDataType,
					registCampusGbn : selectCampusType,
				},
				type: 'GET',
				success: function(successData){
					data = successData[0];
					$('.dimmedArea').hide();
					for(var i=0; i<data.length-1; i++){
						$('#jqGrid').jqGrid('addRowData',i+1,data[i]);
					}

				    $("#jqGrid").jqGrid('navButtonAdd','#pager',{caption:"Excel Export",title : "Excel Export", onClickButton : function(e){
				    	jqGridToExcel('jqGrid', 'e-POLY등록율(Campus)');
					}});
				}, error: function(){
					$('.dimmedArea').hide();
					alert('err');
				}
			})
		} else {
			$('#jqGrid').clearGridData();
			$.jgrid.gridUnload("#jqGrid");
			$('#jqGrid').jqGrid({
				"colModel": [
					{
		                "name": "courseCode",
		                "index": "courseCode",
		                "sorttype": "number",
		                "label": "과정코드",
		                "key": true,
		                "hidden": false,
		                "sortable": true,
		                "width": 125, "sortable": true,
		            }, {
		                "name": "courseName",
		                "index": "jisaClientName",
		                "sorttype": "string",
		                "label": "과정명",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "gradeGbn",
		                "index": "gradeGbn",
		                "sorttype": "number",
		                "label": "학년",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "allCount",
		                "index": "allCount",
		                "sorttype": "number",
		                "label": "전체학생 수",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "enrollCount",
		                "index": "enrollCount",
		                "sorttype": "number",
		                "label": "재학생 수",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "registerEnrollCount",
		                "index": "registerEnrollCount",
		                "sorttype": "number",
		                "label": "등록 재학생 수",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "restCount",
		                "index": "restCount",
		                "sorttype": "number",
		                "label": "휴학생 수",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "registerRestCount",
		                "index": "registerRestCount",
		                "sorttype": "number",
		                "label": "등록 휴학생 수",
		                "width": 125, "sortable": true,
		                "sortable": true,
		                "align": "center"
		            }, {
		                "name": "allEnrollCount",
		                "index": "allEnrollCount",
		                "sorttype": "number",
		                "label": "e-POLY 전체대상자",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "allRegisterCount",
		                "index": "allRegisterCount",
		                "sorttype": "number",
		                "label": "e-POLY 전체등록자",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "enrollRate",
		                "index": "enrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 재학생등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }, {
		                "name": "restEnrollRate",
		                "index": "restEnrollRate",
		                "sorttype": "string",
		                "label": "e-POLY 휴학생등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }, {
		                "name": "allenrollRate",
		                "index": "allenrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 전체등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }, {
		                "name": "existingEnrollRate",
		                "index": "existingEnrollRate",
		                "sorttype": "number",
		                "label": "e-POLY 기존등록율",
		                "width": 125, "sortable": true,
		                "align": "center",
		                "formatter": function(cellValue, rowObject, options) {
			            	return cellValue.concat('%')
			            }
		            }
		        ],
	            datatype: "local",
	            pager: "#pager",
	            caption : "e-POLY 등록율 Raw",
	            height : 'auto',
	            width : "1000px;",
	            sortorder: "asc",
	            viewrecords: true,
	            loadonce : true,
	            loadui: false,
	            footerrow: true,
	            userDataOnFooter : true,
	            rowNum: 9007199254740992,
	            gridComplete : function(rowData){

	            	var sum1 = $("#jqGrid").jqGrid('getCol','allCount', false, 'sum');
	            	var sum2 = $("#jqGrid").jqGrid('getCol','enrollCount', false, 'sum');
	            	var sum3 = $("#jqGrid").jqGrid('getCol','registerEnrollCount', false, 'sum');
	            	var sum4 = $("#jqGrid").jqGrid('getCol','restCount', false, 'sum');
	            	var sum5 = $("#jqGrid").jqGrid('getCol','registerRestCount', false, 'sum');
	            	var sum6 = $("#jqGrid").jqGrid('getCol','allEnrollCount', false, 'sum');
	            	var sum7 = $("#jqGrid").jqGrid('getCol','allRegisterCount', false, 'sum');
	            	$('#jqGrid').jqGrid('footerData'
	            						, 'set'
	            						, { crateName:'합계'
	            							, allCount: sum1
	            							, enrollCount: sum2
	            							, registerEnrollCount: sum3
	            							, restCount: sum4
	            							, registerRestCount: sum5
	            							, allEnrollCount: sum6
	            							, allRegisterCount: sum7
	            							, enrollRate: ((sum3/sum2) * 100).toFixed(2)
	            							, restEnrollRate: ((sum5/sum4) * 100).toFixed(2)
	            							, allenrollRate: ((sum7/sum6) * 100).toFixed(2)
	            							, existingEnrollRate: ((sum7/sum2) * 100).toFixed(2)
	            						});
					var colors = ['#FFFFB4', '#D1FFCA', '#FFEAEA', '#E7E7E7', '#FF0000', '#E0FFDB'];
					var ids = $("#jqGrid").getDataIDs();
					$.each( ids, function(idx, rowId) {
						rowData = $("#jqGrid").getRowData(rowId);
					    	$('#jqGrid').setCell(rowId, "allCount", "", {"background-color": colors[0]});
					    	$('#jqGrid').setCell(rowId, "enrollCount", "", {"background-color": colors[1]});
					    	$('#jqGrid').setCell(rowId, "registerEnrollCount", "", {"background-color": colors[1]});
					    	$('#jqGrid').setCell(rowId, "restCount", "", {"background-color": colors[5]});
					    	$('#jqGrid').setCell(rowId, "registerRestCount", "", {"background-color": colors[5]});
					    	$('#jqGrid').setCell(rowId, "allEnrollCount", "", {"background-color": colors[2], "font-weight": "bold"});
					    	$('#jqGrid').setCell(rowId, "allRegisterCount", "", {"background-color": colors[2], "font-weight": "bold"});

					    	if(rowData.jisaClientName == '직영'){
					    		$('#jqGrid').setCell(rowId, "jisaClientName", "", {"background-color": colors[3]});
					    	}

					    	if(((rowData.registerEnrollCount*1 / rowData.enrollCount*1) * 100) < 90){
					    		$('#jqGrid').setCell(rowId, "enrollRate", "", {"background-color": colors[4], "color": '#ffffff'});
					    	}

					    	if(((rowData.allRegisterCount*1 / rowData.allEnrollCount*1) * 100) < 90){
					    		$('#jqGrid').setCell(rowId, "allenrollRate", "", {"background-color": colors[4], "color": '#ffffff'});
					    	}
					    }
	            	);
	            },
			}).navGrid('#pager',
	                {search:true,edit:false,add:false,del:false}
              );
			ChangejQGridDesign("#jqGrid", "#pager");
			$.ajax({
				url: '/data/getEpolyRegistRate',
				data: {
					learningYearCode : learningYearCode,
					termGbn : termGbn,
					searchMonth : month,
					searchDay : day,
					grade : grade,
					registDataType : selectDataType,
					registCampusGbn : selectCampusType,
				},
				type: 'GET',
				success: function(successData){
					data = successData[0];
					$('.dimmedArea').hide();
					for(var i=0; i<data.length-1; i++){
						$('#jqGrid').jqGrid('addRowData',i+1,data[i]);
					}

				}, error: function(){
					$('.dimmedArea').hide();
					alert('err');
				}
			})

			$("#jqGrid").jqGrid('navButtonAdd','#pager',{caption:"Excel Export",title : "Excel Export", onClickButton : function(e){
		    	/*$("#jqGrid").jqGrid("exportToExcel",{
					includeLabels : true,
					includeGroupHeader : true,
					includeFooter: true,
					fileName : "excelExport.xlsx",
					maxlength : 40,
				})*/
				jqGridToExcel('jqGrid', 'e-POLY등록율(Raw)');
			}});
		}
	}
})

$('#leaadersBoardSearchBtn').click(function(e){

	console.log(e.target.id);
	$('.tableWrap').html('');

	var epolyType = $('#epolyType').val();
	var dataType = $('#leadersBoardType').val();
	var learningYearCode = $('#leadersBoardLearningYear').val();
	var termGbn = $('#leadersBoardTermGbn').val();
	var clientEnName = $('#LeadersBoardClientType').val();
	var round = $('#leadersBoardRound').val();

	if(dataType == 'ranking'){
		$.ajax({
			url: '/data/getLeadersBoardPoint',
			data: {
				learningYearCode: learningYearCode,
				termGbn: termGbn,
				clientEnName: clientEnName,
				round: round,
				epolyType: epolyType,
			},
			success: function(succData){
				console.log('succData', succData);
				leadersBoardPointGrid(succData);
			}, error: function(e){console.log(e)}
		})
	} else if(dataType == 'increasing'){
		$.ajax({
			url: '/data/getLeadersBoardIncrease',
			data: {
				learningYearCode: learningYearCode,
				termGbn: termGbn,
				clientEnName: clientEnName,
				round: round,
				epolyType: epolyType,
			},
			success: function(succData){
				console.log("succData", succData);
				leadersBoardIncreaseGrid(succData);
			}, error:function(e){console.log(e)}
		})
	} else if(dataType == 'raw'){
		$.ajax({
			url: '',
			data: {
				learningYearCode: learningYearCode,
				termGbn: termGbn,
				clientEnName: clientEnName,
				round: round,
				epolyType: epolyType,
			},
			success: function(succData){
				console.log("succData", succData);
			}, error: function(e){console.log(e)}
		})
	}
})

function leadersBoardPointGrid(data){
	for(var i=0; data.length; i++){
		var gridData = data[i];
		var courseNames = (Array.isArray(gridData) && gridData.length === 0) ? '' : gridData[0].courseName;
		$('.tableWrap').append('<table id="jqLeadersGrid' + i + '" class="scroll" cellpadding="0" cellspacing="0"></table>'
								+ '<div id="pager' + i + '" class="scroll" style="text-align:center;"></div>');
		$('#jqLeadersGrid' + i).clearGridData();
		$.jgrid.gridUnload("#jqLeadersGrid" + i);

		if(courseNames != ''){
			$('#jqLeadersGrid' + i).jqGrid({
				"datatype": "jsonstring",
		        "datastr": gridData,
		        "jsonReader": { repeatitems: false },
				"colModel": [
		            {
		                "name": "rank",
		                "index": "rank",
		                "sorttype": "number",
		                "label": "순위",
		                "key": true,
		                "hidden": false,
		                "width": 125, "sortable": true,
		            }, {
		            	"name": "courseName",
		                "index": "courseName",
		                "sorttype": "string",
		                "label": "과정명",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "clientEnName",
		                "index": "clientEnName",
		                "sorttype": "string",
		                "label": "캠퍼스명",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "memberCode",
		                "index": "memberCode",
		                "sorttype": "number",
		                "label": "학번",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "krMemberName",
		                "index": "krMemberName",
		                "sorttype": "string",
		                "label": "이름(한글)",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "enMemberName",
		                "index": "enMemberName",
		                "sorttype": "string",
		                "label": "이름(영문)",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "point",
		                "index": "point",
		                "sorttype": "number",
		                "label": "포인트",
		                "width": 125, "sortable": true,
		                "align": "center"
		            },
		        ],
	            pager: "#pager"+i,
	            caption : "e-POLY Leader's Board [" + courseNames + "] Points",
	            height : "auto;",
	            width : "auto;",
	            sortorder: "asc",
	            viewrecords: true,
	            loadonce : true,
	            loadui: false,
	            footerrow: false,
	            userDataOnFooter : false,
	            total: gridData.length,
	            "rowNum": 50,
			}).navGrid('#pager'+i,
	                {search:true,edit:false,add:false,del:false}
			);
			ChangejQGridDesign("#jqLeadersGrid"+i, "#pager"+i);
		}
	}
}

function leadersBoardIncreaseGrid(data){
	for(var i=0; data.length; i++){
		var gridData = data[i];
		var courseNames = (Array.isArray(gridData) && gridData.length === 0) ? '' : gridData[0].courseName;
		if(courseNames != ''){
			$('.tableWrap').append('<table id="jqLeadersGrid' + i + '" class="scroll" cellpadding="0" cellspacing="0"></table>'
					+ '<div id="pager' + i + '" class="scroll" style="text-align:center;"></div>');
			$('#jqLeadersGrid' + i).clearGridData();
			$.jgrid.gridUnload("#jqLeadersGrid" + i);
			$('#jqLeadersGrid' + i).jqGrid({
				"datatype": "jsonstring",
		        "datastr": gridData,
		        "jsonReader": { repeatitems: false },
				"colModel": [
		            {
		                "name": "rank",
		                "index": "rank",
		                "sorttype": "number",
		                "label": "순위",
		                "key": true,
		                "hidden": false,
		                "width": 125, "sortable": true,
		            }, {
		            	"name": "increasePoint",
		            	"index": "increasePoint",
		                "sorttype": "number",
		                "label": "상승포인트",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "point",
		                "index": "point",
		                "sorttype": "number",
		                "label": "포인트",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		            	"name": "courseName",
		                "index": "courseName",
		                "sorttype": "string",
		                "label": "과정명",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "clientEnName",
		                "index": "clientEnName",
		                "sorttype": "string",
		                "label": "캠퍼스명",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "memberCode",
		                "index": "memberCode",
		                "sorttype": "number",
		                "label": "학번",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "krMemberName",
		                "index": "krMemberName",
		                "sorttype": "string",
		                "label": "이름(한글)",
		                "width": 125, "sortable": true,
		                "align": "center"
		            }, {
		                "name": "enMemberName",
		                "index": "enMemberName",
		                "sorttype": "string",
		                "label": "이름(영문)",
		                "width": 125, "sortable": true,
		                "align": "center"
		            },
		        ],
	            pager: "#pager"+i,
	            caption : "e-POLY Leader's Board [" + courseNames + "] Increase Rate",
	            height : "auto;",
	            width : "auto;",
	            sortorder: "asc",
	            viewrecords: true,
	            loadonce : true,
	            loadui: false,
	            footerrow: false,
	            userDataOnFooter : false,
	            total: gridData.length,
	            "rowNum": 50,
			}).navGrid('#pager'+i,
	                {search:true,edit:false,add:false,del:false}
			);
			ChangejQGridDesign("#jqLeadersGrid"+i, "#pager"+i);
		}
	}
}
