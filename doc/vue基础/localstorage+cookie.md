sessionstorage,localstorage和cookie之间的区别以及各自的用法
区别
1，cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。

2，存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

3，数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

4，作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

在服务器端存储数据经常用session，所以经常也遇到这样的问题：

cookie 和session 的区别？
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
考虑到安全应当使用session。

3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用COOKIE。

4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
知道这些区别了后，还要得知道他们的用法：

cookie的用法
在这里我们使用jquery封装的方法。所以先得引入两个js

首先包含jQuery的库文件，在后面包含 jquery.cookie.js 的库文件。

<script type="text/javascript" src="js/jquery-3.4.1.min.js"></script> 

<script type="text/javascript" src="js/jquery.cookie.js"></script>
1
2
3
使用方法
创建一个会话cookie：
 $.cookie('cookieName','cookieValue');
1
注：当没有指明cookie时间时，所创建的cookie有效期默认到用户浏览器关闭止，故被称为会话cookie。

创建一个持久cookie：
	 $.cookie(‘cookieName’,'cookieValue’，｛expires：7｝);
1
注：当指明时间时，故称为持久cookie，并且有效时间为7天。
创建一个持久并带有效路径的cookie：

$.cookie(‘cookieName’,'cookieValue’，｛expires：7，path：’/'｝);
1
注：如果不设置有效路径，在默认情况下，只能在cookie设置当前页面读取该cookie，cookie的路径用于设置能够读取cookie的顶级目录。

创建一个持久并带有效路径和域名的cookie：
$.cookie(‘cookieName’,'cookieValue’，｛expires：7，path：’/'，domain: ‘chuhoo.com’，secure: false，raw:false｝);
1
注：domain：创建cookie所在网页所拥有的域名；secure：默认是false，如果为true，cookie的传输协议需为https；raw：默认为false，读取和写入时候自动进行编码和解码（使用encodeURIComponent编码，使用decodeURIComponent解码），关闭这个功能，请设置为true。

读取cookie：
$.cookie('the_cookie'); // cookie存在 => 'the_value' 

$.cookie('not_existing'); // cookie不存在 => null 
1
2
3
5.删除cookie，通过传递null作为cookie的值即可：

$.cookie('the_cookie', null);
1
localStorage和sessionStorage的用法：
保存数据：localStorage.setItem(key,value);
sessionStorage.setItem("key", "value");
localStorage.setItem("site", "js8.in");
1
2
读取数据：localStorage.getItem(key) ；
var value = sessionStorage.getItem("key"); 
var site = localStorage.getItem("site");
1
2
删除数据：localStorage.removeItem(key)
sessionStorage.removeItem("key"); 
localStorage.removeItem("site");
1
2
clear清除所有的key/value：clear();
sessionStorage.clear(); 
localStorage.clear();
1
2
获取localStorage的属性名称（键名称）：
localStorage.key(index)
