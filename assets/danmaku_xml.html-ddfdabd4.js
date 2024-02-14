import{_ as n,o as a,c as t,e as s}from"./app-d3360575.js";const p={},o=s(`<h1 id="xml弹幕" tabindex="-1"><a class="header-anchor" href="#xml弹幕" aria-hidden="true">#</a> xml弹幕</h1><p>实时弹幕池容量有限（根据视频类型500-8000条不等），占满后再发送会使实时弹幕池底部的弹幕压入历史弹幕池（类似于堆栈）</p><h2 id="获取实时弹幕1" tabindex="-1"><a class="header-anchor" href="#获取实时弹幕1" aria-hidden="true">#</a> 获取实时弹幕1</h2><blockquote><p>https://api.bilibili.com/x/v1/dm/list.so</p></blockquote><p><em>请求方式：GET</em></p><p><strong>使用deflate压缩，注意解码</strong></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>oid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/v1/dm/list.so&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;oid=144541892&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--compressed</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;danmaku.xml&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取实时弹幕2" tabindex="-1"><a class="header-anchor" href="#获取实时弹幕2" aria-hidden="true">#</a> 获取实时弹幕2</h2><blockquote><p>https://comment.bilibili.com/{cid}.xml</p></blockquote><p><em>请求方式：GET</em></p><p>效果与前者相同</p><p><strong>使用deflate压缩，注意解码</strong></p><p><strong>url路径：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://comment.bilibili.com/144541892.xml&#39;</span>
<span class="token parameter variable">--compressed</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;danmaku.xml&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xml回复：</strong></p><details><summary>查看响应示例：</summary><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chatserver</span><span class="token punctuation">&gt;</span></span>chat.bilibili.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chatserver</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>chatid</span><span class="token punctuation">&gt;</span></span>144541892<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>chatid</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mission</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mission</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxlimit</span><span class="token punctuation">&gt;</span></span>1500<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxlimit</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>state</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>state</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>real_name</span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>real_name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">&gt;</span></span>e-r<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>490.19100,1,25,16777215,1584268892,0,a16fe0dd,29950852386521095<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>从结尾回来看这里，更感动了！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18.77300,1,25,16777215,1584268920,0,4fe08d3,29950867226492933<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>咦三体居然还有动画<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>52.88400,1,25,16777215,1584268954,0,4fe08d3,29950885214289927<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>哈哈哈哈开心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25.51600,1,25,16777215,1584268957,0,e4b18b37,29950886612566021<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>红岸么<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>144.45200,1,25,16777215,1584269076,0,e4b18b37,29950948716576775<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我就是想看我的世界里水滴长啥样<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>112.64100,1,25,16777215,1584269109,0,96606007,29950966302244871<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>有手指？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>222.84000,1,25,16777215,1584269154,0,e4b18b37,29950989809745923<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>侦测到在途的聚变打击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>284.77800,1,25,16777215,1584269216,0,e4b18b37,29951022237483011<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>都是虫子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>398.00500,1,25,16777215,1584269329,0,e4b18b37,29951081615196163<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ocean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>432.17900,1,25,16777215,1584269363,0,e4b18b37,29951099571535943<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>村民，哼~<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>467.41900,1,25,16777215,1584269399,0,e4b18b37,29951118364639237<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>黄河之水天上来<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6.71900,1,25,16777215,1584269422,0,70ba16f4,29951130398621699<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>镇站之宝<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>313.08600,1,25,16777215,1584269425,0,e531c9dc,29951131798994947<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这水<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>587.87900,1,25,16777215,1584269519,0,e4b18b37,29951181142360071<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>海的那边是什么<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>618.05000,1,25,16777215,1584269549,0,e4b18b37,29951196901933061<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>折跃门准备完毕<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
    …………
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="弹幕格式" tabindex="-1"><a class="header-anchor" href="#弹幕格式" aria-hidden="true">#</a> 弹幕格式</h2><h3 id="xml格式结构" tabindex="-1"><a class="header-anchor" href="#xml格式结构" aria-hidden="true">#</a> xml格式结构</h3><ul><li><p>标签 i</p><ul><li><p>标签 chatserver：chat.bilibili.com</p></li><li><p>标签 chatid：视频cid</p></li><li><p>标签 mission：0</p></li><li><p>标签 maxlimit：实时弹幕池最大容量</p></li><li><p>标签 state：弹幕状态（0：正常 1：弹幕已关闭）</p></li><li><p>标签 real_name：0</p></li><li><p>标签 source：e-r</p></li><li><p>标签 d （带有属性 p）：弹幕内容</p></li></ul></li></ul><h3 id="属性-p" tabindex="-1"><a class="header-anchor" href="#属性-p" aria-hidden="true">#</a> 属性 p</h3><p>字符串内每项用逗号<code>,</code>分隔</p><table><thead><tr><th>项</th><th>含义</th><th>类型</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>视频内弹幕出现时间</td><td>float</td><td>秒</td></tr><tr><td>1</td><td>弹幕类型</td><td>int32</td><td>1 2 3：普通弹幕<br>4：底部弹幕<br>5：顶部弹幕<br>6：逆向弹幕<br>7：高级弹幕<br>8：代码弹幕<br>9：BAS弹幕（<code>pool</code>必须为2）</td></tr><tr><td>2</td><td>弹幕字号</td><td>int32</td><td>18：小<br>25：标准<br>36：大</td></tr><tr><td>3</td><td>弹幕颜色</td><td>int32</td><td>十进制RGB888值</td></tr><tr><td>4</td><td>弹幕发送时间</td><td>int32</td><td>时间戳</td></tr><tr><td>5</td><td>弹幕池类型</td><td>int32</td><td>0：普通池<br>1：字幕池<br>2：特殊池（代码/BAS弹幕）</td></tr><tr><td>6</td><td>发送者mid的HASH</td><td>string</td><td>用于屏蔽用户和查看用户发送的所有弹幕 也可反查用户id</td></tr><tr><td>7</td><td>弹幕dmid</td><td>int64</td><td>唯一 可用于操作参数</td></tr><tr><td>8</td><td>弹幕的屏蔽等级</td><td>int32</td><td>0-10，低于用户设定等级的弹幕将被屏蔽<br>（新增，下方样例未包含）</td></tr></tbody></table><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d</span> <span class="token attr-name">p</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>490.19100,1,25,16777215,1584268892,0,a16fe0dd,29950852386521095<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>从结尾回来看这里，更感动了！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>弹幕内容为：“从结尾回来看这里，更感动了！”</p><p>参数为：视频内出现的时间是490.19100秒，类型是普通弹幕，字号为标准，颜色为白色（#FFFFFF），发送时间是2020/3/15 18:41:32.........</p><h3 id="web版标准颜色" tabindex="-1"><a class="header-anchor" href="#web版标准颜色" aria-hidden="true">#</a> web版标准颜色</h3><p>弹幕的颜色属性使用<strong>十进制RGB888</strong>值</p><table><thead><tr><th>颜色</th><th>HEX（RGB888）</th><th>DEC（RGB888）</th></tr></thead><tbody><tr><td><font color="#FE0302">红色</font></td><td><font color="#FE0302">FE0302</font></td><td><font color="#FE0302">16646914‬</font></td></tr><tr><td><font color="#FF7204">橘红</font></td><td><font color="#FF7204">FF7204</font></td><td><font color="#FF7204">16740868</font></td></tr><tr><td><font color="#FFAA02">橘黄</font></td><td><font color="#FFAA02">FFAA02</font></td><td><font color="#FFAA02">16755202</font></td></tr><tr><td><font color="#FFD302">淡黄</font></td><td><font color="#FFD302">FFD302</font></td><td><font color="#FFD302">16765698</font></td></tr><tr><td><font color="#FFFF00">黄色</font></td><td><font color="#FFFF00">FFFF00</font></td><td><font color="#FFFF00">16776960</font></td></tr><tr><td><font color="#A0EE00">草绿</font></td><td><font color="#A0EE00">A0EE00</font></td><td><font color="#A0EE00">10546688</font></td></tr><tr><td><font color="#00CD00">绿色</font></td><td><font color="#00CD00">00CD00</font></td><td><font color="#00CD00">52480</font></td></tr><tr><td><font color="#019899">墨绿</font></td><td><font color="#019899">019899</font></td><td><font color="#019899">104601</font></td></tr><tr><td><font color="#4266BE">紫色</font></td><td><font color="#4266BE">4266BE</font></td><td><font color="#4266BE">4351678</font></td></tr><tr><td><font color="#89D5FF">青色</font></td><td><font color="#89D5FF">89D5FF</font></td><td><font color="#89D5FF">9022215</font></td></tr><tr><td><font color="#CC0273">品红</font></td><td><font color="#CC0273">CC0273</font></td><td><font color="#CC0273">13369971</font></td></tr><tr><td><font color="#222222">黑色</font></td><td><font color="#222222">222222</font></td><td><font color="#222222">2236962</font></td></tr><tr><td><font color="#9B9B9B">灰色</font></td><td><font color="#9B9B9B">9B9B9B</font></td><td><font color="#9B9B9B">10197915</font></td></tr><tr><td><font color="#FFFFFF">白色</font></td><td><font color="#FFFFFF">FFFFFF</font></td><td><font color="#FFFFFF">16777215</font></td></tr></tbody></table>`,33),e=[o];function l(c,u){return a(),t("div",null,e)}const i=n(p,[["render",l],["__file","danmaku_xml.html.vue"]]);export{i as default};
