var App = function () {

    var isIE8 = false; // IE8 mode
    var isIE9 = false;
    var currentPage = ''; // current page

    // useful function to make equal height for contacts stand side by side
    var setEqualHeight = function (columns) {
        var tallestColumn = 0;
        columns = jQuery(columns);
        columns.each(function () {
            var currentHeight = $(this).height();
            if (currentHeight > tallestColumn) {
                tallestColumn = currentHeight;
            }
        });
        columns.height(tallestColumn);
    }

    // this function handles responsive layout on screen size resize or mobile device rotate.
    var handleResponsive = function () {





        if (!!navigator.userAgent.match(/MSIE 8.0/)) {
            isIE8 = true; // checkes for IE8 browser version
            $('.visible-ie8').show(); //
        }
        if (!!navigator.userAgent.match(/MSIE 9.0/)) {
            isIE9 = true;
        }

        var isIE10 = !!navigator.userAgent.match(/MSIE 10/);

        if (isIE10) {
            jQuery('html').addClass('ie10'); // set ie10 class on html element.
        }

        // loops all page elements with "responsive" class and applied classes for tablet mode
        // For metornic  1280px or less set as tablet mode to display the content properly
        var handleTabletElements = function () {
            if ($(window).width() <= 1280) {
                $(".responsive").each(function () {
                    var forTablet = $(this).attr('data-tablet');
                    var forDesktop = $(this).attr('data-desktop');
                    if (forTablet) {
                        $(this).removeClass(forDesktop);
                        $(this).addClass(forTablet);
                    }
                });
                handleTooltip();
            }
        }

        // loops all page elements with "responsive" class and applied classes for desktop mode
        // For metornic  higher 1280px set as desktop mode to display the content properly
        var handleDesktopElements = function () {
            if ($(window).width() > 1280) {
                $(".responsive").each(function () {
                    var forTablet = $(this).attr('data-tablet');
                    var forDesktop = $(this).attr('data-desktop');
                    if (forTablet) {
                        $(this).removeClass(forTablet);
                        $(this).addClass(forDesktop);
                    }
                });
                handleTooltip();
            }
        }

        // handle all elements which require to re-initialize on screen width change(on resize or on rotate mobile device)
        var handleElements = function () {
            //begin
            //if (App.isPage("index")) {
            //    handleDashboardCalendar(); // handles full calendar for main page
            //    jQuery('.vmaps').each(function () {
            //        var map = jQuery(this);
            //        map.width(map.parent().width());
            //    });
            //}

            //if (App.isPage("charts")) {
            //    handleChartGraphs();
            //}

            //if (App.isPage("maps_vector")) { // jqvector maps requires to fix the width on screen resized.
            //    jQuery('.vmaps').each(function () {
            //        var map = jQuery(this);
            //        map.width(map.parent().width());
            //    });
            //}
            //end

            if (App.isPage("calendar")) { // full calendar requires to fix the width on screen resized.
                handleCalendar();
            }

            if ($(window).width() < 900) { // remove sidebar toggler
                $.cookie('sidebar-closed', null);
                $('.page-container').removeClass("sidebar-closed");
            }

            handleTabletElements();
            handleDesktopElements();
        }

        // handles responsive breakpoints.
        $(window).setBreakpoints({
            breakpoints: [320, 480, 768, 900, 1024, 1280]
        });

        $(window).bind('exitBreakpoint320', function () {
            handleElements();
        });
        $(window).bind('enterBreakpoint320', function () {
            handleElements();
        });

        $(window).bind('exitBreakpoint480', function () {
            handleElements();
        });
        $(window).bind('enterBreakpoint480', function () {
            handleElements();
        });

        $(window).bind('exitBreakpoint768', function () {
            handleElements();
        });
        $(window).bind('enterBreakpoint768', function () {
            handleElements();
        });

        $(window).bind('exitBreakpoint900', function () {
            handleElements();
        });
        $(window).bind('enterBreakpoint900', function () {
            handleElements();
        });

        $(window).bind('exitBreakpoint1024', function () {
            handleElements();
        });
        $(window).bind('enterBreakpoint1024', function () {
            handleElements();
        });

        $(window).bind('exitBreakpoint1280', function () {
            handleElements();
        });
        $(window).bind('enterBreakpoint1280', function () {
            handleElements();
        });
    }

    var handleJQVMAP = function () {

        //begin
        //var showMap = function (name) {
        //    jQuery('.vmaps').hide();
        //    jQuery('#vmap_' + name).show();
        //}

        //var setMap = function (name) {
        //    var data = {
        //        map: 'world_en',
        //        backgroundColor: null,
        //        borderColor: '#333333',
        //        borderOpacity: 0.5,
        //        borderWidth: 1,
        //        color: '#c6c6c6',
        //        enableZoom: true,
        //        hoverColor: '#c9dfaf',
        //        hoverOpacity: null,
        //        values: sample_data,
        //        normalizeFunction: 'linear',
        //        scaleColors: ['#b6da93', '#909cae'],
        //        selectedColor: '#c9dfaf',
        //        selectedRegion: null,
        //        showTooltip: true,
        //        onLabelShow: function (event, label, code) {

        //        },
        //        onRegionOver: function (event, code) {
        //            if (code == 'ca') {
        //                event.preventDefault();
        //            }
        //        },
        //        onRegionClick: function (element, code, region) {
        //            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
        //            alert(message);
        //        }
        //    };

        //    data.map = name + '_en';
        //    var map = jQuery('#vmap_' + name);
        //    if (!map) {
        //        return;
        //    }
        //    map.width(map.parent().parent().width());
        //    map.show();
        //    map.vectorMap(data);
        //    map.hide();
        //}

        //setMap("world");
        //setMap("usa");
        //setMap("europe");
        //setMap("russia");
        //setMap("germany");
        //showMap("world");

        //jQuery('#regional_stat_world').click(function () {
        //    showMap("world");
        //});

        //jQuery('#regional_stat_usa').click(function () {
        //    showMap("usa");
        //});

        //jQuery('#regional_stat_europe').click(function () {
        //    showMap("europe");
        //});
        //jQuery('#regional_stat_russia').click(function () {
        //    showMap("russia");
        //});
        //jQuery('#regional_stat_germany').click(function () {
        //    showMap("germany");
        //});

        //$('#region_statistics_loading').hide();
        //$('#region_statistics_content').show();
        //end
    }

    var handleAllJQVMAP = function () {
        //begin
        //var setMap = function (name) {
        //    var data = {
        //        map: 'world_en',
        //        backgroundColor: null,
        //        borderColor: '#333333',
        //        borderOpacity: 0.5,
        //        borderWidth: 1,
        //        color: '#c6c6c6',
        //        enableZoom: true,
        //        hoverColor: '#c9dfaf',
        //        hoverOpacity: null,
        //        values: sample_data,
        //        normalizeFunction: 'linear',
        //        scaleColors: ['#b6da93', '#427d1a'],
        //        selectedColor: '#c9dfaf',
        //        selectedRegion: null,
        //        showTooltip: true,
        //        onRegionOver: function (event, code) {
        //            //sample to interact with map
        //            if (code == 'ca') {
        //                event.preventDefault();
        //            }
        //        },
        //        onRegionClick: function (element, code, region) {
        //            //sample to interact with map
        //            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
        //            alert(message);
        //        }
        //    };

        //    data.map = name + '_en';
        //    var map = jQuery('#vmap_' + name);
        //    if (!map) {
        //        return;
        //    }
        //    map.width(map.parent().width());
        //    map.vectorMap(data);
        //}

        //setMap("world");
        //setMap("usa");
        //setMap("europe");
        //setMap("russia");
        //setMap("germany");

        //end
    }

    var handleDashboardCalendar = function () {

        if (!jQuery().fullCalendar) {
            return;
        }

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var h = {};

        if ($('#calendar').width() <= 500) {
            $('#calendar').addClass("mobile");
            h = {
                left: 'title, prev, next',
                center: '',
                right: 'today,month,agendaWeek,agendaDay'
            };
        } else {
            $('#calendar').removeClass("mobile");
            h = {
                left: 'title',
                center: '',
                right: 'prev,next,today,month,agendaWeek,agendaDay'
            };
        }

        $('#calendar').html("");
        $('#calendar').fullCalendar({
            disableDragging: true,
            header: h,
            editable: true,
            events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
            }, {
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
            }, {
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
            }, {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
            }, {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
            }]
        });

    }

    var handleCalendar = function () {

        if (!jQuery().fullCalendar) {
            return;
        }

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var h = {};
        if ($('#calendar').parents(".portlet").width() <= 720) {
            $('#calendar').addClass("mobile");
            h = {
                left: 'title, prev,next',
                center: '',
                right: 'today,month,agendaWeek,agendaDay'
            };
        } else {
            $('#calendar').removeClass("mobile");
            h = {
                left: 'title',
                center: '',
                right: 'prev,next,today,month,agendaWeek,agendaDay'
            };
        }

        var initDrag = function (el) {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim(el.text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            el.data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            el.draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
        }

        var addEvent = function (title) {
            title = title.length == 0 ? "Untitled Event" : title;
            var html = $('<div class="external-event label">' + title + '</div>');
            jQuery('#event_box').append(html);
            initDrag(html);
        }

        $('#external-events div.external-event').each(function () {
            initDrag($(this))
        });

        $('#event_add').unbind('click').click(function () {
            var title = $('#event_title').val();
            addEvent(title);
        });

        //predefined events
        $('#event_box').html("");
        addEvent("My Event 1");
        addEvent("My Event 2");
        addEvent("My Event 3");
        addEvent("My Event 4");
        addEvent("My Event 5");
        addEvent("My Event 6");

        $('#calendar').html("");
        $('#calendar').fullCalendar({
            header: h,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.className = $(this).attr("data-class");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1)
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            }, {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            }, {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }]
        });

    }

    var handleMainMenu = function () {
        jQuery('.page-sidebar .has-sub > a').click(function () {

            var handleContentHeight = function () {
                var content = $('.page-content');
                var sidebar = $('.page-sidebar');

                if (!content.attr("data-height")) {
                    content.attr("data-height", content.height());
                }


                if (sidebar.height() > content.height()) {
                    content.css("min-height", sidebar.height() + 20);
                } else {
                    content.css("min-height", content.attr("data-height"));
                }
            }

            var last = jQuery('.has-sub.open', $('.page-sidebar'));
            if (last.size() == 0) {
                //last = jQuery('.has-sub.active', $('.page-sidebar'));
            }
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);

            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                sub.slideUp(200, function () {
                    handleContentHeight();
                });
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(200, function () {
                    handleContentHeight();
                });
            }
        });
    }

    var handleSidebarToggler = function () {

        var container = $(".page-container");

        if ($.cookie('sidebar-closed') == 1) {
            container.addClass("sidebar-closed");
        }

        // handle sidebar show/hide
        $('.page-sidebar .sidebar-toggler').click(function () {
            //判断函数是否存在
            try {
                if (typeof (eval('drawHotspot')) == "function") {
                    drawHotspot();
                }
            } catch (e) { }
            $(".sidebar-search").removeClass("open");
            var container = $(".page-container");
            if (container.hasClass("sidebar-closed") === true) {
                container.removeClass("sidebar-closed");
                $.cookie('sidebar-closed', null);
            } else {
                container.addClass("sidebar-closed");
                $.cookie('sidebar-closed', 1);
            }
            if (App.isPage("charts")) {
                setTimeout(function () {
                    handleChartGraphs();
                }, 100);
            }
        });

        // handle the search bar close
        $('.sidebar-search .remove').click(function () {
            $('.sidebar-search').removeClass("open");
        });

        // handle the search query submit on enter press
        $('.sidebar-search input').keypress(function (e) {
            if (e.which == 13) {
                $('.sidebar-search.submit input').click();
                //window.location.href = "extra_search.html";
                return false; //<---- Add this line
            }
        });

        // handle the search submit
        $('.sidebar-search .submit').click(function () {
            if ($('.page-container').hasClass("sidebar-closed")) {
                if ($('.sidebar-search').hasClass('open') == false) {
                    $('.sidebar-search').addClass("open");
                } else {
                    window.location.href = "extra_search.html";
                }
            } else {
                window.location.href = "extra_search.html";
            }
        });
    }

    var handlePortletTools = function () {
        jQuery('.portlet .tools a.remove').click(function () {
            var removable = jQuery(this).parents(".portlet");
            if (removable.next().hasClass('portlet') || removable.prev().hasClass('portlet')) {
                jQuery(this).parents(".portlet").remove();
            } else {
                jQuery(this).parents(".portlet").parent().remove();
            }
        });

        jQuery('.portlet .tools a.reload').click(function () {
            var el = jQuery(this).parents(".portlet");
            App.blockUI(el);
            window.setTimeout(function () {
                App.unblockUI(el);
            }, 1000);
        });

        jQuery('.portlet .tools .collapse, .portlet .tools .expand').click(function () {
            var el = jQuery(this).parents(".portlet").children(".portlet-body");
            if (jQuery(this).hasClass("collapse")) {
                jQuery(this).removeClass("collapse").addClass("expand");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("expand").addClass("collapse");
                el.slideDown(200);
            }
        });

        /*
        sample code to handle portlet config popup on close
        $('#portlet-config').on('hide', function (e) {
            //alert(1);
            //if (!data) return e.preventDefault() // stops modal from being shown
        });
        */
    }

    var handlePortletSortable = function () {
        if (!jQuery().sortable) {
            return;
        }

        $("#sortable_portlets").sortable({
            connectWith: ".portlet",
            items: ".portlet",
            opacity: 0.8,
            coneHelperSize: true,
            placeholder: 'sortable-box-placeholder round-all',
            forcePlaceholderSize: true,
            tolerance: "pointer"
        });

        $(".column").disableSelection();

    }


    var handleChartGraphs = function () {

        var graphData = [];
        var series = Math.floor(Math.random() * 10) + 2;
        for (var i = 0; i < series; i++) {
            graphData[i] = {
                label: "Series" + (i + 1),
                data: Math.floor((Math.random() - 1) * 100) + 1
            }
        }

        $.plot($("#graph_1"), graphData, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: function (label, series) {
                            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                        },
                        background: {
                            opacity: 0.8
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });

        $.plot($("#graph_2"), graphData, {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 3 / 4,
                        formatter: function (label, series) {
                            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                        },
                        background: {
                            opacity: 0.5
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });

        $.plot($("#graph_3"), graphData, {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            }
        });
        $("#graph_3").bind("plothover", pieHover);
        $("#graph_3").bind("plotclick", pieClick);

        function pieHover(event, pos, obj) {
            if (!obj) return;
            percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html('<span style="font-weight: bold; color: ' + obj.series.color + '">' + obj.series.label + ' (' + percent + '%)</span>');
        }

        function pieClick(event, pos, obj) {
            if (!obj) return;
            percent = parseFloat(obj.series.percent).toFixed(2);
            alert('' + obj.series.label + ': ' + percent + '%');
        }

        $.plot($("#graph_4"), graphData, {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true
                }
            }
        });
    }

    var handleFancyBox = function () {

        if (!jQuery.fancybox) {
            return;
        }

        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
        }
    }

    var handleLoginForm = function () {

        $('.login-form').validate({
            errorElement: 'label', //default input error message container
            errorClass: 'help-inline', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "请输入账号"
                },
                password: {
                    required: "请输入密码"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('span', $('.alert-error', $('.login-form'))).html('请输入用户名和密码');
                $('.alert-error', $('.login-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.control-group').addClass('error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.control-group').removeClass('error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                var loginname = form.username.value;
                var password = form.password.value;

                var url = apiurl + '/user/login/' + loginname + '/' + password + '/info';
                $.ajax({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        if (data == null || data.length == 0) {
                            return;
                        }
                        else {
                            if ($(form).find('.alert-error').length == 0) {
                                $(form).find('.form-title').after('<div class="alert alert-error hide">'
                                    + '<button class="close" data-dismiss="alert"></button>'
                                    + '<span>请输入用户名和密码</span> '
                                    + '</div>');
                            }

                            if (data.authorized) {
                                delCookie("loginUrl");
                                if (data.roleId != 5) {
                                    delCookie("loginname");
                                    delCookie("userId");
                                    delCookie("orgId");
                                    delCookie("organization");
                                    delCookie("systemName");
                                    delCookie("roleId");
                                    delCookie("nowStructId");
                                    delCookie("OrgLogo");
                                    delCookie("token");

                                    setCookie("loginname", loginname, null);
                                    setCookie("userId", data.userId, null);
                                    setCookie("orgId", data.orgId, null);
                                    setCookie("organization", data.organization, null);
                                    setCookie("systemName", data.systemName, null);
                                    setCookie("roleId", data.roleId, null);
                                    setCookie("token", data.token, null);
                                    var oneLocation = "";
                                    //查询跳转页
                                    var url = apiurl + '/user/' + getCookie('userId') + '/menuList?token=' + getCookie("token");
                                    $.ajax({
                                        url: url,
                                        type: 'get',
                                        dataType: 'json',
                                        cache: false,
                                        success: function (data) {
                                            if (data == null || data.length == 0) {
                                                alert("该用户无查看相关权限，请联系管理员");
                                                return;
                                            }
                                            for (var i = 0; i < data.length; i++) {
                                                if (i == 0) {
                                                    if (data[i].RESOURCE_MENU.split(',')[2] != 'javascript:;') {
                                                        oneLocation = data[i].RESOURCE_MENU.split(',')[2];
                                                    } else {
                                                        if (data[i].data.length > 0) {
                                                            oneLocation = data[i].data[0].RESOURCE_MENU.split(',')[2]
                                                        }
                                                    }
                                                }
                                            }
                                            window.location.href = oneLocation;
                                        },
                                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                            if (XMLHttpRequest.status == 403) {
                                                alert("权限验证出错");
                                                logOut();
                                            }
                                            else if (XMLHttpRequest.status == 400) {
                                                alert("参数错误，请联系管理员");
                                                return;
                                            }
                                            else if (XMLHttpRequest.status == 500) {
                                                alert("内部异常，请联系管理员");
                                                return;
                                            }
                                            else {
                                                alert('url错误，请联系管理员');
                                                return;
                                            }
                                        }
                                    })
                                }
                                else {
                                    delCookie("loginname");
                                    delCookie("userId");
                                    delCookie("orgId");
                                    delCookie("organization");
                                    delCookie("systemName");
                                    delCookie("roleId");
                                    delCookie("nowStructId");
                                    delCookie("OrgLogo");
                                    delCookie("token");

                                    setCookie("loginname", loginname, null);
                                    setCookie("userId", data.userId, null);
                                    setCookie("orgId", data.orgId, null);
                                    setCookie("organization", data.organization, null);
                                    setCookie("systemName", data.systemName, null);
                                    setCookie("roleId", data.roleId, null);
                                    setCookie("OrgLogo", data.logo, null);
                                    setCookie("token", data.token, null);

                                    // 根据结构物类型确定首页
                                    var url = apiurl + '/user/' + getCookie('userId') + '/org/' + data.orgId + '/structs' + '?token=' + getCookie("token");
                                    $.ajax({
                                        url: url,
                                        type: 'get',
                                        dataType: 'json',
                                        success: function (dataStruct) {
                                            if (dataStruct.length == 0) {
                                                alert("该组织无结构物");
                                                return;
                                            }
                                            try {
                                                if (dataStruct[0].structType == "无线采集") {
                                                    setCookie("gprsStructId", dataStruct[0].structId, null); // 保存结构物id
                                                    window.location.href = "/GPRS/MainPage.aspx";
                                                }
                                                else {
                                                    window.location.href = "/index.aspx";
                                                }
                                            } catch (err) {
                                                alert(err);
                                            }
                                        },
                                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                            var status = XMLHttpRequest.status;
                                            if (status == 403) {
                                                alert("权限验证出错，禁止访问");
                                                // logOut();
                                            } else {
                                                alert("获取组织结构物" + textStatus);
                                            }
                                        }
                                    });
                                }                               
                            }
                            else {
                                $('span', $('.alert-error', $('.login-form'))).html('用户名或密码不正确');
                                $('.alert-error', $('.login-form')).show();
                                form.password.value = '';
                                //form.password.focus();
                            }
                        }
                    },
                    error: function () {
                        if ($(form).find('.alert-error').length == 0) {
                            $(form).find('.form-title').after('<div class="alert alert-error hide">'
                                + '<button class="close" data-dismiss="alert"></button>'
                                + '<span>请输入用户名和密码</span> '
                                + '</div>');
                        }
                        $('span', $('.alert-error', $('.login-form'))).html('登录超时，请检查网络');
                    }
                });
            }
        });

        $('body').keypress(function (e) {
            var keynum = e.keyCode || e.which;

            if (keynum == 13) {
                console.log('submit');
                $('.login-form').submit();
            }
        });

        $('.forget-form').validate({
            errorElement: 'label', //default input error message container
            errorClass: 'help-inline', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                email: {
                    required: "Email is required."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.control-group').addClass('error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.control-group').removeClass('error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {

                window.location.href = "index.aspx";
            }
        });

        $('.forget-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    //window.location.href = "index.aspx";
                }
                return false;
            }
        });

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

        $('.register-form').validate({
            errorElement: 'label', //default input error message container
            errorClass: 'help-inline', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                UserName: {
                    required: true
                },
                Old_password: {
                    required: true
                },
                New_password: {
                    required: true
                },
                Confirm_New_password: {
                    required: true
                },
                Confirm_New_password: {
                    equalTo: "#New_password"
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                UserName: {
                    required: "请输入账号"
                },
                Old_password: {
                    required: "请输入旧密码"
                },
                New_password: {
                    required: "请输入新密码"
                },
                Confirm_New_password: {
                    required: "请再次输入新密码"
                },
                Confirm_New_password: {
                    equalTo: "两次输入的密码不一致"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.control-group').addClass('error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.control-group').removeClass('error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
                    error.addClass('help-small no-left-padding').insertAfter($('#register_tnc_error'));
                } else {
                    error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
                }
            },

            submitHandler: function (form) {
                var username = form.UserName.value;
                var oldPwd = form.Old_password.value;
                var newPwd = form.New_password.value;

                var url = apiurl + '/user/modify-info';
                $.ajax({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    data: {
                        "username": username,
                        "oldPwd": oldPwd,
                        "newPwd": newPwd
                    },
                    success: function () {
                        alert("密码修改成功！");
                        $('#register-back-btn').click();
                    },
                    error: function (xhr) {
                        alert(JSON.parse(xhr.responseText).Message);
                    }
                    //statusCode: {
                    //    202: function () {
                    //        alert("密码修改成功！");
                    //    },
                    //    400: function () {
                    //        alert("密码修改不成功");
                    //    },
                    //    500: function () {
                    //        alert("密码修改不成功");
                    //    }
                    //}
                })
                //window.location.href = "index.aspx";
            }
        });

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }

    var handleFixInputPlaceholderForIE = function () {

        //fix html5 placeholder attribute for ie7 & ie8
        if (!$.support.leadingWhitespace) { // ie7&ie8

            // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
            jQuery('input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)').each(function () {

                var input = jQuery(this);

                jQuery(input).addClass("placeholder").val(input.attr('placeholder'));

                jQuery(input).focus(function () {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                jQuery(input).blur(function () {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    }

    var handlePulsate = function () {
        if (!jQuery().pulsate) {
            return;
        }

        if (isIE8 == true) {
            return; // pulsate plugin does not support IE8 and below
        }

        if (jQuery().pulsate) {
            jQuery('#pulsate-regular').pulsate({
                color: "#bf1c56"
            });

            jQuery('#pulsate-once').click(function () {
                $(this).pulsate({
                    color: "#399bc3",
                    repeat: false
                });
            });

            jQuery('#pulsate-hover').pulsate({
                color: "#5ebf5e",
                repeat: false,
                onHover: true
            });

            jQuery('#pulsate-crazy').click(function () {
                $(this).pulsate({
                    color: "#fdbe41",
                    reach: 50,
                    repeat: 10,
                    speed: 100,
                    glow: true
                });
            });
        }
    }

    var handleIntro = function () {
        if ($.cookie('intro_show')) {
            return;
        }

        $.cookie('intro_show', 1);

        setTimeout(function () {
            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'Meet Metronic!',
                // (string | mandatory) the text inside the notification
                text: 'Metronic is a brand new Responsive Admin Dashboard Template you have always been looking for!',
                // (string | optional) the image to display on the left
                image: './resource/img/avatar1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });

            // You can have it return a unique id, this can be used to manually remove it later using
            setTimeout(function () {
                $.gritter.remove(unique_id, {
                    fade: true,
                    speed: 'slow'
                });
            }, 12000);
        }, 2000);

        setTimeout(function () {
            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'Buy Metronic!',
                // (string | mandatory) the text inside the notification
                text: 'Metronic comes with a huge collection of reusable and easy customizable UI components and plugins. Buy Metronic today!',
                // (string | optional) the image to display on the left
                image: './resource/img/avatar1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });

            // You can have it return a unique id, this can be used to manually remove it later using
            setTimeout(function () {
                $.gritter.remove(unique_id, {
                    fade: true,
                    speed: 'slow'
                });
            }, 13000);
        }, 8000);

        setTimeout(function () {

            $('#styler').pulsate({
                color: "#bb3319",
                repeat: 10
            });

            $.extend($.gritter.options, {
                position: 'top-left'
            });

            var unique_id = $.gritter.add({
                position: 'top-left',
                // (string | mandatory) the heading of the notification
                title: 'Customize Metronic!',
                // (string | mandatory) the text inside the notification
                text: 'Metronic allows you to easily customize the theme colors and layout settings.',
                // (string | optional) the image to display on the left
                image1: './resource/img/avatar1.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });

            $.extend($.gritter.options, {
                position: 'top-right'
            });

            // You can have it return a unique id, this can be used to manually remove it later using
            setTimeout(function () {
                $.gritter.remove(unique_id, {
                    fade: true,
                    speed: 'slow'
                });
            }, 15000);

        }, 23000);

        setTimeout(function () {

            $.extend($.gritter.options, {
                position: 'top-left'
            });

            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'Notification',
                // (string | mandatory) the text inside the notification
                text: 'You have 3 new notifications.',
                // (string | optional) the image to display on the left
                image1: './resource/img/image1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });

            setTimeout(function () {
                $.gritter.remove(unique_id, {
                    fade: true,
                    speed: 'slow'
                });
            }, 4000);

            $.extend($.gritter.options, {
                position: 'top-right'
            });

            var number = $('#header_notification_bar .badge').text();
            number = parseInt(number);
            number = number + 3;
            $('#header_notification_bar .badge').text(number);
            $('#header_notification_bar').pulsate({
                color: "#66bce6",
                repeat: 5
            });

        }, 40000);

        setTimeout(function () {

            $.extend($.gritter.options, {
                position: 'top-left'
            });

            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'Inbox',
                // (string | mandatory) the text inside the notification
                text: 'You have 2 new messages in your inbox.',
                // (string | optional) the image to display on the left
                image1: './resource/img/avatar1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });

            $.extend($.gritter.options, {
                position: 'top-right'
            });

            setTimeout(function () {
                $.gritter.remove(unique_id, {
                    fade: true,
                    speed: 'slow'
                });
            }, 4000);

            var number = $('#header_inbox_bar .badge').text();
            number = parseInt(number);
            number = number + 2;
            $('#header_inbox_bar .badge').text(number);
            $('#header_inbox_bar').pulsate({
                color: "#dd5131",
                repeat: 5
            });

        }, 60000);
    }

    var handleGritterNotifications = function () {
        if (!jQuery.gritter) {
            return;
        }
        $('#gritter-sticky').click(function () {
            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a sticky notice!',
                // (string | mandatory) the text inside the notification
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: './resource/img/avatar1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });
            return false;
        });

        $('#gritter-regular').click(function () {

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a regular notice!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: './resource/img/avatar1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (int | optional) the time you want it to be alive for before fading out
                time: ''
            });

            return false;

        });

        $('#gritter-max').click(function () {

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice with a max of 3 on screen at one time!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: './resource/img/avatar1.jpg',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (function) before the gritter notice is opened
                before_open: function () {
                    if ($('.gritter-item-wrapper').length == 3) {
                        // Returning false prevents a new gritter from opening
                        return false;
                    }
                }
            });
            return false;
        });

        $('#gritter-without-image').click(function () {
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice without an image!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
            });

            return false;
        });

        $('#gritter-light').click(function () {

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a light notification',
                // (string | mandatory) the text inside the notification
                text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
                class_name: 'gritter-light'
            });

            return false;
        });

        $("#gritter-remove-all").click(function () {

            $.gritter.removeAll();
            return false;

        });
    }

    var handleTooltip = function () {
        if (App.isTouchDevice()) { // if touch device, some tooltips can be skipped in order to not conflict with click events
            jQuery('.tooltips:not(.no-tooltip-on-touch-device)').tooltip();
        } else {
            jQuery('.tooltips').tooltip();
        }
    }

    var handlePopover = function () {
        jQuery('.popovers').popover();
    }

    var handleChoosenSelect = function () {
        if (!jQuery().chosen) {
            return;
        }
        $(".chosen").chosen();

        $(".chosen-with-diselect").chosen({
            allow_single_deselect: true
        })
    }

    var initChosenSelect = function (els) {
        $(els).chosen({
            allow_single_deselect: true
        })
    }

    var handleUniform = function () {
        if (!jQuery().uniform) {
            return;
        }
        var test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle, .star)");
        if (test) {
            test.uniform();
        }
    }

    var initUniform = function (els) {
        jQuery(els).each(function () {
            if ($(this).parents(".checker").size() == 0) {
                $(this).show();
                $(this).uniform();
            }
        });
    }

    var handleWysihtml5 = function () {
        if (!jQuery().wysihtml5) {
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5();
        }
    }

    var handleToggleButtons = function () {
        if (!jQuery().toggleButtons) {
            return;
        }
        $('.basic-toggle-button').toggleButtons();
        $('.text-toggle-button').toggleButtons({
            width: 200,
            label: {
                enabled: "Lorem Ipsum",
                disabled: "Dolor Sit"
            }
        });
        $('.danger-toggle-button').toggleButtons({
            style: {
                // Accepted values ["primary", "danger", "info", "success", "warning"] or nothing
                enabled: "danger",
                disabled: "info"
            }
        });
        $('.info-toggle-button').toggleButtons({
            style: {
                enabled: "info",
                disabled: ""
            }
        });
        $('.success-toggle-button').toggleButtons({
            style: {
                enabled: "success",
                disabled: "info"
            }
        });
        $('.warning-toggle-button').toggleButtons({
            style: {
                enabled: "warning",
                disabled: "info"
            }
        });

        $('.height-toggle-button').toggleButtons({
            height: 100,
            font: {
                'line-height': '100px',
                'font-size': '20px',
                'font-style': 'italic'
            }
        });
    }

    var handleTables = function () {
        if (!jQuery().dataTable) {
            return;
        }

        // begin first table
        $('#sample_1').dataTable({
            "aLengthMenu": [
                [10, 25, 50, -1],
                [5, 15, 20, "All"]
            ],
            // set the initial value
            "iDisplayLength": 5,
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ records per page",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });

        jQuery('#sample_1 .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#sample_1_wrapper .dataTables_length select').addClass("m-wrap xsmall"); // modify table per page dropdown

        // begin second table
        $('#sample_2').dataTable({
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ per page",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });

        jQuery('#sample_2 .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        jQuery('#sample_2_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_2_wrapper .dataTables_length select').addClass("m-wrap xsmall"); // modify table per page dropdown

        // begin: third table
        $('#sample_3').dataTable({
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ per page",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });

        jQuery('#sample_3 .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        jQuery('#sample_3_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_3_wrapper .dataTables_length select').addClass("m-wrap xsmall"); // modify table per page dropdown
    }

    var handleEditableTables = function () {

        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            jqTds[0].innerHTML = '<input type="text" class="m-wrap small" value="' + aData[0] + '">';
            jqTds[1].innerHTML = '<input type="text" class="m-wrap small" value="' + aData[1] + '">';
            jqTds[2].innerHTML = '<input type="text" class="m-wrap small" value="' + aData[2] + '">';
            jqTds[3].innerHTML = '<input type="text" class="m-wrap small" value="' + aData[3] + '">';
            jqTds[4].innerHTML = '<a class="edit" href="">Save</a>';
            jqTds[5].innerHTML = '<a class="cancel" href="">Cancel</a>';
        }

        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 4, false);
            oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 5, false);
            oTable.fnDraw();
        }

        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 4, false);
            oTable.fnDraw();
        }

        var oTable = $('#sample_editable_1').dataTable();
        jQuery('#sample_editable_1_wrapper .dataTables_filter input').addClass("m-wrap medium"); // modify table search input
        jQuery('#sample_editable_1_wrapper .dataTables_length select').addClass("m-wrap xsmall"); // modify table per page dropdown

        var nEditing = null;

        $('#sample_editable_1_new').click(function (e) {
            e.preventDefault();
            var aiNew = oTable.fnAddData(['', '', '', '',
                '<a class="edit" href="">Edit</a>', '<a class="cancel" data-mode="new" href="">Cancel</a>']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
        });

        $('#sample_editable_1 a.delete').live('click', function (e) {
            e.preventDefault();

            if (confirm("Are you sure to delete this row ?") == false) {
                return;
            }

            var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);
            alert("Deleted! Do not forget to do some ajax to sync with backend :)");
        });

        $('#sample_editable_1 a.cancel').live('click', function (e) {
            e.preventDefault();
            if ($(this).attr("data-mode") == "new") {
                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });

        $('#sample_editable_1 a.edit').live('click', function (e) {
            e.preventDefault();

            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */
                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {
                /* Editing this row and want to save it */
                saveRow(oTable, nEditing);
                nEditing = null;
                alert("Updated! Do not forget to do some ajax to sync with backend :)");
            } else {
                /* No edit in progress - let's start one */
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    }

    var handleTagsInput = function () {
        if (!jQuery().tagsInput) {
            return;
        }
        $('#tags_1').tagsInput({
            width: 'auto',
            'onAddTag': function () {
                alert(1);
            },
        });
        $('#tags_2').tagsInput({
            width: 240
        });
    }

    var handleDateTimePickers = function () {

        if (jQuery().datepicker) {
            $('.date-picker').datepicker();
        }

        if (jQuery().timepicker) {
            $('.timepicker-default').timepicker();
            $('.timepicker-24').timepicker({
                minuteStep: 1,
                showSeconds: true,
                showMeridian: false
            });
        }

        if (!jQuery().daterangepicker) {
            return;
        }

        $('.date-range').daterangepicker();

        $('#dashboard-report-range').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                    days: -6
                }), 'today'],
                'Last 30 Days': [Date.today().add({
                    days: -29
                }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                    months: -1
                }), Date.today().moveToFirstDayOfMonth().add({
                    days: -1
                })]
            },
            opens: 'left',
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },

        function (start, end) {
            App.blockUI(jQuery("#dashboard"));
            setTimeout(function () {
                App.unblockUI(jQuery("#dashboard"));
                $.gritter.add({
                    title: 'Dashboard',
                    text: 'Dashboard date range updated.'
                });
                App.scrollTo();
            }, 1000);
            $('#dashboard-report-range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));

        });

        $('#dashboard-report-range').show();

        $('#dashboard-report-range span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));

        $('#form-date-range').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                    days: -6
                }), 'today'],
                'Last 30 Days': [Date.today().add({
                    days: -29
                }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                    months: -1
                }), Date.today().moveToFirstDayOfMonth().add({
                    days: -1
                })]
            },
            opens: 'right',
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },

        function (start, end) {
            $('#form-date-range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        });

        $('#form-date-range span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));


        if (!jQuery().datepicker || !jQuery().timepicker) {
            return;
        }
    }

    var handleClockfaceTimePickers = function () {

        if (!jQuery().clockface) {
            return;
        }

        $('#clockface_1').clockface();

        $('#clockface_2').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#clockface_2_toggle-btn').click(function (e) {
            e.stopPropagation();
            $('#clockface_2').clockface('toggle');
        });

        $('#clockface_3').clockface({
            format: 'H:mm'
        }).clockface('show', '14:30');
    }

    var handleColorPicker = function () {
        if (!jQuery().colorpicker) {
            return;
        }
        $('.colorpicker-default').colorpicker({
            format: 'hex'
        });
        $('.colorpicker-rgba').colorpicker();
    }

    var handleAccordions = function () {
        $(".accordion").collapse().height('auto');

        var lastClicked;

        //add scrollable class name if you need scrollable panes
        jQuery('.accordion.scrollable .accordion-toggle').click(function () {
            lastClicked = jQuery(this);
        }); //move to faq section

        jQuery('.accordion.scrollable').on('shown', function () {
            jQuery('html,body').animate({
                scrollTop: lastClicked.offset().top - 150
            }, 'slow');
        });
    }

    var handleScrollers = function () {

        var setPageScroller = function () {
            $('.main').slimScroll({
                size: '12px',
                color: '#a1b2bd',
                height: $(window).height(),
                allowPageScroll: true,
                alwaysVisible: true,
                railVisible: true
            });
        }

        /*
        //if (isIE8 == false) {
            $(window).resize(function(){
               setPageScroller(); 
            });
            setPageScroller();
        //} else {
            $('.main').removeClass("main");
        //}
        */

        $('.scroller').each(function () {
            $(this).slimScroll({
                //start: $('.blah:eq(1)'),
                size: '7px',
                color: '#a1b2bd',
                height: $(this).attr("data-height"),
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });
        });

    }

    var handleSliders = function () {
        // basic
        $(".slider-basic").slider(); // basic sliders

        // snap inc
        $("#slider-snap-inc").slider({
            value: 100,
            min: 0,
            max: 1000,
            step: 100,
            slide: function (event, ui) {
                $("#slider-snap-inc-amount").text("$" + ui.value);
            }
        });

        $("#slider-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

        // range slider
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

        //range max

        $("#slider-range-max").slider({
            range: "max",
            min: 1,
            max: 10,
            value: 2,
            slide: function (event, ui) {
                $("#slider-range-max-amount").text(ui.value);
            }
        });

        $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));

        // range min
        $("#slider-range-min").slider({
            range: "min",
            value: 37,
            min: 1,
            max: 700,
            slide: function (event, ui) {
                $("#slider-range-min-amount").text("$" + ui.value);
            }
        });

        $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));

        // 
        // setup graphic EQ
        $("#slider-eq > span").each(function () {
            // read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical"
            });
        });

        // vertical slider
        $("#slider-vertical").slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: 60,
            slide: function (event, ui) {
                $("#slider-vertical-amount").text(ui.value);
            }
        });
        $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));

        // vertical range sliders
        $("#slider-range-vertical").slider({
            orientation: "vertical",
            range: true,
            values: [17, 67],
            slide: function (event, ui) {
                $("#slider-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));
    }

    var handlKnobElements = function () {
        //knob does not support ie8 so skip it
        if (!jQuery().knob || isIE8) {
            return;
        }

        $(".knob").knob({
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
            'skin': 'tron'
        });

        if ($(".knobify").size() > 0) {
            $(".knobify").knob({
                readOnly: true,
                skin: "tron",
                'width': 100,
                'height': 100,
                'dynamicDraw': true,
                'thickness': 0.2,
                'tickColorizeValues': true,
                'skin': 'tron',
                draw: function () {
                    // "tron" case
                    if (this.$.data('skin') == 'tron') {

                        var a = this.angle(this.cv) // Angle
                        ,
                            sa = this.startAngle // Previous start angle
                            ,
                            sat = this.startAngle // Start angle
                            ,
                            ea // Previous end angle
                            ,
                            eat = sat + a // End angle
                            ,
                            r = 1;

                        this.g.lineWidth = this.lineWidth;

                        this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

                        if (this.o.displayPrevious) {
                            ea = this.startAngle + this.angle(this.v);
                            this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                            this.g.beginPath();
                            this.g.strokeStyle = this.pColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                            this.g.stroke();
                        }

                        this.g.beginPath();
                        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                        this.g.stroke();

                        this.g.lineWidth = 2;
                        this.g.beginPath();
                        this.g.strokeStyle = this.o.fgColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                        this.g.stroke();

                        return false;

                    }
                }
            });
        }
    }

    var handleGoTop = function () {
        /* set variables locally for increased performance */
        jQuery('.footer .go-top').click(function () {
            App.scrollTo();
        });
    }

    var handleChat = function () {
        var cont = $('#chats');
        var list = $('.chats', cont);
        var form = $('.chat-form', cont);
        var input = $('input', form);
        var btn = $('.btn', form);

        var handleClick = function () {
            var text = input.val();
            if (text.length == 0) {
                return;
            }

            var time = new Date();
            var time_str = time.toString('MMM dd, yyyy HH:MM');
            var tpl = '';
            tpl += '<li class="out">';
            tpl += '<img class="avatar" alt="" src="resource/img/avatar1.jpg"/>';
            tpl += '<div class="message">';
            tpl += '<span class="arrow"></span>';
            tpl += '<a href="#" class="name">Bob Nilson</a>&nbsp;';
            tpl += '<span class="datetime">at ' + time_str + '</span>';
            tpl += '<span class="body">';
            tpl += text;
            tpl += '</span>';
            tpl += '</div>';
            tpl += '</li>';

            var msg = list.append(tpl);
            input.val("");
            $('.scroller', cont).slimScroll({
                scrollTo: list.height()
            });
        }

        btn.click(handleClick);
        input.keypress(function (e) {
            if (e.which == 13) {
                handleClick();
                return false; //<---- Add this line
            }
        });
    }

    var handleNestableList = function () {

        var updateOutput = function (e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };

        // activate Nestable for list 1
        $('#nestable_list_1').nestable({
            group: 1
        })
            .on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable_list_2').nestable({
            group: 1
        })
            .on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable_list_1').data('output', $('#nestable_list_1_output')));
        updateOutput($('#nestable_list_2').data('output', $('#nestable_list_2_output')));

        $('#nestable_list_menu').on('click', function (e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });

        $('#nestable_list_3').nestable();

    }

    var handleStyler = function () {

        var panel = $('.color-panel');

        $('.icon-color', panel).click(function () {
            $('.color-mode').show();
            $('.icon-color-close').show();
        });

        $('.icon-color-close', panel).click(function () {
            $('.color-mode').hide();
            $('.icon-color-close').hide();
        });

        $('li', panel).click(function () {
            var color = $(this).attr("data-style");
            setColor(color);
            $('.inline li', panel).removeClass("current");
            $(this).addClass("current");
        });

        $('input', panel).change(function () {
            setLayout();
        });

        var setColor = function (color) {
            $('#style_color').attr("href", "resource/css/style_" + color + ".css");
            setCookie('color', color, null);
        }

        var setLayout = function () {
            if ($('input.header', panel).is(":checked")) {
                $("body").addClass("fixed-top");
                $(".header").addClass("navbar-fixed-top");
            } else {
                $("body").removeClass("fixed-top");
                $(".header").removeClass("navbar-fixed-top");
            }
        }
    }

    var handleFormWizards = function () {
        if (!jQuery().bootstrapWizard) {
            return;
        }

        // default form wizard
        $('#form_wizard_1').bootstrapWizard({
            'nextSelector': '.button-next',
            'previousSelector': '.button-previous',
            onTabClick: function (tab, navigation, index) {
                alert('on tab click disabled');
                return false;
            },
            onNext: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }
                App.scrollTo($('.page-title'));
            },
            onPrevious: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }

                App.scrollTo($('.page-title'));
            },
            onTabShow: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                var $percent = (current / total) * 100;
                $('#form_wizard_1').find('.bar').css({
                    width: $percent + '%'
                });
            }
        });

        $('#form_wizard_1').find('.button-previous').hide();
        $('#form_wizard_1 .button-submit').click(function () {
            alert('Finished! Hope you like it :)');
        }).hide();
    }


    var handleFormValidation = function () {

        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#form_sample_1');
        var error1 = $('.alert-error', form1);
        var success1 = $('.alert-success', form1);

        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-inline', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                url: {
                    required: true,
                    url: true
                },
                number: {
                    required: true,
                    number: true
                },
                digits: {
                    required: true,
                    digits: true
                },
                creditcard: {
                    required: true,
                    creditcard: true
                },
                occupation: {
                    minlength: 5,
                },
                category: {
                    required: true
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit              
                success1.hide();
                error1.show();
                App.scrollTo(error1, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
                $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change dony by hightlight
                $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
            },

            submitHandler: function (form) {
                success1.show();
                error1.hide();
            }
        });

        //Sample 2
        var form2 = $('#form_sample_2');
        var error2 = $('.alert-error', form2);
        var success2 = $('.alert-success', form2);

        form2.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-inline', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                category: {
                    required: true
                },
                education: {
                    required: true
                },
                occupation: {
                    minlength: 5,
                },
                membership: {
                    required: true
                },
                service: {
                    required: true,
                    minlength: 2
                }
            },

            messages: { // custom messages for radio buttons and checkboxes
                membership: {
                    required: "Please select a Membership type"
                },
                service: {
                    required: "Please select  at least 2 types of Service",
                    minlength: jQuery.format("Please select  at least {0} types of Service")
                }
            },

            errorPlacement: function (error, element) { // render error placement for each input type
                if (element.attr("name") == "education") { // for chosen elements, need to insert the error after the chosen container
                    error.insertAfter("#form_2_education_chzn");
                } else if (element.attr("name") == "membership") { // for uniform radio buttons, insert the after the given container
                    error.addClass("no-left-padding").insertAfter("#form_2_membership_error");
                } else if (element.attr("name") == "service") { // for uniform checkboxes, insert the after the given container
                    error.addClass("no-left-padding").insertAfter("#form_2_service_error");
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavoir
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit   
                success2.hide();
                error2.show();
                App.scrollTo(error2, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
                $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change dony by hightlight
                $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
            },

            success: function (label) {
                if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radip buttons, no need to show OK icon
                    label
                        .closest('.control-group').removeClass('error').addClass('success');
                    label.remove(); // remove error label here
                } else { // display success icon for other inputs
                    label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                }
            },

            submitHandler: function (form) {
                success2.show();
                error2.hide();
            }

        });

        //apply validation on chosen dropdown value change, this only needed for chosen dropdown integration.
        $('.chosen, .chosen-with-diselect', form2).change(function () {
            form2.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
        });
    }

    var handleTree = function () {

        // handle collapse/expand for tree_1
        $('#tree_1_collapse').click(function () {
            $('.tree-toggle', $('#tree_1 > li > ul')).addClass("closed");
            $('.branch', $('#tree_1 > li > ul')).removeClass("in");
        });

        $('#tree_1_expand').click(function () {
            $('.tree-toggle', $('#tree_1 > li > ul')).removeClass("closed");
            $('.branch', $('#tree_1 > li > ul')).addClass("in");
        });

        // handle collapse/expand for tree_2
        $('#tree_2_collapse').click(function () {
            $('.tree-toggle', $('#tree_2 > li > ul')).addClass("closed");
            $('.branch', $('#tree_2 > li > ul')).removeClass("in");
        });

        $('#tree_2_expand').click(function () {
            //$('.tree-toggle', $('#tree_2 > li > ul')).removeClass("closed");
            // iterate tree nodes and exppand all nodes
            $('.tree-toggle', $('#tree_2 > li > ul')).each(function () {
                $(this).click(); //trigger tree node click
            });
            $('.branch', $('#tree_2 > li > ul')).addClass("in");
        });

        //This is a quick example of capturing the select event on tree leaves, not branches
        $("#tree_1").on("nodeselect.tree.data-api", "[data-role=leaf]", function (e) {
            var output = "";

            output += "Node nodeselect event fired:\n";
            output += "Node Type: leaf\n";
            output += "Value: " + ((e.node.value) ? e.node.value : e.node.el.text()) + "\n";
            output += "Parentage: " + e.node.parentage.join("/");

            alert(output);
        });

        //This is a quick example of capturing the select event on tree branches, not leaves
        $("#tree_1").on("nodeselect.tree.data-api", "[role=branch]", function (e) {
            var output = "Node nodeselect event fired:\n"; + "Node Type: branch\n" + "Value: " + ((e.node.value) ? e.node.value : e.node.el.text()) + "\n" + "Parentage: " + e.node.parentage.join("/") + "\n"

            alert(output);
        })

        //Listening for the 'openbranch' event. Look for e.node, which is the actual node the user opens

        $("#tree_1").on("openbranch.tree", "[data-toggle=branch]", function (e) {

            var output = "Node openbranch event fired:\n" + "Node Type: branch\n" + "Value: " + ((e.node.value) ? e.node.value : e.node.el.text()) + "\n" + "Parentage: " + e.node.parentage.join("/") + "\n"

            alert(output);
        })


        //Listening for the 'closebranch' event. Look for e.node, which is the actual node the user closed

        $("#tree_1").on("closebranch.tree", "[data-toggle=branch]", function (e) {

            var output = "Node closebranch event fired:\n" + "Node Type: branch\n" + "Value: " + ((e.node.value) ? e.node.value : e.node.el.text()) + "\n" + "Parentage: " + e.node.parentage.join("/") + "\n"

            alert(output);
        })
    }

    return {

        //main function to initiate template pages
        init: function () {
            handleResponsive(); // set and handle responsive
            handleUniform(); // handles uniform elements
            // page level handlers
            if (App.isPage("index")) {

                //handleDashboardCharts(); // handles plot charts for main page
                handleJQVMAP(); // handles vector maps for home page
                handleDashboardCalendar(); // handles full calendar for main page
                //handleChat(); // handles chat samples

                //handleIntro(); // this is for demo purpose. you may enable or disable this function.
            }
            if (App.isPage("structure")) {

            }
            if (App.isPage("grids")) {
                handlePortletSortable(); // handles full calendars
            }

            if (App.isPage("calendar")) {
                handleCalendar(); // handles full calendars
            }

            if (App.isPage("maps_vector")) {
                handleAllJQVMAP(); // handles vector maps for interactive map page
            }

            if (App.isPage("charts")) {
                //handleCharts(); // handles plot charts
                handleChartGraphs();
            }

            if (App.isPage("sliders")) {
                handleSliders();
                handlKnobElements()
            }

            if (App.isPage("table_editable")) {
                handleEditableTables(); // handle editable tables
            }

            if (App.isPage("table_managed")) {
                handleTables(); // handles data tables
            }

            if (App.isPage("ui_nestable")) {
                handleNestableList(); // handles tree view samples
            }

            if (App.isPage("form_validation")) {
                handleFormValidation(); // handles form validation samples
            }

            if (App.isPage("ui_tree")) {
                handleTree();
            }

            // global handlers
            handleChoosenSelect(); // handles bootstrap chosen dropdowns
            handleScrollers(); // handles slim scrolling contents            
            handleTagsInput() // handles tag input elements
            handleDateTimePickers(); //handles form timepickers
            handleClockfaceTimePickers(); //handles form clockface timepickers
            handleColorPicker(); // handles form color pickers            
            handlePortletTools(); // handles portlet action bar functionality(refresh, configure, toggle, remove)
            handlePulsate(); // handles pulsate functionality on page elements
            handleGritterNotifications(); // handles gritter notifications
            handleTooltip(); // handles bootstrap tooltips
            handlePopover(); // handles bootstrap popovers
            handleToggleButtons(); // handles form toogle buttons
            handleWysihtml5(); //handles WYSIWYG Editor           
            handleFancyBox(); // handles fancy box image previews
            handleStyler(); // handles style customer tool
            handleMainMenu(); // handles main menu
            handleSidebarToggler() // handles sidebar hide/show
            handleFixInputPlaceholderForIE(); // fixes/enables html5 placeholder attribute for IE9, IE8
            handleGoTop(); //handles scroll to top functionality in the footer
            handleAccordions(); //handles accordions
            handleFormWizards(); // handles form wizards
        },

        // login page setup
        initLogin: function () {
            handleLoginForm(); // handles login form
            handleUniform(); // // handles uniform elements
            handleFixInputPlaceholderForIE(); // fixes/enables html5 placeholder attribute for IE9, IE8
        },


        // wrapper function for page element pulsate
        pulsate: function (el, options) {
            var opt = jQuery.extend(options, {
                color: '#d12610', // set the color of the pulse
                reach: 15, // how far the pulse goes in px
                speed: 300, // how long one pulse takes in ms
                pause: 0, // how long the pause between pulses is in ms
                glow: false, // if the glow should be shown too
                repeat: 1, // will repeat forever if true, if given a number will repeat for that many times
                onHover: false // if true only pulsate if user hovers over the element
            });
            jQuery(el).pulsate(opt);
        },

        // wrapper function to scroll to an element
        scrollTo: function (el, offeset) {
            pos = el ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos + (offeset ? offeset : 0)
            }, 'slow');
        },

        // wrapper function to  block element(indicate loading)
        blockUI: function (el, loaderOnTop) {
            lastBlockedUI = el;
            jQuery(el).block({
                message: '<img src="./resource/img/loading.gif" align="absmiddle">',
                css: {
                    border: 'none',
                    padding: '2px',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: '#000',
                    opacity: 0.05,
                    cursor: 'wait'
                }
            });
        },

        // wrapper function to  un-block element(finish loading)
        unblockUI: function (el) {
            jQuery(el).unblock({
                onUnblock: function () {
                    jQuery(el).removeAttr("style");
                }
            });
        },

        // public method to initialize uniform inputs
        initFancybox: function () {
            handleFancyBox();
        },

        // initializes uniform elements
        initUniform: function (el) {
            initUniform(el);
        },

        // initializes choosen dropdowns
        initChosenSelect: function (el) {
            initChosenSelect(el);
        },

        getActualVal: function (el) {
            var el = jQuery(el);
            if (el.val() === el.attr("placeholder")) {
                return "";
            }

            return el.val();
        },

        // set map page
        setPage: function (name) {
            currentPage = name;
        },

        // check current page
        isPage: function (name) {
            return currentPage == name ? true : false;
        },

        subMemu: function (classname) {

            var handleContentHeight = function () {
                var content = $('.page-content');
                var sidebar = $('.page-sidebar');

                if (!content.attr("data-height")) {
                    content.attr("data-height", content.height());
                }


                if (sidebar.height() > content.height()) {
                    content.css("min-height", sidebar.height() + 20);
                } else {
                    content.css("min-height", content.attr("data-height"));
                }
            }

            var last = jQuery('.has-sub.open', $('.page-sidebar'));
            if (last.size() == 0) {
                //last = jQuery('.has-sub.active', $('.page-sidebar'));
            }
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);

            var sub = jQuery('.' + classname).next();

            jQuery('.arrow', jQuery('.' + classname)).addClass("open");
            jQuery('.' + classname).parent().addClass("open");
            sub.slideDown(200, function () {
                handleContentHeight();
            });

        },
        // check for device touch support
        isTouchDevice: function () {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }

    };

}();