const input = '6-7 w: wwhmzwtwwk\n' +
    '10-12 q: qqqqqqqqqqqdqqq\n' +
    '16-17 d: ddddgdddddkddddsxddd\n' +
    '2-4 q: shbqwqpps\n' +
    '3-4 q: qkfq\n' +
    '2-10 m: bkdrmcfdhmr\n' +
    '13-19 s: blccvhsgsnsssqszssm\n' +
    '1-3 l: qlxllhl\n' +
    '4-6 h: hhhqhhh\n' +
    '15-17 l: jrtllrlllllmmlllg\n' +
    '11-12 n: bnzlnnnnbnntnnnc\n' +
    '1-7 p: pppvppjppmptp\n' +
    '5-6 t: tttnht\n' +
    '8-12 g: glbnlqgggjkh\n' +
    '1-8 g: dvgsggngg\n' +
    '13-16 x: xxxzxxxxxxnxjxxxx\n' +
    '6-9 m: ffmwhxxsm\n' +
    '10-11 b: bclbkkxblbbb\n' +
    '5-7 m: mtmmbmmm\n' +
    '2-4 c: cdgdkcd\n' +
    '9-15 f: ffffffffpfffffbffff\n' +
    '2-3 k: kkkqk\n' +
    '12-13 s: ssssssssssssgs\n' +
    '13-15 d: ddddddddddddcdqd\n' +
    '3-10 g: vpgqrvqnlpgjd\n' +
    '12-16 x: zrrxjxvvrcnkwklddm\n' +
    '2-6 g: lgjwpg\n' +
    '17-18 b: bblsjbkrbbbrknmgbx\n' +
    '3-5 c: ccpmcsvfxlhgbgccccxw\n' +
    '3-6 x: zsxrhxnptxtwwbbb\n' +
    '18-19 h: hhhhhhhhhhhhhhhhhcbl\n' +
    '12-13 h: hhlhnqdhttwhqcwdd\n' +
    '17-18 c: cccccccccczcccccfcc\n' +
    '9-19 h: shhhbhhhhtwhkhnbhfp\n' +
    '7-11 c: tntwmfzdncchszl\n' +
    '5-8 x: pxmkxmzbbvfldpwc\n' +
    '3-6 n: rmwnqnlt\n' +
    '5-11 z: zzhzkzzzzzq\n' +
    '3-4 v: vwvdb\n' +
    '6-9 t: ttttctttb\n' +
    '4-5 h: hhbzc\n' +
    '2-4 c: cccpccmpcp\n' +
    '6-7 w: wwwwwhwwj\n' +
    '4-9 g: qgbwsqlgg\n' +
    '2-4 c: cddc\n' +
    '6-13 r: bqxjlrdrgdjlhcpqp\n' +
    '9-15 f: qqflwbjgffwfxkv\n' +
    '8-11 t: txtstwzrggtcrtttmpp\n' +
    '6-11 m: mmmmmlmmrmmmm\n' +
    '7-13 c: ccsbbcccmckpzrsncbvz\n' +
    '6-8 v: vvdvdrvkv\n' +
    '8-11 h: mhhhvshhthhhhtmshhh\n' +
    '1-5 k: ckkkkk\n' +
    '2-3 v: nhvvqnvlz\n' +
    '13-16 z: zzzzzzzzzzzzzzzfz\n' +
    '2-3 k: gkrj\n' +
    '16-17 h: hhhhhhhhmghhhhhhrh\n' +
    '3-4 c: cccs\n' +
    '3-4 s: ssssssssss\n' +
    '2-4 r: rlrg\n' +
    '10-11 d: ddwdddddddz\n' +
    '7-12 c: pllhkcgrkmcmxqwccclv\n' +
    '8-9 b: bbbbbbbbg\n' +
    '11-20 b: bbdbbrbmjbbbxsbgzbsm\n' +
    '2-4 m: mmqmmfthp\n' +
    '8-13 w: fwgjkfwwfcbpwbh\n' +
    '4-10 t: tttttttttqtt\n' +
    '11-15 k: pkbmgkkkkkrkkkkkkpkk\n' +
    '9-10 k: mkkkkkkkkg\n' +
    '16-17 b: bbbbbbbbbbbbbvbbt\n' +
    '12-14 h: hhhhhhhhhhhphhhhhh\n' +
    '5-17 z: knzcjlgjlkvglrsqzwt\n' +
    '4-6 s: vwpjsds\n' +
    '1-4 j: jjqgnqq\n' +
    '2-3 b: bbhb\n' +
    '1-6 k: kgkkkkkvjkkkgjkk\n' +
    '8-11 d: dddddddnddd\n' +
    '5-10 w: hdbcwwqltq\n' +
    '5-6 t: tttttttt\n' +
    '2-6 l: lllllqlllclgltllj\n' +
    '2-5 k: kjkkckkhdkkkn\n' +
    '12-15 l: llvlllllllljplw\n' +
    '1-3 d: ddnddddcdd\n' +
    '8-14 b: vbdbfbhsjbbgbpsbq\n' +
    '9-12 z: zzzzzzzzxzzzz\n' +
    '2-3 w: swmt\n' +
    '17-18 z: pfpzprvxdzvkzzhxpz\n' +
    '9-10 p: lpqppppspjprmppnp\n' +
    '18-20 r: rrhrxrwkrfrrhgkmftrr\n' +
    '5-7 x: ppkbxxp\n' +
    '2-13 s: skqtnddznmqlsjfn\n' +
    '14-17 l: cdlkcxpvjghdnlllqt\n' +
    '3-9 t: pttlpbdhtvtkjgh\n' +
    '1-6 b: zbbbbv\n' +
    '1-3 r: vrqr\n' +
    '7-19 h: hhhhhhqhhhhhhhhhhhsh\n' +
    '11-17 g: gfgmsggzggpgbgggggg\n' +
    '15-18 b: btzwbbpbsbmvrbbjncb\n' +
    '6-9 b: bbvbcxxbbbprbbbcxqvp\n' +
    '4-5 r: kqrhh\n' +
    '5-12 n: ncnnnmnnmnnf\n' +
    '8-9 p: nnmmbqcprcbppzgdjft\n' +
    '6-8 h: hhrhhjhh\n' +
    '1-6 t: ltjmrtttttnzjtcttv\n' +
    '5-6 g: gvgwgkgg\n' +
    '4-8 q: znlthvfskq\n' +
    '1-7 q: qpqdrzq\n' +
    '3-4 z: xsqztkz\n' +
    '2-5 w: bwwwrjww\n' +
    '3-15 k: kkrkkkkkkkkkkkpkk\n' +
    '1-4 z: pzbzztkv\n' +
    '2-4 h: nhbg\n' +
    '1-6 q: hwntnqpwhcqknpfkqn\n' +
    '12-14 p: ppdhllppptjcgp\n' +
    '6-11 k: kkkkktkkkkkk\n' +
    '10-12 f: fjffzrfqffcfzfcf\n' +
    '1-6 m: lzmmmz\n' +
    '18-19 z: zzzzzzzztzzswzzzgxzz\n' +
    '1-3 g: ggbfxgg\n' +
    '1-3 c: xgcwxmtzjvlcp\n' +
    '8-10 z: zzlzzzpbzdzz\n' +
    '1-9 s: qpsskgwsssvksfvxsss\n' +
    '7-9 j: tqxjtjddjjjjjjh\n' +
    '4-17 h: xhhfhhhhhhthhhhhhhh\n' +
    '11-13 n: nnnnnnnnnnsnnnnnnn\n' +
    '12-14 j: jxjjjjjjjjljjd\n' +
    '11-15 q: qnprkqtqcntttqqwgqx\n' +
    '15-16 h: hhhhhhhhhhhhhhbhh\n' +
    '3-4 w: wwtw\n' +
    '2-8 n: wqnnmngnnjnnnnv\n' +
    '5-6 k: xbkrklb\n' +
    '3-7 l: lrvlrlllfhslsl\n' +
    '10-17 t: fhltmsgptmhckrvkttzs\n' +
    '8-9 k: kkkkkkkxd\n' +
    '7-9 d: dddddfddddkd\n' +
    '8-11 m: mgdmmmmmmprmmm\n' +
    '5-16 s: ssssmsssssssssssssx\n' +
    '2-3 k: kkmk\n' +
    '2-10 m: mfmmmmmlcmjwm\n' +
    '9-10 k: kkkkkkkkxkk\n' +
    '8-9 l: jkzdnljrlgnf\n' +
    '2-3 h: vdhlhpcdsh\n' +
    '8-13 h: hhhhhhhphhhhhhhh\n' +
    '13-18 k: kkrkkxkkkkkkrpkkkkk\n' +
    '1-3 t: rttptklrtvtp\n' +
    '8-13 s: jhssbsssssslb\n' +
    '16-18 v: zpfwlvcdbjpcxfhvtlrv\n' +
    '5-7 j: jfmjljj\n' +
    '5-10 c: cgctckffldkcjd\n' +
    '10-11 k: kkkkkkkkknk\n' +
    '10-12 g: rggggggggggwg\n' +
    '12-13 n: nknnnnnnnnnnnn\n' +
    '2-4 c: vdccccf\n' +
    '2-5 b: hblbb\n' +
    '1-4 m: spmm\n' +
    '12-16 s: shsssssssrssgssdss\n' +
    '10-11 x: xxxxxxxxxxpx\n' +
    '2-17 z: xzjmjdclpdtqjhhqm\n' +
    '4-5 j: qjljz\n' +
    '1-2 t: ftttr\n' +
    '4-5 k: krnktrmjvkcqdwm\n' +
    '11-12 n: nljwhlkpdknfl\n' +
    '12-13 x: xxxxxxxxgxxxj\n' +
    '5-15 j: jjhvjjjqjljpjjkjj\n' +
    '3-5 w: hqwkmmqddbncznm\n' +
    '5-14 l: lllllllllllllll\n' +
    '9-20 z: vvfmxfbpzzgmcclhgzzz\n' +
    '8-9 x: xxxxxxxbjx\n' +
    '5-6 m: mmkvmgdmm\n' +
    '1-13 x: qkxlvzxxxxxxxbnx\n' +
    '7-8 r: rsrrrrbrlrr\n' +
    '2-3 r: lrndhwcbxf\n' +
    '4-8 q: qqqqqqqwq\n' +
    '6-11 g: bxzlpftzfwk\n' +
    '1-3 k: hlkwkgh\n' +
    '4-6 c: hmchdm\n' +
    '2-8 d: ddgbxrfc\n' +
    '2-7 b: tnmtcbbrwnvwsmfmd\n' +
    '17-18 p: btpppwcxppqpspppwp\n' +
    '13-17 d: dddddxzddddddddddxd\n' +
    '5-11 z: zfvzzzzzzzpz\n' +
    '5-14 z: zvkzqzzzzzzdzpzzzzz\n' +
    '4-7 n: nnwnqntnmnn\n' +
    '1-6 l: blllllllll\n' +
    '11-13 f: fmffffflrfzfpf\n' +
    '3-11 v: zqvbjxvjvbvnsznkm\n' +
    '7-8 b: wqbbpcbb\n' +
    '1-4 s: jzvwscxzsd\n' +
    '2-5 w: wwtpn\n' +
    '1-3 k: mklk\n' +
    '6-7 v: vvvvvvv\n' +
    '4-5 n: gnnlclqbnwgngzc\n' +
    '7-14 w: scdwgdzljgdwmww\n' +
    '9-10 b: brmnhptdwblr\n' +
    '5-12 t: tchrszgdttmpvntwdpv\n' +
    '12-14 j: vjnzjjppjwhjnrpj\n' +
    '5-6 h: rmjhfhdh\n' +
    '2-7 h: hbptmhhh\n' +
    '5-8 n: dszknnnnrbxc\n' +
    '13-15 p: pkpwdnqvkdxtkppcdtrp\n' +
    '1-8 s: sjssssshss\n' +
    '1-2 p: pbtprdj\n' +
    '3-18 k: nkkkqkkkrkkkkmkvkkmk\n' +
    '15-16 w: wmwwwzwbwwwswwqswwrw\n' +
    '7-12 d: dsdzddvddddjldddcxd\n' +
    '10-11 r: msjrgbrgrlr\n' +
    '1-2 t: tttltpqtqzt\n' +
    '3-4 n: nxwnpnk\n' +
    '11-12 k: jkkkkkjlkzfvxzkk\n' +
    '6-7 m: mmmmmmz\n' +
    '4-6 r: rbghdr\n' +
    '2-4 k: kqqkxkktkxkkk\n' +
    '7-9 t: jlfttntttdt\n' +
    '5-6 t: sttttzk\n' +
    '5-11 v: vvvvvhvvvssvvgvfv\n' +
    '4-5 m: mmmqm\n' +
    '13-16 r: rrrqrrrrrrrrrrrpr\n' +
    '3-5 t: pdrhtt\n' +
    '2-7 x: zgkxxxxszmhvb\n' +
    '5-6 q: qqdbzd\n' +
    '3-5 g: gxgst\n' +
    '6-14 g: zslgrmgrgjgglg\n' +
    '12-13 q: qqqrfqqqqqqqqqqqqx\n' +
    '2-3 r: lrrr\n' +
    '5-6 n: qnnnfnnn\n' +
    '4-5 w: wwwwmw\n' +
    '1-8 h: hhhhhhhhhhhhhh\n' +
    '3-4 k: kkrcfqxvqhqxzvkkt\n' +
    '7-13 s: tsrmwckktjnqslm\n' +
    '2-17 r: rrrrrrrrrrrrrrrrhr\n' +
    '4-6 q: qqqqqdqqq\n' +
    '18-19 m: mzxmzpmccmcmmmmmtmm\n' +
    '5-11 m: cmmmlmmmhmsmmmmm\n' +
    '17-18 j: blqwsqcjjjfrjrjzwh\n' +
    '2-19 s: zsmzkcvcmjlsfwfzqmcn\n' +
    '2-7 g: bgjkglnqnf\n' +
    '5-11 n: qcxpjnfnnnnnhjvn\n' +
    '4-5 r: cwzrrpmwwbrkbrrcr\n' +
    '5-6 n: nhthvnfngd\n' +
    '10-11 b: xsvrvbvnhbn\n' +
    '9-11 j: jkjjjmjjjrkjmjv\n' +
    '4-5 v: kvvvw\n' +
    '4-5 s: scnfs\n' +
    '3-4 n: bmff\n' +
    '1-9 r: rvnfbzklr\n' +
    '7-9 h: hmbhhhhhhh\n' +
    '2-8 d: dddlddddddddd\n' +
    '3-5 b: vxbbp\n' +
    '3-6 j: jjzjjj\n' +
    '3-4 q: qqrq\n' +
    '7-17 s: vssrsswsssqssssvsvws\n' +
    '15-16 x: czxkgcfwxdxxmxxx\n' +
    '1-11 f: jdxfccfbvffmh\n' +
    '1-5 r: rrrrkrrrrj\n' +
    '3-5 k: kkzklkkk\n' +
    '3-9 f: hxqfffpfff\n' +
    '13-17 q: cqtqqqgqkzqqqqqqjwq\n' +
    '4-5 r: srwdtrr\n' +
    '3-4 c: ccnc\n' +
    '10-12 d: ddddfdddgtdg\n' +
    '4-9 k: kkkkkhlkkkkkkk\n' +
    '6-7 q: rtgqnqxpnq\n' +
    '11-14 v: mhnvnjthhfvvwvnzjjrj\n' +
    '9-11 b: mxzvbwvrqvb\n' +
    '7-8 z: zzzzzzzzzzz\n' +
    '8-12 z: bstjbngzfqppdvgwxddk\n' +
    '3-5 m: tgmvv\n' +
    '1-4 d: ddsxbxkmxhxrhstz\n' +
    '7-8 w: wwqrwwrk\n' +
    '8-16 h: hkkhhhhhmhjhhhhhhhh\n' +
    '11-14 l: lllqlllllllllcglf\n' +
    '12-14 w: wwdwwwwjwwwwtwwwwvw\n' +
    '3-4 g: ggvgg\n' +
    '7-9 q: qqqqqxqqqhfqsfqqbqvv\n' +
    '9-10 q: qqqqqqqqtqq\n' +
    '11-16 s: ssssssssssdssssjs\n' +
    '1-4 g: gggm\n' +
    '7-8 m: mmmmmmkmm\n' +
    '7-8 d: bxfdddsdp\n' +
    '7-8 d: ddddddwzdddddddddd\n' +
    '5-9 w: wwwwwfwwfwww\n' +
    '3-9 r: fqrchrrjwbrdsdtrr\n' +
    '13-18 z: zzzzzzjzzzzzzzzzztz\n' +
    '11-17 p: pskwgpmprpspvqpxp\n' +
    '4-12 z: zzzczzzzzzzzz\n' +
    '3-5 l: lltlnll\n' +
    '3-13 p: qvpnxrxprjdtpcspjck\n' +
    '7-9 m: wzmvxpfhbmjc\n' +
    '8-9 j: jjktkjjhjjjj\n' +
    '8-14 d: dddddtdddddddmdddd\n' +
    '5-6 b: bbjbcbbhbc\n' +
    '15-16 d: ddddddddddddddjd\n' +
    '12-13 t: tttttttttttts\n' +
    '2-4 r: rqrmr\n' +
    '6-13 g: ggtgggcgjzggtmgtgv\n' +
    '7-8 m: vmmmdmbmcbmm\n' +
    '9-10 f: ffffffffft\n' +
    '6-14 d: mqtfhdbrdsdljkrfnhw\n' +
    '3-12 b: lqbbcblbbxgbbt\n' +
    '2-7 z: nsbqqlzszzwtgqz\n' +
    '8-9 f: lmxqslffrd\n' +
    '1-4 f: ffflf\n' +
    '8-10 h: cqfsjlkdfhhp\n' +
    '6-7 k: kkkkkdk\n' +
    '16-19 n: nhnnvxnhjnnmnjnrnnkn\n' +
    '1-4 g: mggzgghgg\n' +
    '2-3 k: tcknkbkgcvl\n' +
    '8-11 q: bqqqqqqqtpq\n' +
    '12-18 w: wwwwwwwwwwwwwwwwwww\n' +
    '2-7 t: fljgtvt\n' +
    '2-3 w: dwmsltbqnw\n' +
    '7-11 g: szpgzxgggggsgr\n' +
    '8-17 p: pppppppvpcppppppmppp\n' +
    '1-7 p: pjpnbqk\n' +
    '1-6 z: zzzzzq\n' +
    '5-11 m: smmmzgmrjmm\n' +
    '6-7 s: rkkwvssqdhgxqx\n' +
    '5-6 r: rrrrrwrr\n' +
    '3-8 k: gkkjtfztsxrt\n' +
    '5-15 w: wsrrwwwddwwtwss\n' +
    '4-5 p: pppprp\n' +
    '13-15 z: xzjzzzfzzwzzpzdzzz\n' +
    '4-8 f: fqfhfbqfffvrfsfpf\n' +
    '16-17 g: gggggggghgggggghg\n' +
    '8-11 v: pchlvdfmvjrpsdsgw\n' +
    '5-6 r: rrrrwrdrfrk\n' +
    '6-8 f: nxmfjhkf\n' +
    '19-20 m: stmqmrddplzlwzdjbsmk\n' +
    '10-15 c: jccpcscccpccccxccccf\n' +
    '4-5 j: ksjjxjmvjwrjlqvxr\n' +
    '15-16 m: mmrmmmmmjmsmmmcm\n' +
    '9-11 l: lsrlfgxxcfs\n' +
    '4-5 r: lrprj\n' +
    '3-8 m: zdmmxmmjmmm\n' +
    '3-9 x: xxnxxxxxxxxxxx\n' +
    '6-10 q: vsqbjvpnnqqnhz\n' +
    '5-6 h: xghnhqmzf\n' +
    '5-6 c: rcgphkccb\n' +
    '5-6 w: wkdwjwwwp\n' +
    '5-7 v: vvvvsvv\n' +
    '1-6 c: ccccccccc\n' +
    '6-9 f: wfbfsfkftffffz\n' +
    '3-4 q: qqwqqqqqq\n' +
    '5-8 m: qmrmqkmgw\n' +
    '10-12 q: pqqqqqcqmlqnqqqjqq\n' +
    '2-11 x: bxxqrwvmpwwxkrx\n' +
    '6-8 f: fhlvlffn\n' +
    '4-7 w: wwwwwww\n' +
    '5-7 t: nbcbtpb\n' +
    '2-7 x: xdxxzgx\n' +
    '8-19 p: llgkthwqdpwcdcptlzp\n' +
    '12-15 x: xtxgxsftqgccldxc\n' +
    '2-3 l: xlklt\n' +
    '2-4 s: mwws\n' +
    '3-4 w: wwgw\n' +
    '6-7 m: mgmmmpm\n' +
    '8-9 f: mwzfmmkfw\n' +
    '4-11 s: ssssssssgsbssss\n' +
    '1-2 z: zzvxl\n' +
    '7-9 m: mmmmmmlmmmm\n' +
    '2-3 r: brxrt\n' +
    '3-5 v: hdrjvwv\n' +
    '3-7 f: bknpftfs\n' +
    '10-17 p: ppkpfpglfpgpzwvwxt\n' +
    '2-6 d: cddzdfdd\n' +
    '1-3 d: pdddd\n' +
    '13-16 c: cccdccccccccccch\n' +
    '9-10 x: khmxxwmqwxglf\n' +
    '1-3 q: qqqq\n' +
    '3-11 v: whvlvkrknmn\n' +
    '18-19 w: wwwwkwwwwwwwwwwwwshw\n' +
    '12-13 g: lgcqwrmggxmbg\n' +
    '8-13 x: xxxxxxxxnxxmk\n' +
    '3-8 m: mmmmmmmmm\n' +
    '7-17 d: dddddddddddddddddd\n' +
    '2-6 c: sccspkcccbz\n' +
    '1-4 b: bbnzb\n' +
    '3-4 m: mmmd\n' +
    '3-4 v: pmsv\n' +
    '4-7 t: qttttqd\n' +
    '8-11 b: bbbbbbbbbbkb\n' +
    '8-10 j: dlwsgtjdqv\n' +
    '5-7 x: fxxxxxj\n' +
    '4-6 p: ppppzlp\n' +
    '6-7 n: cnnnxgtnwnnnn\n' +
    '3-7 d: jdddjbpzddpd\n' +
    '4-19 x: xxxfzfxxxxqxxrxxxxmx\n' +
    '9-11 q: qqqqqqqqqqcq\n' +
    '14-16 r: rrrrrrrrrrrrdtnrrrr\n' +
    '8-10 k: kkkzkkkqkqkk\n' +
    '4-5 m: mmmmhm\n' +
    '12-14 b: bbbbbbbbbbbbbb\n' +
    '8-12 m: mmmmmmmmmmmzm\n' +
    '4-5 j: jjjfk\n' +
    '8-10 g: ggggggggggg\n' +
    '13-15 d: vdzdmdpxdnddxdn\n' +
    '6-7 m: pmzmmbnmmm\n' +
    '1-13 p: ppppppzpppppzpzp\n' +
    '2-4 z: qvfzfsscrthxtwpbkwsd\n' +
    '5-17 v: xtbdvdlrllvnphbcm\n' +
    '6-15 m: dbdmwmpnfmnhpmmb\n' +
    '1-9 p: ppppppppqpp\n' +
    '3-4 v: kvvqb\n' +
    '3-8 j: fxrcmjkxknlsn\n' +
    '5-7 w: wwvwkwt\n' +
    '6-12 v: hvmwwzrkjvhvjwlsjxv\n' +
    '3-4 d: dvzd\n' +
    '4-5 m: mmmmk\n' +
    '3-4 g: fghg\n' +
    '5-6 m: mmmmcmmmmmv\n' +
    '5-6 t: rlngtbbrscwf\n' +
    '5-15 w: wwwxwwwwwwxwwwqww\n' +
    '1-8 d: wddddddcdddtd\n' +
    '3-4 f: fffff\n' +
    '2-3 z: kkzzgzkc\n' +
    '9-10 z: zzbzzzzzzvvzvk\n' +
    '1-5 v: dvvgvvqvtsvvlsmj\n' +
    '8-9 g: ggggggggg\n' +
    '4-5 k: jkkkv\n' +
    '10-12 f: czbfffffffzwd\n' +
    '8-11 x: wshfbxnfxxxxxqpxxqqx\n' +
    '4-5 q: gmsqbsx\n' +
    '11-14 k: hkjkgkwkkkkfnp\n' +
    '2-4 c: gccccmccc\n' +
    '3-7 r: rrrrrrkrr\n' +
    '8-10 r: wrrmrzrrtrrrrr\n' +
    '4-10 s: stwnclhsss\n' +
    '1-9 l: lllgbxllr\n' +
    '2-4 v: dvvjgv\n' +
    '3-6 p: mrppkm\n' +
    '3-6 l: llnllll\n' +
    '9-10 v: dcvvmvvvvcvvvvvvl\n' +
    '1-4 d: dddzd\n' +
    '10-18 n: npnnsnlxmxvcnmgnqpns\n' +
    '4-5 l: llplh\n' +
    '4-5 x: mgxxzdcbqfglqrzshk\n' +
    '4-5 w: wswwzlwwwjw\n' +
    '3-12 w: wwwwpwwwwwwqw\n' +
    '3-5 g: xgggr\n' +
    '6-10 r: dlrjpncmsnq\n' +
    '5-18 t: ttttwtttttttttttttjt\n' +
    '4-5 f: bfdfr\n' +
    '3-4 p: pqvrlnp\n' +
    '6-11 d: knsrhrbcjndmgxhcphjr\n' +
    '3-6 x: xkkxxxx\n' +
    '4-12 t: thtjsrptttmmtpbbcctb\n' +
    '11-12 m: mxcmfbmfxmpmlm\n' +
    '15-20 c: cccpckwcbgscccccwccc\n' +
    '5-6 t: rrttgttttttrtnj\n' +
    '3-4 n: vnnn\n' +
    '2-3 x: xxzxxxxxxxxjxxxxxd\n' +
    '4-6 v: vvvvvj\n' +
    '11-16 q: dqqkqqqqqqqqkphvcgqq\n' +
    '13-15 j: jjhvjqjbjwwhjkj\n' +
    '6-7 q: dkrgqfq\n' +
    '5-6 j: gjjjcbj\n' +
    '7-9 n: nbqjklnnt\n' +
    '1-10 z: gzzzzzzzzzzzzzzzz\n' +
    '10-13 q: qddtjhrlsjkqq\n' +
    '4-5 q: zndqjhkznkfxkbdn\n' +
    '14-20 v: vfhvmkvvmvvlhssvvtvv\n' +
    '3-5 z: zzwzzz\n' +
    '16-19 s: sssssssshsssssslsss\n' +
    '2-4 k: fkks\n' +
    '1-8 t: ttttttttt\n' +
    '6-11 s: swvsvmjszskdjfp\n' +
    '3-4 b: nqrb\n' +
    '2-14 r: rcvrrvlcrrrnrrrkv\n' +
    '2-4 z: zjqznwzzpzz\n' +
    '1-7 h: phhhhhhhhhhhhhhhh\n' +
    '14-16 v: vvbvlvvgvvvvvvxrvvc\n' +
    '4-5 p: pppsp\n' +
    '4-7 b: rbdpbbplmqxbbb\n' +
    '1-5 b: pbbbbbbbbbb\n' +
    '1-5 d: dddddd\n' +
    '2-3 g: gqwg\n' +
    '12-13 d: dddrddqcldbpfc\n' +
    '3-13 n: chnthxplvnnvcxdwj\n' +
    '1-11 c: cnnctbgrvgflcccsc\n' +
    '10-12 n: nnnnnnngndnnnn\n' +
    '5-7 z: cjqpzzz\n' +
    '15-18 z: zjhzkzhkzzwzzqmslz\n' +
    '12-17 m: mmmmmmmmmmmgmmxmmmm\n' +
    '5-13 x: jxfxxxxsqtmkd\n' +
    '9-11 r: gsrrwrbrrrrjrmndrrrq\n' +
    '7-10 b: bbbbqbpbbqb\n' +
    '11-12 q: qqqqqqqqqqdq\n' +
    '1-9 h: hhhhhhhgvrhhh\n' +
    '14-17 l: lxlrfcnnlllllwvcllb\n' +
    '1-2 f: rppf\n' +
    '13-15 f: wfwrcwffffkfnnfffl\n' +
    '5-7 h: hhhhzhhhhhh\n' +
    '2-6 q: qqpdljq\n' +
    '4-12 k: kfwnkmkkkkkk\n' +
    '3-4 r: prqr\n' +
    '8-9 p: pppppppppp\n' +
    '16-17 c: cccctccccpccccctccwc\n' +
    '3-4 r: lqfrfkgtvrzb\n' +
    '2-4 g: gglv\n' +
    '3-5 z: zhzcz\n' +
    '3-4 p: ppgpp\n' +
    '6-8 q: qtmqqvkq\n' +
    '5-7 n: ksrnnnbsjls\n' +
    '2-9 z: zrlccsztzzzzzzh\n' +
    '1-8 s: sssssssss\n' +
    '3-10 z: zzvzzzzzzzqzzz\n' +
    '4-5 w: wwwzww\n' +
    '12-14 s: ssssssskssszstnsssss\n' +
    '1-9 k: kkkkkknpkkkkdkk\n' +
    '2-4 t: qnstqt\n' +
    '4-5 q: qqqbq\n' +
    '7-8 p: kkzpptpj\n' +
    '7-17 c: cccnqhckxhcxckmffbv\n' +
    '9-12 l: llpllcllllllzplhglz\n' +
    '6-9 j: jjjjjjjjrjj\n' +
    '6-8 l: lmllllln\n' +
    '4-10 d: dddldddkdd\n' +
    '13-18 m: sdkgmrdmmsxjcfmcwdwv\n' +
    '1-5 k: kkbkkk\n' +
    '8-9 b: bzbrbngbh\n' +
    '14-16 d: mdhdddpddddddkddgddj\n' +
    '5-6 p: zjmplf\n' +
    '3-4 x: xksxrx\n' +
    '1-11 w: wwwwwwwwwmxwzw\n' +
    '4-9 v: vvvdvvvvvpvv\n' +
    '3-5 x: bwxxq\n' +
    '3-5 k: ntkklsjkqvwvkxkqtkwr\n' +
    '2-4 c: gcjc\n' +
    '7-8 h: hppwshwhnbhk\n' +
    '10-18 n: nnnnnnnnnnnnnnnnnnn\n' +
    '8-13 w: qwwvfxwpwlwwwx\n' +
    '2-6 b: wdlmtbhkfnb\n' +
    '2-12 z: zzjqjkzblzzmfkzzz\n' +
    '8-12 s: svgsfssqssns\n' +
    '11-14 d: ddddddddddqddc\n' +
    '16-17 x: txxxrxzdxxxxxvhxxx\n' +
    '2-8 l: rllvllwxllkl\n' +
    '18-19 c: ccccccccccccccccccs\n' +
    '9-11 l: llllsllllrx\n' +
    '3-5 n: nnnln\n' +
    '5-6 k: frmkkz\n' +
    '2-4 l: tlmj\n' +
    '4-5 m: mmmvvm\n' +
    '15-17 k: kkkkmbkgkkkkkkkkmk\n' +
    '15-19 h: hhhhhhhhrhhhhhjhhhh\n' +
    '2-5 n: xnnjnd\n' +
    '7-9 k: kxkkkrxkvrkq\n' +
    '3-4 c: rccbm\n' +
    '9-10 d: ddldddrdkp\n' +
    '14-15 h: hlpcmhbvzhdhphr\n' +
    '4-5 m: mtmmvm\n' +
    '1-4 m: xmjmmm\n' +
    '3-18 m: qxmwmmbrdtxtqwcxfm\n' +
    '4-5 p: ppppl\n' +
    '6-9 s: ssssksssrs\n' +
    '7-11 q: qnqwxwppmqqqqwlk\n' +
    '3-5 w: wwwwww\n' +
    '13-15 v: vvvvvvvvvchvfvp\n' +
    '6-11 z: zdbzzqmkztzt\n' +
    '7-8 d: ndwmvdldx\n' +
    '3-7 h: hhjhqhhmpfzjvgmh\n' +
    '11-12 m: mmmcmmmcmhqf\n' +
    '7-8 x: xztkvxxd\n' +
    '2-6 h: wcnhzvh\n' +
    '4-5 x: xlgxpbxt\n' +
    '9-11 t: ktdtdxttgnm\n' +
    '3-10 j: jjjjjjjjjkjjjjjjqjj\n' +
    '11-14 x: xxxmxrxxxjxxcwxx\n' +
    '6-8 w: wcpwhfzwwcwj\n' +
    '1-6 n: wnfgxnnsvknngm\n' +
    '3-6 n: fkjnlnn\n' +
    '16-17 f: ffffffffffftffffx\n' +
    '3-4 v: vvzvv\n' +
    '11-12 r: rrrrrrrdrrrr\n' +
    '5-8 m: xwmmmmmmmmmmmmmmmmmm\n' +
    '4-7 x: nxxxkxx\n' +
    '7-8 t: ttttttxtt\n' +
    '7-8 d: ddddhddd\n' +
    '11-12 k: nqcbtrkvmwskm\n' +
    '1-2 d: dkdd\n' +
    '3-5 r: kbrrgxzkbr\n' +
    '1-4 d: ddddddfddddddddddddd\n' +
    '3-5 k: kkqkkkk\n' +
    '8-9 x: lrxkxhxxcxxxxd\n' +
    '3-8 s: rksdvzsss\n' +
    '7-9 k: kzhkkqmkm\n' +
    '6-11 h: hhhhhhhhzjhwcmnhhsh\n' +
    '3-5 x: fzptx\n' +
    '10-11 z: zzzzzzzzzhz\n' +
    '3-4 w: qmswdcdmxqwwqj\n' +
    '6-7 w: wwwwwnw\n' +
    '14-15 x: xxnxxxxxxxxxxxx\n' +
    '15-16 g: gkgpdftggvgchgsgl\n' +
    '2-7 k: vbvvfgkndklkk\n' +
    '2-3 c: qmccbcpzc\n' +
    '5-7 s: srssrssj\n' +
    '11-15 j: jjjjjjmwjjjhjjq\n' +
    '3-8 h: hktmzhhhchvhf\n' +
    '16-18 t: tttttttttttttttttrt\n' +
    '5-7 v: cvvknfvvv\n' +
    '1-4 c: xbgccfccqqvbgjtc\n' +
    '1-3 p: ppxppp\n' +
    '1-11 c: cgzddqwfkbc\n' +
    '2-4 t: xttht\n' +
    '14-16 w: pzvwgwwwwrhwlwwb\n' +
    '2-16 q: znqhqqqqzqpqqwqqqqq\n' +
    '16-17 w: wwwwwwwwwwwwwwwbwwvw\n' +
    '1-5 m: rmmmm\n' +
    '8-9 r: mfsdnqczrrqrdwvtcs\n' +
    '2-6 k: vktqrg\n' +
    '4-5 b: bbbrbbb\n' +
    '6-11 t: dxrnktlnbqtqt\n' +
    '12-13 j: jjjjjjjjjjjjj\n' +
    '15-16 l: lllqfllllllllllpll\n' +
    '13-15 j: jjjjjjjjjjjjbjz\n' +
    '18-19 z: fzwzxzzzkzmzzzzlpmn\n' +
    '2-11 n: nnnnnnnnnnpnn\n' +
    '11-14 n: mgnncnnnnncnnkn\n' +
    '1-4 n: rskn\n' +
    '3-4 g: xggg\n' +
    '3-5 d: lddgfg\n' +
    '1-5 s: thcss\n' +
    '1-12 s: cbzfbqstssqbss\n' +
    '4-7 z: jbfzzwnqhsgxxvndzlg\n' +
    '7-9 v: dbqzstvbcxgncgszp\n' +
    '6-9 b: gfklpbfkbbn\n' +
    '7-11 s: mslxkdsrtgss\n' +
    '3-5 x: dxxgd\n' +
    '8-10 n: npgnrbgnzr\n' +
    '3-4 j: mtzjrkmgfqmjbjhg\n' +
    '12-17 j: jjjjjjjjjjmvjjjjmj\n' +
    '5-6 j: srpckj\n' +
    '1-2 t: thtt\n' +
    '1-3 b: gbrl\n' +
    '19-20 p: phfppphpdptrxpwpzvcr\n' +
    '2-9 v: mvkwmtkhm\n' +
    '13-16 m: mmmmmmsmmmmmrtmm\n' +
    '5-11 f: ffffffffffffffffffff\n' +
    '2-8 h: hqhhhbhhhh\n' +
    '16-17 k: vjzqgvfqkrwtnldkcb\n' +
    '2-3 z: dzpptzzztzfg\n' +
    '6-7 c: brwcfcw\n' +
    '1-7 n: nnnnnnnnnnn\n' +
    '11-12 b: bbbbmbbbrwhbbbb\n' +
    '6-7 p: pppppgj\n' +
    '5-8 t: ttttwtttt\n' +
    '2-17 v: vfvvvvvvvvvvvvvvvvvv\n' +
    '9-14 p: ppbpdppppdpppplzqg\n' +
    '1-4 d: dddfdd\n' +
    '2-4 m: xbvmnmvmpsmfvpdzh\n' +
    '1-10 b: bbbbbbbbbxbbbbbbbbl\n' +
    '1-4 b: bgglftqqt\n' +
    '4-6 z: nzzfgzzzzzzkzzztf\n' +
    '2-3 r: pxrqdmrz\n' +
    '6-7 t: thttttrtt\n' +
    '7-14 d: ddddddkddddddjd\n' +
    '3-4 s: hsrsr\n' +
    '13-15 x: xwxxxjcxxxxxnxxxxs\n' +
    '8-12 x: xdmxqxxgxxxxzxxlx\n' +
    '6-14 w: wfwwwwjwwwwwwww\n' +
    '6-19 c: ldrqmvfpkrtrtqkcvtc\n' +
    '9-11 g: ggggggggdgg\n' +
    '3-6 h: hhhhhh\n' +
    '7-12 n: nznxxfdnnkrlnnfnnn\n' +
    '3-6 z: zgdzqztv\n' +
    '13-15 c: gcwsjjvnbnpkzncjlw\n' +
    '1-4 d: ddbg\n' +
    '5-15 t: tpntttttttttftrrtt\n' +
    '1-4 r: crrrr\n' +
    '7-9 d: rmddspmddz\n' +
    '3-4 w: wpbwzswqtwpwxmtpj\n' +
    '11-13 n: nnrnznjnncdnn\n' +
    '1-8 g: bggggggggg\n' +
    '11-12 b: hzltbtqgwxbbxb\n' +
    '1-3 b: hqbz\n' +
    '8-13 f: ffffffwfffffd\n' +
    '1-5 r: srrrj\n' +
    '2-5 f: fcffff\n' +
    '6-16 s: xmnhmbzlxvsmrffskl\n' +
    '2-3 t: tttgnxmtsdttttt\n' +
    '3-4 l: lplg\n' +
    '10-11 g: lggggggvggggggggw\n' +
    '6-11 v: vvvvvvvvvvwvvv\n' +
    '1-9 p: lppspptpp\n' +
    '6-10 p: zcpfqphgbppvcfmz\n' +
    '1-6 v: vvcvvzvvkv\n' +
    '5-8 g: ctggcsxg\n' +
    '3-12 s: sstsfjssssss\n' +
    '6-12 z: zzzzzzzzzzzzz\n' +
    '6-8 r: crrrrrcrrs\n' +
    '7-12 b: bbbbbbbbbgblbvb\n' +
    '2-5 f: qttqpfxmlf\n' +
    '4-14 d: dddddddddddddgd\n' +
    '15-16 k: wtchnbbwkmzsmrkk\n' +
    '1-4 n: nnnznnlnhnnwnznnnnn\n' +
    '5-13 f: ffrffffrtsndc\n' +
    '5-18 t: dmtwqmccltqrvkntft\n' +
    '1-2 f: fdnnslrfdv\n' +
    '2-6 r: txdtlrtbxrrxdsmrr\n' +
    '2-6 f: ljdgff\n' +
    '7-10 f: fddfffltfh\n' +
    '5-6 j: mjgjrgkjdj\n' +
    '3-8 j: mlbljhzn\n' +
    '5-6 r: slnrbjgr\n' +
    '10-13 c: lcxxccpcbvgdccgccccp\n' +
    '9-18 v: vvrnlvvvvvvsvvvsvvvv\n' +
    '6-7 k: nkkkkxk\n' +
    '3-4 q: rqqw\n' +
    '10-12 p: ppppppdkprppp\n' +
    '15-18 d: ddddddddddddddwddddd\n' +
    '16-17 n: nnnnnnnnnnnnnnnnlj\n' +
    '6-10 p: ktbfplppnp\n' +
    '1-7 v: xqpvxrm\n' +
    '5-6 l: sldflbxpdlltzlpjpml\n' +
    '4-13 t: tttvtttttttttt\n' +
    '15-19 x: xxxxxxxxxxxjxxxgxxdx\n' +
    '2-8 p: hhjdqvzmhxtkbbcptshb\n' +
    '14-15 g: gggggggggwgggdngg\n' +
    '9-11 j: jjjjjjjjwjjjjn\n' +
    '1-13 w: wwwcxxwwzrwwxww\n' +
    '3-12 l: vtxtlxjqrfplw\n' +
    '8-12 x: xqfdfzrxrnkwv\n' +
    '1-6 q: nqkqqqqq\n' +
    '5-9 l: lhlmklllllgjll\n' +
    '1-4 k: jwtkk\n' +
    '2-10 d: dvdjdddhdddddd\n' +
    '10-14 l: lllfslkltllqdrllxllv\n' +
    '8-11 r: rwplctrrrvpd\n' +
    '13-15 x: xdxxjddmcccmxxx\n' +
    '1-14 c: cccccjcjkcctcjc\n' +
    '9-13 m: gcpkqzgqwlznmqsmgxc\n' +
    '9-15 t: ttttttwtstttttwttttt\n' +
    '2-13 d: zkqdtclhmlpfd\n' +
    '14-18 j: jdjjjgjjjjjjjjcjjgj\n' +
    '9-13 h: hsgvzlktmzqhhw\n' +
    '5-6 b: bsbbbbbbbbbbd\n' +
    '3-4 z: zzsz\n' +
    '2-5 d: bcnrdgsfqnwqgdgmctq\n' +
    '9-12 q: qqqqqtcqqqqhzcvqfqr\n' +
    '1-3 w: rwww\n' +
    '2-8 h: tfhppjcrzchjhhrcnt\n' +
    '17-19 w: wwwwwwwwwwwwwwwwswww\n' +
    '2-7 f: fsffffffp\n' +
    '17-18 c: jcccfrzkgbzpmdwfvc\n' +
    '5-6 f: ffnfffvqff\n' +
    '1-2 b: bbtb\n' +
    '4-6 x: xgxxxgxr\n' +
    '6-9 v: crzvxfznvlx\n' +
    '13-15 k: nkkklkkvkkkkkxkkkkkk\n' +
    '3-5 m: mmzmwmmmm\n' +
    '1-6 b: brbqgk\n' +
    '5-13 k: qnmkktjgrkfqrzkkk\n' +
    '6-10 l: plllklfcllzvll\n' +
    '1-3 m: lmmmb\n' +
    '2-3 k: kqkk\n' +
    '4-6 k: kkkkkjkkkjkkkwk\n' +
    '2-3 w: nrwlrtkrkvtxwpr\n' +
    '9-10 b: kghdmcvswxbvtbjhdwb\n' +
    '9-11 n: fnnhdnnnnnj\n' +
    '9-12 b: bqbrbtbbsbbtgzgbb\n' +
    '6-14 f: fffffffffffffffffff\n' +
    '8-9 h: hhhhhhhhhhh\n' +
    '3-6 p: pwpfrbgfzqpghs\n' +
    '3-4 g: ggggg\n' +
    '7-13 c: bcccccpcccccccc\n' +
    '10-13 f: vppzffvnffkfq\n' +
    '1-4 f: vfffxfff\n' +
    '9-13 j: jjjjjjjjljjjjjj\n' +
    '3-4 f: ffhf\n' +
    '3-8 m: mmmmmkmcmmmmm\n' +
    '11-16 c: ccccccqccnsncccxkccc\n' +
    '3-8 w: wwwwwwwwww\n' +
    '3-10 c: llrkgsvwkcmphp\n' +
    '11-13 s: sssssspsssfsts\n' +
    '14-15 s: gssszgscsqfkssqsj\n' +
    '14-17 j: jjjjsjjjjjjrjjjjzp\n' +
    '1-9 q: wqqqqqqvqq\n' +
    '6-10 f: kffvfffdffsff\n' +
    '4-5 d: ddddbdddddd\n' +
    '10-14 d: wbdxrddtnrddddddg\n' +
    '6-9 x: xggxnfpcxxxdxxsd\n' +
    '14-17 p: pppppppppppjppppkp\n' +
    '1-8 m: tccmxmmm\n' +
    '6-12 p: vmspgmlzzqppfrpggglp\n' +
    '13-14 v: njnlcwlzdwwdvvgrfxtf\n' +
    '3-4 f: fmftfd\n' +
    '4-5 z: pvzzz\n' +
    '16-18 m: mmmmmmmmmmmmgmmxmz\n' +
    '1-4 z: pxzzz\n' +
    '9-10 b: bbbbbbbbbd\n' +
    '4-16 v: vvvwvvvvvvvvvvvrrv\n' +
    '13-16 f: jxlqrnngfghxfzfp\n' +
    '16-18 x: xxxxxxxxxxxmgxxxxhx\n' +
    '13-16 c: ccccccpccccctccc\n' +
    '8-11 c: ccccccccccvc\n' +
    '9-17 t: tttthtttttttttttzsl\n' +
    '7-14 w: wchwdrftbdhhww\n' +
    '3-6 r: kzrrzr\n' +
    '15-16 r: rrrrrrrlpzrvtrxw\n' +
    '6-9 t: tttttlttttttt\n' +
    '3-4 w: wwsww\n' +
    '6-8 c: cccccccxc\n' +
    '3-6 h: hphhhhvtxjrndzhh\n' +
    '12-16 j: jjvwsrkmjjqjdjjpsf\n' +
    '3-7 k: mtxqkzpkdkfkp\n' +
    '12-15 b: bbbbsbbbbzbbbbbb\n' +
    '4-6 h: qhhlshhhh\n' +
    '2-11 l: ljbllllljlllllzrljl\n' +
    '1-3 z: zzlz\n' +
    '1-3 w: wwnww\n' +
    '14-15 b: cbbbbbbbbpbjbbvgb\n' +
    '10-12 x: xdxxxxxxxdxz\n' +
    '17-20 n: nvnvzchcdfpnmnnsrnrn\n' +
    '1-5 b: bbnpxbb\n' +
    '5-6 b: gdkgsxqkbw\n' +
    '2-5 x: fxkgm\n' +
    '5-6 z: zzgzwzzxxn\n' +
    '2-4 d: hdqmdk\n' +
    '2-10 r: gnjqjctrrrvnjjvxgmx\n' +
    '6-7 v: cfdwvpxvvvpvvj\n' +
    '8-11 m: wtkprnmshmmmqtmzqq\n' +
    '3-5 j: jjwjv\n' +
    '7-11 t: xtfjvtttwtvttxtt\n' +
    '1-2 b: bbbb\n' +
    '8-10 f: ffffffqdfffffff\n' +
    '5-6 d: ddddmp\n' +
    '10-12 n: nnnnnnnnnmnnnnnnnnnn\n' +
    '9-10 x: xxxxxxxxkx\n' +
    '8-10 c: cccccccccb\n' +
    '19-20 w: wwwwwwwwwwwwwwwwwwmd\n' +
    '16-18 h: zhhhwnqnhhhhhghhvt\n' +
    '12-17 z: zzzzqzzzlzzzzzzzzk\n' +
    '2-6 h: hhvfjhrghhhhhthfhhhh\n' +
    '3-4 c: chgc\n' +
    '1-5 j: jjjjjjj\n' +
    '4-8 z: rzzzzzzszzb\n' +
    '9-10 t: ttttttttmt\n' +
    '3-5 g: bgggng\n' +
    '11-12 c: mcdcrcchsdccgtbj\n' +
    '2-9 f: rrjwgftffmnfm\n' +
    '12-15 r: rrgrrrrrrbrcrrrbrrrr\n' +
    '4-6 h: hxhxhghhhhhhhhhhhwh\n' +
    '10-11 n: nnjnznnnngnnqsnx\n' +
    '3-10 j: zfwklgrdnjtxj\n' +
    '3-4 b: bgrbbjf\n' +
    '3-4 n: nlqn\n' +
    '2-5 j: mslvj\n' +
    '14-20 c: cccccccccccccdcccccc\n' +
    '16-17 g: ggxtgggjcgggggggwggg\n' +
    '5-6 l: llvhfwhlwztxpdh\n' +
    '4-7 c: dcdzcccgm\n' +
    '10-15 q: qqqqqqqqqqqqqqjqqqqq\n' +
    '1-4 j: zdqw\n' +
    '9-19 q: hqqqqqqqjfqqqmnlbqqq\n' +
    '13-14 q: rqqklqfqqqbqhq\n' +
    '2-4 z: dlmz\n' +
    '10-17 g: xhnggglggqggqggqgz\n' +
    '6-11 j: djjjjjjjjjjjj\n' +
    '3-5 q: qqrqqq\n' +
    '3-9 n: xdlxngttnlmjb\n' +
    '7-9 b: bbbbbbzbtb\n' +
    '1-2 b: jbbtb\n' +
    '10-18 z: qzzzztzbzzzzzkzzzzz\n' +
    '3-4 p: pjjwpw\n' +
    '8-10 q: qqxqqqtqqpnm\n' +
    '4-7 f: fffffdff\n' +
    '1-10 j: pjjjjcjxjbjjj\n' +
    '3-11 c: tfrjqdtkcjcjkcwn\n' +
    '7-8 p: cpptjkpf\n' +
    '9-10 g: pggggggggvg\n' +
    '1-5 b: lbjbbbzbb\n' +
    '2-4 m: mmmtmmm\n' +
    '8-12 w: hwpkjdwzpwwwkcsw\n' +
    '6-10 b: mbkskbpbkr\n' +
    '13-16 q: qqqcqqqpqqqqqlqjqq\n' +
    '6-12 r: rlxrrrlrgjkr\n' +
    '15-16 k: kbkkkkfksmkqgkrk\n' +
    '1-2 l: lwll\n' +
    '3-5 x: xqxlcb\n' +
    '7-8 s: sssssssp\n' +
    '5-8 m: mmmmmmmrmm\n' +
    '2-4 l: lnllllzlsl\n' +
    '4-5 z: zzzwzzzq\n' +
    '5-8 l: hqdflnll\n' +
    '1-2 v: jvvzczgrv\n' +
    '9-13 z: zhzzzdzzzzzzzqzp\n' +
    '4-5 d: dddcdddddd\n' +
    '8-9 s: ssssgsshss\n' +
    '1-2 c: cccc\n' +
    '2-17 h: hhhhhhhhhhnhhhhhrhh\n' +
    '7-9 n: ndnlnnnnnz\n' +
    '10-14 p: hppzpxprfvrpppphpp\n' +
    '14-15 b: xwvqdfqmpbzvbgbtt\n' +
    '7-8 q: qqqqqqqn\n' +
    '11-15 m: mfmmmfmmmmmbmmn\n' +
    '2-4 g: bgbpr\n' +
    '5-10 f: fnbbpmffjphv\n' +
    '6-7 h: nnshthh\n' +
    '4-10 c: cccwccccccccc\n' +
    '17-18 p: hppnmppmpppppwphpc\n' +
    '7-8 g: ggggmggdg\n' +
    '1-3 f: fdwjpkdrbfff\n' +
    '5-10 v: lmvcldnwwzjznzsctzvv\n' +
    '10-14 b: bbbbbbbbxbbbbbbbb\n' +
    '4-9 r: whkjzsvrr\n' +
    '9-18 h: hrdzhrhrxdnrhfhhhh\n' +
    '2-5 n: nnvqbnbhwqfr\n' +
    '1-11 q: qndbrqxtkqq\n' +
    '6-8 r: rrrjsrlrrg\n' +
    '12-16 z: jhzzzzzzzzzzzzzwz\n' +
    '4-6 q: wstfcqqsbqq\n' +
    '1-3 g: bggg\n' +
    '5-11 w: xrgvsjvwjrd\n' +
    '13-16 b: bbjbbbbbbblbpbbbbb\n' +
    '7-8 h: hbhdqphmp\n' +
    '15-19 d: dvddddddddddddmdddl\n' +
    '7-13 p: vtbclnppvvqxljk\n' +
    '7-9 k: xkmksddkg\n' +
    '11-13 z: zzzzqtzzzqmzpzz\n' +
    '12-18 x: xxxqxxxxxxxxxxxxxt\n' +
    '5-6 f: fffffc\n' +
    '17-18 v: vvvvvvwvvvvvvvvvvv\n' +
    '4-14 r: ndqxfrbtfmptcrf\n' +
    '1-2 z: mszzz\n' +
    '5-9 n: nnnnnnnnnnn\n' +
    '1-3 n: ftfdl\n' +
    '14-19 n: tnjgfppdhswwdhclxmn\n' +
    '12-14 l: lllvlllglllfll\n' +
    '7-16 p: ppppppppmpppppppppp\n' +
    '6-17 c: sccccqxwscvbmcccxcz\n' +
    '1-6 x: wxxxxxxx\n' +
    '1-10 v: kdkkkmvgvmsfswvbtsc\n' +
    '16-19 k: kkkkkkkkkkkkkkkkkkdk\n' +
    '7-9 c: ccccchcjd\n' +
    '3-10 v: vmpvvmgjkfsv\n' +
    '10-18 s: ssssslsssqnjssssss\n' +
    '8-11 h: htvqnhgbszh\n' +
    '2-14 j: ptdrlpnnjrpppjrgp\n' +
    '8-10 w: wgxwwtntwrsczwwrjz\n' +
    '4-6 b: bbbqbbbbbb\n' +
    '2-3 x: gxxx\n' +
    '6-20 t: fntbvdtjmtsktztpdgkt\n' +
    '2-4 f: fffbff\n' +
    '7-14 m: mmmmmlgmmmmmmwlmmmm\n' +
    '17-18 z: zknzsdlzzszzzzzxzz\n' +
    '18-19 c: cccccccccccccccccvc\n' +
    '4-7 v: bwgvvxvvv\n' +
    '1-8 k: kkkkkxkdkkk\n' +
    '1-2 x: xfsxxd\n' +
    '4-6 r: hhxhrrlrbwwnjkkwb\n' +
    '1-7 r: rnxrrrrrrrrlrrr\n' +
    '9-12 l: lllllwllzlll\n' +
    '3-9 l: llllllllll\n' +
    '12-19 c: cccccccdtccrcclcccc\n' +
    '8-9 t: tttttttttt\n' +
    '2-3 n: nnkn\n' +
    '3-5 l: xqvqlsjlgl\n' +
    '4-5 k: kkkrrkn\n' +
    '5-7 d: mdrdmddpmd\n' +
    '4-6 c: ccccch\n' +
    '3-5 m: mmfmcmm\n' +
    '6-8 x: gxxdzbxzxxxx\n' +
    '2-3 r: rmtkgcrvlrg\n' +
    '6-7 r: cmrrwrzv\n' +
    '2-3 c: dcjlzl\n' +
    '6-13 b: bbbbbbrpbmbmnbbb\n' +
    '1-5 s: ssssws\n' +
    '2-8 l: sllwlvjl\n' +
    '3-5 b: bbxlbbb\n' +
    '1-3 c: cczpq\n' +
    '10-14 k: vqgnlzbbkjkljk\n' +
    '3-7 h: hhfhhhhhhhhhhhh\n' +
    '5-6 k: kfkkrx\n' +
    '6-7 q: qqqqqqr\n' +
    '5-8 l: dsqllgzl\n' +
    '8-9 r: rrrrrrrrxr\n' +
    '3-4 v: mvvh\n' +
    '1-4 p: ppppppp\n' +
    '17-18 x: xxxxxxxxxxxxxxxxkxx\n' +
    '5-8 b: bbbbcbbpb\n' +
    '7-10 j: jjjjcpjjjwjjjjjjjj\n' +
    '1-10 r: rscprvknxrgxqzsrs\n' +
    '3-7 w: wwgwwwhcwwwwwww\n' +
    '1-3 b: blkb\n' +
    '4-5 r: zrrrhlt\n' +
    '3-4 m: wcmmmfh\n' +
    '3-5 t: mctnxtktrsj\n' +
    '1-4 c: wcccc\n' +
    '4-13 j: sjjjjjjjjjjjtjj\n' +
    '7-8 r: fztxkwhrrxnnn\n' +
    '5-6 r: rrqrrrr\n' +
    '1-5 q: qqqqvqqq\n' +
    '8-14 t: ttvpttkptthtttrcj\n' +
    '2-7 n: znjqsvpstfjph\n' +
    '6-7 l: llllllnl\n' +
    '19-20 c: vwltcctcmcdccrqdccwc\n' +
    '4-15 d: bfkxfrsznfkdzpjmbp\n' +
    '12-15 q: qqqqqqqqqqqvqqqq\n' +
    '6-10 t: tttttbttktt\n' +
    '1-18 c: ccdczcvccvclcccvkccb';

const formatted = input.split('\n');

const data = formatted.map(line => {
    const meta = line.split(': ')[0];
    const minmax = meta.split(' ')[0];

    const min = minmax.split('-')[0];
    const max = minmax.split('-')[1];
    const letter = meta.split(' ')[1];
    const input = line.split(': ')[1];

    return {
        min,
        max,
        letter,
        input
    };
});

const isValid = ({min, max, letter, input}) => {
    let occurs = 0;
    input.split('').forEach(ltr => ltr === letter ? occurs++ : void 0);
    return occurs >= min && occurs <= max;
};


const isValidIdx = ({min, max, letter, input}) => {
    const firstOk = input[min - 1 ] === letter;
    const secondOk = input[max - 1 ] === letter;
    return firstOk ? !secondOk : secondOk;
};

let valid = 0;
data.forEach(dt => isValidIdx(dt) ? valid++ : void 0)

console.log(valid);
