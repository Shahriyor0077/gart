"use strict";var headerButton=document.querySelector(".menu__button"),headerMenu=document.querySelector(".header__menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()};var firstText=document.querySelector(".intro__content__title1"),secondText=document.querySelector(".intro__content__title2");window.addEventListener("scroll",function(){var a=window.scrollY;960<=window.innerWidth&&(firstText.style.top=.4*-a+"px",firstText.style.opacity=1-.005*a,secondText.style.left=.2*-a+"px",secondText.style.opacity=1-.004*a)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJmaXJzdFRleHQiLCJzZWNvbmRUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwic2Nyb2xsWSIsImlubmVyV2lkdGgiLCJzdHlsZSIsInRvcCIsIm9wYWNpdHkiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiZ0JBQU1BLENBQUFBLFlBQVksQ0FBc0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUN0QyxlQURzQyxDLENBR2xDQyxVQUFVLENBQXFCRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQyxDQUNqQ0UsVUFBVSxHLENBQ1JDLFVBQVUsQ0FBRyxVQUFLLENBQ3RCRCxVQUFVLENBQUcsQ0FBQ0EsVUFEUSxDQUV0QkosWUFBWSxDQUFDTSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixNQUE5QixDQUZzQixDQUd0QkosVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixNQUE1QixDQUNELEMsQ0FFRFAsWUFBWSxDQUFDUSxPQUFiLENBQXVCSCxVLENBRXZCSSxNQUFNLENBQUNELE9BQVAsQ0FBaUIsU0FBQ0UsQ0FBRCxDQUFrQixDQUUvQixDQUFBTixVQUFVLEVBQ1RNLENBQUMsQ0FBQ0MsWUFBRixHQUFpQkMsUUFBakIsQ0FBMEJaLFlBQTFCLENBREQsRUFFQ1UsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCQyxRQUFqQixDQUEwQlQsVUFBMUIsQ0FKOEIsRUFNL0JFLFVBQVUsRUFDYixDLElBRUtRLENBQUFBLFNBQVMsQ0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDLENBQ1pZLFVBQVUsQ0FBR2IsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDLENBRW5CTyxNQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLENBQWtDLFVBQUEsQ0FDaEMsR0FBTUMsQ0FBQUEsQ0FBSyxDQUFHUCxNQUFNLENBQUNRLE9BQXJCLENBRXdCLEdBQXJCLEVBQUFSLE1BQU0sQ0FBQ1MsVUFIc0IsR0FJOUJMLFNBQVMsQ0FBQ00sS0FBVixDQUFnQkMsR0FBaEIsQ0FBK0IsRUFBVCxFQUFDSixDQUFELENBQWUsSUFKUCxDQUs5QkgsU0FBUyxDQUFDTSxLQUFWLENBQWdCRSxPQUFoQixDQUEwQixFQUFhLElBQVIsQ0FBQUwsQ0FMRCxDQU05QkYsVUFBVSxDQUFDSyxLQUFYLENBQWlCRyxJQUFqQixDQUFpQyxFQUFULEVBQUNOLENBQUQsQ0FBZSxJQU5ULENBTzlCRixVQUFVLENBQUNLLEtBQVgsQ0FBaUJFLE9BQWpCLENBQTJCLEVBQWEsSUFBUixDQUFBTCxDQVBGLENBU2pDLENBVEQsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLm1lbnVfX2J1dHRvblwiXHJcbik7XHJcbmNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudVwiKTtcclxubGV0IG1lbnVPcGVuZWQgPSBmYWxzZTtcclxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbn07XHJcblxyXG5oZWFkZXJCdXR0b24ub25jbGljayA9IG1lbnVUb2dnbGU7XHJcblxyXG53aW5kb3cub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgbWVudU9wZW5lZCAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTWVudSlcclxuICApXHJcbiAgICBtZW51VG9nZ2xlKCk7XHJcbn07XHJcblxyXG5jb25zdCBmaXJzdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2NvbnRlbnRfX3RpdGxlMScpO1xyXG5jb25zdCBzZWNvbmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvX19jb250ZW50X190aXRsZTInKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gIGNvbnN0IHZhbHVlID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCl7XHJcbiAgICBmaXJzdFRleHQuc3R5bGUudG9wID0gLXZhbHVlICogMC40ICsgJ3B4JztcclxuICAgIGZpcnN0VGV4dC5zdHlsZS5vcGFjaXR5ID0gKyAxIC12YWx1ZSAqIDAuMDA1O1xyXG4gICAgc2Vjb25kVGV4dC5zdHlsZS5sZWZ0ID0gLXZhbHVlICogMC4yICsgJ3B4JztcclxuICAgIHNlY29uZFRleHQuc3R5bGUub3BhY2l0eSA9ICsgMSAtdmFsdWUgKiAwLjAwNDtcclxuICB9XHJcbn0pIl19
