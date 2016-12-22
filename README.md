<div id="AT" class="container-article  fixed"> 


            <h2><a name="embed"></a>Embedding and including</h2>
            <p>Let's first see a simple example:</p>
<div class="pre-action-link" id="premain547654" style="width:100%;display:block;"><span id="prehide547654" onclick="processCodeBlocks.togglePre(547654);">Hide</span>  &nbsp; <span id="copycode547654" onclick="return processCodeBlocks.copyCode(547654);">Copy Code</span></div><pre id="pre547654" class="notranslate" style="margin-top: 0px;">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;This <span class="code-keyword">is</span> a JavaScript example<span class="code-keyword">&lt;/</span><span class="code-leadattribute">title</span>&gt;</pre>
	<p>Usually, JavaScript code starts with the tag <code>&lt;script language="JavaScript"&gt;</code>
	and ends with the tag <code>&lt;/script&gt;</code>. The code placed between <code>&lt;head&gt;</code>
	and <code>&lt;/head&gt;</code>. Sometimes, people embed the code in the <code>&lt;body&gt;</code>
	tags:</p>
<div class="pre-action-link" id="premain147097" style="width:100%;display:block;"><span id="prehide147097" onclick="processCodeBlocks.togglePre(147097);">Hide</span>  &nbsp; <span id="copycode147097" onclick="return processCodeBlocks.copyCode(147097);">Copy Code</span></div><pre id="pre147097" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">html</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">head</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">script</span><span class="code-keyword">&gt;</span>
.....// The code embedded in the &lt;body&gt; tags.
&lt;/script&gt;
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
            <p>Why do we place JavaScript code inside comment fields <code>&lt;!--</code> and
              <code>//--&gt;</code>? It's for ensuring that the Script is not displayed by
              old browsers that do not support JavaScript. This is optional, but
              considered good practice. The LANGUAGE attribute also is optional,
              but recommended. You may specify a particular version of JavaScript:</p>
<div class="pre-action-link" id="premain548518" style="width:100%;display:block;"><span id="prehide548518" onclick="processCodeBlocks.togglePre(548518);">Hide</span>  &nbsp; <span id="copycode548518" onclick="return processCodeBlocks.copyCode(548518);">Copy Code</span></div><pre id="pre548518" class="notranslate" style="margin-top: 0px;">&lt;script language=<span class="code-string">"</span><span class="code-string">JavaScript1.2"</span>&gt;</pre>
            <p>You can use another attribute SRC to include an external file containing
              JavaScript code:</p>
<div class="pre-action-link" id="premain116061" style="width:100%;display:block;"><span id="prehide116061" onclick="processCodeBlocks.togglePre(116061);">Hide</span>  &nbsp; <span id="copycode116061" onclick="return processCodeBlocks.copyCode(116061);">Copy Code</span></div><pre id="pre116061" class="notranslate" style="margin-top: 0px;">&lt;script language=<span class="code-string">"</span><span class="code-string">JavaScript"</span> src=<span class="code-string">"</span><span class="code-string">hello.js"</span>&gt;&lt;/script</pre>
            <p>For example, shown below is the code of the external file <code>hello.js</code>:
</p><div class="pre-action-link" id="premain505841" style="width:100%;display:block;"><span id="prehide505841" onclick="processCodeBlocks.togglePre(505841);">Hide</span>  &nbsp; <span id="copycode505841" onclick="return processCodeBlocks.copyCode(505841);">Copy Code</span></div><pre id="pre505841" class="notranslate" style="margin-top: 0px;">document.write(<span class="code-string">"</span><span class="code-string">Hello World!"</span>)</pre>
            <p>The external file is simply a text file containing JavaScript code
               with the file name extension ".js". Note:
</p><ol>
              <li>Including an external file only functions reliably across platforms
              in the version 4 browsers.
              </li><li>The code can't include tags <code>&lt;script language...&gt;</code> and <code>&lt;/script&gt;</code>,
              or you will get an error message.
</li></ol>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="write"></a>write and writeln</h2>
            <p>In order to output text in JavaScript you must use <code>write()</code>
              or <code>writeln()</code>. Here's an example:

</p><div class="pre-action-link" id="premain10689" style="width:100%;display:block;"><span id="prehide10689" onclick="processCodeBlocks.togglePre(10689);">Hide</span>  &nbsp; <span id="copycode10689" onclick="return processCodeBlocks.copyCode(10689);">Copy Code</span></div><pre id="pre10689" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">HTML</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">HEAD</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">TITLE</span><span class="code-keyword">&gt;</span> Welcome to my site<span class="code-keyword">&lt;</span><span class="code-leadattribute">/TITLE</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/HEAD</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">BODY</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">SCRIPT</span> <span class="code-attribute">LANGUAGE</span><span class="code-keyword">="</span><span class="code-keyword">JAVASCRIPT"</span><span class="code-keyword">&gt;</span>
&lt;!--
document.write(<span class="code-string">"</span><span class="code-string">Welcome to my site!"</span>);
<span class="code-comment">//</span><span class="code-comment"> --&gt;
</span><span class="code-keyword">&lt;/</span><span class="code-leadattribute">SCRIPT</span>&gt;
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/BODY</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/HTML</span><span class="code-keyword">&gt;</span></pre>
            <p>Note: the document object <code>write</code> is in lowercase as JavaScript is
              case sensitive. The difference between <code>write</code> and <code>writeln</code>
              is: <code>write</code> just outputs a text, <code>writeln</code> outputs the
              text and a line break.</p>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="document"></a>Document object</h2>
            <p>The document object is one of the most important objects of JavaScript.
              Shown below is a very simple JavaScript code:</p>
<div class="pre-action-link" id="premain988134" style="width:100%;display:block;"><span id="prehide988134" onclick="processCodeBlocks.togglePre(988134);">Hide</span>  &nbsp; <span id="copycode988134" onclick="return processCodeBlocks.copyCode(988134);">Copy Code</span></div><pre id="pre988134" class="notranslate" style="margin-top: 0px;">document.write(<span class="code-string">"</span><span class="code-string">Hi there."</span>)</pre>
            <p>In this code, <code>document</code> is the object. <code>write</code>
              is the method of this object. Let's have a look at some of the other
             methods that the document object possesses.</p>
            <p></p><h4>lastModified</h4> You can always include the last update date
              on your page by using the following code:
<div class="pre-action-link" id="premain949590" style="width:100%;display:block;"><span id="prehide949590" onclick="processCodeBlocks.togglePre(949590);">Hide</span>  &nbsp; <span id="copycode949590" onclick="return processCodeBlocks.copyCode(949590);">Copy Code</span></div><pre id="pre949590" class="notranslate" style="margin-top: 0px;">&lt;script language=<span class="code-string">"</span><span class="code-string">JavaScript"</span>&gt;
document.write(<span class="code-string">"</span><span class="code-string">This page created by John N. Last update:"</span> + document.lastModified);
&lt;/script</pre>
            <p>All you need to do here is use the <code>lastModified</code> property of the
              document. Notice that we used <code>+</code> to put together <i>This
              page created by John N. Last update: </i> and <code>document.lastModified.</code>
            </p><p></p><h4>bgColor and fgColor</h4> Lets try playing around with <code>bgColor</code>
              and <code>fgColor</code>:<p></p>
<div class="pre-action-link" id="premain839290" style="width:100%;display:block;"><span id="prehide839290" onclick="processCodeBlocks.togglePre(839290);">Hide</span>  &nbsp; <span id="copycode839290" onclick="return processCodeBlocks.copyCode(839290);">Copy Code</span></div><pre id="pre839290" class="notranslate" style="margin-top: 0px;">&lt;script&gt;
document.bgColor=<span class="code-string">"</span><span class="code-string">black"</span>
document.fgColor=<span class="code-string">"</span><span class="code-string">#336699"</span>
&lt;/script</pre>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="box"></a>Message Box</h2>
            <p></p><h4>alert</h4> There are three message boxes: <code>alert</code>, <code>confirm</code>, and
              <code>prompt</code>. Let's look at the first one:
<div class="pre-action-link" id="premain201463" style="width:100%;display:block;"><span id="prehide201463" onclick="processCodeBlocks.togglePre(201463);">Hide</span>  &nbsp; <span id="copycode201463" onclick="return processCodeBlocks.copyCode(201463);">Copy Code</span></div><pre id="pre201463" class="notranslate" style="margin-top: 0px;">&lt;body&gt;
&lt;script&gt;
window.alert(<span class="code-string">"</span><span class="code-string">Welcome to my site!"</span>)
&lt;/script</pre>
            <p>You can put whatever you want inside the quotation marks.</p>
            <p></p><h4>confirm</h4> An example for confirm box:
<div class="pre-action-link" id="premain289300" style="width:100%;display:block;"><span id="prehide289300" onclick="processCodeBlocks.togglePre(289300);">Hide</span>  &nbsp; <span id="copycode289300" onclick="return processCodeBlocks.copyCode(289300);">Copy Code</span></div><pre id="pre289300" class="notranslate" style="margin-top: 0px;">window.confirm(<span class="code-string">"</span><span class="code-string">Are you sure you want to quit?"</span>) </pre>
            <p></p><h4>prompt</h4> Prompt box is used to allow a user to enter something
            according the promotion: <p></p>
<div class="pre-action-link" id="premain787507" style="width:100%;display:block;"><span id="prehide787507" onclick="processCodeBlocks.togglePre(787507);">Hide</span>  &nbsp; <span id="copycode787507" onclick="return processCodeBlocks.copyCode(787507);">Copy Code</span></div><pre id="pre787507" class="notranslate" style="margin-top: 0px;">window.prompt(<span class="code-string">"</span><span class="code-string">please enter user name"</span>) </pre>
            <p>In all our examples above, we wrote the box methods as <code>window.alert()</code>.
              Actually, we could simply write the following instead as:
</p><div class="pre-action-link" id="premain855033" style="width:100%;display:block;"><span id="prehide855033" onclick="processCodeBlocks.togglePre(855033);">Hide</span>  &nbsp; <span id="copycode855033" onclick="return processCodeBlocks.copyCode(855033);">Copy Code</span></div><pre id="pre855033" class="notranslate" style="margin-top: 0px;">alert()
confirm()
prompt()</pre>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="variable"></a>Variables and Conditions</h2>
            <p>Let's see an example:</p>
<div class="pre-action-link" id="premain708590" style="width:100%;display:block;"><span id="prehide708590" onclick="processCodeBlocks.togglePre(708590);">Hide</span>  &nbsp; <span id="copycode708590" onclick="return processCodeBlocks.copyCode(708590);">Copy Code</span></div><pre id="pre708590" class="notranslate" style="margin-top: 0px;">&lt;script&gt;
var x=window.confirm(<span class="code-string">"</span><span class="code-string">Are you sure you want to quit"</span>)

<span class="code-keyword">if</span> (x)
    window.alert(<span class="code-string">"</span><span class="code-string">Thank you."</span>)
<span class="code-keyword">else</span>
    window.alert(<span class="code-string">"</span><span class="code-string">Good choice."</span>)
&lt;/script</pre>
            <p>There are several concepts that we should know. First of all, <code>var
            x=</code> is a variable declaration. If you want to create a variable,
            you must declare the variable using the <code>var</code> statement. <code>x</code> will
            get the result, namely, <code>true</code> or <code>false</code>. Then
            we use a condition statement <code>if else</code> to give the script
            the ability to choose between two paths, depending on this result
            (condition for the following action). If the result is true (the user
            clicked "ok"), "Thank you" appears in the window box. If the
            result is false (the user clicked "cancel"), "Good
            choice" appears in the window box instead. So we can make more complex boxes
            using <code>var</code>, <code>if</code> and those basic methods.</p>
<div class="pre-action-link" id="premain312597" style="width:100%;display:block;"><span id="prehide312597" onclick="processCodeBlocks.togglePre(312597);">Hide</span>  &nbsp; <span id="copycode312597" onclick="return processCodeBlocks.copyCode(312597);">Copy Code</span></div><pre id="pre312597" class="notranslate" style="margin-top: 0px;">&lt;script&gt;
var y=window.prompt(<span class="code-string">"</span><span class="code-string">please enter your name"</span>)
window.alert(y)
&lt;/script</pre>
            <p>Another example:</p>
<div class="pre-action-link" id="premain113848" style="width:100%;display:block;"><span id="prehide113848" onclick="processCodeBlocks.togglePre(113848);">Hide</span>  &nbsp; <span id="copycode113848" onclick="return processCodeBlocks.copyCode(113848);">Copy Code</span></div><pre id="pre113848" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">html</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">script</span><span class="code-keyword">&gt;</span>
var x=confirm(<span class="code-string">"</span><span class="code-string">Are you sure you want to quit?"</span>)
<span class="code-keyword">if</span> (!x)
	window.location=<span class="code-string">"</span><span class="code-string">http://www.yahoo.com"</span>
&lt;/script&gt;
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span><span class="code-keyword">&gt;</span>
Welcome to my website!.
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
            <p>If you click "cancel", it will take you to yahoo, and clicking
              ok will continue with the loading of the current page "Welcome
              to my website!". Note:<code>if (!x)</code>means: if click "cancel".
              In JavaScript, the exclamation mark <code>!
</code> means: "none".</p>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="function"></a>Function</h2>
            <p>Functions are chunks of code.Let's create a simple function:</p>
<div class="pre-action-link" id="premain361375" style="width:100%;display:block;"><span id="prehide361375" onclick="processCodeBlocks.togglePre(361375);">Hide</span>  &nbsp; <span id="copycode361375" onclick="return processCodeBlocks.copyCode(361375);">Copy Code</span></div><pre id="pre361375" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">function</span> test()
{
   document.write(<span class="code-string">"</span><span class="code-string">Hello can you see me?"</span>)
}</pre>
            <p>Note that if only this were within your <code>&lt;script&gt;&lt;/script&gt;</code>
              tags, you will not see "Hello can you see me?" on your
              screen because functions are not executed by themselves until you
              call upon them. So we should do something:</p>
<div class="pre-action-link" id="premain80771" style="width:100%;display:block;"><span id="prehide80771" onclick="processCodeBlocks.togglePre(80771);">Hide</span>  &nbsp; <span id="copycode80771" onclick="return processCodeBlocks.copyCode(80771);">Copy Code</span></div><pre id="pre80771" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">function</span> test()
{
   document.write(<span class="code-string">"</span><span class="code-string">Hello can you see me?"</span>)
}
test() </pre>
            <p>Last line<code>test()</code> calls the function, now you
              will see the words "Hello can you see me?".</p>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="handler"></a>Event handler</h2>
            <p>What are event handlers? They can be considered as triggers that
              execute JavaScript when something happens, such as click or move
              your mouse over a link, submit a form etc.</p>
            <p></p><h4>onClick</h4> <code>onClick</code> handlers execute something only when users
              click on buttons, links, etc. Let's see an example:<p></p>
<div class="pre-action-link" id="premain637915" style="width:100%;display:block;"><span id="prehide637915" onclick="processCodeBlocks.togglePre(637915);">Hide</span>  &nbsp; <span id="copycode637915" onclick="return processCodeBlocks.copyCode(637915);">Copy Code</span></div><pre id="pre637915" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">script</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">function</span> ss()
{
alert(<span class="code-string">"</span><span class="code-string">Thank you!"</span>)
}
&lt;/script&gt;
<span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Click here"</span> <span class="code-attribute">onclick</span><span class="code-keyword">="</span><span class="code-keyword">ss()"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span></pre>
            <p>The function <code>ss()</code> is invoked when the user clicks the button. Note:
              Event handlers are not added inside the <code>&lt;script&gt;</code> tags, but
              rather, inside the html tags.</p>
            <p></p><h4>onLoad </h4>The onload event handler is used to call the execution
              of JavaScript after loading:<p></p>
<div class="pre-action-link" id="premain566381" style="width:100%;display:block;"><span id="prehide566381" onclick="processCodeBlocks.togglePre(566381);">Hide</span>  &nbsp; <span id="copycode566381" onclick="return processCodeBlocks.copyCode(566381);">Copy Code</span></div><pre id="pre566381" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span> <span class="code-attribute">onload</span><span class="code-keyword">="</span><span class="code-keyword">ss()"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">frameset</span> <span class="code-attribute">onload</span><span class="code-keyword">="</span><span class="code-keyword">ss()"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">img</span> <span class="code-attribute">src</span><span class="code-keyword">="</span><span class="code-keyword">whatever.gif"</span> <span class="code-attribute">onload</span><span class="code-keyword">="</span><span class="code-keyword">ss()"</span><span class="code-keyword">&gt;</span></pre>
            <p></p><h4>onMouseover,onMouseout</h4> These handlers are used exclusively
              with links.<p></p>
<div class="pre-action-link" id="premain908983" style="width:100%;display:block;"><span id="prehide908983" onclick="processCodeBlocks.togglePre(908983);">Hide</span>  &nbsp; <span id="copycode908983" onclick="return processCodeBlocks.copyCode(908983);">Copy Code</span></div><pre id="pre908983" class="notranslate" style="margin-top: 0px;">&lt;a href=<span class="code-string">"</span><span class="code-string">#"</span> onMouseOver=<span class="code-string">"</span><span class="code-string">document.write('Hi, nice to see you!"</span>&gt;Over Here!<span class="code-keyword">&lt;/</span><span class="code-leadattribute">a</span>&gt;
&lt;a href=<span class="code-string">"</span><span class="code-string">#"</span> onMouseOut=<span class="code-string">"</span><span class="code-string">alert('Good try!')"</span>&gt;Get Out Here!<span class="code-keyword">&lt;/</span><span class="code-leadattribute">a</span>&gt;</pre>
            <p></p><h4>onUnload</h4> <code>onunload</code> executes JavaScript while someone leaves
              the page. For example to thank users.<p></p>
<div class="pre-action-link" id="premain399266" style="width:100%;display:block;"><span id="prehide399266" onclick="processCodeBlocks.togglePre(399266);">Hide</span>  &nbsp; <span id="copycode399266" onclick="return processCodeBlocks.copyCode(399266);">Copy Code</span></div><pre id="pre399266" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span> <span class="code-attribute">onunload</span><span class="code-keyword">="</span><span class="code-keyword">alert('Thank you for visiting us. See you soon')"</span><span class="code-keyword">&gt;</span></pre>
            <p></p><h4>Handle multiple actions</h4>How do you have an event handler 
            call multiple functions/statements? That's simple. You just need
            to embed the functions inside the event handler as usual, but separate
            each of them using a semicolon:<p></p>
<div class="pre-action-link" id="premain516564" style="width:100%;display:block;"><span id="prehide516564" onclick="processCodeBlocks.togglePre(516564);">Hide</span>  &nbsp; <span id="copycode516564" onclick="return processCodeBlocks.copyCode(516564);">Copy Code</span></div><pre id="pre516564" class="notranslate" style="margin-top: 0px;">&lt;form&gt;
&lt;input type=<span class="code-string">"</span><span class="code-string">button"</span> <span class="code-sdkkeyword">value</span>=<span class="code-string">"</span><span class="code-string">Click here!"</span> onClick=<span class="code-string">"</span><span class="code-string">alert('Thanks
for visiting my site!');window.location='http://www.yahoo.com'"</span>&gt;
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">form</span>&gt;</pre>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="form"></a>Form</h2>
            <p>Let's say you have a form like this:</p>
<div class="pre-action-link" id="premain575615" style="width:100%;display:block;"><span id="prehide575615" onclick="processCodeBlocks.togglePre(575615);">Hide</span>  &nbsp; <span id="copycode575615" onclick="return processCodeBlocks.copyCode(575615);">Copy Code</span></div><pre id="pre575615" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">aa"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">text"</span> <span class="code-attribute">size</span><span class="code-keyword">="</span><span class="code-keyword">10"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">bb"</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">br</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span>
<span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Click Here"</span><span class="code-attribute">onclick</span><span class="code-keyword">="</span><span class="code-keyword">alert(document.aa.bb.value)"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span></pre>
            <p>Notice that we gave the names to the form and the element. So JavaScript
              can gain access to them.</p>
            <div align="center"></div>
            <p></p><h4>onBlur </h4> If you want to get information from users and want
              to check each element (ie: user name, password, email) individually,
              and alert the user to correct the wrong input before moving on,
              you can use <code>onBlur</code>. Let's see how <code>onblur</code> works:<p></p>
<div class="pre-action-link" id="premain692413" style="width:100%;display:block;"><span id="prehide692413" onclick="processCodeBlocks.togglePre(692413);">Hide</span>  &nbsp; <span id="copycode692413" onclick="return processCodeBlocks.copyCode(692413);">Copy Code</span></div><pre id="pre692413" class="notranslate" style="margin-top: 0px;">&lt;html&gt;&lt;head&gt;&lt;script&gt;
<span class="code-keyword">function</span> emailchk()
{
var x=document.feedback.email.value
<span class="code-keyword">if</span> (x.indexOf(<span class="code-string">"</span><span class="code-string">@"</span>)==-1)
{
	alert(<span class="code-string">"</span><span class="code-string">It seems you entered an invalid email address."</span>)
	document.feedback.email.focus()
}
}
&lt;/script</pre>
<div class="pre-action-link" id="premain67524" style="width:100%;display:block;"><span id="prehide67524" onclick="processCodeBlocks.togglePre(67524);">Hide</span>  &nbsp; <span id="copycode67524" onclick="return processCodeBlocks.copyCode(67524);">Copy Code</span></div><pre id="pre67524" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span>
<span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">feedback"</span><span class="code-keyword">&gt;</span>
Email:<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">text"</span> <span class="code-attribute">size</span><span class="code-keyword">="</span><span class="code-keyword">20"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">email"</span>
<span class="code-attribute">onblur</span><span class="code-keyword">="</span><span class="code-keyword">emailchk()"</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">br</span><span class="code-keyword">&gt;</span>
Comment: <span class="code-keyword">&lt;</span><span class="code-leadattribute">textarea</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">comment"</span> <span class="code-attribute">rows</span><span class="code-keyword">="</span><span class="code-keyword">2"</span> <span class="code-attribute">cols</span><span class="code-keyword">="</span><span class="code-keyword">20"</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/textarea</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">br</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">submit"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Submit"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
            <p>If you enter an email address without the <code>@</code>, you'll
              get an alert asking you to re-enter the data. What is: <code>x.indexOf(@)==-1</code>?
              This is a method that JavaScript can search every character within
              a string and look for what we want. If it finds it will return the
              position of the char within the string. If it doesn't, it will return
              -1. Therefore, <code>x.indexOf("@")==-1</code> basically
              means: "if the string doesn't include @, then:
</p><div class="pre-action-link" id="premain686674" style="width:100%;display:block;"><span id="prehide686674" onclick="processCodeBlocks.togglePre(686674);">Hide</span>  &nbsp; <span id="copycode686674" onclick="return processCodeBlocks.copyCode(686674);">Copy Code</span></div><pre id="pre686674" class="notranslate" style="margin-top: 0px;">alert(<span class="code-string">"</span><span class="code-string">It seems you entered an invalid email address."</span>)
document.feedback.email.focus()</pre>
            <p>What's <code>focus()</code>? This is a method of the text box, which basically
            forces the cursor to be at the specified text box.
            <code>onsubmit </code>Unlike <code>onblur, onsubmit</code>
              handler is inserted inside the <code>&lt;form&gt;</code> tag, and not inside
              any one element. Lets do an example:</p>
<div class="pre-action-link" id="premain361548" style="width:100%;display:block;"><span id="prehide361548" onclick="processCodeBlocks.togglePre(361548);">Hide</span>  &nbsp; <span id="copycode361548" onclick="return processCodeBlocks.copyCode(361548);">Copy Code</span></div><pre id="pre361548" class="notranslate" style="margin-top: 0px;">&lt;script&gt;
&lt;!--
<span class="code-keyword">function</span> validate()
{
<span class="code-keyword">if</span>(document.login.userName.value==<span class="code-string">"</span><span class="code-string">"</span>)
{
	alert (<span class="code-string">"</span><span class="code-string">Please enter User Name"</span>)
	return <span class="code-keyword">false</span>
}
<span class="code-keyword">if</span>(document.login.password.value==<span class="code-string">"</span><span class="code-string">"</span>)
{
	alert (<span class="code-string">"</span><span class="code-string">Please enter Password"</span>)
	return <span class="code-keyword">false</span>
}
}
//--&gt;
&lt;/script</pre>
<div class="pre-action-link" id="premain606462" style="width:100%;display:block;"><span id="prehide606462" onclick="processCodeBlocks.togglePre(606462);">Hide</span>  &nbsp; <span id="copycode606462" onclick="return processCodeBlocks.copyCode(606462);">Copy Code</span></div><pre id="pre606462" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">login"</span> <span class="code-attribute">onsubmit</span><span class="code-keyword">="</span><span class="code-keyword">return validate()"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">text"</span> <span class="code-attribute">size</span><span class="code-keyword">="</span><span class="code-keyword">20"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">userName"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">text"</span> <span class="code-attribute">size</span><span class="code-keyword">="</span><span class="code-keyword">20"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">password"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">submit"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">submit"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Submit"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span></pre>
            <p>Note:<br>
              <code>if(document.login.userName.value=="").</code> This means
              "If the box named userName of the form named login contains
              nothing, then...". return false. This is used to stop the
              form from submitting. By default, a form will return true if submitting.
              <code>return validate()</code> That means, "if submitting, then call
              the <code>function validate()"</code>.
            </p><p></p><h4>Protect a file by using Login </h4>Let's try an example<p></p>
<div class="pre-action-link" id="premain378676" style="width:100%;display:block;"><span id="prehide378676" onclick="processCodeBlocks.togglePre(378676);">Hide</span>  &nbsp; <span id="copycode378676" onclick="return processCodeBlocks.copyCode(378676);">Copy Code</span></div><pre id="pre378676" class="notranslate" style="margin-top: 0px;">&lt;html&gt;&lt;head&gt;
&lt;SCRIPT Language=<span class="code-string">"</span><span class="code-string">JavaScript"</span>&gt;
<span class="code-keyword">function</span> checkLogin(x)
{
<span class="code-keyword">if</span> ((x.id.value != <span class="code-string">"</span><span class="code-string">Sam"</span>)||(x.pass.value !=<span class="code-string">"</span><span class="code-string">Sam123"</span>))
{
	alert(<span class="code-string">"</span><span class="code-string">Invalid Login"</span>);
	return false;
}
<span class="code-keyword">else</span>
	location=<span class="code-string">"</span><span class="code-string">main.htm"</span>
}
&lt;/script</pre>
<div class="pre-action-link" id="premain278899" style="width:100%;display:block;"><span id="prehide278899" onclick="processCodeBlocks.togglePre(278899);">Hide</span>  &nbsp; <span id="copycode278899" onclick="return processCodeBlocks.copyCode(278899);">Copy Code</span></div><pre id="pre278899" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">/head</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">p</span><span class="code-keyword">&gt;</span>UserID:<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">text"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">id"</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/p</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">p</span><span class="code-keyword">&gt;</span>Password:<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">password"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">pass"</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/p</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">p</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Login"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">checkLogin(this.form)"</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/p</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
           <p><code>||</code> means "or", and ,<code>!=</code> indicates
            "not equal". So we can explain the script: "If the
            id does not equal 'Sam', or the password does not equal 'Sam123', then
            show an alert ('Invalid Login') and stop submitting. Else, open the
            page 'main.htm'".</p>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="link"></a>Link</h2>
            <p>In most cases, a form can be repaced by a link:</p>
<div class="pre-action-link" id="premain413183" style="width:100%;display:block;"><span id="prehide413183" onclick="processCodeBlocks.togglePre(413183);">Hide</span>  &nbsp; <span id="copycode413183" onclick="return processCodeBlocks.copyCode(413183);">Copy Code</span></div><pre id="pre413183" class="notranslate" style="margin-top: 0px;">&lt;a href=<span class="code-string">"</span><span class="code-string">JavaScript:window.location.reload()"</span>&gt;Click to reload!<span class="code-keyword">&lt;/</span><span class="code-leadattribute">a</span>&gt;</pre>
            <p>More examples:</p>
<div class="pre-action-link" id="premain387372" style="width:100%;display:block;"><span id="prehide387372" onclick="processCodeBlocks.togglePre(387372);">Hide</span>  &nbsp; <span id="copycode387372" onclick="return processCodeBlocks.copyCode(387372);">Copy Code</span></div><pre id="pre387372" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">a</span> <span class="code-attribute">href</span><span class="code-keyword">="</span><span class="code-keyword">#"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">alert('Hello, world!')"</span><span class="code-keyword">&gt;</span>Click me to say Hello<span class="code-keyword">&lt;</span><span class="code-leadattribute">/a</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">br</span><span class="code-keyword">&gt;</span></pre>
<div class="pre-action-link" id="premain110282" style="width:100%;display:block;"><span id="prehide110282" onclick="processCodeBlocks.togglePre(110282);">Hide</span>  &nbsp; <span id="copycode110282" onclick="return processCodeBlocks.copyCode(110282);">Copy Code</span></div><pre id="pre110282" class="notranslate" style="margin-top: 0px;">&lt;a href=<span class="code-string">"</span><span class="code-string">#"</span> onMouseOver=<span class="code-string">"</span><span class="code-string">location='main.htm'"</span>&gt;Mouse over to see Main Page<span class="code-keyword">&lt;/</span><span class="code-leadattribute">a</span>&gt;</pre>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="date"></a>Date</h2>
            <p>Let's see an example:</p>
<div class="pre-action-link" id="premain466433" style="width:100%;display:block;"><span id="prehide466433" onclick="processCodeBlocks.togglePre(466433);">Hide</span>  &nbsp; <span id="copycode466433" onclick="return processCodeBlocks.copyCode(466433);">Copy Code</span></div><pre id="pre466433" class="notranslate" style="margin-top: 0px;">&lt;HTML&gt;&lt;HEAD&gt;&lt;TITLE&gt;Show
<span class="code-keyword">Date</span><span class="code-keyword">&lt;/</span><span class="code-leadattribute">TITLE</span>&gt;<span class="code-keyword">&lt;/</span><span class="code-leadattribute">HEAD</span>&gt;
&lt;BODY&gt;
&lt;SCRIPT LANGUAGE=<span class="code-string">"</span><span class="code-string">JavaScript"</span>&gt;
var x= new <span class="code-keyword">Date</span>();
document.write (x);
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">SCRIPT</span>&gt;
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">BODY</span>&gt;<span class="code-keyword">&lt;/</span><span class="code-leadattribute">HTML</span>&gt;</pre>
            <p>To activate a Date Object, you can do this: <code>var x=new Date()</code>. Whenever
              you want to create an instance of the date object, use this important
              word: new followed by the object name().<br>
            </p>
            <p></p><h4>Dynamically display different pages</h4> You can display different
              pages according to the different time. Here is an example:<p></p>
<div class="pre-action-link" id="premain556895" style="width:100%;display:block;"><span id="prehide556895" onclick="processCodeBlocks.togglePre(556895);">Hide</span>  &nbsp; <span id="copycode556895" onclick="return processCodeBlocks.copyCode(556895);">Copy Code</span></div><pre id="pre556895" class="notranslate" style="margin-top: 0px;">var banTime= new <span class="code-keyword">Date</span>()
var ss=banTime.getHours()
<span class="code-keyword">if</span> (ss&lt;=<span class="code-digit">12</span>)
	document.write(<span class="code-string">"</span><span class="code-string">&lt;img src='banner1.gif'&gt;"</span>)
<span class="code-keyword">else</span>
	document.write(<span class="code-string">"</span><span class="code-string">&lt;img src='banner2.gif'&gt;"</span>) </pre>
            
              
              
              
                
              
              
                
                
                
              
              
            <table border="1" cellpadding="0" cellspacing="0" height="1" width="302"><caption valign="top">Date
              object</caption><tbody><tr><td colspan="3">Methods</td></tr><tr><td valign="top" height="1" width="134">
                  getDate <br>
                  getTime<br>
                  getTimezoneOffset<br>
                  </td><td valign="top" height="1" width="72">
                  getDay<br>
                    getMonth<br>
                    getYear
                </td><td valign="top" height="1" width="88">getSeconds<br>
                  getMinutes<br>
                  getHours</td></tr></tbody></table>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="window"></a>Window</h2>
            <p></p><h4>Open a window</h4> To open a window, simply use the method "window.open()":<p></p>
<div class="pre-action-link" id="premain186253" style="width:100%;display:block;"><span id="prehide186253" onclick="processCodeBlocks.togglePre(186253);">Hide</span>  &nbsp; <span id="copycode186253" onclick="return processCodeBlocks.copyCode(186253);">Copy Code</span></div><pre id="pre186253" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Click here to see"</span> <span class="code-attribute">onclick</span><span class="code-keyword">="</span><span class="code-keyword">window.open('test.htm')"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span> </pre>
            <p>You can replace <code>test.htm</code> with any URL, for example,
              with <code>http://www.yahoo.com</code>.</p>
            <p></p><h4>Size, toolbar, menubar, scrollbars, location, status</h4> Let's
              add some of attributes to the above script to control the size of
              the window, and show: toolbar, scrollbars etc. The syntax to add
              attributes is:<p></p>
<div class="pre-action-link" id="premain396526" style="width:100%;display:block;"><span id="prehide396526" onclick="processCodeBlocks.togglePre(396526);">Hide</span>  &nbsp; <span id="copycode396526" onclick="return processCodeBlocks.copyCode(396526);">Copy Code</span></div><pre id="pre396526" class="notranslate" style="margin-top: 0px;">open(<span class="code-string">"</span><span class="code-string">URL"</span>,<span class="code-string">"</span><span class="code-string">name"</span>,<span class="code-string">"</span><span class="code-string">attributes"</span>)</pre>
            <p>For example:</p>
<div class="pre-action-link" id="premain147087" style="width:100%;display:block;"><span id="prehide147087" onclick="processCodeBlocks.togglePre(147087);">Hide</span>  &nbsp; <span id="copycode147087" onclick="return processCodeBlocks.copyCode(147087);">Copy Code</span></div><pre id="pre147087" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Click here to see"</span>
<span class="code-attribute">onclick</span><span class="code-keyword">="</span><span class="code-keyword">window.open('page2.htm','win1','width=200,height=200,menubar')"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span> </pre>
            <p>Another example with no attributes turned on, except the size changed:</p>
<div class="pre-action-link" id="premain367034" style="width:100%;display:block;"><span id="prehide367034" onclick="processCodeBlocks.togglePre(367034);">Hide</span>  &nbsp; <span id="copycode367034" onclick="return processCodeBlocks.copyCode(367034);">Copy Code</span></div><pre id="pre367034" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Click here to see"</span>
<span class="code-attribute">onclick</span><span class="code-keyword">="</span><span class="code-keyword">window.open('page2.htm','win1','width=200,height=200')"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span></pre>
            <p>Here is the complete list of attributes you can add:</p>
            
              
              
                
                
                
              
              
                
                
                
              
              
                
                
                
              
              
            <table border="1" cellpadding="0" cellspacing="0" width="350"><tbody><tr><td width="33%">width</td><td width="33%">height</td><td width="34%">toolbar</td></tr><tr><td width="33%">location</td><td width="33%">directories</td><td width="34%">status</td></tr><tr><td width="33%">scrollbars</td><td width="33%">resizable</td><td width="34%">menubar</td></tr></tbody></table>
            <br>
            <p></p><h4>Reload </h4>To reload a window, use this method:<p></p>
<div class="pre-action-link" id="premain191404" style="width:100%;display:block;"><span id="prehide191404" onclick="processCodeBlocks.togglePre(191404);">Hide</span>  &nbsp; <span id="copycode191404" onclick="return processCodeBlocks.copyCode(191404);">Copy Code</span></div><pre id="pre191404" class="notranslate" style="margin-top: 0px;">window.location.reload()</pre>
            <p></p><h4>Close Window</h4> Your can use one of the codes shown below:<p></p>
<div class="pre-action-link" id="premain779235" style="width:100%;display:block;"><span id="prehide779235" onclick="processCodeBlocks.togglePre(779235);">Hide</span>  &nbsp; <span id="copycode779235" onclick="return processCodeBlocks.copyCode(779235);">Copy Code</span></div><pre id="pre779235" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Close Window"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">window.close()"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">a</span> <span class="code-attribute">href</span><span class="code-keyword">="</span><span class="code-keyword">javascript:window.close()"</span><span class="code-keyword">&gt;</span>Close Window<span class="code-keyword">&lt;</span><span class="code-leadattribute">/a</span><span class="code-keyword">&gt;</span></pre>
            <p></p><h4>Loading</h4>The basic syntax when loading new content into a
              window is:<p></p>
<div class="pre-action-link" id="premain536986" style="width:100%;display:block;"><span id="prehide536986" onclick="processCodeBlocks.togglePre(536986);">Hide</span>  &nbsp; <span id="copycode536986" onclick="return processCodeBlocks.copyCode(536986);">Copy Code</span></div><pre id="pre536986" class="notranslate" style="margin-top: 0px;">window.location=<span class="code-string">"</span><span class="code-string">test.htm"</span></pre>
            <p>This is the same as</p>
<div class="pre-action-link" id="premain146712" style="width:100%;display:block;"><span id="prehide146712" onclick="processCodeBlocks.togglePre(146712);">Hide</span>  &nbsp; <span id="copycode146712" onclick="return processCodeBlocks.copyCode(146712);">Copy Code</span></div><pre id="pre146712" class="notranslate" style="margin-top: 0px;">&lt;a href=<span class="code-string">"</span><span class="code-string">test.htm&gt;Try this &lt;/a&gt;</span></pre>
            <p>Let's provide an example, where a confirm box will allow users
              to choose between going to two places: </p>
<div class="pre-action-link" id="premain622706" style="width:100%;display:block;"><span id="prehide622706" onclick="processCodeBlocks.togglePre(622706);">Hide</span>  &nbsp; <span id="copycode622706" onclick="return processCodeBlocks.copyCode(622706);">Copy Code</span></div><pre id="pre622706" class="notranslate" style="margin-top: 0px;">&lt;script&gt;
&lt;!--
<span class="code-keyword">function</span> ss()
{
var ok=confirm(<span class="code-comment">'</span><span class="code-comment">Click "OK" to go to yahoo, "CANCEL" to go to hotmail')
</span><span class="code-keyword">if</span> (ok)
location=<span class="code-string">"</span><span class="code-string">http://www.yahoo.com"</span>
<span class="code-keyword">else</span>
location=<span class="code-string">"</span><span class="code-string">http://www.hotmail.com"</span>
}
//--&gt;
&lt;/script</pre>
            <p></p><h4>Remote Control Window</h4> Let's say you have opened a new window
              from the current window. After that, you will wonder how to make
              a control between the two windows. To do this, we need to first
              give a name to the window.Look at below:<p></p>
<div class="pre-action-link" id="premain3050" style="width:100%;display:block;"><span id="prehide3050" onclick="processCodeBlocks.togglePre(3050);">Hide</span>  &nbsp; <span id="copycode3050" onclick="return processCodeBlocks.copyCode(3050);">Copy Code</span></div><pre id="pre3050" class="notranslate" style="margin-top: 0px;">aa=window.open(<span class="code-comment">'</span><span class="code-comment">test.htm','','width=200,height=200')</span></pre>
            <p>By giving this window a name "aa", it will give you access
              to anything that's inside this window from other windows. Whenever
              we want to access anything that's inside this newly opened window,
              for example, to write to this window, we would do this: aa.document.write("This
              is a test.").</p>
            <p>Now, let's see an example of how to change the background color
              of another window:</p>
<div class="pre-action-link" id="premain983280" style="width:100%;display:block;"><span id="prehide983280" onclick="processCodeBlocks.togglePre(983280);">Hide</span>  &nbsp; <span id="copycode983280" onclick="return processCodeBlocks.copyCode(983280);">Copy Code</span></div><pre id="pre983280" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">html</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">head</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">title</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/title</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Open another page"</span>
<span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">aa=window.open('test.htm','','width=200,height=200')"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">radio"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">x"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">aa.document.bgColor='red'"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">radio"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">x"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">aa.document.bgColor='green'"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">radio"</span> <span class="code-attribute">name</span><span class="code-keyword">="</span><span class="code-keyword">x"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">aa.document.bgColor='yellow'"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
            <p></p><h4>opener</h4> Using <code>"opener"</code> property, we can access
              the main window from the newly opened window.<p></p>
            <p>Let's create Main page:</p>
<div class="pre-action-link" id="premain787141" style="width:100%;display:block;"><span id="prehide787141" onclick="processCodeBlocks.togglePre(787141);">Hide</span>  &nbsp; <span id="copycode787141" onclick="return processCodeBlocks.copyCode(787141);">Copy Code</span></div><pre id="pre787141" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">html</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">title</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/title</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">input</span> <span class="code-attribute">type</span><span class="code-keyword">="</span><span class="code-keyword">button"</span> <span class="code-attribute">value</span><span class="code-keyword">="</span><span class="code-keyword">Open another page"</span>
<span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">aa=window.open('test.htm','','width=100,height=200')"</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/form</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
            <p>Then create Remote control page (in this example, that is <code>test.htm</code>):</p>
<div class="pre-action-link" id="premain921595" style="width:100%;display:block;"><span id="prehide921595" onclick="processCodeBlocks.togglePre(921595);">Hide</span>  &nbsp; <span id="copycode921595" onclick="return processCodeBlocks.copyCode(921595);">Copy Code</span></div><pre id="pre921595" class="notranslate" style="margin-top: 0px;"><span class="code-keyword">&lt;</span><span class="code-leadattribute">html</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">title</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/title</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">script</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">function</span> remote(url){
window.opener.location=url
}
&lt;/script&gt;
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/head</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">p</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">a</span> <span class="code-attribute">href</span><span class="code-keyword">="</span><span class="code-keyword">#"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">remote('file1.htm')"</span><span class="code-keyword">&gt;</span>File
1<span class="code-keyword">&lt;</span><span class="code-leadattribute">/a</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/p</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">p</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">a</span> <span class="code-attribute">href</span><span class="code-keyword">="</span><span class="code-keyword">#"</span> <span class="code-attribute">onClick</span><span class="code-keyword">="</span><span class="code-keyword">remote('file2.htm')"</span><span class="code-keyword">&gt;</span>File
2<span class="code-keyword">&lt;</span><span class="code-leadattribute">/a</span><span class="code-keyword">&gt;</span><span class="code-keyword">&lt;</span><span class="code-leadattribute">/p</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/body</span><span class="code-keyword">&gt;</span>
<span class="code-keyword">&lt;</span><span class="code-leadattribute">/html</span><span class="code-keyword">&gt;</span></pre>
            <p>Try it now!</p>
            <hr>
            <p align="right"><a href="#top">Back to top</a></p>
            <h2><a name="frame"></a>Frame</h2>
            <p>One of the most popular uses of loading multiple frames is to load
              and change the content of more than one frame at once. Lets say
              we have a parent frame:</p>
<div class="pre-action-link" id="premain64956" style="width:100%;display:block;"><span id="prehide64956" onclick="processCodeBlocks.togglePre(64956);">Hide</span>  &nbsp; <span id="copycode64956" onclick="return processCodeBlocks.copyCode(64956);">Copy Code</span></div><pre id="pre64956" class="notranslate" style="margin-top: 0px;">&lt;html&gt;
&lt;frameset cols=<span class="code-string">"</span><span class="code-string">150,*"</span>&gt;
&lt;frame src=<span class="code-string">"</span><span class="code-string">page1.htm"</span> name=<span class="code-string">"</span><span class="code-string">frame1"</span>&gt;
&lt;frame src=<span class="code-string">"</span><span class="code-string">page2.htm"</span> name=<span class="code-string">"</span><span class="code-string">frame2"</span>&gt;
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">frameset</span>&gt;
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">html</span>&gt;</pre>
            <p>We can add a link in the child frame "frame1" that will
            change the contents of not only page1, but page2 too. Shown below is
            the html code for it:</p>
<div class="pre-action-link" id="premain801026" style="width:100%;display:block;"><span id="prehide801026" onclick="processCodeBlocks.togglePre(801026);">Hide</span>  &nbsp; <span id="copycode801026" onclick="return processCodeBlocks.copyCode(801026);">Copy Code</span></div><pre id="pre801026" class="notranslate" style="margin-top: 0px;">&lt;html&gt;
&lt;body&gt;
&lt;h2&gt;This <span class="code-keyword">is</span> page <span class="code-digit">1</span> <span class="code-keyword">&lt;/</span><span class="code-leadattribute">h2</span>&gt;
&lt;a href=<span class="code-string">"</span><span class="code-string">page3.htm"</span>
onClick=<span class="code-string">"</span><span class="code-string">parent.frame2.location='page4.htm'"</span>&gt;Click Here<span class="code-keyword">&lt;/</span><span class="code-leadattribute">a</span>&gt;
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">body</span>&gt;
<span class="code-keyword">&lt;/</span><span class="code-leadattribute">html</span>&gt;</pre>
            <p>Notice: You should use <code>"parent.frameName.location"</code> to
              access another frame. "parent" standards for the parent
              frame containing the frameset code.</p>
            <hr>
            <p align="center"><a href="#top">Back to top</a></p>


						</div>
						

						<div class="float-right" style="margin:20px 0 0 10px;border:1px solid #ccc">
						<div class="msg-300x250" data-format="300x250" data-type="ad" data-publisher="lqm.codeproject.site" data-zone="Web-Development/Client-side-scripting/Beginners" data-loadonview="true" data-tags="VC6, Win2K, C++, Javascript, Windows, Visual-Studio, Dev, Beginner,rating4.5"><noscript>&lt;a href="https://pubads.g.doubleclick.net/gampad/jump?iu=/6839/lqm.codeproject.site/Web-Development/Client-side-scripting/Beginners&amp;sz=300x250&amp;c=68069"&gt;&lt;img src="https://pubads.g.doubleclick.net/gampad/jump?iu=/6839/lqm.codeproject.site/Web-Development/Client-side-scripting/Beginners&amp;sz=300x250&amp;c=68069"  width="300px" height="250px" target="_blank"/&gt;&lt;/a&gt;</noscript></div>
						</div>
                        
                        
						
		

			</div>
