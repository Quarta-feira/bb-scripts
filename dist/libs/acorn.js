var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords$1 = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
  return false;
}
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }
  if (code < 58) {
    return true;
  }
  if (code < 65) {
    return false;
  }
  if (code < 91) {
    return true;
  }
  if (code < 97) {
    return code === 95;
  }
  if (code < 123) {
    return true;
  }
  if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
var TokenType = function TokenType2(label, conf) {
  if (conf === void 0)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
var keywords = {};
function kw(name, options) {
  if (options === void 0)
    options = {};
  options.keyword = name;
  return keywords[name] = new TokenType(name, options);
}
var types$1 = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  privateId: new TokenType("privateId", startsExpr),
  eof: new TokenType("eof"),
  // Punctuation token types.
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  questionDot: new TokenType("?."),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  coalesce: binop("??", 1),
  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  return code === 10 || code === 13 || code === 8232 || code === 8233;
}
function nextLineBreak(code, from, end) {
  if (end === void 0)
    end = code.length;
  for (var i = from; i < end; i++) {
    var next = code.charCodeAt(i);
    if (isNewLine(next)) {
      return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
    }
  }
  return -1;
}
var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;
var hasOwn = Object.hasOwn || function(obj, propName) {
  return hasOwnProperty.call(obj, propName);
};
var isArray = Array.isArray || function(obj) {
  return toString.call(obj) === "[object Array]";
};
var regexpCache = /* @__PURE__ */ Object.create(null);
function wordsRegexp(words) {
  return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
}
function codePointToString(code) {
  if (code <= 65535) {
    return String.fromCharCode(code);
  }
  code -= 65536;
  return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
}
var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var Position = function Position2(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n) {
  return new Position(this.line, this.column + n);
};
var SourceLocation = function SourceLocation2(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) {
    this.source = p.sourceFile;
  }
};
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    var nextBreak = nextLineBreak(input, cur, offset2);
    if (nextBreak < 0) {
      return new Position(line, offset2 - cur);
    }
    ++line;
    cur = nextBreak;
  }
}
var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
  // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
  // (the latest version the library supports). This influences
  // support for strict mode, the set of reserved words, and support
  // for new syntax features.
  ecmaVersion: null,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called when
  // a semicolon is automatically inserted. It will be passed the
  // position of the inserted semicolon as an offset, and if
  // `locations` is enabled, it is given the location as a `{line,
  // column}` object as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program, and an import.meta expression
  // in a script isn't considered an error.
  allowImportExportEverywhere: false,
  // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: null,
  // When enabled, super identifiers are not constrained to
  // appearing in methods and do not raise an error when they appear elsewhere.
  allowSuperOutsideMethod: null,
  // When enabled, hashbang directive in the beginning of file is
  // allowed and treated as a line comment. Enabled by default when
  // `ecmaVersion` >= 2023.
  allowHashBang: false,
  // By default, the parser will verify that private properties are
  // only used in places where they are valid and have been declared.
  // Set this to false to turn such checks off.
  checkPrivateFields: true,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  // When this option has an array as value, objects representing the
  // comments are pushed to it.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false
};
var warnedAboutEcmaVersion = false;
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion === "latest") {
    options.ecmaVersion = 1e8;
  } else if (options.ecmaVersion == null) {
    if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
      warnedAboutEcmaVersion = true;
      console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
    }
    options.ecmaVersion = 11;
  } else if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (!opts || opts.allowHashBang == null) {
    options.allowHashBang = options.ecmaVersion >= 14;
  }
  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
var Parser = function Parser2(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
    if (options.sourceType === "module") {
      reserved += " await";
    }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types$1.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.potentialArrowInForAwait = false;
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  this.labels = [];
  this.undefinedExports = /* @__PURE__ */ Object.create(null);
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
  this.privateNameStack = [];
};
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
Parser.prototype.parse = function parse() {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node);
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 && !this.currentVarScope().inClassFieldInit;
};
prototypeAccessors.canAwait.get = function() {
  for (var i = this.scopeStack.length - 1; i >= 0; i--) {
    var scope = this.scopeStack[i];
    if (scope.inClassFieldInit || scope.flags & SCOPE_CLASS_STATIC_BLOCK) {
      return false;
    }
    if (scope.flags & SCOPE_FUNCTION) {
      return (scope.flags & SCOPE_ASYNC) > 0;
    }
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
prototypeAccessors.allowSuper.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & SCOPE_SUPER) > 0 || inClassFieldInit || this.options.allowSuperOutsideMethod;
};
prototypeAccessors.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
};
prototypeAccessors.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
prototypeAccessors.allowNewDotTarget.get = function() {
  var ref2 = this.currentThisScope();
  var flags = ref2.flags;
  var inClassFieldInit = ref2.inClassFieldInit;
  return (flags & (SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK)) > 0 || inClassFieldInit;
};
prototypeAccessors.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse2(input, options) {
  return new this(options, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options) {
  return new this(options, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp$9 = Parser.prototype;
var literal = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
pp$9.strictDirective = function(start) {
  if (this.options.ecmaVersion < 5) {
    return false;
  }
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      skipWhiteSpace.lastIndex = start + match[0].length;
      var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
      var next = this.input.charAt(end);
      return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
    }
    start += match[0].length;
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";") {
      start++;
    }
  }
};
pp$9.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp$9.isContextual = function(name) {
  return this.type === types$1.name && this.value === name && !this.containsEsc;
};
pp$9.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp$9.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp$9.canInsertSemicolon = function() {
  return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$9.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp$9.semicolon = function() {
  if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp$9.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp$9.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp$9.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
var DestructuringErrors = function DestructuringErrors2() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp$9.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp$9.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$8 = Parser.prototype;
pp$8.parseTopLevel = function(node) {
  var exports = /* @__PURE__ */ Object.create(null);
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types$1.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule) {
    for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
      var name = list[i];
      this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
    }
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
pp$8.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh === 92) {
    return true;
  }
  if (context) {
    return false;
  }
  if (nextCh === 123 || nextCh > 55295 && nextCh < 56320) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
      return true;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$8.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, after;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
};
pp$8.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet(context)) {
    starttype = types$1._var;
    kind = "let";
  }
  switch (starttype) {
    case types$1._break:
    case types$1._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types$1._debugger:
      return this.parseDebuggerStatement(node);
    case types$1._do:
      return this.parseDoStatement(node);
    case types$1._for:
      return this.parseForStatement(node);
    case types$1._function:
      if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types$1._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types$1._if:
      return this.parseIfStatement(node);
    case types$1._return:
      return this.parseReturnStatement(node);
    case types$1._switch:
      return this.parseSwitchStatement(node);
    case types$1._throw:
      return this.parseThrowStatement(node);
    case types$1._try:
      return this.parseTryStatement(node);
    case types$1._const:
    case types$1._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types$1._while:
      return this.parseWhileStatement(node);
    case types$1._with:
      return this.parseWithStatement(node);
    case types$1.braceL:
      return this.parseBlock(true, node);
    case types$1.semi:
      return this.parseEmptyStatement(node);
    case types$1._export:
    case types$1._import:
      if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) {
          return this.parseExpressionStatement(node, this.parseExpression());
        }
      }
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$8.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types$1.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$8.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$8.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types$1._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types$1.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$8.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types$1.parenL);
  if (this.type === types$1.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types$1._var || this.type === types$1._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init$1);
  }
  var startsWithLet = this.isContextual("let"), isForOf = false;
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(awaitAt > -1 ? "await" : true, refDestructuringErrors);
  if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types$1._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node.await = awaitAt > -1;
      }
    }
    if (startsWithLet && isForOf) {
      this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLValPattern(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$8.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$8.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types$1.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$8.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types$1.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types$1.braceR; ) {
    if (this.type === types$1._case || this.type === types$1._default) {
      var isCase = this.type === types$1._case;
      if (cur) {
        this.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) {
          this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types$1.colon);
    } else {
      if (!cur) {
        this.unexpected();
      }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$8.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty$1 = [];
pp$8.parseCatchClauseParam = function() {
  var param = this.parseBindingAtom();
  var simple = param.type === "Identifier";
  this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
  this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
  this.expect(types$1.parenR);
  return param;
};
pp$8.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types$1._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types$1.parenL)) {
      clause.param = this.parseCatchClauseParam();
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
  this.next();
  this.parseVar(node, false, kind, allowMissingInitializer);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$8.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$8.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$8.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$8.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
  if (createNewLexicalScope === void 0)
    createNewLexicalScope = true;
  if (node === void 0)
    node = this.startNode();
  node.body = [];
  this.expect(types$1.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (exitStrict) {
    this.strict = false;
  }
  this.next();
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$8.parseFor = function(node, init) {
  node.init = init;
  this.expect(types$1.semi);
  node.test = this.type === types$1.semi ? null : this.parseExpression();
  this.expect(types$1.semi);
  node.update = this.type === types$1.parenR ? null : this.parseExpression();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$8.parseForIn = function(node, init) {
  var isForIn = this.type === types$1._in;
  this.next();
  if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
    this.raise(
      init.start,
      (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
    );
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types$1.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
};
pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
  node.declarations = [];
  node.kind = kind;
  for (; ; ) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types$1.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types$1.comma)) {
      break;
    }
  }
  return node;
};
pp$8.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
      this.unexpected();
    }
    node.generator = this.eat(types$1.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types$1.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$8.parseFunctionParams = function(node) {
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$8.parseClass = function(node, isStatement) {
  this.next();
  var oldStrict = this.strict;
  this.strict = true;
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var privateNameMap = this.enterClassBody();
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types$1.braceL);
  while (this.type !== types$1.braceR) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this.raiseRecoverable(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
        this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
      }
    }
  }
  this.strict = oldStrict;
  this.next();
  node.body = this.finishNode(classBody, "ClassBody");
  this.exitClassBody();
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$8.parseClassElement = function(constructorAllowsSuper) {
  if (this.eat(types$1.semi)) {
    return null;
  }
  var ecmaVersion = this.options.ecmaVersion;
  var node = this.startNode();
  var keyName = "";
  var isGenerator = false;
  var isAsync = false;
  var kind = "method";
  var isStatic = false;
  if (this.eatContextual("static")) {
    if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
      this.parseClassStaticBlock(node);
      return node;
    }
    if (this.isClassElementNameStart() || this.type === types$1.star) {
      isStatic = true;
    } else {
      keyName = "static";
    }
  }
  node.static = isStatic;
  if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
    if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
      isAsync = true;
    } else {
      keyName = "async";
    }
  }
  if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
    isGenerator = true;
  }
  if (!keyName && !isAsync && !isGenerator) {
    var lastValue = this.value;
    if (this.eatContextual("get") || this.eatContextual("set")) {
      if (this.isClassElementNameStart()) {
        kind = lastValue;
      } else {
        keyName = lastValue;
      }
    }
  }
  if (keyName) {
    node.computed = false;
    node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
    node.key.name = keyName;
    this.finishNode(node.key, "Identifier");
  } else {
    this.parseClassElementName(node);
  }
  if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
    var isConstructor = !node.static && checkKeyName(node, "constructor");
    var allowsDirectSuper = isConstructor && constructorAllowsSuper;
    if (isConstructor && kind !== "method") {
      this.raise(node.key.start, "Constructor can't have get/set modifier");
    }
    node.kind = isConstructor ? "constructor" : kind;
    this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
  } else {
    this.parseClassField(node);
  }
  return node;
};
pp$8.isClassElementNameStart = function() {
  return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
};
pp$8.parseClassElementName = function(element) {
  if (this.type === types$1.privateId) {
    if (this.value === "constructor") {
      this.raise(this.start, "Classes can't have an element named '#constructor'");
    }
    element.computed = false;
    element.key = this.parsePrivateIdent();
  } else {
    this.parsePropertyName(element);
  }
};
pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  var key = method.key;
  if (method.kind === "constructor") {
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
  } else if (method.static && checkKeyName(method, "prototype")) {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && value.params.length !== 0) {
    this.raiseRecoverable(value.start, "getter should have no params");
  }
  if (method.kind === "set" && value.params.length !== 1) {
    this.raiseRecoverable(value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && value.params[0].type === "RestElement") {
    this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
  }
  return this.finishNode(method, "MethodDefinition");
};
pp$8.parseClassField = function(field) {
  if (checkKeyName(field, "constructor")) {
    this.raise(field.key.start, "Classes can't have a field named 'constructor'");
  } else if (field.static && checkKeyName(field, "prototype")) {
    this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
  }
  if (this.eat(types$1.eq)) {
    var scope = this.currentThisScope();
    var inClassFieldInit = scope.inClassFieldInit;
    scope.inClassFieldInit = true;
    field.value = this.parseMaybeAssign();
    scope.inClassFieldInit = inClassFieldInit;
  } else {
    field.value = null;
  }
  this.semicolon();
  return this.finishNode(field, "PropertyDefinition");
};
pp$8.parseClassStaticBlock = function(node) {
  node.body = [];
  var oldLabels = this.labels;
  this.labels = [];
  this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
  while (this.type !== types$1.braceR) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  this.next();
  this.exitScope();
  this.labels = oldLabels;
  return this.finishNode(node, "StaticBlock");
};
pp$8.parseClassId = function(node, isStatement) {
  if (this.type === types$1.name) {
    node.id = this.parseIdent();
    if (isStatement) {
      this.checkLValSimple(node.id, BIND_LEXICAL, false);
    }
  } else {
    if (isStatement === true) {
      this.unexpected();
    }
    node.id = null;
  }
};
pp$8.parseClassSuper = function(node) {
  node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
};
pp$8.enterClassBody = function() {
  var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  this.privateNameStack.push(element);
  return element.declared;
};
pp$8.exitClassBody = function() {
  var ref2 = this.privateNameStack.pop();
  var declared = ref2.declared;
  var used = ref2.used;
  if (!this.options.checkPrivateFields) {
    return;
  }
  var len = this.privateNameStack.length;
  var parent = len === 0 ? null : this.privateNameStack[len - 1];
  for (var i = 0; i < used.length; ++i) {
    var id = used[i];
    if (!hasOwn(declared, id.name)) {
      if (parent) {
        parent.used.push(id);
      } else {
        this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
      }
    }
  }
};
function isPrivateNameConflicted(privateNameMap, element) {
  var name = element.key.name;
  var curr = privateNameMap[name];
  var next = "true";
  if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
    next = (element.static ? "s" : "i") + element.kind;
  }
  if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
    privateNameMap[name] = "true";
    return false;
  } else if (!curr) {
    privateNameMap[name] = next;
    return false;
  } else {
    return true;
  }
}
function checkKeyName(node, name) {
  var computed = node.computed;
  var key = node.key;
  return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
}
pp$8.parseExportAllDeclaration = function(node, exports) {
  if (this.options.ecmaVersion >= 11) {
    if (this.eatContextual("as")) {
      node.exported = this.parseModuleExportName();
      this.checkExport(exports, node.exported, this.lastTokStart);
    } else {
      node.exported = null;
    }
  }
  this.expectContextual("from");
  if (this.type !== types$1.string) {
    this.unexpected();
  }
  node.source = this.parseExprAtom();
  this.semicolon();
  return this.finishNode(node, "ExportAllDeclaration");
};
pp$8.parseExport = function(node, exports) {
  this.next();
  if (this.eat(types$1.star)) {
    return this.parseExportAllDeclaration(node, exports);
  }
  if (this.eat(types$1._default)) {
    this.checkExport(exports, "default", this.lastTokStart);
    node.declaration = this.parseExportDefaultDeclaration();
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseExportDeclaration(node);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports, node.declaration.declarations);
    } else {
      this.checkExport(exports, node.declaration.id, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types$1.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];
        this.checkUnreserved(spec.local);
        this.checkLocalExport(spec.local);
        if (spec.local.type === "Literal") {
          this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
        }
      }
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$8.parseExportDeclaration = function(node) {
  return this.parseStatement(null);
};
pp$8.parseExportDefaultDeclaration = function() {
  var isAsync;
  if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
    var fNode = this.startNode();
    this.next();
    if (isAsync) {
      this.next();
    }
    return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
  } else if (this.type === types$1._class) {
    var cNode = this.startNode();
    return this.parseClass(cNode, "nullableID");
  } else {
    var declaration = this.parseMaybeAssign();
    this.semicolon();
    return declaration;
  }
};
pp$8.checkExport = function(exports, name, pos) {
  if (!exports) {
    return;
  }
  if (typeof name !== "string") {
    name = name.type === "Identifier" ? name.name : name.value;
  }
  if (hasOwn(exports, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports[name] = true;
};
pp$8.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports, pat, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties; i < list.length; i += 1) {
      var prop = list[i];
      this.checkPatternExport(exports, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this.checkPatternExport(exports, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports, pat.argument);
  }
};
pp$8.checkVariableExport = function(exports, decls) {
  if (!exports) {
    return;
  }
  for (var i = 0, list = decls; i < list.length; i += 1) {
    var decl = list[i];
    this.checkPatternExport(exports, decl.id);
  }
};
pp$8.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$8.parseExportSpecifier = function(exports) {
  var node = this.startNode();
  node.local = this.parseModuleExportName();
  node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
  this.checkExport(
    exports,
    node.exported,
    node.exported.start
  );
  return this.finishNode(node, "ExportSpecifier");
};
pp$8.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    nodes.push(this.parseExportSpecifier(exports));
  }
  return nodes;
};
pp$8.parseImport = function(node) {
  this.next();
  if (this.type === types$1.string) {
    node.specifiers = empty$1;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$8.parseImportSpecifier = function() {
  var node = this.startNode();
  node.imported = this.parseModuleExportName();
  if (this.eatContextual("as")) {
    node.local = this.parseIdent();
  } else {
    this.checkUnreserved(node.imported);
    node.local = node.imported;
  }
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportSpecifier");
};
pp$8.parseImportDefaultSpecifier = function() {
  var node = this.startNode();
  node.local = this.parseIdent();
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportDefaultSpecifier");
};
pp$8.parseImportNamespaceSpecifier = function() {
  var node = this.startNode();
  this.next();
  this.expectContextual("as");
  node.local = this.parseIdent();
  this.checkLValSimple(node.local, BIND_LEXICAL);
  return this.finishNode(node, "ImportNamespaceSpecifier");
};
pp$8.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types$1.name) {
    nodes.push(this.parseImportDefaultSpecifier());
    if (!this.eat(types$1.comma)) {
      return nodes;
    }
  }
  if (this.type === types$1.star) {
    nodes.push(this.parseImportNamespaceSpecifier());
    return nodes;
  }
  this.expect(types$1.braceL);
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    nodes.push(this.parseImportSpecifier());
  }
  return nodes;
};
pp$8.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
    var stringLiteral = this.parseLiteral(this.value);
    if (loneSurrogate.test(stringLiteral.value)) {
      this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
    }
    return stringLiteral;
  }
  return this.parseIdent(true);
};
pp$8.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$8.isDirectiveCandidate = function(statement) {
  return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && // Reject parenthesized strings.
  (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$7 = Parser.prototype;
pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break;
      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$7.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$7.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$7.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$7.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types$1.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types$1.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types$1.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this.expect(types$1.comma);
    }
    if (allowEmpty && this.type === types$1.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === types$1.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types$1.comma) {
        this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      }
      this.expect(close);
      break;
    } else {
      elts.push(this.parseAssignableListItem(allowModifiers));
    }
  }
  return elts;
};
pp$7.parseAssignableListItem = function(allowModifiers) {
  var elem = this.parseMaybeDefault(this.start, this.startLoc);
  this.parseBindingListItem(elem);
  return elem;
};
pp$7.parseBindingListItem = function(param) {
  return param;
};
pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  var isBind = bindingType !== BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (isBind) {
        if (bindingType === BIND_LEXICAL && expr.name === "let") {
          this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
        }
        if (checkClashes) {
          if (hasOwn(checkClashes, expr.name)) {
            this.raiseRecoverable(expr.start, "Argument name clash");
          }
          checkClashes[expr.name] = true;
        }
        if (bindingType !== BIND_OUTSIDE) {
          this.declareName(expr.name, bindingType, expr.start);
        }
      }
      break;
    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ParenthesizedExpression":
      if (isBind) {
        this.raiseRecoverable(expr.start, "Binding parenthesized expression");
      }
      return this.checkLValSimple(expr.expression, bindingType, checkClashes);
    default:
      this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
  }
};
pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];
        this.checkLValInnerPattern(prop, bindingType, checkClashes);
      }
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this.checkLValInnerPattern(elem, bindingType, checkClashes);
        }
      }
      break;
    default:
      this.checkLValSimple(expr, bindingType, checkClashes);
  }
};
pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Property":
      this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLValPattern(expr.argument, bindingType, checkClashes);
      break;
    default:
      this.checkLValPattern(expr, bindingType, checkClashes);
  }
};
var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p) {
    return p.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$6 = Parser.prototype;
pp$6.initialContext = function() {
  return [types.b_stat];
};
pp$6.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$6.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types.f_expr || parent === types.f_stat) {
    return true;
  }
  if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
    return true;
  }
  if (prevType === types$1.braceL) {
    return parent === types.b_stat;
  }
  if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$6.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$6.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types$1.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
pp$6.overrideContext = function(tokenCtx) {
  if (this.curContext() !== tokenCtx) {
    this.context[this.context.length - 1] = tokenCtx;
  }
};
types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types$1.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
  this.exprAllowed = true;
};
types$1.dollarBraceL.updateContext = function() {
  this.context.push(types.b_tmpl);
  this.exprAllowed = true;
};
types$1.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
  this.context.push(statementParens ? types.p_stat : types.p_expr);
  this.exprAllowed = true;
};
types$1.incDec.updateContext = function() {
};
types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
    this.context.push(types.f_expr);
  } else {
    this.context.push(types.f_stat);
  }
  this.exprAllowed = false;
};
types$1.colon.updateContext = function() {
  if (this.curContext().token === "function") {
    this.context.pop();
  }
  this.exprAllowed = true;
};
types$1.backQuote.updateContext = function() {
  if (this.curContext() === types.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types.q_tmpl);
  }
  this.exprAllowed = false;
};
types$1.star.updateContext = function(prevType) {
  if (prevType === types$1._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types.f_expr) {
      this.context[index] = types.f_expr_gen;
    } else {
      this.context[index] = types.f_gen;
    }
  }
  this.exprAllowed = true;
};
types$1.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var pp$5 = Parser.prototype;
pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors) {
          if (refDestructuringErrors.doubleProto < 0) {
            refDestructuringErrors.doubleProto = key.start;
          }
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$5.parseExpression = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
  if (this.type === types$1.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types$1.comma)) {
      node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
    }
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};
pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield(forInit);
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldDoubleProto = refDestructuringErrors.doubleProto;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types$1.parenL || this.type === types$1.name) {
    this.potentialArrowAt = this.start;
    this.potentialArrowInForAwait = forInit === "await";
  }
  var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    if (this.type === types$1.eq) {
      left = this.toAssignable(left, false, refDestructuringErrors);
    }
    if (!ownDestructuringErrors) {
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
    }
    if (refDestructuringErrors.shorthandAssign >= left.start) {
      refDestructuringErrors.shorthandAssign = -1;
    }
    if (this.type === types$1.eq) {
      this.checkLValPattern(left);
    } else {
      this.checkLValSimple(left);
    }
    node.left = left;
    this.next();
    node.right = this.parseMaybeAssign(forInit);
    if (oldDoubleProto > -1) {
      refDestructuringErrors.doubleProto = oldDoubleProto;
    }
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  return left;
};
pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(forInit, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types$1.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types$1.colon);
    node.alternate = this.parseMaybeAssign(forInit);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
};
pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
  var prec = this.type.binop;
  if (prec != null && (!forInit || this.type !== types$1._in)) {
    if (prec > minPrec) {
      var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
      var coalesce = this.type === types$1.coalesce;
      if (coalesce) {
        prec = types$1.logicalAND.binop;
      }
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
      if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
        this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      }
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
    }
  }
  return left;
};
pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  if (right.type === "PrivateIdentifier") {
    this.raise(right.start, "Private identifier can only be left side of binary expression");
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && this.canAwait) {
    expr = this.parseAwait(forInit);
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types$1.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true, update, forInit);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLValSimple(node.argument);
    } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
      this.raiseRecoverable(node.start, "Private fields can not be deleted");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else if (!sawUnary && this.type === types$1.privateId) {
    if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) {
      this.unexpected();
    }
    expr = this.parsePrivateIdent();
    if (this.type !== types$1._in) {
      this.unexpected();
    }
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLValSimple(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!incDec && this.eat(types$1.starstar)) {
    if (sawUnary) {
      this.unexpected(this.lastTokStart);
    } else {
      return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
    }
  } else {
    return expr;
  }
};
function isPrivateFieldAccess(node) {
  return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression);
}
pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors, forInit);
  if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
    if (refDestructuringErrors.trailingComma >= result.start) {
      refDestructuringErrors.trailingComma = -1;
    }
  }
  return result;
};
pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
  var optionalChained = false;
  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
    if (element.optional) {
      optionalChained = true;
    }
    if (element === base || element.type === "ArrowFunctionExpression") {
      if (optionalChained) {
        var chainNode = this.startNodeAt(startPos, startLoc);
        chainNode.expression = element;
        element = this.finishNode(chainNode, "ChainExpression");
      }
      return element;
    }
    base = element;
  }
};
pp$5.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(types$1.arrow);
};
pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
};
pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
  var optionalSupported = this.options.ecmaVersion >= 11;
  var optional = optionalSupported && this.eat(types$1.questionDot);
  if (noCalls && optional) {
    this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  }
  var computed = this.eat(types$1.bracketL);
  if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    if (computed) {
      node.property = this.parseExpression();
      this.expect(types$1.bracketR);
    } else if (this.type === types$1.privateId && base.type !== "Super") {
      node.property = this.parsePrivateIdent();
    } else {
      node.property = this.parseIdent(this.options.allowReserved !== "never");
    }
    node.computed = !!computed;
    if (optionalSupported) {
      node.optional = optional;
    }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types$1.parenL)) {
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0) {
        this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
      }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    if (optionalSupported) {
      node$1.optional = optional;
    }
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types$1.backQuote) {
    if (optional || optionalChained) {
      this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    }
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({ isTagged: true });
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base;
};
pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
  if (this.type === types$1.slash) {
    this.readRegexp();
  }
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types$1._super:
      if (!this.allowSuper) {
        this.raise(this.start, "'super' keyword outside a method");
      }
      node = this.startNode();
      this.next();
      if (this.type === types$1.parenL && !this.allowDirectSuper) {
        this.raise(node.start, "super() call outside constructor of a subclass");
      }
      if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types$1._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types$1.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
        this.overrideContext(types.f_expr);
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types$1.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
        }
      }
      return id;
    case types$1.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types$1.num:
    case types$1.string:
      return this.parseLiteral(this.value);
    case types$1._null:
    case types$1._true:
    case types$1._false:
      node = this.startNode();
      node.value = this.type === types$1._null ? null : this.type === types$1._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types$1.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types$1.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types$1.braceL:
      this.overrideContext(types.b_expr);
      return this.parseObj(false, refDestructuringErrors);
    case types$1._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types$1._class:
      return this.parseClass(this.startNode(), false);
    case types$1._new:
      return this.parseNew();
    case types$1.backQuote:
      return this.parseTemplate();
    case types$1._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport(forNew);
      } else {
        return this.unexpected();
      }
    default:
      return this.parseExprAtomDefault();
  }
};
pp$5.parseExprAtomDefault = function() {
  this.unexpected();
};
pp$5.parseExprImport = function(forNew) {
  var node = this.startNode();
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  }
  var meta = this.parseIdent(true);
  if (this.type === types$1.parenL && !forNew) {
    return this.parseDynamicImport(node);
  } else if (this.type === types$1.dot) {
    node.meta = meta;
    return this.parseImportMeta(node);
  } else {
    this.unexpected();
  }
};
pp$5.parseDynamicImport = function(node) {
  this.next();
  node.source = this.parseMaybeAssign();
  if (!this.eat(types$1.parenR)) {
    var errorPos = this.start;
    if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }
  return this.finishNode(node, "ImportExpression");
};
pp$5.parseImportMeta = function(node) {
  this.next();
  var containsEsc = this.containsEsc;
  node.property = this.parseIdent(true);
  if (node.property.name !== "meta") {
    this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
  }
  if (containsEsc) {
    this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
  }
  if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
    this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
  }
  return this.finishNode(node, "MetaProperty");
};
pp$5.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
    node.bigint = node.raw.slice(0, -1).replace(/_/g, "");
  }
  this.next();
  return this.finishNode(node, "Literal");
};
pp$5.parseParenExpression = function() {
  this.expect(types$1.parenL);
  var val = this.parseExpression();
  this.expect(types$1.parenR);
  return val;
};
pp$5.shouldParseArrow = function(exprList) {
  return !this.canInsertSemicolon();
};
pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types$1.parenR) {
      first ? first = false : this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this.type === types$1.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types$1.comma) {
          this.raiseRecoverable(
            this.start,
            "Comma is not permitted after the rest element"
          );
        }
        break;
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
    this.expect(types$1.parenR);
    if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$5.parseParenItem = function(item) {
  return item;
};
pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
};
var empty = [];
pp$5.parseNew = function() {
  if (this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  }
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
    var meta = this.startNodeAt(node.start, node.startLoc);
    meta.name = "new";
    node.meta = this.finishNode(meta, "Identifier");
    this.next();
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
    }
    if (!this.allowNewDotTarget) {
      this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
  if (this.eat(types$1.parenL)) {
    node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty;
  }
  return this.finishNode(node, "NewExpression");
};
pp$5.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types$1.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types$1.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$5.parseTemplate = function(ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0)
    isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types$1.eof) {
      this.raise(this.pos, "Unterminated template literal");
    }
    this.expect(types$1.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types$1.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$5.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$5.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types$1.braceR)) {
    if (!first) {
      this.expect(types$1.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types$1.comma) {
        this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types$1.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
    this.parsePropertyName(prop);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$5.parseGetterSetter = function(prop) {
  prop.kind = prop.key.name;
  this.parsePropertyName(prop);
  prop.value = this.parseMethod(false);
  var paramCount = prop.kind === "get" ? 0 : 1;
  if (prop.value.params.length !== paramCount) {
    var start = prop.value.start;
    if (prop.kind === "get") {
      this.raiseRecoverable(start, "getter should have no params");
    } else {
      this.raiseRecoverable(start, "setter should have exactly one param");
    }
  } else {
    if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
      this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
    }
  }
};
pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types$1.colon) {
    this.unexpected();
  }
  if (this.eat(types$1.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.parseGetterSetter(prop);
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = startPos;
    }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else if (this.type === types$1.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
    } else {
      prop.value = this.copyNode(prop.key);
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$5.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types$1.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types$1.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
pp$5.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
  this.expect(types$1.parenL);
  node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false, forInit);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
  var isExpression = isArrowFunction && this.type !== types$1.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign(forInit);
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    if (this.strict && node.id) {
      this.checkLValSimple(node.id, BIND_OUTSIDE);
    }
    node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
};
pp$5.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$5.checkParams = function(node, allowDuplicates) {
  var nameHash = /* @__PURE__ */ Object.create(null);
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types$1.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this.type === types$1.comma) {
      elt = null;
    } else if (this.type === types$1.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$5.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name = ref2.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
  }
  if (this.currentThisScope().inClassFieldInit && name === "arguments") {
    this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
  }
  if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
    this.raise(start, "Cannot use " + name + " in class static initialization block");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$5.parseIdent = function(liberal) {
  var node = this.parseIdentNode();
  this.next(!!liberal);
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos) {
      this.awaitIdentPos = node.start;
    }
  }
  return node;
};
pp$5.parseIdentNode = function() {
  var node = this.startNode();
  if (this.type === types$1.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
    this.type = types$1.name;
  } else {
    this.unexpected();
  }
  return node;
};
pp$5.parsePrivateIdent = function() {
  var node = this.startNode();
  if (this.type === types$1.privateId) {
    node.name = this.value;
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "PrivateIdentifier");
  if (this.options.checkPrivateFields) {
    if (this.privateNameStack.length === 0) {
      this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
    } else {
      this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
    }
  }
  return node;
};
pp$5.parseYield = function(forInit) {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types$1.star);
    node.argument = this.parseMaybeAssign(forInit);
  }
  return this.finishNode(node, "YieldExpression");
};
pp$5.parseAwait = function(forInit) {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true, false, forInit);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$3 = Parser.prototype;
var Scope = function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
  this.functions = [];
  this.inClassFieldInit = false;
};
pp$3.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$3.exitScope = function() {
  this.scopeStack.pop();
};
pp$3.treatFunctionsAsVarInScope = function(scope) {
  return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
};
pp$3.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && scope.flags & SCOPE_TOP) {
      delete this.undefinedExports[name];
    }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar) {
      redeclared = scope$2.lexical.indexOf(name) > -1;
    } else {
      redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
    }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break;
      }
      scope$3.var.push(name);
      if (this.inModule && scope$3.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$3.checkLocalExport = function(id) {
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};
pp$3.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$3.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) {
      return scope;
    }
  }
};
pp$3.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) {
      return scope;
    }
  }
};
var Node = function Node2(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations) {
    this.loc = new SourceLocation(parser, loc);
  }
  if (parser.options.directSourceFile) {
    this.sourceFile = parser.options.directSourceFile;
  }
  if (parser.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$2 = Parser.prototype;
pp$2.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$2.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
pp$2.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$2.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
pp$2.copyNode = function(node) {
  var newNode = new Node(this, node.start, this.startLoc);
  for (var prop in node) {
    newNode[prop] = node[prop];
  }
  return newNode;
};
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
var ecma13BinaryProperties = ecma12BinaryProperties;
var ecma14BinaryProperties = ecma13BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties,
  12: ecma12BinaryProperties,
  13: ecma13BinaryProperties,
  14: ecma14BinaryProperties
};
var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
var unicodeBinaryPropertiesOfStrings = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: ecma14BinaryPropertiesOfStrings
};
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
var ecma14ScriptValues = ecma13ScriptValues + " Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues,
  12: ecma12ScriptValues,
  13: ecma13ScriptValues,
  14: ecma14ScriptValues
};
var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;
  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
for (var i = 0, list = [9, 10, 11, 12, 13, 14]; i < list.length; i += 1) {
  var ecmaVersion = list[i];
  buildUnicodeData(ecmaVersion);
}
var pp$1 = Parser.prototype;
var RegExpValidationState = function RegExpValidationState2(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchV = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicodeSets = flags.indexOf("v") !== -1;
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
    this.switchU = true;
    this.switchV = true;
    this.switchN = true;
  } else {
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchV = false;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  }
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1;
  }
  var c = s.charCodeAt(i);
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
    return c;
  }
  var next = s.charCodeAt(i + 1);
  return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
  if (forceU === void 0)
    forceU = false;
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l;
  }
  var c = s.charCodeAt(i), next;
  if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.pos, forceU);
};
RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
  if (forceU === void 0)
    forceU = false;
  return this.at(this.nextIndex(this.pos, forceU), forceU);
};
RegExpValidationState.prototype.advance = function advance(forceU) {
  if (forceU === void 0)
    forceU = false;
  this.pos = this.nextIndex(this.pos, forceU);
};
RegExpValidationState.prototype.eat = function eat(ch, forceU) {
  if (forceU === void 0)
    forceU = false;
  if (this.current(forceU) === ch) {
    this.advance(forceU);
    return true;
  }
  return false;
};
RegExpValidationState.prototype.eatChars = function eatChars(chs, forceU) {
  if (forceU === void 0)
    forceU = false;
  var pos = this.pos;
  for (var i = 0, list = chs; i < list.length; i += 1) {
    var ch = list[i];
    var current2 = this.at(pos, forceU);
    if (current2 === -1 || current2 !== ch) {
      return false;
    }
    pos = this.nextIndex(pos, forceU);
  }
  this.pos = pos;
  return true;
};
pp$1.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;
  var u = false;
  var v = false;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
    if (flag === "u") {
      u = true;
    }
    if (flag === "v") {
      v = true;
    }
  }
  if (this.options.ecmaVersion >= 15 && u && v) {
    this.raise(state.start, "Invalid regular expression flag");
  }
};
pp$1.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$1.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(
      41
      /* ) */
    )) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(
      93
      /* ] */
    ) || state.eat(
      125
      /* } */
    )) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];
    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$1.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(
    124
    /* | */
  )) {
    this.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(
    123
    /* { */
  )) {
    state.raise("Lone quantifier brackets");
  }
};
pp$1.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$1.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$1.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(
    94
    /* ^ */
  ) || state.eat(
    36
    /* $ */
  )) {
    return true;
  }
  if (state.eat(
    92
    /* \ */
  )) {
    if (state.eat(
      66
      /* B */
    ) || state.eat(
      98
      /* b */
    )) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(
    40
    /* ( */
  ) && state.eat(
    63
    /* ? */
  )) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(
        60
        /* < */
      );
    }
    if (state.eat(
      61
      /* = */
    ) || state.eat(
      33
      /* ! */
    )) {
      this.regexp_disjunction(state);
      if (!state.eat(
        41
        /* ) */
      )) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$1.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(
      63
      /* ? */
    );
    return true;
  }
  return false;
};
pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(
    42
    /* * */
  ) || state.eat(
    43
    /* + */
  ) || state.eat(
    63
    /* ? */
  ) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$1.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(
    123
    /* { */
  )) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(
        44
        /* , */
      ) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(
        125
        /* } */
      )) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(
    40
    /* ( */
  )) {
    if (state.eat(
      63
      /* ? */
    ) && state.eat(
      58
      /* : */
    )) {
      this.regexp_disjunction(state);
      if (state.eat(
        41
        /* ) */
      )) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatCapturingGroup = function(state) {
  if (state.eat(
    40
    /* ( */
  )) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(
      41
      /* ) */
    )) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$1.regexp_eatExtendedAtom = function(state) {
  return state.eat(
    46
    /* . */
  ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$1.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
pp$1.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$1.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_groupSpecifier = function(state) {
  if (state.eat(
    63
    /* ? */
  )) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$1.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(
    60
    /* < */
  )) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(
      62
      /* > */
    )) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
pp$1.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var forceU = this.options.ecmaVersion >= 11;
  var ch = state.current(forceU);
  state.advance(forceU);
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
pp$1.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$1.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true;
    }
    if (n <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatKGroupName = function(state) {
  if (state.eat(
    107
    /* k */
  )) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$1.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$1.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
  if (forceU === void 0)
    forceU = false;
  var start = state.pos;
  var switchU = forceU || state.switchU;
  if (state.eat(
    117
    /* u */
  )) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(
          92
          /* \ */
        ) && state.eat(
          117
          /* u */
        ) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (switchU && state.eat(
      123
      /* { */
    ) && this.regexp_eatHexDigits(state) && state.eat(
      125
      /* } */
    ) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
pp$1.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(
      47
      /* / */
    )) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
var CharSetNone = 0;
var CharSetOk = 1;
var CharSetString = 2;
pp$1.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return CharSetOk;
  }
  var negate = false;
  if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    var result;
    if (state.eat(
      123
      /* { */
    ) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(
      125
      /* } */
    )) {
      if (negate && result === CharSetString) {
        state.raise("Invalid property name");
      }
      return result;
    }
    state.raise("Invalid property name");
  }
  return CharSetNone;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(
    61
    /* = */
  )) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return CharSetOk;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
  }
  return CharSetNone;
};
pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
    state.raise("Invalid property name");
  }
  if (!state.unicodeProperties.nonBinary[name].test(value)) {
    state.raise("Invalid property value");
  }
};
pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (state.unicodeProperties.binary.test(nameOrValue)) {
    return CharSetOk;
  }
  if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) {
    return CharSetString;
  }
  state.raise("Invalid property name");
};
pp$1.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
pp$1.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$1.regexp_eatCharacterClass = function(state) {
  if (state.eat(
    91
    /* [ */
  )) {
    var negate = state.eat(
      94
      /* ^ */
    );
    var result = this.regexp_classContents(state);
    if (!state.eat(
      93
      /* ] */
    )) {
      state.raise("Unterminated character class");
    }
    if (negate && result === CharSetString) {
      state.raise("Negated character class may contain strings");
    }
    return true;
  }
  return false;
};
pp$1.regexp_classContents = function(state) {
  if (state.current() === 93) {
    return CharSetOk;
  }
  if (state.switchV) {
    return this.regexp_classSetExpression(state);
  }
  this.regexp_nonEmptyClassRanges(state);
  return CharSetOk;
};
pp$1.regexp_nonEmptyClassRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(
      45
      /* - */
    ) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$1.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(
    98
    /* b */
  )) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(
    45
    /* - */
  )) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(
    99
    /* c */
  )) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$1.regexp_classSetExpression = function(state) {
  var result = CharSetOk, subResult;
  if (this.regexp_eatClassSetRange(state))
    ;
  else if (subResult = this.regexp_eatClassSetOperand(state)) {
    if (subResult === CharSetString) {
      result = CharSetString;
    }
    var start = state.pos;
    while (state.eatChars(
      [38, 38]
      /* && */
    )) {
      if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
        if (subResult !== CharSetString) {
          result = CharSetOk;
        }
        continue;
      }
      state.raise("Invalid character in character class");
    }
    if (start !== state.pos) {
      return result;
    }
    while (state.eatChars(
      [45, 45]
      /* -- */
    )) {
      if (this.regexp_eatClassSetOperand(state)) {
        continue;
      }
      state.raise("Invalid character in character class");
    }
    if (start !== state.pos) {
      return result;
    }
  } else {
    state.raise("Invalid character in character class");
  }
  for (; ; ) {
    if (this.regexp_eatClassSetRange(state)) {
      continue;
    }
    subResult = this.regexp_eatClassSetOperand(state);
    if (!subResult) {
      return result;
    }
    if (subResult === CharSetString) {
      result = CharSetString;
    }
  }
};
pp$1.regexp_eatClassSetRange = function(state) {
  var start = state.pos;
  if (this.regexp_eatClassSetCharacter(state)) {
    var left = state.lastIntValue;
    if (state.eat(
      45
      /* - */
    ) && this.regexp_eatClassSetCharacter(state)) {
      var right = state.lastIntValue;
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatClassSetOperand = function(state) {
  if (this.regexp_eatClassSetCharacter(state)) {
    return CharSetOk;
  }
  return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
};
pp$1.regexp_eatNestedClass = function(state) {
  var start = state.pos;
  if (state.eat(
    91
    /* [ */
  )) {
    var negate = state.eat(
      94
      /* ^ */
    );
    var result = this.regexp_classContents(state);
    if (state.eat(
      93
      /* ] */
    )) {
      if (negate && result === CharSetString) {
        state.raise("Negated character class may contain strings");
      }
      return result;
    }
    state.pos = start;
  }
  if (state.eat(
    92
    /* \ */
  )) {
    var result$1 = this.regexp_eatCharacterClassEscape(state);
    if (result$1) {
      return result$1;
    }
    state.pos = start;
  }
  return null;
};
pp$1.regexp_eatClassStringDisjunction = function(state) {
  var start = state.pos;
  if (state.eatChars(
    [92, 113]
    /* \q */
  )) {
    if (state.eat(
      123
      /* { */
    )) {
      var result = this.regexp_classStringDisjunctionContents(state);
      if (state.eat(
        125
        /* } */
      )) {
        return result;
      }
    } else {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return null;
};
pp$1.regexp_classStringDisjunctionContents = function(state) {
  var result = this.regexp_classString(state);
  while (state.eat(
    124
    /* | */
  )) {
    if (this.regexp_classString(state) === CharSetString) {
      result = CharSetString;
    }
  }
  return result;
};
pp$1.regexp_classString = function(state) {
  var count = 0;
  while (this.regexp_eatClassSetCharacter(state)) {
    count++;
  }
  return count === 1 ? CharSetOk : CharSetString;
};
pp$1.regexp_eatClassSetCharacter = function(state) {
  var start = state.pos;
  if (state.eat(
    92
    /* \ */
  )) {
    if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) {
      return true;
    }
    if (state.eat(
      98
      /* b */
    )) {
      state.lastIntValue = 8;
      return true;
    }
    state.pos = start;
    return false;
  }
  var ch = state.current();
  if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) {
    return false;
  }
  if (isClassSetSyntaxCharacter(ch)) {
    return false;
  }
  state.advance();
  state.lastIntValue = ch;
  return true;
};
function isClassSetReservedDoublePunctuatorCharacter(ch) {
  return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
}
function isClassSetSyntaxCharacter(ch) {
  return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
}
pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
  var ch = state.current();
  if (isClassSetReservedPunctuator(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isClassSetReservedPunctuator(ch) {
  return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
}
pp$1.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$1.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(
    120
    /* x */
  )) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$1.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
pp$1.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$1.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
pp$1.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = function Token2(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) {
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  }
  if (p.options.ranges) {
    this.range = [p.start, p.end];
  }
};
var pp = Parser.prototype;
pp.next = function(ignoreEscapeSequenceInKeyword) {
  if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
    this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
  }
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp[Symbol.iterator] = function() {
    var this$1$1 = this;
    return {
      next: function() {
        var token = this$1$1.getToken();
        return {
          done: token.type === types$1.eof,
          value: token
        };
      }
    };
  };
}
pp.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types$1.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp.readToken = function(code) {
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code);
};
pp.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 56320) {
    return code;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
};
pp.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
      ++this.curLine;
      pos = this.lineStart = nextBreak;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(
      true,
      this.input.slice(start + 2, end),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(
      false,
      this.input.slice(start + startSkip, this.pos),
      start,
      this.pos,
      startLoc,
      this.curPosition()
    );
  }
};
pp.skipSpace = function() {
  loop:
    while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
};
pp.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types$1.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types$1.dot);
  }
};
pp.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.slash, 1);
};
pp.readToken_mult_modulo_exp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types$1.star : types$1.modulo;
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types$1.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp.readToken_pipe_amp = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (this.options.ecmaVersion >= 12) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 === 61) {
        return this.finishOp(types$1.assign, 3);
      }
    }
    return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
};
pp.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.bitwiseXOR, 1);
};
pp.readToken_plus_min = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types$1.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types$1.assign, 2);
  }
  return this.finishOp(types$1.plusMin, 1);
};
pp.readToken_lt_gt = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types$1.assign, size + 1);
    }
    return this.finishOp(types$1.bitShift, size);
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types$1.relational, size);
};
pp.readToken_eq_excl = function(code) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types$1.arrow);
  }
  return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
};
pp.readToken_question = function() {
  var ecmaVersion = this.options.ecmaVersion;
  if (ecmaVersion >= 11) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 46) {
      var next2 = this.input.charCodeAt(this.pos + 2);
      if (next2 < 48 || next2 > 57) {
        return this.finishOp(types$1.questionDot, 2);
      }
    }
    if (next === 63) {
      if (ecmaVersion >= 12) {
        var next2$1 = this.input.charCodeAt(this.pos + 2);
        if (next2$1 === 61) {
          return this.finishOp(types$1.assign, 3);
        }
      }
      return this.finishOp(types$1.coalesce, 2);
    }
  }
  return this.finishOp(types$1.question, 1);
};
pp.readToken_numberSign = function() {
  var ecmaVersion = this.options.ecmaVersion;
  var code = 35;
  if (ecmaVersion >= 13) {
    ++this.pos;
    code = this.fullCharCodeAtPos();
    if (isIdentifierStart(code, true) || code === 92) {
      return this.finishToken(types$1.privateId, this.readWord1());
    }
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.getTokenFromCode = function(code) {
  switch (code) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types$1.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types$1.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types$1.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types$1.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types$1.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types$1.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types$1.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types$1.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types$1.colon);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types$1.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code);
    case 60:
    case 62:
      return this.readToken_lt_gt(code);
    case 61:
    case 33:
      return this.readToken_eq_excl(code);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(types$1.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};
pp.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(start, "Unterminated regular expression");
    }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) {
      this.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
  }
  return this.finishToken(types$1.regexp, { pattern, flags, value });
};
pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
  var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
  var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
  var start = this.pos, total = 0, lastCode = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
    var code = this.input.charCodeAt(this.pos), val = void 0;
    if (allowSeparators && code === 95) {
      if (isLegacyOctalNumericLiteral) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
      }
      if (lastCode === 95) {
        this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
      }
      if (i === 0) {
        this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
      }
      lastCode = code;
      continue;
    }
    if (code >= 97) {
      val = code - 97 + 10;
    } else if (code >= 65) {
      val = code - 65 + 10;
    } else if (code >= 48 && code <= 57) {
      val = code - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    lastCode = code;
    total = total * radix + val;
  }
  if (allowSeparators && lastCode === 95) {
    this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
function stringToNumber(str, isLegacyOctalNumericLiteral) {
  if (isLegacyOctalNumericLiteral) {
    return parseInt(str, 8);
  }
  return parseFloat(str.replace(/_/g, ""));
}
function stringToBigInt(str) {
  if (typeof BigInt !== "function") {
    return null;
  }
  return BigInt(str.replace(/_/g, ""));
}
pp.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types$1.num, val);
};
pp.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10, void 0, true) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var val$1 = stringToBigInt(this.input.slice(start, this.pos));
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types$1.num, val$1);
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var val = stringToNumber(this.input.slice(start, this.pos), octal);
  return this.finishToken(types$1.num, val);
};
pp.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code = this.readHexChar(4);
  }
  return code;
};
pp.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated string constant");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else if (ch === 8232 || ch === 8233) {
      if (this.options.ecmaVersion < 10) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
      if (this.options.locations) {
        this.curLine++;
        this.lineStart = this.pos;
      }
    } else {
      if (isNewLine(ch)) {
        this.raise(this.start, "Unterminated string constant");
      }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types$1.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this.pos >= this.input.length) {
      this.raise(this.start, "Unterminated template");
    }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types$1.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(types$1.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types$1.template, out);
    }
    if (ch === 92) {
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) {
            ++this.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};
pp.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    case 56:
    case 57:
      if (this.strict) {
        this.invalidStringToken(
          this.pos - 1,
          "Invalid escape sequence"
        );
      }
      if (inTemplate) {
        var codePos = this.pos - 1;
        this.invalidStringToken(
          codePos,
          "Invalid escape sequence in template string"
        );
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal);
      }
      if (isNewLine(ch)) {
        return "";
      }
      return String.fromCharCode(ch);
  }
};
pp.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n;
};
pp.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) {
        this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp.readWord = function() {
  var word = this.readWord1();
  var type = types$1.name;
  if (this.keywords.test(word)) {
    type = keywords[word];
  }
  return this.finishToken(type, word);
};
var version = "8.11.2";
Parser.acorn = {
  Parser,
  version,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types$1,
  keywordTypes: keywords,
  TokContext,
  tokContexts: types,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
};
function parse3(input, options) {
  return Parser.parse(input, options);
}
function parseExpressionAt2(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options);
}
function tokenizer2(input, options) {
  return Parser.tokenizer(input, options);
}
export {
  Node,
  Parser,
  Position,
  SourceLocation,
  TokContext,
  Token,
  TokenType,
  defaultOptions,
  getLineInfo,
  isIdentifierChar,
  isIdentifierStart,
  isNewLine,
  keywords as keywordTypes,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace,
  parse3 as parse,
  parseExpressionAt2 as parseExpressionAt,
  types as tokContexts,
  types$1 as tokTypes,
  tokenizer2 as tokenizer,
  version
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2xpYnMvYWNvcm4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkLiBEbyBub3QgbW9kaWZ5IG1hbnVhbGx5IVxudmFyIGFzdHJhbElkZW50aWZpZXJDb2RlcyA9IFs1MDksIDAsIDIyNywgMCwgMTUwLCA0LCAyOTQsIDksIDEzNjgsIDIsIDIsIDEsIDYsIDMsIDQxLCAyLCA1LCAwLCAxNjYsIDEsIDU3NCwgMywgOSwgOSwgMzcwLCAxLCA4MSwgMiwgNzEsIDEwLCA1MCwgMywgMTIzLCAyLCA1NCwgMTQsIDMyLCAxMCwgMywgMSwgMTEsIDMsIDQ2LCAxMCwgOCwgMCwgNDYsIDksIDcsIDIsIDM3LCAxMywgMiwgOSwgNiwgMSwgNDUsIDAsIDEzLCAyLCA0OSwgMTMsIDksIDMsIDIsIDExLCA4MywgMTEsIDcsIDAsIDMsIDAsIDE1OCwgMTEsIDYsIDksIDcsIDMsIDU2LCAxLCAyLCA2LCAzLCAxLCAzLCAyLCAxMCwgMCwgMTEsIDEsIDMsIDYsIDQsIDQsIDE5MywgMTcsIDEwLCA5LCA1LCAwLCA4MiwgMTksIDEzLCA5LCAyMTQsIDYsIDMsIDgsIDI4LCAxLCA4MywgMTYsIDE2LCA5LCA4MiwgMTIsIDksIDksIDg0LCAxNCwgNSwgOSwgMjQzLCAxNCwgMTY2LCA5LCA3MSwgNSwgMiwgMSwgMywgMywgMiwgMCwgMiwgMSwgMTMsIDksIDEyMCwgNiwgMywgNiwgNCwgMCwgMjksIDksIDQxLCA2LCAyLCAzLCA5LCAwLCAxMCwgMTAsIDQ3LCAxNSwgNDA2LCA3LCAyLCA3LCAxNywgOSwgNTcsIDIxLCAyLCAxMywgMTIzLCA1LCA0LCAwLCAyLCAxLCAyLCA2LCAyLCAwLCA5LCA5LCA0OSwgNCwgMiwgMSwgMiwgNCwgOSwgOSwgMzMwLCAzLCAxMCwgMSwgMiwgMCwgNDksIDYsIDQsIDQsIDE0LCA5LCA1MzUxLCAwLCA3LCAxNCwgMTM4MzUsIDksIDg3LCA5LCAzOSwgNCwgNjAsIDYsIDI2LCA5LCAxMDE0LCAwLCAyLCA1NCwgOCwgMywgODIsIDAsIDEyLCAxLCAxOTYyOCwgMSwgNDcwNiwgNDUsIDMsIDIyLCA1NDMsIDQsIDQsIDUsIDksIDcsIDMsIDYsIDMxLCAzLCAxNDksIDIsIDE0MTgsIDQ5LCA1MTMsIDU0LCA1LCA0OSwgOSwgMCwgMTUsIDAsIDIzLCA0LCAyLCAxNCwgMTM2MSwgNiwgMiwgMTYsIDMsIDYsIDIsIDEsIDIsIDQsIDEwMSwgMCwgMTYxLCA2LCAxMCwgOSwgMzU3LCAwLCA2MiwgMTMsIDQ5OSwgMTMsIDk4MywgNiwgMTEwLCA2LCA2LCA5LCA0NzU5LCA5LCA3ODc3MTksIDIzOV07XG5cbi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkLiBEbyBub3QgbW9kaWZ5IG1hbnVhbGx5IVxudmFyIGFzdHJhbElkZW50aWZpZXJTdGFydENvZGVzID0gWzAsIDExLCAyLCAyNSwgMiwgMTgsIDIsIDEsIDIsIDE0LCAzLCAxMywgMzUsIDEyMiwgNzAsIDUyLCAyNjgsIDI4LCA0LCA0OCwgNDgsIDMxLCAxNCwgMjksIDYsIDM3LCAxMSwgMjksIDMsIDM1LCA1LCA3LCAyLCA0LCA0MywgMTU3LCAxOSwgMzUsIDUsIDM1LCA1LCAzOSwgOSwgNTEsIDEzLCAxMCwgMiwgMTQsIDIsIDYsIDIsIDEsIDIsIDEwLCAyLCAxNCwgMiwgNiwgMiwgMSwgNjgsIDMxMCwgMTAsIDIxLCAxMSwgNywgMjUsIDUsIDIsIDQxLCAyLCA4LCA3MCwgNSwgMywgMCwgMiwgNDMsIDIsIDEsIDQsIDAsIDMsIDIyLCAxMSwgMjIsIDEwLCAzMCwgNjYsIDE4LCAyLCAxLCAxMSwgMjEsIDExLCAyNSwgNzEsIDU1LCA3LCAxLCA2NSwgMCwgMTYsIDMsIDIsIDIsIDIsIDI4LCA0MywgMjgsIDQsIDI4LCAzNiwgNywgMiwgMjcsIDI4LCA1MywgMTEsIDIxLCAxMSwgMTgsIDE0LCAxNywgMTExLCA3MiwgNTYsIDUwLCAxNCwgNTAsIDE0LCAzNSwgMzQ5LCA0MSwgNywgMSwgNzksIDI4LCAxMSwgMCwgOSwgMjEsIDQzLCAxNywgNDcsIDIwLCAyOCwgMjIsIDEzLCA1MiwgNTgsIDEsIDMsIDAsIDE0LCA0NCwgMzMsIDI0LCAyNywgMzUsIDMwLCAwLCAzLCAwLCA5LCAzNCwgNCwgMCwgMTMsIDQ3LCAxNSwgMywgMjIsIDAsIDIsIDAsIDM2LCAxNywgMiwgMjQsIDIwLCAxLCA2NCwgNiwgMiwgMCwgMiwgMywgMiwgMTQsIDIsIDksIDgsIDQ2LCAzOSwgNywgMywgMSwgMywgMjEsIDIsIDYsIDIsIDEsIDIsIDQsIDQsIDAsIDE5LCAwLCAxMywgNCwgMTU5LCA1MiwgMTksIDMsIDIxLCAyLCAzMSwgNDcsIDIxLCAxLCAyLCAwLCAxODUsIDQ2LCA0MiwgMywgMzcsIDQ3LCAyMSwgMCwgNjAsIDQyLCAxNCwgMCwgNzIsIDI2LCAzOCwgNiwgMTg2LCA0MywgMTE3LCA2MywgMzIsIDcsIDMsIDAsIDMsIDcsIDIsIDEsIDIsIDIzLCAxNiwgMCwgMiwgMCwgOTUsIDcsIDMsIDM4LCAxNywgMCwgMiwgMCwgMjksIDAsIDExLCAzOSwgOCwgMCwgMjIsIDAsIDEyLCA0NSwgMjAsIDAsIDE5LCA3MiwgMjY0LCA4LCAyLCAzNiwgMTgsIDAsIDUwLCAyOSwgMTEzLCA2LCAyLCAxLCAyLCAzNywgMjIsIDAsIDI2LCA1LCAyLCAxLCAyLCAzMSwgMTUsIDAsIDMyOCwgMTgsIDE2LCAwLCAyLCAxMiwgMiwgMzMsIDEyNSwgMCwgODAsIDkyMSwgMTAzLCAxMTAsIDE4LCAxOTUsIDI2MzcsIDk2LCAxNiwgMTA3MSwgMTgsIDUsIDQwMjYsIDU4MiwgODYzNCwgNTY4LCA4LCAzMCwgMTgsIDc4LCAxOCwgMjksIDE5LCA0NywgMTcsIDMsIDMyLCAyMCwgNiwgMTgsIDY4OSwgNjMsIDEyOSwgNzQsIDYsIDAsIDY3LCAxMiwgNjUsIDEsIDIsIDAsIDI5LCA2MTM1LCA5LCAxMjM3LCA0MywgOCwgODkzNiwgMywgMiwgNiwgMiwgMSwgMiwgMjkwLCAxNiwgMCwgMzAsIDIsIDMsIDAsIDE1LCAzLCA5LCAzOTUsIDIzMDksIDEwNiwgNiwgMTIsIDQsIDgsIDgsIDksIDU5OTEsIDg0LCAyLCA3MCwgMiwgMSwgMywgMCwgMywgMSwgMywgMywgMiwgMTEsIDIsIDAsIDIsIDYsIDIsIDY0LCAyLCAzLCAzLCA3LCAyLCA2LCAyLCAyNywgMiwgMywgMiwgNCwgMiwgMCwgNCwgNiwgMiwgMzM5LCAzLCAyNCwgMiwgMjQsIDIsIDMwLCAyLCAyNCwgMiwgMzAsIDIsIDI0LCAyLCAzMCwgMiwgMjQsIDIsIDMwLCAyLCAyNCwgMiwgNywgMTg0NSwgMzAsIDcsIDUsIDI2MiwgNjEsIDE0NywgNDQsIDExLCA2LCAxNywgMCwgMzIyLCAyOSwgMTksIDQzLCA0ODUsIDI3LCA3NTcsIDYsIDIsIDMsIDIsIDEsIDIsIDE0LCAyLCAxOTYsIDYwLCA2NywgOCwgMCwgMTIwNSwgMywgMiwgMjYsIDIsIDEsIDIsIDAsIDMsIDAsIDIsIDksIDIsIDMsIDIsIDAsIDIsIDAsIDcsIDAsIDUsIDAsIDIsIDAsIDIsIDAsIDIsIDIsIDIsIDEsIDIsIDAsIDMsIDAsIDIsIDAsIDIsIDAsIDIsIDAsIDIsIDAsIDIsIDEsIDIsIDAsIDMsIDMsIDIsIDYsIDIsIDMsIDIsIDMsIDIsIDAsIDIsIDksIDIsIDE2LCA2LCAyLCAyLCA0LCAyLCAxNiwgNDQyMSwgNDI3MTksIDMzLCA0MTUzLCA3LCAyMjEsIDMsIDU3NjEsIDE1LCA3NDcyLCAxNiwgNjIxLCAyNDY3LCA1NDEsIDE1MDcsIDQ5MzgsIDYsIDQxOTFdO1xuXG4vLyBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZC4gRG8gbm90IG1vZGlmeSBtYW51YWxseSFcbnZhciBub25BU0NJSWlkZW50aWZpZXJDaGFycyA9IFwiXFx1MjAwY1xcdTIwMGRcXHhiN1xcdTAzMDAtXFx1MDM2ZlxcdTAzODdcXHUwNDgzLVxcdTA0ODdcXHUwNTkxLVxcdTA1YmRcXHUwNWJmXFx1MDVjMVxcdTA1YzJcXHUwNWM0XFx1MDVjNVxcdTA1YzdcXHUwNjEwLVxcdTA2MWFcXHUwNjRiLVxcdTA2NjlcXHUwNjcwXFx1MDZkNi1cXHUwNmRjXFx1MDZkZi1cXHUwNmU0XFx1MDZlN1xcdTA2ZThcXHUwNmVhLVxcdTA2ZWRcXHUwNmYwLVxcdTA2ZjlcXHUwNzExXFx1MDczMC1cXHUwNzRhXFx1MDdhNi1cXHUwN2IwXFx1MDdjMC1cXHUwN2M5XFx1MDdlYi1cXHUwN2YzXFx1MDdmZFxcdTA4MTYtXFx1MDgxOVxcdTA4MWItXFx1MDgyM1xcdTA4MjUtXFx1MDgyN1xcdTA4MjktXFx1MDgyZFxcdTA4NTktXFx1MDg1YlxcdTA4OTgtXFx1MDg5ZlxcdTA4Y2EtXFx1MDhlMVxcdTA4ZTMtXFx1MDkwM1xcdTA5M2EtXFx1MDkzY1xcdTA5M2UtXFx1MDk0ZlxcdTA5NTEtXFx1MDk1N1xcdTA5NjJcXHUwOTYzXFx1MDk2Ni1cXHUwOTZmXFx1MDk4MS1cXHUwOTgzXFx1MDliY1xcdTA5YmUtXFx1MDljNFxcdTA5YzdcXHUwOWM4XFx1MDljYi1cXHUwOWNkXFx1MDlkN1xcdTA5ZTJcXHUwOWUzXFx1MDllNi1cXHUwOWVmXFx1MDlmZVxcdTBhMDEtXFx1MGEwM1xcdTBhM2NcXHUwYTNlLVxcdTBhNDJcXHUwYTQ3XFx1MGE0OFxcdTBhNGItXFx1MGE0ZFxcdTBhNTFcXHUwYTY2LVxcdTBhNzFcXHUwYTc1XFx1MGE4MS1cXHUwYTgzXFx1MGFiY1xcdTBhYmUtXFx1MGFjNVxcdTBhYzctXFx1MGFjOVxcdTBhY2ItXFx1MGFjZFxcdTBhZTJcXHUwYWUzXFx1MGFlNi1cXHUwYWVmXFx1MGFmYS1cXHUwYWZmXFx1MGIwMS1cXHUwYjAzXFx1MGIzY1xcdTBiM2UtXFx1MGI0NFxcdTBiNDdcXHUwYjQ4XFx1MGI0Yi1cXHUwYjRkXFx1MGI1NS1cXHUwYjU3XFx1MGI2MlxcdTBiNjNcXHUwYjY2LVxcdTBiNmZcXHUwYjgyXFx1MGJiZS1cXHUwYmMyXFx1MGJjNi1cXHUwYmM4XFx1MGJjYS1cXHUwYmNkXFx1MGJkN1xcdTBiZTYtXFx1MGJlZlxcdTBjMDAtXFx1MGMwNFxcdTBjM2NcXHUwYzNlLVxcdTBjNDRcXHUwYzQ2LVxcdTBjNDhcXHUwYzRhLVxcdTBjNGRcXHUwYzU1XFx1MGM1NlxcdTBjNjJcXHUwYzYzXFx1MGM2Ni1cXHUwYzZmXFx1MGM4MS1cXHUwYzgzXFx1MGNiY1xcdTBjYmUtXFx1MGNjNFxcdTBjYzYtXFx1MGNjOFxcdTBjY2EtXFx1MGNjZFxcdTBjZDVcXHUwY2Q2XFx1MGNlMlxcdTBjZTNcXHUwY2U2LVxcdTBjZWZcXHUwY2YzXFx1MGQwMC1cXHUwZDAzXFx1MGQzYlxcdTBkM2NcXHUwZDNlLVxcdTBkNDRcXHUwZDQ2LVxcdTBkNDhcXHUwZDRhLVxcdTBkNGRcXHUwZDU3XFx1MGQ2MlxcdTBkNjNcXHUwZDY2LVxcdTBkNmZcXHUwZDgxLVxcdTBkODNcXHUwZGNhXFx1MGRjZi1cXHUwZGQ0XFx1MGRkNlxcdTBkZDgtXFx1MGRkZlxcdTBkZTYtXFx1MGRlZlxcdTBkZjJcXHUwZGYzXFx1MGUzMVxcdTBlMzQtXFx1MGUzYVxcdTBlNDctXFx1MGU0ZVxcdTBlNTAtXFx1MGU1OVxcdTBlYjFcXHUwZWI0LVxcdTBlYmNcXHUwZWM4LVxcdTBlY2VcXHUwZWQwLVxcdTBlZDlcXHUwZjE4XFx1MGYxOVxcdTBmMjAtXFx1MGYyOVxcdTBmMzVcXHUwZjM3XFx1MGYzOVxcdTBmM2VcXHUwZjNmXFx1MGY3MS1cXHUwZjg0XFx1MGY4NlxcdTBmODdcXHUwZjhkLVxcdTBmOTdcXHUwZjk5LVxcdTBmYmNcXHUwZmM2XFx1MTAyYi1cXHUxMDNlXFx1MTA0MC1cXHUxMDQ5XFx1MTA1Ni1cXHUxMDU5XFx1MTA1ZS1cXHUxMDYwXFx1MTA2Mi1cXHUxMDY0XFx1MTA2Ny1cXHUxMDZkXFx1MTA3MS1cXHUxMDc0XFx1MTA4Mi1cXHUxMDhkXFx1MTA4Zi1cXHUxMDlkXFx1MTM1ZC1cXHUxMzVmXFx1MTM2OS1cXHUxMzcxXFx1MTcxMi1cXHUxNzE1XFx1MTczMi1cXHUxNzM0XFx1MTc1MlxcdTE3NTNcXHUxNzcyXFx1MTc3M1xcdTE3YjQtXFx1MTdkM1xcdTE3ZGRcXHUxN2UwLVxcdTE3ZTlcXHUxODBiLVxcdTE4MGRcXHUxODBmLVxcdTE4MTlcXHUxOGE5XFx1MTkyMC1cXHUxOTJiXFx1MTkzMC1cXHUxOTNiXFx1MTk0Ni1cXHUxOTRmXFx1MTlkMC1cXHUxOWRhXFx1MWExNy1cXHUxYTFiXFx1MWE1NS1cXHUxYTVlXFx1MWE2MC1cXHUxYTdjXFx1MWE3Zi1cXHUxYTg5XFx1MWE5MC1cXHUxYTk5XFx1MWFiMC1cXHUxYWJkXFx1MWFiZi1cXHUxYWNlXFx1MWIwMC1cXHUxYjA0XFx1MWIzNC1cXHUxYjQ0XFx1MWI1MC1cXHUxYjU5XFx1MWI2Yi1cXHUxYjczXFx1MWI4MC1cXHUxYjgyXFx1MWJhMS1cXHUxYmFkXFx1MWJiMC1cXHUxYmI5XFx1MWJlNi1cXHUxYmYzXFx1MWMyNC1cXHUxYzM3XFx1MWM0MC1cXHUxYzQ5XFx1MWM1MC1cXHUxYzU5XFx1MWNkMC1cXHUxY2QyXFx1MWNkNC1cXHUxY2U4XFx1MWNlZFxcdTFjZjRcXHUxY2Y3LVxcdTFjZjlcXHUxZGMwLVxcdTFkZmZcXHUyMDBjXFx1MjAwZFxcdTIwM2ZcXHUyMDQwXFx1MjA1NFxcdTIwZDAtXFx1MjBkY1xcdTIwZTFcXHUyMGU1LVxcdTIwZjBcXHUyY2VmLVxcdTJjZjFcXHUyZDdmXFx1MmRlMC1cXHUyZGZmXFx1MzAyYS1cXHUzMDJmXFx1MzA5OVxcdTMwOWFcXHUzMGZiXFx1YTYyMC1cXHVhNjI5XFx1YTY2ZlxcdWE2NzQtXFx1YTY3ZFxcdWE2OWVcXHVhNjlmXFx1YTZmMFxcdWE2ZjFcXHVhODAyXFx1YTgwNlxcdWE4MGJcXHVhODIzLVxcdWE4MjdcXHVhODJjXFx1YTg4MFxcdWE4ODFcXHVhOGI0LVxcdWE4YzVcXHVhOGQwLVxcdWE4ZDlcXHVhOGUwLVxcdWE4ZjFcXHVhOGZmLVxcdWE5MDlcXHVhOTI2LVxcdWE5MmRcXHVhOTQ3LVxcdWE5NTNcXHVhOTgwLVxcdWE5ODNcXHVhOWIzLVxcdWE5YzBcXHVhOWQwLVxcdWE5ZDlcXHVhOWU1XFx1YTlmMC1cXHVhOWY5XFx1YWEyOS1cXHVhYTM2XFx1YWE0M1xcdWFhNGNcXHVhYTRkXFx1YWE1MC1cXHVhYTU5XFx1YWE3Yi1cXHVhYTdkXFx1YWFiMFxcdWFhYjItXFx1YWFiNFxcdWFhYjdcXHVhYWI4XFx1YWFiZVxcdWFhYmZcXHVhYWMxXFx1YWFlYi1cXHVhYWVmXFx1YWFmNVxcdWFhZjZcXHVhYmUzLVxcdWFiZWFcXHVhYmVjXFx1YWJlZFxcdWFiZjAtXFx1YWJmOVxcdWZiMWVcXHVmZTAwLVxcdWZlMGZcXHVmZTIwLVxcdWZlMmZcXHVmZTMzXFx1ZmUzNFxcdWZlNGQtXFx1ZmU0ZlxcdWZmMTAtXFx1ZmYxOVxcdWZmM2ZcXHVmZjY1XCI7XG5cbi8vIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkLiBEbyBub3QgbW9kaWZ5IG1hbnVhbGx5IVxudmFyIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0Q2hhcnMgPSBcIlxceGFhXFx4YjVcXHhiYVxceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMmMxXFx1MDJjNi1cXHUwMmQxXFx1MDJlMC1cXHUwMmU0XFx1MDJlY1xcdTAyZWVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN2EtXFx1MDM3ZFxcdTAzN2ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhhXFx1MDM4Y1xcdTAzOGUtXFx1MDNhMVxcdTAzYTMtXFx1MDNmNVxcdTAzZjctXFx1MDQ4MVxcdTA0OGEtXFx1MDUyZlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYwLVxcdTA1ODhcXHUwNWQwLVxcdTA1ZWFcXHUwNWVmLVxcdTA1ZjJcXHUwNjIwLVxcdTA2NGFcXHUwNjZlXFx1MDY2ZlxcdTA2NzEtXFx1MDZkM1xcdTA2ZDVcXHUwNmU1XFx1MDZlNlxcdTA2ZWVcXHUwNmVmXFx1MDZmYS1cXHUwNmZjXFx1MDZmZlxcdTA3MTBcXHUwNzEyLVxcdTA3MmZcXHUwNzRkLVxcdTA3YTVcXHUwN2IxXFx1MDdjYS1cXHUwN2VhXFx1MDdmNFxcdTA3ZjVcXHUwN2ZhXFx1MDgwMC1cXHUwODE1XFx1MDgxYVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDg2MC1cXHUwODZhXFx1MDg3MC1cXHUwODg3XFx1MDg4OS1cXHUwODhlXFx1MDhhMC1cXHUwOGM5XFx1MDkwNC1cXHUwOTM5XFx1MDkzZFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5ODBcXHUwOTg1LVxcdTA5OGNcXHUwOThmXFx1MDk5MFxcdTA5OTMtXFx1MDlhOFxcdTA5YWEtXFx1MDliMFxcdTA5YjJcXHUwOWI2LVxcdTA5YjlcXHUwOWJkXFx1MDljZVxcdTA5ZGNcXHUwOWRkXFx1MDlkZi1cXHUwOWUxXFx1MDlmMFxcdTA5ZjFcXHUwOWZjXFx1MGEwNS1cXHUwYTBhXFx1MGEwZlxcdTBhMTBcXHUwYTEzLVxcdTBhMjhcXHUwYTJhLVxcdTBhMzBcXHUwYTMyXFx1MGEzM1xcdTBhMzVcXHUwYTM2XFx1MGEzOFxcdTBhMzlcXHUwYTU5LVxcdTBhNWNcXHUwYTVlXFx1MGE3Mi1cXHUwYTc0XFx1MGE4NS1cXHUwYThkXFx1MGE4Zi1cXHUwYTkxXFx1MGE5My1cXHUwYWE4XFx1MGFhYS1cXHUwYWIwXFx1MGFiMlxcdTBhYjNcXHUwYWI1LVxcdTBhYjlcXHUwYWJkXFx1MGFkMFxcdTBhZTBcXHUwYWUxXFx1MGFmOVxcdTBiMDUtXFx1MGIwY1xcdTBiMGZcXHUwYjEwXFx1MGIxMy1cXHUwYjI4XFx1MGIyYS1cXHUwYjMwXFx1MGIzMlxcdTBiMzNcXHUwYjM1LVxcdTBiMzlcXHUwYjNkXFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjcxXFx1MGI4M1xcdTBiODUtXFx1MGI4YVxcdTBiOGUtXFx1MGI5MFxcdTBiOTItXFx1MGI5NVxcdTBiOTlcXHUwYjlhXFx1MGI5Y1xcdTBiOWVcXHUwYjlmXFx1MGJhM1xcdTBiYTRcXHUwYmE4LVxcdTBiYWFcXHUwYmFlLVxcdTBiYjlcXHUwYmQwXFx1MGMwNS1cXHUwYzBjXFx1MGMwZS1cXHUwYzEwXFx1MGMxMi1cXHUwYzI4XFx1MGMyYS1cXHUwYzM5XFx1MGMzZFxcdTBjNTgtXFx1MGM1YVxcdTBjNWRcXHUwYzYwXFx1MGM2MVxcdTBjODBcXHUwYzg1LVxcdTBjOGNcXHUwYzhlLVxcdTBjOTBcXHUwYzkyLVxcdTBjYThcXHUwY2FhLVxcdTBjYjNcXHUwY2I1LVxcdTBjYjlcXHUwY2JkXFx1MGNkZFxcdTBjZGVcXHUwY2UwXFx1MGNlMVxcdTBjZjFcXHUwY2YyXFx1MGQwNC1cXHUwZDBjXFx1MGQwZS1cXHUwZDEwXFx1MGQxMi1cXHUwZDNhXFx1MGQzZFxcdTBkNGVcXHUwZDU0LVxcdTBkNTZcXHUwZDVmLVxcdTBkNjFcXHUwZDdhLVxcdTBkN2ZcXHUwZDg1LVxcdTBkOTZcXHUwZDlhLVxcdTBkYjFcXHUwZGIzLVxcdTBkYmJcXHUwZGJkXFx1MGRjMC1cXHUwZGM2XFx1MGUwMS1cXHUwZTMwXFx1MGUzMlxcdTBlMzNcXHUwZTQwLVxcdTBlNDZcXHUwZTgxXFx1MGU4MlxcdTBlODRcXHUwZTg2LVxcdTBlOGFcXHUwZThjLVxcdTBlYTNcXHUwZWE1XFx1MGVhNy1cXHUwZWIwXFx1MGViMlxcdTBlYjNcXHUwZWJkXFx1MGVjMC1cXHUwZWM0XFx1MGVjNlxcdTBlZGMtXFx1MGVkZlxcdTBmMDBcXHUwZjQwLVxcdTBmNDdcXHUwZjQ5LVxcdTBmNmNcXHUwZjg4LVxcdTBmOGNcXHUxMDAwLVxcdTEwMmFcXHUxMDNmXFx1MTA1MC1cXHUxMDU1XFx1MTA1YS1cXHUxMDVkXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2ZS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4ZVxcdTEwYTAtXFx1MTBjNVxcdTEwYzdcXHUxMGNkXFx1MTBkMC1cXHUxMGZhXFx1MTBmYy1cXHUxMjQ4XFx1MTI0YS1cXHUxMjRkXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNWEtXFx1MTI1ZFxcdTEyNjAtXFx1MTI4OFxcdTEyOGEtXFx1MTI4ZFxcdTEyOTAtXFx1MTJiMFxcdTEyYjItXFx1MTJiNVxcdTEyYjgtXFx1MTJiZVxcdTEyYzBcXHUxMmMyLVxcdTEyYzVcXHUxMmM4LVxcdTEyZDZcXHUxMmQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNWFcXHUxMzgwLVxcdTEzOGZcXHUxM2EwLVxcdTEzZjVcXHUxM2Y4LVxcdTEzZmRcXHUxNDAxLVxcdTE2NmNcXHUxNjZmLVxcdTE2N2ZcXHUxNjgxLVxcdTE2OWFcXHUxNmEwLVxcdTE2ZWFcXHUxNmVlLVxcdTE2ZjhcXHUxNzAwLVxcdTE3MTFcXHUxNzFmLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NmNcXHUxNzZlLVxcdTE3NzBcXHUxNzgwLVxcdTE3YjNcXHUxN2Q3XFx1MTdkY1xcdTE4MjAtXFx1MTg3OFxcdTE4ODAtXFx1MThhOFxcdTE4YWFcXHUxOGIwLVxcdTE4ZjVcXHUxOTAwLVxcdTE5MWVcXHUxOTUwLVxcdTE5NmRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5YWJcXHUxOWIwLVxcdTE5YzlcXHUxYTAwLVxcdTFhMTZcXHUxYTIwLVxcdTFhNTRcXHUxYWE3XFx1MWIwNS1cXHUxYjMzXFx1MWI0NS1cXHUxYjRjXFx1MWI4My1cXHUxYmEwXFx1MWJhZVxcdTFiYWZcXHUxYmJhLVxcdTFiZTVcXHUxYzAwLVxcdTFjMjNcXHUxYzRkLVxcdTFjNGZcXHUxYzVhLVxcdTFjN2RcXHUxYzgwLVxcdTFjODhcXHUxYzkwLVxcdTFjYmFcXHUxY2JkLVxcdTFjYmZcXHUxY2U5LVxcdTFjZWNcXHUxY2VlLVxcdTFjZjNcXHUxY2Y1XFx1MWNmNlxcdTFjZmFcXHUxZDAwLVxcdTFkYmZcXHUxZTAwLVxcdTFmMTVcXHUxZjE4LVxcdTFmMWRcXHUxZjIwLVxcdTFmNDVcXHUxZjQ4LVxcdTFmNGRcXHUxZjUwLVxcdTFmNTdcXHUxZjU5XFx1MWY1YlxcdTFmNWRcXHUxZjVmLVxcdTFmN2RcXHUxZjgwLVxcdTFmYjRcXHUxZmI2LVxcdTFmYmNcXHUxZmJlXFx1MWZjMi1cXHUxZmM0XFx1MWZjNi1cXHUxZmNjXFx1MWZkMC1cXHUxZmQzXFx1MWZkNi1cXHUxZmRiXFx1MWZlMC1cXHUxZmVjXFx1MWZmMi1cXHUxZmY0XFx1MWZmNi1cXHUxZmZjXFx1MjA3MVxcdTIwN2ZcXHUyMDkwLVxcdTIwOWNcXHUyMTAyXFx1MjEwN1xcdTIxMGEtXFx1MjExM1xcdTIxMTVcXHUyMTE4LVxcdTIxMWRcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJhLVxcdTIxMzlcXHUyMTNjLVxcdTIxM2ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRlXFx1MjE2MC1cXHUyMTg4XFx1MmMwMC1cXHUyY2U0XFx1MmNlYi1cXHUyY2VlXFx1MmNmMlxcdTJjZjNcXHUyZDAwLVxcdTJkMjVcXHUyZDI3XFx1MmQyZFxcdTJkMzAtXFx1MmQ2N1xcdTJkNmZcXHUyZDgwLVxcdTJkOTZcXHUyZGEwLVxcdTJkYTZcXHUyZGE4LVxcdTJkYWVcXHUyZGIwLVxcdTJkYjZcXHUyZGI4LVxcdTJkYmVcXHUyZGMwLVxcdTJkYzZcXHUyZGM4LVxcdTJkY2VcXHUyZGQwLVxcdTJkZDZcXHUyZGQ4LVxcdTJkZGVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM2NcXHUzMDQxLVxcdTMwOTZcXHUzMDliLVxcdTMwOWZcXHUzMGExLVxcdTMwZmFcXHUzMGZjLVxcdTMwZmZcXHUzMTA1LVxcdTMxMmZcXHUzMTMxLVxcdTMxOGVcXHUzMWEwLVxcdTMxYmZcXHUzMWYwLVxcdTMxZmZcXHUzNDAwLVxcdTRkYmZcXHU0ZTAwLVxcdWE0OGNcXHVhNGQwLVxcdWE0ZmRcXHVhNTAwLVxcdWE2MGNcXHVhNjEwLVxcdWE2MWZcXHVhNjJhXFx1YTYyYlxcdWE2NDAtXFx1YTY2ZVxcdWE2N2YtXFx1YTY5ZFxcdWE2YTAtXFx1YTZlZlxcdWE3MTctXFx1YTcxZlxcdWE3MjItXFx1YTc4OFxcdWE3OGItXFx1YTdjYVxcdWE3ZDBcXHVhN2QxXFx1YTdkM1xcdWE3ZDUtXFx1YTdkOVxcdWE3ZjItXFx1YTgwMVxcdWE4MDMtXFx1YTgwNVxcdWE4MDctXFx1YTgwYVxcdWE4MGMtXFx1YTgyMlxcdWE4NDAtXFx1YTg3M1xcdWE4ODItXFx1YThiM1xcdWE4ZjItXFx1YThmN1xcdWE4ZmJcXHVhOGZkXFx1YThmZVxcdWE5MGEtXFx1YTkyNVxcdWE5MzAtXFx1YTk0NlxcdWE5NjAtXFx1YTk3Y1xcdWE5ODQtXFx1YTliMlxcdWE5Y2ZcXHVhOWUwLVxcdWE5ZTRcXHVhOWU2LVxcdWE5ZWZcXHVhOWZhLVxcdWE5ZmVcXHVhYTAwLVxcdWFhMjhcXHVhYTQwLVxcdWFhNDJcXHVhYTQ0LVxcdWFhNGJcXHVhYTYwLVxcdWFhNzZcXHVhYTdhXFx1YWE3ZS1cXHVhYWFmXFx1YWFiMVxcdWFhYjVcXHVhYWI2XFx1YWFiOS1cXHVhYWJkXFx1YWFjMFxcdWFhYzJcXHVhYWRiLVxcdWFhZGRcXHVhYWUwLVxcdWFhZWFcXHVhYWYyLVxcdWFhZjRcXHVhYjAxLVxcdWFiMDZcXHVhYjA5LVxcdWFiMGVcXHVhYjExLVxcdWFiMTZcXHVhYjIwLVxcdWFiMjZcXHVhYjI4LVxcdWFiMmVcXHVhYjMwLVxcdWFiNWFcXHVhYjVjLVxcdWFiNjlcXHVhYjcwLVxcdWFiZTJcXHVhYzAwLVxcdWQ3YTNcXHVkN2IwLVxcdWQ3YzZcXHVkN2NiLVxcdWQ3ZmJcXHVmOTAwLVxcdWZhNmRcXHVmYTcwLVxcdWZhZDlcXHVmYjAwLVxcdWZiMDZcXHVmYjEzLVxcdWZiMTdcXHVmYjFkXFx1ZmIxZi1cXHVmYjI4XFx1ZmIyYS1cXHVmYjM2XFx1ZmIzOC1cXHVmYjNjXFx1ZmIzZVxcdWZiNDBcXHVmYjQxXFx1ZmI0M1xcdWZiNDRcXHVmYjQ2LVxcdWZiYjFcXHVmYmQzLVxcdWZkM2RcXHVmZDUwLVxcdWZkOGZcXHVmZDkyLVxcdWZkYzdcXHVmZGYwLVxcdWZkZmJcXHVmZTcwLVxcdWZlNzRcXHVmZTc2LVxcdWZlZmNcXHVmZjIxLVxcdWZmM2FcXHVmZjQxLVxcdWZmNWFcXHVmZjY2LVxcdWZmYmVcXHVmZmMyLVxcdWZmYzdcXHVmZmNhLVxcdWZmY2ZcXHVmZmQyLVxcdWZmZDdcXHVmZmRhLVxcdWZmZGNcIjtcblxuLy8gVGhlc2UgYXJlIGEgcnVuLWxlbmd0aCBhbmQgb2Zmc2V0IGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4vLyA+MHhmZmZmIGNvZGUgcG9pbnRzIHRoYXQgYXJlIGEgdmFsaWQgcGFydCBvZiBpZGVudGlmaWVycy4gVGhlXG4vLyBvZmZzZXQgc3RhcnRzIGF0IDB4MTAwMDAsIGFuZCBlYWNoIHBhaXIgb2YgbnVtYmVycyByZXByZXNlbnRzIGFuXG4vLyBvZmZzZXQgdG8gdGhlIG5leHQgcmFuZ2UsIGFuZCB0aGVuIGEgc2l6ZSBvZiB0aGUgcmFuZ2UuXG5cbi8vIFJlc2VydmVkIHdvcmQgbGlzdHMgZm9yIHZhcmlvdXMgZGlhbGVjdHMgb2YgdGhlIGxhbmd1YWdlXG5cbnZhciByZXNlcnZlZFdvcmRzID0ge1xuICAzOiBcImFic3RyYWN0IGJvb2xlYW4gYnl0ZSBjaGFyIGNsYXNzIGRvdWJsZSBlbnVtIGV4cG9ydCBleHRlbmRzIGZpbmFsIGZsb2F0IGdvdG8gaW1wbGVtZW50cyBpbXBvcnQgaW50IGludGVyZmFjZSBsb25nIG5hdGl2ZSBwYWNrYWdlIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyBzaG9ydCBzdGF0aWMgc3VwZXIgc3luY2hyb25pemVkIHRocm93cyB0cmFuc2llbnQgdm9sYXRpbGVcIixcbiAgNTogXCJjbGFzcyBlbnVtIGV4dGVuZHMgc3VwZXIgY29uc3QgZXhwb3J0IGltcG9ydFwiLFxuICA2OiBcImVudW1cIixcbiAgc3RyaWN0OiBcImltcGxlbWVudHMgaW50ZXJmYWNlIGxldCBwYWNrYWdlIHByaXZhdGUgcHJvdGVjdGVkIHB1YmxpYyBzdGF0aWMgeWllbGRcIixcbiAgc3RyaWN0QmluZDogXCJldmFsIGFyZ3VtZW50c1wiXG59O1xuXG4vLyBBbmQgdGhlIGtleXdvcmRzXG5cbnZhciBlY21hNUFuZExlc3NLZXl3b3JkcyA9IFwiYnJlYWsgY2FzZSBjYXRjaCBjb250aW51ZSBkZWJ1Z2dlciBkZWZhdWx0IGRvIGVsc2UgZmluYWxseSBmb3IgZnVuY3Rpb24gaWYgcmV0dXJuIHN3aXRjaCB0aHJvdyB0cnkgdmFyIHdoaWxlIHdpdGggbnVsbCB0cnVlIGZhbHNlIGluc3RhbmNlb2YgdHlwZW9mIHZvaWQgZGVsZXRlIG5ldyBpbiB0aGlzXCI7XG5cbnZhciBrZXl3b3JkcyQxID0ge1xuICA1OiBlY21hNUFuZExlc3NLZXl3b3JkcyxcbiAgXCI1bW9kdWxlXCI6IGVjbWE1QW5kTGVzc0tleXdvcmRzICsgXCIgZXhwb3J0IGltcG9ydFwiLFxuICA2OiBlY21hNUFuZExlc3NLZXl3b3JkcyArIFwiIGNvbnN0IGNsYXNzIGV4dGVuZHMgZXhwb3J0IGltcG9ydCBzdXBlclwiXG59O1xuXG52YXIga2V5d29yZFJlbGF0aW9uYWxPcGVyYXRvciA9IC9eaW4oc3RhbmNlb2YpPyQvO1xuXG4vLyAjIyBDaGFyYWN0ZXIgY2F0ZWdvcmllc1xuXG52YXIgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnQgPSBuZXcgUmVnRXhwKFwiW1wiICsgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyArIFwiXVwiKTtcbnZhciBub25BU0NJSWlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiW1wiICsgbm9uQVNDSUlpZGVudGlmaWVyU3RhcnRDaGFycyArIG5vbkFTQ0lJaWRlbnRpZmllckNoYXJzICsgXCJdXCIpO1xuXG4vLyBUaGlzIGhhcyBhIGNvbXBsZXhpdHkgbGluZWFyIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY29kZS4gVGhlXG4vLyBhc3N1bXB0aW9uIGlzIHRoYXQgbG9va2luZyB1cCBhc3RyYWwgaWRlbnRpZmllciBjaGFyYWN0ZXJzIGlzXG4vLyByYXJlLlxuZnVuY3Rpb24gaXNJbkFzdHJhbFNldChjb2RlLCBzZXQpIHtcbiAgdmFyIHBvcyA9IDB4MTAwMDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcG9zICs9IHNldFtpXTtcbiAgICBpZiAocG9zID4gY29kZSkgeyByZXR1cm4gZmFsc2UgfVxuICAgIHBvcyArPSBzZXRbaSArIDFdO1xuICAgIGlmIChwb3MgPj0gY29kZSkgeyByZXR1cm4gdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIFRlc3Qgd2hldGhlciBhIGdpdmVuIGNoYXJhY3RlciBjb2RlIHN0YXJ0cyBhbiBpZGVudGlmaWVyLlxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjb2RlLCBhc3RyYWwpIHtcbiAgaWYgKGNvZGUgPCA2NSkgeyByZXR1cm4gY29kZSA9PT0gMzYgfVxuICBpZiAoY29kZSA8IDkxKSB7IHJldHVybiB0cnVlIH1cbiAgaWYgKGNvZGUgPCA5NykgeyByZXR1cm4gY29kZSA9PT0gOTUgfVxuICBpZiAoY29kZSA8IDEyMykgeyByZXR1cm4gdHJ1ZSB9XG4gIGlmIChjb2RlIDw9IDB4ZmZmZikgeyByZXR1cm4gY29kZSA+PSAweGFhICYmIG5vbkFTQ0lJaWRlbnRpZmllclN0YXJ0LnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSkgfVxuICBpZiAoYXN0cmFsID09PSBmYWxzZSkgeyByZXR1cm4gZmFsc2UgfVxuICByZXR1cm4gaXNJbkFzdHJhbFNldChjb2RlLCBhc3RyYWxJZGVudGlmaWVyU3RhcnRDb2Rlcylcbn1cblxuLy8gVGVzdCB3aGV0aGVyIGEgZ2l2ZW4gY2hhcmFjdGVyIGlzIHBhcnQgb2YgYW4gaWRlbnRpZmllci5cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyQ2hhcihjb2RlLCBhc3RyYWwpIHtcbiAgaWYgKGNvZGUgPCA0OCkgeyByZXR1cm4gY29kZSA9PT0gMzYgfVxuICBpZiAoY29kZSA8IDU4KSB7IHJldHVybiB0cnVlIH1cbiAgaWYgKGNvZGUgPCA2NSkgeyByZXR1cm4gZmFsc2UgfVxuICBpZiAoY29kZSA8IDkxKSB7IHJldHVybiB0cnVlIH1cbiAgaWYgKGNvZGUgPCA5NykgeyByZXR1cm4gY29kZSA9PT0gOTUgfVxuICBpZiAoY29kZSA8IDEyMykgeyByZXR1cm4gdHJ1ZSB9XG4gIGlmIChjb2RlIDw9IDB4ZmZmZikgeyByZXR1cm4gY29kZSA+PSAweGFhICYmIG5vbkFTQ0lJaWRlbnRpZmllci50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpIH1cbiAgaWYgKGFzdHJhbCA9PT0gZmFsc2UpIHsgcmV0dXJuIGZhbHNlIH1cbiAgcmV0dXJuIGlzSW5Bc3RyYWxTZXQoY29kZSwgYXN0cmFsSWRlbnRpZmllclN0YXJ0Q29kZXMpIHx8IGlzSW5Bc3RyYWxTZXQoY29kZSwgYXN0cmFsSWRlbnRpZmllckNvZGVzKVxufVxuXG4vLyAjIyBUb2tlbiB0eXBlc1xuXG4vLyBUaGUgYXNzaWdubWVudCBvZiBmaW5lLWdyYWluZWQsIGluZm9ybWF0aW9uLWNhcnJ5aW5nIHR5cGUgb2JqZWN0c1xuLy8gYWxsb3dzIHRoZSB0b2tlbml6ZXIgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uIGl0IGhhcyBhYm91dCBhXG4vLyB0b2tlbiBpbiBhIHdheSB0aGF0IGlzIHZlcnkgY2hlYXAgZm9yIHRoZSBwYXJzZXIgdG8gbG9vayB1cC5cblxuLy8gQWxsIHRva2VuIHR5cGUgdmFyaWFibGVzIHN0YXJ0IHdpdGggYW4gdW5kZXJzY29yZSwgdG8gbWFrZSB0aGVtXG4vLyBlYXN5IHRvIHJlY29nbml6ZS5cblxuLy8gVGhlIGBiZWZvcmVFeHByYCBwcm9wZXJ0eSBpcyB1c2VkIHRvIGRpc2FtYmlndWF0ZSBiZXR3ZWVuIHJlZ3VsYXJcbi8vIGV4cHJlc3Npb25zIGFuZCBkaXZpc2lvbnMuIEl0IGlzIHNldCBvbiBhbGwgdG9rZW4gdHlwZXMgdGhhdCBjYW5cbi8vIGJlIGZvbGxvd2VkIGJ5IGFuIGV4cHJlc3Npb24gKHRodXMsIGEgc2xhc2ggYWZ0ZXIgdGhlbSB3b3VsZCBiZSBhXG4vLyByZWd1bGFyIGV4cHJlc3Npb24pLlxuLy9cbi8vIFRoZSBgc3RhcnRzRXhwcmAgcHJvcGVydHkgaXMgdXNlZCB0byBjaGVjayBpZiB0aGUgdG9rZW4gZW5kcyBhXG4vLyBgeWllbGRgIGV4cHJlc3Npb24uIEl0IGlzIHNldCBvbiBhbGwgdG9rZW4gdHlwZXMgdGhhdCBlaXRoZXIgY2FuXG4vLyBkaXJlY3RseSBzdGFydCBhbiBleHByZXNzaW9uIChsaWtlIGEgcXVvdGF0aW9uIG1hcmspIG9yIGNhblxuLy8gY29udGludWUgYW4gZXhwcmVzc2lvbiAobGlrZSB0aGUgYm9keSBvZiBhIHN0cmluZykuXG4vL1xuLy8gYGlzTG9vcGAgbWFya3MgYSBrZXl3b3JkIGFzIHN0YXJ0aW5nIGEgbG9vcCwgd2hpY2ggaXMgaW1wb3J0YW50XG4vLyB0byBrbm93IHdoZW4gcGFyc2luZyBhIGxhYmVsLCBpbiBvcmRlciB0byBhbGxvdyBvciBkaXNhbGxvd1xuLy8gY29udGludWUganVtcHMgdG8gdGhhdCBsYWJlbC5cblxudmFyIFRva2VuVHlwZSA9IGZ1bmN0aW9uIFRva2VuVHlwZShsYWJlbCwgY29uZikge1xuICBpZiAoIGNvbmYgPT09IHZvaWQgMCApIGNvbmYgPSB7fTtcblxuICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gIHRoaXMua2V5d29yZCA9IGNvbmYua2V5d29yZDtcbiAgdGhpcy5iZWZvcmVFeHByID0gISFjb25mLmJlZm9yZUV4cHI7XG4gIHRoaXMuc3RhcnRzRXhwciA9ICEhY29uZi5zdGFydHNFeHByO1xuICB0aGlzLmlzTG9vcCA9ICEhY29uZi5pc0xvb3A7XG4gIHRoaXMuaXNBc3NpZ24gPSAhIWNvbmYuaXNBc3NpZ247XG4gIHRoaXMucHJlZml4ID0gISFjb25mLnByZWZpeDtcbiAgdGhpcy5wb3N0Zml4ID0gISFjb25mLnBvc3RmaXg7XG4gIHRoaXMuYmlub3AgPSBjb25mLmJpbm9wIHx8IG51bGw7XG4gIHRoaXMudXBkYXRlQ29udGV4dCA9IG51bGw7XG59O1xuXG5mdW5jdGlvbiBiaW5vcChuYW1lLCBwcmVjKSB7XG4gIHJldHVybiBuZXcgVG9rZW5UeXBlKG5hbWUsIHtiZWZvcmVFeHByOiB0cnVlLCBiaW5vcDogcHJlY30pXG59XG52YXIgYmVmb3JlRXhwciA9IHtiZWZvcmVFeHByOiB0cnVlfSwgc3RhcnRzRXhwciA9IHtzdGFydHNFeHByOiB0cnVlfTtcblxuLy8gTWFwIGtleXdvcmQgbmFtZXMgdG8gdG9rZW4gdHlwZXMuXG5cbnZhciBrZXl3b3JkcyA9IHt9O1xuXG4vLyBTdWNjaW5jdCBkZWZpbml0aW9ucyBvZiBrZXl3b3JkIHRva2VuIHR5cGVzXG5mdW5jdGlvbiBrdyhuYW1lLCBvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIG9wdGlvbnMua2V5d29yZCA9IG5hbWU7XG4gIHJldHVybiBrZXl3b3Jkc1tuYW1lXSA9IG5ldyBUb2tlblR5cGUobmFtZSwgb3B0aW9ucylcbn1cblxudmFyIHR5cGVzJDEgPSB7XG4gIG51bTogbmV3IFRva2VuVHlwZShcIm51bVwiLCBzdGFydHNFeHByKSxcbiAgcmVnZXhwOiBuZXcgVG9rZW5UeXBlKFwicmVnZXhwXCIsIHN0YXJ0c0V4cHIpLFxuICBzdHJpbmc6IG5ldyBUb2tlblR5cGUoXCJzdHJpbmdcIiwgc3RhcnRzRXhwciksXG4gIG5hbWU6IG5ldyBUb2tlblR5cGUoXCJuYW1lXCIsIHN0YXJ0c0V4cHIpLFxuICBwcml2YXRlSWQ6IG5ldyBUb2tlblR5cGUoXCJwcml2YXRlSWRcIiwgc3RhcnRzRXhwciksXG4gIGVvZjogbmV3IFRva2VuVHlwZShcImVvZlwiKSxcblxuICAvLyBQdW5jdHVhdGlvbiB0b2tlbiB0eXBlcy5cbiAgYnJhY2tldEw6IG5ldyBUb2tlblR5cGUoXCJbXCIsIHtiZWZvcmVFeHByOiB0cnVlLCBzdGFydHNFeHByOiB0cnVlfSksXG4gIGJyYWNrZXRSOiBuZXcgVG9rZW5UeXBlKFwiXVwiKSxcbiAgYnJhY2VMOiBuZXcgVG9rZW5UeXBlKFwie1wiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxuICBicmFjZVI6IG5ldyBUb2tlblR5cGUoXCJ9XCIpLFxuICBwYXJlbkw6IG5ldyBUb2tlblR5cGUoXCIoXCIsIHtiZWZvcmVFeHByOiB0cnVlLCBzdGFydHNFeHByOiB0cnVlfSksXG4gIHBhcmVuUjogbmV3IFRva2VuVHlwZShcIilcIiksXG4gIGNvbW1hOiBuZXcgVG9rZW5UeXBlKFwiLFwiLCBiZWZvcmVFeHByKSxcbiAgc2VtaTogbmV3IFRva2VuVHlwZShcIjtcIiwgYmVmb3JlRXhwciksXG4gIGNvbG9uOiBuZXcgVG9rZW5UeXBlKFwiOlwiLCBiZWZvcmVFeHByKSxcbiAgZG90OiBuZXcgVG9rZW5UeXBlKFwiLlwiKSxcbiAgcXVlc3Rpb246IG5ldyBUb2tlblR5cGUoXCI/XCIsIGJlZm9yZUV4cHIpLFxuICBxdWVzdGlvbkRvdDogbmV3IFRva2VuVHlwZShcIj8uXCIpLFxuICBhcnJvdzogbmV3IFRva2VuVHlwZShcIj0+XCIsIGJlZm9yZUV4cHIpLFxuICB0ZW1wbGF0ZTogbmV3IFRva2VuVHlwZShcInRlbXBsYXRlXCIpLFxuICBpbnZhbGlkVGVtcGxhdGU6IG5ldyBUb2tlblR5cGUoXCJpbnZhbGlkVGVtcGxhdGVcIiksXG4gIGVsbGlwc2lzOiBuZXcgVG9rZW5UeXBlKFwiLi4uXCIsIGJlZm9yZUV4cHIpLFxuICBiYWNrUXVvdGU6IG5ldyBUb2tlblR5cGUoXCJgXCIsIHN0YXJ0c0V4cHIpLFxuICBkb2xsYXJCcmFjZUw6IG5ldyBUb2tlblR5cGUoXCIke1wiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgc3RhcnRzRXhwcjogdHJ1ZX0pLFxuXG4gIC8vIE9wZXJhdG9ycy4gVGhlc2UgY2Fycnkgc2V2ZXJhbCBraW5kcyBvZiBwcm9wZXJ0aWVzIHRvIGhlbHAgdGhlXG4gIC8vIHBhcnNlciB1c2UgdGhlbSBwcm9wZXJseSAodGhlIHByZXNlbmNlIG9mIHRoZXNlIHByb3BlcnRpZXMgaXNcbiAgLy8gd2hhdCBjYXRlZ29yaXplcyB0aGVtIGFzIG9wZXJhdG9ycykuXG4gIC8vXG4gIC8vIGBiaW5vcGAsIHdoZW4gcHJlc2VudCwgc3BlY2lmaWVzIHRoYXQgdGhpcyBvcGVyYXRvciBpcyBhIGJpbmFyeVxuICAvLyBvcGVyYXRvciwgYW5kIHdpbGwgcmVmZXIgdG8gaXRzIHByZWNlZGVuY2UuXG4gIC8vXG4gIC8vIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgbWFyayB0aGUgb3BlcmF0b3IgYXMgYSBwcmVmaXggb3IgcG9zdGZpeFxuICAvLyB1bmFyeSBvcGVyYXRvci5cbiAgLy9cbiAgLy8gYGlzQXNzaWduYCBtYXJrcyBhbGwgb2YgYD1gLCBgKz1gLCBgLT1gIGV0Y2V0ZXJhLCB3aGljaCBhY3QgYXNcbiAgLy8gYmluYXJ5IG9wZXJhdG9ycyB3aXRoIGEgdmVyeSBsb3cgcHJlY2VkZW5jZSwgdGhhdCBzaG91bGQgcmVzdWx0XG4gIC8vIGluIEFzc2lnbm1lbnRFeHByZXNzaW9uIG5vZGVzLlxuXG4gIGVxOiBuZXcgVG9rZW5UeXBlKFwiPVwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgaXNBc3NpZ246IHRydWV9KSxcbiAgYXNzaWduOiBuZXcgVG9rZW5UeXBlKFwiXz1cIiwge2JlZm9yZUV4cHI6IHRydWUsIGlzQXNzaWduOiB0cnVlfSksXG4gIGluY0RlYzogbmV3IFRva2VuVHlwZShcIisrLy0tXCIsIHtwcmVmaXg6IHRydWUsIHBvc3RmaXg6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcbiAgcHJlZml4OiBuZXcgVG9rZW5UeXBlKFwiIS9+XCIsIHtiZWZvcmVFeHByOiB0cnVlLCBwcmVmaXg6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcbiAgbG9naWNhbE9SOiBiaW5vcChcInx8XCIsIDEpLFxuICBsb2dpY2FsQU5EOiBiaW5vcChcIiYmXCIsIDIpLFxuICBiaXR3aXNlT1I6IGJpbm9wKFwifFwiLCAzKSxcbiAgYml0d2lzZVhPUjogYmlub3AoXCJeXCIsIDQpLFxuICBiaXR3aXNlQU5EOiBiaW5vcChcIiZcIiwgNSksXG4gIGVxdWFsaXR5OiBiaW5vcChcIj09LyE9Lz09PS8hPT1cIiwgNiksXG4gIHJlbGF0aW9uYWw6IGJpbm9wKFwiPC8+Lzw9Lz49XCIsIDcpLFxuICBiaXRTaGlmdDogYmlub3AoXCI8PC8+Pi8+Pj5cIiwgOCksXG4gIHBsdXNNaW46IG5ldyBUb2tlblR5cGUoXCIrLy1cIiwge2JlZm9yZUV4cHI6IHRydWUsIGJpbm9wOiA5LCBwcmVmaXg6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcbiAgbW9kdWxvOiBiaW5vcChcIiVcIiwgMTApLFxuICBzdGFyOiBiaW5vcChcIipcIiwgMTApLFxuICBzbGFzaDogYmlub3AoXCIvXCIsIDEwKSxcbiAgc3RhcnN0YXI6IG5ldyBUb2tlblR5cGUoXCIqKlwiLCB7YmVmb3JlRXhwcjogdHJ1ZX0pLFxuICBjb2FsZXNjZTogYmlub3AoXCI/P1wiLCAxKSxcblxuICAvLyBLZXl3b3JkIHRva2VuIHR5cGVzLlxuICBfYnJlYWs6IGt3KFwiYnJlYWtcIiksXG4gIF9jYXNlOiBrdyhcImNhc2VcIiwgYmVmb3JlRXhwciksXG4gIF9jYXRjaDoga3coXCJjYXRjaFwiKSxcbiAgX2NvbnRpbnVlOiBrdyhcImNvbnRpbnVlXCIpLFxuICBfZGVidWdnZXI6IGt3KFwiZGVidWdnZXJcIiksXG4gIF9kZWZhdWx0OiBrdyhcImRlZmF1bHRcIiwgYmVmb3JlRXhwciksXG4gIF9kbzoga3coXCJkb1wiLCB7aXNMb29wOiB0cnVlLCBiZWZvcmVFeHByOiB0cnVlfSksXG4gIF9lbHNlOiBrdyhcImVsc2VcIiwgYmVmb3JlRXhwciksXG4gIF9maW5hbGx5OiBrdyhcImZpbmFsbHlcIiksXG4gIF9mb3I6IGt3KFwiZm9yXCIsIHtpc0xvb3A6IHRydWV9KSxcbiAgX2Z1bmN0aW9uOiBrdyhcImZ1bmN0aW9uXCIsIHN0YXJ0c0V4cHIpLFxuICBfaWY6IGt3KFwiaWZcIiksXG4gIF9yZXR1cm46IGt3KFwicmV0dXJuXCIsIGJlZm9yZUV4cHIpLFxuICBfc3dpdGNoOiBrdyhcInN3aXRjaFwiKSxcbiAgX3Rocm93OiBrdyhcInRocm93XCIsIGJlZm9yZUV4cHIpLFxuICBfdHJ5OiBrdyhcInRyeVwiKSxcbiAgX3Zhcjoga3coXCJ2YXJcIiksXG4gIF9jb25zdDoga3coXCJjb25zdFwiKSxcbiAgX3doaWxlOiBrdyhcIndoaWxlXCIsIHtpc0xvb3A6IHRydWV9KSxcbiAgX3dpdGg6IGt3KFwid2l0aFwiKSxcbiAgX25ldzoga3coXCJuZXdcIiwge2JlZm9yZUV4cHI6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcbiAgX3RoaXM6IGt3KFwidGhpc1wiLCBzdGFydHNFeHByKSxcbiAgX3N1cGVyOiBrdyhcInN1cGVyXCIsIHN0YXJ0c0V4cHIpLFxuICBfY2xhc3M6IGt3KFwiY2xhc3NcIiwgc3RhcnRzRXhwciksXG4gIF9leHRlbmRzOiBrdyhcImV4dGVuZHNcIiwgYmVmb3JlRXhwciksXG4gIF9leHBvcnQ6IGt3KFwiZXhwb3J0XCIpLFxuICBfaW1wb3J0OiBrdyhcImltcG9ydFwiLCBzdGFydHNFeHByKSxcbiAgX251bGw6IGt3KFwibnVsbFwiLCBzdGFydHNFeHByKSxcbiAgX3RydWU6IGt3KFwidHJ1ZVwiLCBzdGFydHNFeHByKSxcbiAgX2ZhbHNlOiBrdyhcImZhbHNlXCIsIHN0YXJ0c0V4cHIpLFxuICBfaW46IGt3KFwiaW5cIiwge2JlZm9yZUV4cHI6IHRydWUsIGJpbm9wOiA3fSksXG4gIF9pbnN0YW5jZW9mOiBrdyhcImluc3RhbmNlb2ZcIiwge2JlZm9yZUV4cHI6IHRydWUsIGJpbm9wOiA3fSksXG4gIF90eXBlb2Y6IGt3KFwidHlwZW9mXCIsIHtiZWZvcmVFeHByOiB0cnVlLCBwcmVmaXg6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KSxcbiAgX3ZvaWQ6IGt3KFwidm9pZFwiLCB7YmVmb3JlRXhwcjogdHJ1ZSwgcHJlZml4OiB0cnVlLCBzdGFydHNFeHByOiB0cnVlfSksXG4gIF9kZWxldGU6IGt3KFwiZGVsZXRlXCIsIHtiZWZvcmVFeHByOiB0cnVlLCBwcmVmaXg6IHRydWUsIHN0YXJ0c0V4cHI6IHRydWV9KVxufTtcblxuLy8gTWF0Y2hlcyBhIHdob2xlIGxpbmUgYnJlYWsgKHdoZXJlIENSTEYgaXMgY29uc2lkZXJlZCBhIHNpbmdsZVxuLy8gbGluZSBicmVhaykuIFVzZWQgdG8gY291bnQgbGluZXMuXG5cbnZhciBsaW5lQnJlYWsgPSAvXFxyXFxuP3xcXG58XFx1MjAyOHxcXHUyMDI5LztcbnZhciBsaW5lQnJlYWtHID0gbmV3IFJlZ0V4cChsaW5lQnJlYWsuc291cmNlLCBcImdcIik7XG5cbmZ1bmN0aW9uIGlzTmV3TGluZShjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSAxMCB8fCBjb2RlID09PSAxMyB8fCBjb2RlID09PSAweDIwMjggfHwgY29kZSA9PT0gMHgyMDI5XG59XG5cbmZ1bmN0aW9uIG5leHRMaW5lQnJlYWsoY29kZSwgZnJvbSwgZW5kKSB7XG4gIGlmICggZW5kID09PSB2b2lkIDAgKSBlbmQgPSBjb2RlLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gZnJvbTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgdmFyIG5leHQgPSBjb2RlLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGlzTmV3TGluZShuZXh0KSlcbiAgICAgIHsgcmV0dXJuIGkgPCBlbmQgLSAxICYmIG5leHQgPT09IDEzICYmIGNvZGUuY2hhckNvZGVBdChpICsgMSkgPT09IDEwID8gaSArIDIgOiBpICsgMSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbnZhciBub25BU0NJSXdoaXRlc3BhY2UgPSAvW1xcdTE2ODBcXHUyMDAwLVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHVmZWZmXS87XG5cbnZhciBza2lwV2hpdGVTcGFjZSA9IC8oPzpcXHN8XFwvXFwvLip8XFwvXFwqW15dKj9cXCpcXC8pKi9nO1xuXG52YXIgcmVmID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHJlZi5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0cmluZyA9IHJlZi50b1N0cmluZztcblxudmFyIGhhc093biA9IE9iamVjdC5oYXNPd24gfHwgKGZ1bmN0aW9uIChvYmosIHByb3BOYW1lKSB7IHJldHVybiAoXG4gIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wTmFtZSlcbik7IH0pO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIChcbiAgdG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCJcbik7IH0pO1xuXG52YXIgcmVnZXhwQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiB3b3Jkc1JlZ2V4cCh3b3Jkcykge1xuICByZXR1cm4gcmVnZXhwQ2FjaGVbd29yZHNdIHx8IChyZWdleHBDYWNoZVt3b3Jkc10gPSBuZXcgUmVnRXhwKFwiXig/OlwiICsgd29yZHMucmVwbGFjZSgvIC9nLCBcInxcIikgKyBcIikkXCIpKVxufVxuXG5mdW5jdGlvbiBjb2RlUG9pbnRUb1N0cmluZyhjb2RlKSB7XG4gIC8vIFVURi0xNiBEZWNvZGluZ1xuICBpZiAoY29kZSA8PSAweEZGRkYpIHsgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkgfVxuICBjb2RlIC09IDB4MTAwMDA7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKChjb2RlID4+IDEwKSArIDB4RDgwMCwgKGNvZGUgJiAxMDIzKSArIDB4REMwMClcbn1cblxudmFyIGxvbmVTdXJyb2dhdGUgPSAvKD86W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pLztcblxuLy8gVGhlc2UgYXJlIHVzZWQgd2hlbiBgb3B0aW9ucy5sb2NhdGlvbnNgIGlzIG9uLCBmb3IgdGhlXG4vLyBgc3RhcnRMb2NgIGFuZCBgZW5kTG9jYCBwcm9wZXJ0aWVzLlxuXG52YXIgUG9zaXRpb24gPSBmdW5jdGlvbiBQb3NpdGlvbihsaW5lLCBjb2wpIHtcbiAgdGhpcy5saW5lID0gbGluZTtcbiAgdGhpcy5jb2x1bW4gPSBjb2w7XG59O1xuXG5Qb3NpdGlvbi5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0IChuKSB7XG4gIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5saW5lLCB0aGlzLmNvbHVtbiArIG4pXG59O1xuXG52YXIgU291cmNlTG9jYXRpb24gPSBmdW5jdGlvbiBTb3VyY2VMb2NhdGlvbihwLCBzdGFydCwgZW5kKSB7XG4gIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgdGhpcy5lbmQgPSBlbmQ7XG4gIGlmIChwLnNvdXJjZUZpbGUgIT09IG51bGwpIHsgdGhpcy5zb3VyY2UgPSBwLnNvdXJjZUZpbGU7IH1cbn07XG5cbi8vIFRoZSBgZ2V0TGluZUluZm9gIGZ1bmN0aW9uIGlzIG1vc3RseSB1c2VmdWwgd2hlbiB0aGVcbi8vIGBsb2NhdGlvbnNgIG9wdGlvbiBpcyBvZmYgKGZvciBwZXJmb3JtYW5jZSByZWFzb25zKSBhbmQgeW91XG4vLyB3YW50IHRvIGZpbmQgdGhlIGxpbmUvY29sdW1uIHBvc2l0aW9uIGZvciBhIGdpdmVuIGNoYXJhY3RlclxuLy8gb2Zmc2V0LiBgaW5wdXRgIHNob3VsZCBiZSB0aGUgY29kZSBzdHJpbmcgdGhhdCB0aGUgb2Zmc2V0IHJlZmVyc1xuLy8gaW50by5cblxuZnVuY3Rpb24gZ2V0TGluZUluZm8oaW5wdXQsIG9mZnNldCkge1xuICBmb3IgKHZhciBsaW5lID0gMSwgY3VyID0gMDs7KSB7XG4gICAgdmFyIG5leHRCcmVhayA9IG5leHRMaW5lQnJlYWsoaW5wdXQsIGN1ciwgb2Zmc2V0KTtcbiAgICBpZiAobmV4dEJyZWFrIDwgMCkgeyByZXR1cm4gbmV3IFBvc2l0aW9uKGxpbmUsIG9mZnNldCAtIGN1cikgfVxuICAgICsrbGluZTtcbiAgICBjdXIgPSBuZXh0QnJlYWs7XG4gIH1cbn1cblxuLy8gQSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBnaXZlbiB0byBjb25maWd1cmUgdGhlIHBhcnNlciBwcm9jZXNzLlxuLy8gVGhlc2Ugb3B0aW9ucyBhcmUgcmVjb2duaXplZCAob25seSBgZWNtYVZlcnNpb25gIGlzIHJlcXVpcmVkKTpcblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAvLyBgZWNtYVZlcnNpb25gIGluZGljYXRlcyB0aGUgRUNNQVNjcmlwdCB2ZXJzaW9uIHRvIHBhcnNlLiBNdXN0IGJlXG4gIC8vIGVpdGhlciAzLCA1LCA2IChvciAyMDE1KSwgNyAoMjAxNiksIDggKDIwMTcpLCA5ICgyMDE4KSwgMTBcbiAgLy8gKDIwMTkpLCAxMSAoMjAyMCksIDEyICgyMDIxKSwgMTMgKDIwMjIpLCAxNCAoMjAyMyksIG9yIGBcImxhdGVzdFwiYFxuICAvLyAodGhlIGxhdGVzdCB2ZXJzaW9uIHRoZSBsaWJyYXJ5IHN1cHBvcnRzKS4gVGhpcyBpbmZsdWVuY2VzXG4gIC8vIHN1cHBvcnQgZm9yIHN0cmljdCBtb2RlLCB0aGUgc2V0IG9mIHJlc2VydmVkIHdvcmRzLCBhbmQgc3VwcG9ydFxuICAvLyBmb3IgbmV3IHN5bnRheCBmZWF0dXJlcy5cbiAgZWNtYVZlcnNpb246IG51bGwsXG4gIC8vIGBzb3VyY2VUeXBlYCBpbmRpY2F0ZXMgdGhlIG1vZGUgdGhlIGNvZGUgc2hvdWxkIGJlIHBhcnNlZCBpbi5cbiAgLy8gQ2FuIGJlIGVpdGhlciBgXCJzY3JpcHRcImAgb3IgYFwibW9kdWxlXCJgLiBUaGlzIGluZmx1ZW5jZXMgZ2xvYmFsXG4gIC8vIHN0cmljdCBtb2RlIGFuZCBwYXJzaW5nIG9mIGBpbXBvcnRgIGFuZCBgZXhwb3J0YCBkZWNsYXJhdGlvbnMuXG4gIHNvdXJjZVR5cGU6IFwic2NyaXB0XCIsXG4gIC8vIGBvbkluc2VydGVkU2VtaWNvbG9uYCBjYW4gYmUgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW5cbiAgLy8gYSBzZW1pY29sb24gaXMgYXV0b21hdGljYWxseSBpbnNlcnRlZC4gSXQgd2lsbCBiZSBwYXNzZWQgdGhlXG4gIC8vIHBvc2l0aW9uIG9mIHRoZSBpbnNlcnRlZCBzZW1pY29sb24gYXMgYW4gb2Zmc2V0LCBhbmQgaWZcbiAgLy8gYGxvY2F0aW9uc2AgaXMgZW5hYmxlZCwgaXQgaXMgZ2l2ZW4gdGhlIGxvY2F0aW9uIGFzIGEgYHtsaW5lLFxuICAvLyBjb2x1bW59YCBvYmplY3QgYXMgc2Vjb25kIGFyZ3VtZW50LlxuICBvbkluc2VydGVkU2VtaWNvbG9uOiBudWxsLFxuICAvLyBgb25UcmFpbGluZ0NvbW1hYCBpcyBzaW1pbGFyIHRvIGBvbkluc2VydGVkU2VtaWNvbG9uYCwgYnV0IGZvclxuICAvLyB0cmFpbGluZyBjb21tYXMuXG4gIG9uVHJhaWxpbmdDb21tYTogbnVsbCxcbiAgLy8gQnkgZGVmYXVsdCwgcmVzZXJ2ZWQgd29yZHMgYXJlIG9ubHkgZW5mb3JjZWQgaWYgZWNtYVZlcnNpb24gPj0gNS5cbiAgLy8gU2V0IGBhbGxvd1Jlc2VydmVkYCB0byBhIGJvb2xlYW4gdmFsdWUgdG8gZXhwbGljaXRseSB0dXJuIHRoaXMgb25cbiAgLy8gYW4gb2ZmLiBXaGVuIHRoaXMgb3B0aW9uIGhhcyB0aGUgdmFsdWUgXCJuZXZlclwiLCByZXNlcnZlZCB3b3Jkc1xuICAvLyBhbmQga2V5d29yZHMgY2FuIGFsc28gbm90IGJlIHVzZWQgYXMgcHJvcGVydHkgbmFtZXMuXG4gIGFsbG93UmVzZXJ2ZWQ6IG51bGwsXG4gIC8vIFdoZW4gZW5hYmxlZCwgYSByZXR1cm4gYXQgdGhlIHRvcCBsZXZlbCBpcyBub3QgY29uc2lkZXJlZCBhblxuICAvLyBlcnJvci5cbiAgYWxsb3dSZXR1cm5PdXRzaWRlRnVuY3Rpb246IGZhbHNlLFxuICAvLyBXaGVuIGVuYWJsZWQsIGltcG9ydC9leHBvcnQgc3RhdGVtZW50cyBhcmUgbm90IGNvbnN0cmFpbmVkIHRvXG4gIC8vIGFwcGVhcmluZyBhdCB0aGUgdG9wIG9mIHRoZSBwcm9ncmFtLCBhbmQgYW4gaW1wb3J0Lm1ldGEgZXhwcmVzc2lvblxuICAvLyBpbiBhIHNjcmlwdCBpc24ndCBjb25zaWRlcmVkIGFuIGVycm9yLlxuICBhbGxvd0ltcG9ydEV4cG9ydEV2ZXJ5d2hlcmU6IGZhbHNlLFxuICAvLyBCeSBkZWZhdWx0LCBhd2FpdCBpZGVudGlmaWVycyBhcmUgYWxsb3dlZCB0byBhcHBlYXIgYXQgdGhlIHRvcC1sZXZlbCBzY29wZSBvbmx5IGlmIGVjbWFWZXJzaW9uID49IDIwMjIuXG4gIC8vIFdoZW4gZW5hYmxlZCwgYXdhaXQgaWRlbnRpZmllcnMgYXJlIGFsbG93ZWQgdG8gYXBwZWFyIGF0IHRoZSB0b3AtbGV2ZWwgc2NvcGUsXG4gIC8vIGJ1dCB0aGV5IGFyZSBzdGlsbCBub3QgYWxsb3dlZCBpbiBub24tYXN5bmMgZnVuY3Rpb25zLlxuICBhbGxvd0F3YWl0T3V0c2lkZUZ1bmN0aW9uOiBudWxsLFxuICAvLyBXaGVuIGVuYWJsZWQsIHN1cGVyIGlkZW50aWZpZXJzIGFyZSBub3QgY29uc3RyYWluZWQgdG9cbiAgLy8gYXBwZWFyaW5nIGluIG1ldGhvZHMgYW5kIGRvIG5vdCByYWlzZSBhbiBlcnJvciB3aGVuIHRoZXkgYXBwZWFyIGVsc2V3aGVyZS5cbiAgYWxsb3dTdXBlck91dHNpZGVNZXRob2Q6IG51bGwsXG4gIC8vIFdoZW4gZW5hYmxlZCwgaGFzaGJhbmcgZGlyZWN0aXZlIGluIHRoZSBiZWdpbm5pbmcgb2YgZmlsZSBpc1xuICAvLyBhbGxvd2VkIGFuZCB0cmVhdGVkIGFzIGEgbGluZSBjb21tZW50LiBFbmFibGVkIGJ5IGRlZmF1bHQgd2hlblxuICAvLyBgZWNtYVZlcnNpb25gID49IDIwMjMuXG4gIGFsbG93SGFzaEJhbmc6IGZhbHNlLFxuICAvLyBCeSBkZWZhdWx0LCB0aGUgcGFyc2VyIHdpbGwgdmVyaWZ5IHRoYXQgcHJpdmF0ZSBwcm9wZXJ0aWVzIGFyZVxuICAvLyBvbmx5IHVzZWQgaW4gcGxhY2VzIHdoZXJlIHRoZXkgYXJlIHZhbGlkIGFuZCBoYXZlIGJlZW4gZGVjbGFyZWQuXG4gIC8vIFNldCB0aGlzIHRvIGZhbHNlIHRvIHR1cm4gc3VjaCBjaGVja3Mgb2ZmLlxuICBjaGVja1ByaXZhdGVGaWVsZHM6IHRydWUsXG4gIC8vIFdoZW4gYGxvY2F0aW9uc2AgaXMgb24sIGBsb2NgIHByb3BlcnRpZXMgaG9sZGluZyBvYmplY3RzIHdpdGhcbiAgLy8gYHN0YXJ0YCBhbmQgYGVuZGAgcHJvcGVydGllcyBpbiBge2xpbmUsIGNvbHVtbn1gIGZvcm0gKHdpdGhcbiAgLy8gbGluZSBiZWluZyAxLWJhc2VkIGFuZCBjb2x1bW4gMC1iYXNlZCkgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGVcbiAgLy8gbm9kZXMuXG4gIGxvY2F0aW9uczogZmFsc2UsXG4gIC8vIEEgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhcyBgb25Ub2tlbmAgb3B0aW9uLCB3aGljaCB3aWxsXG4gIC8vIGNhdXNlIEFjb3JuIHRvIGNhbGwgdGhhdCBmdW5jdGlvbiB3aXRoIG9iamVjdCBpbiB0aGUgc2FtZVxuICAvLyBmb3JtYXQgYXMgdG9rZW5zIHJldHVybmVkIGZyb20gYHRva2VuaXplcigpLmdldFRva2VuKClgLiBOb3RlXG4gIC8vIHRoYXQgeW91IGFyZSBub3QgYWxsb3dlZCB0byBjYWxsIHRoZSBwYXJzZXIgZnJvbSB0aGVcbiAgLy8gY2FsbGJhY2tcdTIwMTR0aGF0IHdpbGwgY29ycnVwdCBpdHMgaW50ZXJuYWwgc3RhdGUuXG4gIG9uVG9rZW46IG51bGwsXG4gIC8vIEEgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhcyBgb25Db21tZW50YCBvcHRpb24sIHdoaWNoIHdpbGxcbiAgLy8gY2F1c2UgQWNvcm4gdG8gY2FsbCB0aGF0IGZ1bmN0aW9uIHdpdGggYChibG9jaywgdGV4dCwgc3RhcnQsXG4gIC8vIGVuZClgIHBhcmFtZXRlcnMgd2hlbmV2ZXIgYSBjb21tZW50IGlzIHNraXBwZWQuIGBibG9ja2AgaXMgYVxuICAvLyBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGlzIGEgYmxvY2sgKGAvKiAqL2ApIGNvbW1lbnQsXG4gIC8vIGB0ZXh0YCBpcyB0aGUgY29udGVudCBvZiB0aGUgY29tbWVudCwgYW5kIGBzdGFydGAgYW5kIGBlbmRgIGFyZVxuICAvLyBjaGFyYWN0ZXIgb2Zmc2V0cyB0aGF0IGRlbm90ZSB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgY29tbWVudC5cbiAgLy8gV2hlbiB0aGUgYGxvY2F0aW9uc2Agb3B0aW9uIGlzIG9uLCB0d28gbW9yZSBwYXJhbWV0ZXJzIGFyZVxuICAvLyBwYXNzZWQsIHRoZSBmdWxsIGB7bGluZSwgY29sdW1ufWAgbG9jYXRpb25zIG9mIHRoZSBzdGFydCBhbmRcbiAgLy8gZW5kIG9mIHRoZSBjb21tZW50cy4gTm90ZSB0aGF0IHlvdSBhcmUgbm90IGFsbG93ZWQgdG8gY2FsbCB0aGVcbiAgLy8gcGFyc2VyIGZyb20gdGhlIGNhbGxiYWNrXHUyMDE0dGhhdCB3aWxsIGNvcnJ1cHQgaXRzIGludGVybmFsIHN0YXRlLlxuICAvLyBXaGVuIHRoaXMgb3B0aW9uIGhhcyBhbiBhcnJheSBhcyB2YWx1ZSwgb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlXG4gIC8vIGNvbW1lbnRzIGFyZSBwdXNoZWQgdG8gaXQuXG4gIG9uQ29tbWVudDogbnVsbCxcbiAgLy8gTm9kZXMgaGF2ZSB0aGVpciBzdGFydCBhbmQgZW5kIGNoYXJhY3RlcnMgb2Zmc2V0cyByZWNvcmRlZCBpblxuICAvLyBgc3RhcnRgIGFuZCBgZW5kYCBwcm9wZXJ0aWVzIChkaXJlY3RseSBvbiB0aGUgbm9kZSwgcmF0aGVyIHRoYW5cbiAgLy8gdGhlIGBsb2NgIG9iamVjdCwgd2hpY2ggaG9sZHMgbGluZS9jb2x1bW4gZGF0YS4gVG8gYWxzbyBhZGQgYVxuICAvLyBbc2VtaS1zdGFuZGFyZGl6ZWRdW3JhbmdlXSBgcmFuZ2VgIHByb3BlcnR5IGhvbGRpbmcgYSBgW3N0YXJ0LFxuICAvLyBlbmRdYCBhcnJheSB3aXRoIHRoZSBzYW1lIG51bWJlcnMsIHNldCB0aGUgYHJhbmdlc2Agb3B0aW9uIHRvXG4gIC8vIGB0cnVlYC5cbiAgLy9cbiAgLy8gW3JhbmdlXTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzQ1Njc4XG4gIHJhbmdlczogZmFsc2UsXG4gIC8vIEl0IGlzIHBvc3NpYmxlIHRvIHBhcnNlIG11bHRpcGxlIGZpbGVzIGludG8gYSBzaW5nbGUgQVNUIGJ5XG4gIC8vIHBhc3NpbmcgdGhlIHRyZWUgcHJvZHVjZWQgYnkgcGFyc2luZyB0aGUgZmlyc3QgZmlsZSBhc1xuICAvLyBgcHJvZ3JhbWAgb3B0aW9uIGluIHN1YnNlcXVlbnQgcGFyc2VzLiBUaGlzIHdpbGwgYWRkIHRoZVxuICAvLyB0b3BsZXZlbCBmb3JtcyBvZiB0aGUgcGFyc2VkIGZpbGUgdG8gdGhlIGBQcm9ncmFtYCAodG9wKSBub2RlXG4gIC8vIG9mIGFuIGV4aXN0aW5nIHBhcnNlIHRyZWUuXG4gIHByb2dyYW06IG51bGwsXG4gIC8vIFdoZW4gYGxvY2F0aW9uc2AgaXMgb24sIHlvdSBjYW4gcGFzcyB0aGlzIHRvIHJlY29yZCB0aGUgc291cmNlXG4gIC8vIGZpbGUgaW4gZXZlcnkgbm9kZSdzIGBsb2NgIG9iamVjdC5cbiAgc291cmNlRmlsZTogbnVsbCxcbiAgLy8gVGhpcyB2YWx1ZSwgaWYgZ2l2ZW4sIGlzIHN0b3JlZCBpbiBldmVyeSBub2RlLCB3aGV0aGVyXG4gIC8vIGBsb2NhdGlvbnNgIGlzIG9uIG9yIG9mZi5cbiAgZGlyZWN0U291cmNlRmlsZTogbnVsbCxcbiAgLy8gV2hlbiBlbmFibGVkLCBwYXJlbnRoZXNpemVkIGV4cHJlc3Npb25zIGFyZSByZXByZXNlbnRlZCBieVxuICAvLyAobm9uLXN0YW5kYXJkKSBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiBub2Rlc1xuICBwcmVzZXJ2ZVBhcmVuczogZmFsc2Vcbn07XG5cbi8vIEludGVycHJldCBhbmQgZGVmYXVsdCBhbiBvcHRpb25zIG9iamVjdFxuXG52YXIgd2FybmVkQWJvdXRFY21hVmVyc2lvbiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKG9wdHMpIHtcbiAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICBmb3IgKHZhciBvcHQgaW4gZGVmYXVsdE9wdGlvbnMpXG4gICAgeyBvcHRpb25zW29wdF0gPSBvcHRzICYmIGhhc093bihvcHRzLCBvcHQpID8gb3B0c1tvcHRdIDogZGVmYXVsdE9wdGlvbnNbb3B0XTsgfVxuXG4gIGlmIChvcHRpb25zLmVjbWFWZXJzaW9uID09PSBcImxhdGVzdFwiKSB7XG4gICAgb3B0aW9ucy5lY21hVmVyc2lvbiA9IDFlODtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmVjbWFWZXJzaW9uID09IG51bGwpIHtcbiAgICBpZiAoIXdhcm5lZEFib3V0RWNtYVZlcnNpb24gJiYgdHlwZW9mIGNvbnNvbGUgPT09IFwib2JqZWN0XCIgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICB3YXJuZWRBYm91dEVjbWFWZXJzaW9uID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUud2FybihcIlNpbmNlIEFjb3JuIDguMC4wLCBvcHRpb25zLmVjbWFWZXJzaW9uIGlzIHJlcXVpcmVkLlxcbkRlZmF1bHRpbmcgdG8gMjAyMCwgYnV0IHRoaXMgd2lsbCBzdG9wIHdvcmtpbmcgaW4gdGhlIGZ1dHVyZS5cIik7XG4gICAgfVxuICAgIG9wdGlvbnMuZWNtYVZlcnNpb24gPSAxMTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmVjbWFWZXJzaW9uID49IDIwMTUpIHtcbiAgICBvcHRpb25zLmVjbWFWZXJzaW9uIC09IDIwMDk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5hbGxvd1Jlc2VydmVkID09IG51bGwpXG4gICAgeyBvcHRpb25zLmFsbG93UmVzZXJ2ZWQgPSBvcHRpb25zLmVjbWFWZXJzaW9uIDwgNTsgfVxuXG4gIGlmICghb3B0cyB8fCBvcHRzLmFsbG93SGFzaEJhbmcgPT0gbnVsbClcbiAgICB7IG9wdGlvbnMuYWxsb3dIYXNoQmFuZyA9IG9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTQ7IH1cblxuICBpZiAoaXNBcnJheShvcHRpb25zLm9uVG9rZW4pKSB7XG4gICAgdmFyIHRva2VucyA9IG9wdGlvbnMub25Ub2tlbjtcbiAgICBvcHRpb25zLm9uVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuIHRva2Vucy5wdXNoKHRva2VuKTsgfTtcbiAgfVxuICBpZiAoaXNBcnJheShvcHRpb25zLm9uQ29tbWVudCkpXG4gICAgeyBvcHRpb25zLm9uQ29tbWVudCA9IHB1c2hDb21tZW50KG9wdGlvbnMsIG9wdGlvbnMub25Db21tZW50KTsgfVxuXG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIHB1c2hDb21tZW50KG9wdGlvbnMsIGFycmF5KSB7XG4gIHJldHVybiBmdW5jdGlvbihibG9jaywgdGV4dCwgc3RhcnQsIGVuZCwgc3RhcnRMb2MsIGVuZExvYykge1xuICAgIHZhciBjb21tZW50ID0ge1xuICAgICAgdHlwZTogYmxvY2sgPyBcIkJsb2NrXCIgOiBcIkxpbmVcIixcbiAgICAgIHZhbHVlOiB0ZXh0LFxuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmRcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLmxvY2F0aW9ucylcbiAgICAgIHsgY29tbWVudC5sb2MgPSBuZXcgU291cmNlTG9jYXRpb24odGhpcywgc3RhcnRMb2MsIGVuZExvYyk7IH1cbiAgICBpZiAob3B0aW9ucy5yYW5nZXMpXG4gICAgICB7IGNvbW1lbnQucmFuZ2UgPSBbc3RhcnQsIGVuZF07IH1cbiAgICBhcnJheS5wdXNoKGNvbW1lbnQpO1xuICB9XG59XG5cbi8vIEVhY2ggc2NvcGUgZ2V0cyBhIGJpdHNldCB0aGF0IG1heSBjb250YWluIHRoZXNlIGZsYWdzXG52YXJcbiAgICBTQ09QRV9UT1AgPSAxLFxuICAgIFNDT1BFX0ZVTkNUSU9OID0gMixcbiAgICBTQ09QRV9BU1lOQyA9IDQsXG4gICAgU0NPUEVfR0VORVJBVE9SID0gOCxcbiAgICBTQ09QRV9BUlJPVyA9IDE2LFxuICAgIFNDT1BFX1NJTVBMRV9DQVRDSCA9IDMyLFxuICAgIFNDT1BFX1NVUEVSID0gNjQsXG4gICAgU0NPUEVfRElSRUNUX1NVUEVSID0gMTI4LFxuICAgIFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSyA9IDI1NixcbiAgICBTQ09QRV9WQVIgPSBTQ09QRV9UT1AgfCBTQ09QRV9GVU5DVElPTiB8IFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSztcblxuZnVuY3Rpb24gZnVuY3Rpb25GbGFncyhhc3luYywgZ2VuZXJhdG9yKSB7XG4gIHJldHVybiBTQ09QRV9GVU5DVElPTiB8IChhc3luYyA/IFNDT1BFX0FTWU5DIDogMCkgfCAoZ2VuZXJhdG9yID8gU0NPUEVfR0VORVJBVE9SIDogMClcbn1cblxuLy8gVXNlZCBpbiBjaGVja0xWYWwqIGFuZCBkZWNsYXJlTmFtZSB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgYSBiaW5kaW5nXG52YXJcbiAgICBCSU5EX05PTkUgPSAwLCAvLyBOb3QgYSBiaW5kaW5nXG4gICAgQklORF9WQVIgPSAxLCAvLyBWYXItc3R5bGUgYmluZGluZ1xuICAgIEJJTkRfTEVYSUNBTCA9IDIsIC8vIExldC0gb3IgY29uc3Qtc3R5bGUgYmluZGluZ1xuICAgIEJJTkRfRlVOQ1RJT04gPSAzLCAvLyBGdW5jdGlvbiBkZWNsYXJhdGlvblxuICAgIEJJTkRfU0lNUExFX0NBVENIID0gNCwgLy8gU2ltcGxlIChpZGVudGlmaWVyIHBhdHRlcm4pIGNhdGNoIGJpbmRpbmdcbiAgICBCSU5EX09VVFNJREUgPSA1OyAvLyBTcGVjaWFsIGNhc2UgZm9yIGZ1bmN0aW9uIG5hbWVzIGFzIGJvdW5kIGluc2lkZSB0aGUgZnVuY3Rpb25cblxudmFyIFBhcnNlciA9IGZ1bmN0aW9uIFBhcnNlcihvcHRpb25zLCBpbnB1dCwgc3RhcnRQb3MpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucyk7XG4gIHRoaXMuc291cmNlRmlsZSA9IG9wdGlvbnMuc291cmNlRmlsZTtcbiAgdGhpcy5rZXl3b3JkcyA9IHdvcmRzUmVnZXhwKGtleXdvcmRzJDFbb3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ID8gNiA6IG9wdGlvbnMuc291cmNlVHlwZSA9PT0gXCJtb2R1bGVcIiA/IFwiNW1vZHVsZVwiIDogNV0pO1xuICB2YXIgcmVzZXJ2ZWQgPSBcIlwiO1xuICBpZiAob3B0aW9ucy5hbGxvd1Jlc2VydmVkICE9PSB0cnVlKSB7XG4gICAgcmVzZXJ2ZWQgPSByZXNlcnZlZFdvcmRzW29wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiA/IDYgOiBvcHRpb25zLmVjbWFWZXJzaW9uID09PSA1ID8gNSA6IDNdO1xuICAgIGlmIChvcHRpb25zLnNvdXJjZVR5cGUgPT09IFwibW9kdWxlXCIpIHsgcmVzZXJ2ZWQgKz0gXCIgYXdhaXRcIjsgfVxuICB9XG4gIHRoaXMucmVzZXJ2ZWRXb3JkcyA9IHdvcmRzUmVnZXhwKHJlc2VydmVkKTtcbiAgdmFyIHJlc2VydmVkU3RyaWN0ID0gKHJlc2VydmVkID8gcmVzZXJ2ZWQgKyBcIiBcIiA6IFwiXCIpICsgcmVzZXJ2ZWRXb3Jkcy5zdHJpY3Q7XG4gIHRoaXMucmVzZXJ2ZWRXb3Jkc1N0cmljdCA9IHdvcmRzUmVnZXhwKHJlc2VydmVkU3RyaWN0KTtcbiAgdGhpcy5yZXNlcnZlZFdvcmRzU3RyaWN0QmluZCA9IHdvcmRzUmVnZXhwKHJlc2VydmVkU3RyaWN0ICsgXCIgXCIgKyByZXNlcnZlZFdvcmRzLnN0cmljdEJpbmQpO1xuICB0aGlzLmlucHV0ID0gU3RyaW5nKGlucHV0KTtcblxuICAvLyBVc2VkIHRvIHNpZ25hbCB0byBjYWxsZXJzIG9mIGByZWFkV29yZDFgIHdoZXRoZXIgdGhlIHdvcmRcbiAgLy8gY29udGFpbmVkIGFueSBlc2NhcGUgc2VxdWVuY2VzLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHdvcmRzIHdpdGhcbiAgLy8gZXNjYXBlIHNlcXVlbmNlcyBtdXN0IG5vdCBiZSBpbnRlcnByZXRlZCBhcyBrZXl3b3Jkcy5cbiAgdGhpcy5jb250YWluc0VzYyA9IGZhbHNlO1xuXG4gIC8vIFNldCB1cCB0b2tlbiBzdGF0ZVxuXG4gIC8vIFRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSB0b2tlbml6ZXIgaW4gdGhlIGlucHV0LlxuICBpZiAoc3RhcnRQb3MpIHtcbiAgICB0aGlzLnBvcyA9IHN0YXJ0UG9zO1xuICAgIHRoaXMubGluZVN0YXJ0ID0gdGhpcy5pbnB1dC5sYXN0SW5kZXhPZihcIlxcblwiLCBzdGFydFBvcyAtIDEpICsgMTtcbiAgICB0aGlzLmN1ckxpbmUgPSB0aGlzLmlucHV0LnNsaWNlKDAsIHRoaXMubGluZVN0YXJ0KS5zcGxpdChsaW5lQnJlYWspLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBvcyA9IHRoaXMubGluZVN0YXJ0ID0gMDtcbiAgICB0aGlzLmN1ckxpbmUgPSAxO1xuICB9XG5cbiAgLy8gUHJvcGVydGllcyBvZiB0aGUgY3VycmVudCB0b2tlbjpcbiAgLy8gSXRzIHR5cGVcbiAgdGhpcy50eXBlID0gdHlwZXMkMS5lb2Y7XG4gIC8vIEZvciB0b2tlbnMgdGhhdCBpbmNsdWRlIG1vcmUgaW5mb3JtYXRpb24gdGhhbiB0aGVpciB0eXBlLCB0aGUgdmFsdWVcbiAgdGhpcy52YWx1ZSA9IG51bGw7XG4gIC8vIEl0cyBzdGFydCBhbmQgZW5kIG9mZnNldFxuICB0aGlzLnN0YXJ0ID0gdGhpcy5lbmQgPSB0aGlzLnBvcztcbiAgLy8gQW5kLCBpZiBsb2NhdGlvbnMgYXJlIHVzZWQsIHRoZSB7bGluZSwgY29sdW1ufSBvYmplY3RcbiAgLy8gY29ycmVzcG9uZGluZyB0byB0aG9zZSBvZmZzZXRzXG4gIHRoaXMuc3RhcnRMb2MgPSB0aGlzLmVuZExvYyA9IHRoaXMuY3VyUG9zaXRpb24oKTtcblxuICAvLyBQb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIHByZXZpb3VzIHRva2VuXG4gIHRoaXMubGFzdFRva0VuZExvYyA9IHRoaXMubGFzdFRva1N0YXJ0TG9jID0gbnVsbDtcbiAgdGhpcy5sYXN0VG9rU3RhcnQgPSB0aGlzLmxhc3RUb2tFbmQgPSB0aGlzLnBvcztcblxuICAvLyBUaGUgY29udGV4dCBzdGFjayBpcyB1c2VkIHRvIHN1cGVyZmljaWFsbHkgdHJhY2sgc3ludGFjdGljXG4gIC8vIGNvbnRleHQgdG8gcHJlZGljdCB3aGV0aGVyIGEgcmVndWxhciBleHByZXNzaW9uIGlzIGFsbG93ZWQgaW4gYVxuICAvLyBnaXZlbiBwb3NpdGlvbi5cbiAgdGhpcy5jb250ZXh0ID0gdGhpcy5pbml0aWFsQ29udGV4dCgpO1xuICB0aGlzLmV4cHJBbGxvd2VkID0gdHJ1ZTtcblxuICAvLyBGaWd1cmUgb3V0IGlmIGl0J3MgYSBtb2R1bGUgY29kZS5cbiAgdGhpcy5pbk1vZHVsZSA9IG9wdGlvbnMuc291cmNlVHlwZSA9PT0gXCJtb2R1bGVcIjtcbiAgdGhpcy5zdHJpY3QgPSB0aGlzLmluTW9kdWxlIHx8IHRoaXMuc3RyaWN0RGlyZWN0aXZlKHRoaXMucG9zKTtcblxuICAvLyBVc2VkIHRvIHNpZ25pZnkgdGhlIHN0YXJ0IG9mIGEgcG90ZW50aWFsIGFycm93IGZ1bmN0aW9uXG4gIHRoaXMucG90ZW50aWFsQXJyb3dBdCA9IC0xO1xuICB0aGlzLnBvdGVudGlhbEFycm93SW5Gb3JBd2FpdCA9IGZhbHNlO1xuXG4gIC8vIFBvc2l0aW9ucyB0byBkZWxheWVkLWNoZWNrIHRoYXQgeWllbGQvYXdhaXQgZG9lcyBub3QgZXhpc3QgaW4gZGVmYXVsdCBwYXJhbWV0ZXJzLlxuICB0aGlzLnlpZWxkUG9zID0gdGhpcy5hd2FpdFBvcyA9IHRoaXMuYXdhaXRJZGVudFBvcyA9IDA7XG4gIC8vIExhYmVscyBpbiBzY29wZS5cbiAgdGhpcy5sYWJlbHMgPSBbXTtcbiAgLy8gVGh1cy1mYXIgdW5kZWZpbmVkIGV4cG9ydHMuXG4gIHRoaXMudW5kZWZpbmVkRXhwb3J0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy8gSWYgZW5hYmxlZCwgc2tpcCBsZWFkaW5nIGhhc2hiYW5nIGxpbmUuXG4gIGlmICh0aGlzLnBvcyA9PT0gMCAmJiBvcHRpb25zLmFsbG93SGFzaEJhbmcgJiYgdGhpcy5pbnB1dC5zbGljZSgwLCAyKSA9PT0gXCIjIVwiKVxuICAgIHsgdGhpcy5za2lwTGluZUNvbW1lbnQoMik7IH1cblxuICAvLyBTY29wZSB0cmFja2luZyBmb3IgZHVwbGljYXRlIHZhcmlhYmxlIG5hbWVzIChzZWUgc2NvcGUuanMpXG4gIHRoaXMuc2NvcGVTdGFjayA9IFtdO1xuICB0aGlzLmVudGVyU2NvcGUoU0NPUEVfVE9QKTtcblxuICAvLyBGb3IgUmVnRXhwIHZhbGlkYXRpb25cbiAgdGhpcy5yZWdleHBTdGF0ZSA9IG51bGw7XG5cbiAgLy8gVGhlIHN0YWNrIG9mIHByaXZhdGUgbmFtZXMuXG4gIC8vIEVhY2ggZWxlbWVudCBoYXMgdHdvIHByb3BlcnRpZXM6ICdkZWNsYXJlZCcgYW5kICd1c2VkJy5cbiAgLy8gV2hlbiBpdCBleGl0ZWQgZnJvbSB0aGUgb3V0ZXJtb3N0IGNsYXNzIGRlZmluaXRpb24sIGFsbCB1c2VkIHByaXZhdGUgbmFtZXMgbXVzdCBiZSBkZWNsYXJlZC5cbiAgdGhpcy5wcml2YXRlTmFtZVN0YWNrID0gW107XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpbkZ1bmN0aW9uOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGluR2VuZXJhdG9yOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGluQXN5bmM6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sY2FuQXdhaXQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sYWxsb3dTdXBlcjogeyBjb25maWd1cmFibGU6IHRydWUgfSxhbGxvd0RpcmVjdFN1cGVyOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LHRyZWF0RnVuY3Rpb25zQXNWYXI6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0sYWxsb3dOZXdEb3RUYXJnZXQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0saW5DbGFzc1N0YXRpY0Jsb2NrOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cblBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAoKSB7XG4gIHZhciBub2RlID0gdGhpcy5vcHRpb25zLnByb2dyYW0gfHwgdGhpcy5zdGFydE5vZGUoKTtcbiAgdGhpcy5uZXh0VG9rZW4oKTtcbiAgcmV0dXJuIHRoaXMucGFyc2VUb3BMZXZlbChub2RlKVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmluRnVuY3Rpb24uZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MgJiBTQ09QRV9GVU5DVElPTikgPiAwIH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5pbkdlbmVyYXRvci5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodGhpcy5jdXJyZW50VmFyU2NvcGUoKS5mbGFncyAmIFNDT1BFX0dFTkVSQVRPUikgPiAwICYmICF0aGlzLmN1cnJlbnRWYXJTY29wZSgpLmluQ2xhc3NGaWVsZEluaXQgfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmluQXN5bmMuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MgJiBTQ09QRV9BU1lOQykgPiAwICYmICF0aGlzLmN1cnJlbnRWYXJTY29wZSgpLmluQ2xhc3NGaWVsZEluaXQgfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmNhbkF3YWl0LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMuc2NvcGVTdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBzY29wZSA9IHRoaXMuc2NvcGVTdGFja1tpXTtcbiAgICBpZiAoc2NvcGUuaW5DbGFzc0ZpZWxkSW5pdCB8fCBzY29wZS5mbGFncyAmIFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSykgeyByZXR1cm4gZmFsc2UgfVxuICAgIGlmIChzY29wZS5mbGFncyAmIFNDT1BFX0ZVTkNUSU9OKSB7IHJldHVybiAoc2NvcGUuZmxhZ3MgJiBTQ09QRV9BU1lOQykgPiAwIH1cbiAgfVxuICByZXR1cm4gKHRoaXMuaW5Nb2R1bGUgJiYgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDEzKSB8fCB0aGlzLm9wdGlvbnMuYWxsb3dBd2FpdE91dHNpZGVGdW5jdGlvblxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmFsbG93U3VwZXIuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVmID0gdGhpcy5jdXJyZW50VGhpc1Njb3BlKCk7XG4gICAgdmFyIGZsYWdzID0gcmVmLmZsYWdzO1xuICAgIHZhciBpbkNsYXNzRmllbGRJbml0ID0gcmVmLmluQ2xhc3NGaWVsZEluaXQ7XG4gIHJldHVybiAoZmxhZ3MgJiBTQ09QRV9TVVBFUikgPiAwIHx8IGluQ2xhc3NGaWVsZEluaXQgfHwgdGhpcy5vcHRpb25zLmFsbG93U3VwZXJPdXRzaWRlTWV0aG9kXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuYWxsb3dEaXJlY3RTdXBlci5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodGhpcy5jdXJyZW50VGhpc1Njb3BlKCkuZmxhZ3MgJiBTQ09QRV9ESVJFQ1RfU1VQRVIpID4gMCB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMudHJlYXRGdW5jdGlvbnNBc1Zhci5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRyZWF0RnVuY3Rpb25zQXNWYXJJblNjb3BlKHRoaXMuY3VycmVudFNjb3BlKCkpIH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5hbGxvd05ld0RvdFRhcmdldC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWYgPSB0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKTtcbiAgICB2YXIgZmxhZ3MgPSByZWYuZmxhZ3M7XG4gICAgdmFyIGluQ2xhc3NGaWVsZEluaXQgPSByZWYuaW5DbGFzc0ZpZWxkSW5pdDtcbiAgcmV0dXJuIChmbGFncyAmIChTQ09QRV9GVU5DVElPTiB8IFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSykpID4gMCB8fCBpbkNsYXNzRmllbGRJbml0XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuaW5DbGFzc1N0YXRpY0Jsb2NrLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICh0aGlzLmN1cnJlbnRWYXJTY29wZSgpLmZsYWdzICYgU0NPUEVfQ0xBU1NfU1RBVElDX0JMT0NLKSA+IDBcbn07XG5cblBhcnNlci5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQgKCkge1xuICAgIHZhciBwbHVnaW5zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIHBsdWdpbnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICB2YXIgY2xzID0gdGhpcztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbHVnaW5zLmxlbmd0aDsgaSsrKSB7IGNscyA9IHBsdWdpbnNbaV0oY2xzKTsgfVxuICByZXR1cm4gY2xzXG59O1xuXG5QYXJzZXIucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKG9wdGlvbnMsIGlucHV0KS5wYXJzZSgpXG59O1xuXG5QYXJzZXIucGFyc2VFeHByZXNzaW9uQXQgPSBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25BdCAoaW5wdXQsIHBvcywgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IHRoaXMob3B0aW9ucywgaW5wdXQsIHBvcyk7XG4gIHBhcnNlci5uZXh0VG9rZW4oKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZUV4cHJlc3Npb24oKVxufTtcblxuUGFyc2VyLnRva2VuaXplciA9IGZ1bmN0aW9uIHRva2VuaXplciAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyB0aGlzKG9wdGlvbnMsIGlucHV0KVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFBhcnNlci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgcHAkOSA9IFBhcnNlci5wcm90b3R5cGU7XG5cbi8vICMjIFBhcnNlciB1dGlsaXRpZXNcblxudmFyIGxpdGVyYWwgPSAvXig/OicoKD86XFxcXC58W14nXFxcXF0pKj8pJ3xcIigoPzpcXFxcLnxbXlwiXFxcXF0pKj8pXCIpLztcbnBwJDkuc3RyaWN0RGlyZWN0aXZlID0gZnVuY3Rpb24oc3RhcnQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDUpIHsgcmV0dXJuIGZhbHNlIH1cbiAgZm9yICg7Oykge1xuICAgIC8vIFRyeSB0byBmaW5kIHN0cmluZyBsaXRlcmFsLlxuICAgIHNraXBXaGl0ZVNwYWNlLmxhc3RJbmRleCA9IHN0YXJ0O1xuICAgIHN0YXJ0ICs9IHNraXBXaGl0ZVNwYWNlLmV4ZWModGhpcy5pbnB1dClbMF0ubGVuZ3RoO1xuICAgIHZhciBtYXRjaCA9IGxpdGVyYWwuZXhlYyh0aGlzLmlucHV0LnNsaWNlKHN0YXJ0KSk7XG4gICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gZmFsc2UgfVxuICAgIGlmICgobWF0Y2hbMV0gfHwgbWF0Y2hbMl0pID09PSBcInVzZSBzdHJpY3RcIikge1xuICAgICAgc2tpcFdoaXRlU3BhY2UubGFzdEluZGV4ID0gc3RhcnQgKyBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB2YXIgc3BhY2VBZnRlciA9IHNraXBXaGl0ZVNwYWNlLmV4ZWModGhpcy5pbnB1dCksIGVuZCA9IHNwYWNlQWZ0ZXIuaW5kZXggKyBzcGFjZUFmdGVyWzBdLmxlbmd0aDtcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQXQoZW5kKTtcbiAgICAgIHJldHVybiBuZXh0ID09PSBcIjtcIiB8fCBuZXh0ID09PSBcIn1cIiB8fFxuICAgICAgICAobGluZUJyZWFrLnRlc3Qoc3BhY2VBZnRlclswXSkgJiZcbiAgICAgICAgICEoL1soYC5bK1xcLS8qJTw+PSw/XiZdLy50ZXN0KG5leHQpIHx8IG5leHQgPT09IFwiIVwiICYmIHRoaXMuaW5wdXQuY2hhckF0KGVuZCArIDEpID09PSBcIj1cIikpXG4gICAgfVxuICAgIHN0YXJ0ICs9IG1hdGNoWzBdLmxlbmd0aDtcblxuICAgIC8vIFNraXAgc2VtaWNvbG9uLCBpZiBhbnkuXG4gICAgc2tpcFdoaXRlU3BhY2UubGFzdEluZGV4ID0gc3RhcnQ7XG4gICAgc3RhcnQgKz0gc2tpcFdoaXRlU3BhY2UuZXhlYyh0aGlzLmlucHV0KVswXS5sZW5ndGg7XG4gICAgaWYgKHRoaXMuaW5wdXRbc3RhcnRdID09PSBcIjtcIilcbiAgICAgIHsgc3RhcnQrKzsgfVxuICB9XG59O1xuXG4vLyBQcmVkaWNhdGUgdGhhdCB0ZXN0cyB3aGV0aGVyIHRoZSBuZXh0IHRva2VuIGlzIG9mIHRoZSBnaXZlblxuLy8gdHlwZSwgYW5kIGlmIHllcywgY29uc3VtZXMgaXQgYXMgYSBzaWRlIGVmZmVjdC5cblxucHAkOS5lYXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGUpIHtcbiAgICB0aGlzLm5leHQoKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59O1xuXG4vLyBUZXN0cyB3aGV0aGVyIHBhcnNlZCB0b2tlbiBpcyBhIGNvbnRleHR1YWwga2V5d29yZC5cblxucHAkOS5pc0NvbnRleHR1YWwgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSAmJiB0aGlzLnZhbHVlID09PSBuYW1lICYmICF0aGlzLmNvbnRhaW5zRXNjXG59O1xuXG4vLyBDb25zdW1lcyBjb250ZXh0dWFsIGtleXdvcmQgaWYgcG9zc2libGUuXG5cbnBwJDkuZWF0Q29udGV4dHVhbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgaWYgKCF0aGlzLmlzQ29udGV4dHVhbChuYW1lKSkgeyByZXR1cm4gZmFsc2UgfVxuICB0aGlzLm5leHQoKTtcbiAgcmV0dXJuIHRydWVcbn07XG5cbi8vIEFzc2VydHMgdGhhdCBmb2xsb3dpbmcgdG9rZW4gaXMgZ2l2ZW4gY29udGV4dHVhbCBrZXl3b3JkLlxuXG5wcCQ5LmV4cGVjdENvbnRleHR1YWwgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGlmICghdGhpcy5lYXRDb250ZXh0dWFsKG5hbWUpKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG59O1xuXG4vLyBUZXN0IHdoZXRoZXIgYSBzZW1pY29sb24gY2FuIGJlIGluc2VydGVkIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuXG5wcCQ5LmNhbkluc2VydFNlbWljb2xvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50eXBlID09PSB0eXBlcyQxLmVvZiB8fFxuICAgIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5icmFjZVIgfHxcbiAgICBsaW5lQnJlYWsudGVzdCh0aGlzLmlucHV0LnNsaWNlKHRoaXMubGFzdFRva0VuZCwgdGhpcy5zdGFydCkpXG59O1xuXG5wcCQ5Lmluc2VydFNlbWljb2xvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMub25JbnNlcnRlZFNlbWljb2xvbilcbiAgICAgIHsgdGhpcy5vcHRpb25zLm9uSW5zZXJ0ZWRTZW1pY29sb24odGhpcy5sYXN0VG9rRW5kLCB0aGlzLmxhc3RUb2tFbmRMb2MpOyB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufTtcblxuLy8gQ29uc3VtZSBhIHNlbWljb2xvbiwgb3IsIGZhaWxpbmcgdGhhdCwgc2VlIGlmIHdlIGFyZSBhbGxvd2VkIHRvXG4vLyBwcmV0ZW5kIHRoYXQgdGhlcmUgaXMgYSBzZW1pY29sb24gYXQgdGhpcyBwb3NpdGlvbi5cblxucHAkOS5zZW1pY29sb24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLmVhdCh0eXBlcyQxLnNlbWkpICYmICF0aGlzLmluc2VydFNlbWljb2xvbigpKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG59O1xuXG5wcCQ5LmFmdGVyVHJhaWxpbmdDb21tYSA9IGZ1bmN0aW9uKHRva1R5cGUsIG5vdE5leHQpIHtcbiAgaWYgKHRoaXMudHlwZSA9PT0gdG9rVHlwZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMub25UcmFpbGluZ0NvbW1hKVxuICAgICAgeyB0aGlzLm9wdGlvbnMub25UcmFpbGluZ0NvbW1hKHRoaXMubGFzdFRva1N0YXJ0LCB0aGlzLmxhc3RUb2tTdGFydExvYyk7IH1cbiAgICBpZiAoIW5vdE5leHQpXG4gICAgICB7IHRoaXMubmV4dCgpOyB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufTtcblxuLy8gRXhwZWN0IGEgdG9rZW4gb2YgYSBnaXZlbiB0eXBlLiBJZiBmb3VuZCwgY29uc3VtZSBpdCwgb3RoZXJ3aXNlLFxuLy8gcmFpc2UgYW4gdW5leHBlY3RlZCB0b2tlbiBlcnJvci5cblxucHAkOS5leHBlY3QgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHRoaXMuZWF0KHR5cGUpIHx8IHRoaXMudW5leHBlY3RlZCgpO1xufTtcblxuLy8gUmFpc2UgYW4gdW5leHBlY3RlZCB0b2tlbiBlcnJvci5cblxucHAkOS51bmV4cGVjdGVkID0gZnVuY3Rpb24ocG9zKSB7XG4gIHRoaXMucmFpc2UocG9zICE9IG51bGwgPyBwb3MgOiB0aGlzLnN0YXJ0LCBcIlVuZXhwZWN0ZWQgdG9rZW5cIik7XG59O1xuXG52YXIgRGVzdHJ1Y3R1cmluZ0Vycm9ycyA9IGZ1bmN0aW9uIERlc3RydWN0dXJpbmdFcnJvcnMoKSB7XG4gIHRoaXMuc2hvcnRoYW5kQXNzaWduID1cbiAgdGhpcy50cmFpbGluZ0NvbW1hID1cbiAgdGhpcy5wYXJlbnRoZXNpemVkQXNzaWduID1cbiAgdGhpcy5wYXJlbnRoZXNpemVkQmluZCA9XG4gIHRoaXMuZG91YmxlUHJvdG8gPVxuICAgIC0xO1xufTtcblxucHAkOS5jaGVja1BhdHRlcm5FcnJvcnMgPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBpc0Fzc2lnbikge1xuICBpZiAoIXJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgcmV0dXJuIH1cbiAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSA+IC0xKVxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSwgXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIik7IH1cbiAgdmFyIHBhcmVucyA9IGlzQXNzaWduID8gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQXNzaWduIDogcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQmluZDtcbiAgaWYgKHBhcmVucyA+IC0xKSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShwYXJlbnMsIGlzQXNzaWduID8gXCJBc3NpZ25pbmcgdG8gcnZhbHVlXCIgOiBcIlBhcmVudGhlc2l6ZWQgcGF0dGVyblwiKTsgfVxufTtcblxucHAkOS5jaGVja0V4cHJlc3Npb25FcnJvcnMgPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBhbmRUaHJvdykge1xuICBpZiAoIXJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgcmV0dXJuIGZhbHNlIH1cbiAgdmFyIHNob3J0aGFuZEFzc2lnbiA9IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuc2hvcnRoYW5kQXNzaWduO1xuICB2YXIgZG91YmxlUHJvdG8gPSByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLmRvdWJsZVByb3RvO1xuICBpZiAoIWFuZFRocm93KSB7IHJldHVybiBzaG9ydGhhbmRBc3NpZ24gPj0gMCB8fCBkb3VibGVQcm90byA+PSAwIH1cbiAgaWYgKHNob3J0aGFuZEFzc2lnbiA+PSAwKVxuICAgIHsgdGhpcy5yYWlzZShzaG9ydGhhbmRBc3NpZ24sIFwiU2hvcnRoYW5kIHByb3BlcnR5IGFzc2lnbm1lbnRzIGFyZSB2YWxpZCBvbmx5IGluIGRlc3RydWN0dXJpbmcgcGF0dGVybnNcIik7IH1cbiAgaWYgKGRvdWJsZVByb3RvID49IDApXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZG91YmxlUHJvdG8sIFwiUmVkZWZpbml0aW9uIG9mIF9fcHJvdG9fXyBwcm9wZXJ0eVwiKTsgfVxufTtcblxucHAkOS5jaGVja1lpZWxkQXdhaXRJbkRlZmF1bHRQYXJhbXMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMueWllbGRQb3MgJiYgKCF0aGlzLmF3YWl0UG9zIHx8IHRoaXMueWllbGRQb3MgPCB0aGlzLmF3YWl0UG9zKSlcbiAgICB7IHRoaXMucmFpc2UodGhpcy55aWVsZFBvcywgXCJZaWVsZCBleHByZXNzaW9uIGNhbm5vdCBiZSBhIGRlZmF1bHQgdmFsdWVcIik7IH1cbiAgaWYgKHRoaXMuYXdhaXRQb3MpXG4gICAgeyB0aGlzLnJhaXNlKHRoaXMuYXdhaXRQb3MsIFwiQXdhaXQgZXhwcmVzc2lvbiBjYW5ub3QgYmUgYSBkZWZhdWx0IHZhbHVlXCIpOyB9XG59O1xuXG5wcCQ5LmlzU2ltcGxlQXNzaWduVGFyZ2V0ID0gZnVuY3Rpb24oZXhwcikge1xuICBpZiAoZXhwci50eXBlID09PSBcIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCIpXG4gICAgeyByZXR1cm4gdGhpcy5pc1NpbXBsZUFzc2lnblRhcmdldChleHByLmV4cHJlc3Npb24pIH1cbiAgcmV0dXJuIGV4cHIudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgfHwgZXhwci50eXBlID09PSBcIk1lbWJlckV4cHJlc3Npb25cIlxufTtcblxudmFyIHBwJDggPSBQYXJzZXIucHJvdG90eXBlO1xuXG4vLyAjIyMgU3RhdGVtZW50IHBhcnNpbmdcblxuLy8gUGFyc2UgYSBwcm9ncmFtLiBJbml0aWFsaXplcyB0aGUgcGFyc2VyLCByZWFkcyBhbnkgbnVtYmVyIG9mXG4vLyBzdGF0ZW1lbnRzLCBhbmQgd3JhcHMgdGhlbSBpbiBhIFByb2dyYW0gbm9kZS4gIE9wdGlvbmFsbHkgdGFrZXMgYVxuLy8gYHByb2dyYW1gIGFyZ3VtZW50LiAgSWYgcHJlc2VudCwgdGhlIHN0YXRlbWVudHMgd2lsbCBiZSBhcHBlbmRlZFxuLy8gdG8gaXRzIGJvZHkgaW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBub2RlLlxuXG5wcCQ4LnBhcnNlVG9wTGV2ZWwgPSBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBleHBvcnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCFub2RlLmJvZHkpIHsgbm9kZS5ib2R5ID0gW107IH1cbiAgd2hpbGUgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5lb2YpIHtcbiAgICB2YXIgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCwgdHJ1ZSwgZXhwb3J0cyk7XG4gICAgbm9kZS5ib2R5LnB1c2goc3RtdCk7XG4gIH1cbiAgaWYgKHRoaXMuaW5Nb2R1bGUpXG4gICAgeyBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKHRoaXMudW5kZWZpbmVkRXhwb3J0cyk7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxuICAgICAge1xuICAgICAgICB2YXIgbmFtZSA9IGxpc3RbaV07XG5cbiAgICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMudW5kZWZpbmVkRXhwb3J0c1tuYW1lXS5zdGFydCwgKFwiRXhwb3J0ICdcIiArIG5hbWUgKyBcIicgaXMgbm90IGRlZmluZWRcIikpO1xuICAgICAgfSB9XG4gIHRoaXMuYWRhcHREaXJlY3RpdmVQcm9sb2d1ZShub2RlLmJvZHkpO1xuICB0aGlzLm5leHQoKTtcbiAgbm9kZS5zb3VyY2VUeXBlID0gdGhpcy5vcHRpb25zLnNvdXJjZVR5cGU7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJQcm9ncmFtXCIpXG59O1xuXG52YXIgbG9vcExhYmVsID0ge2tpbmQ6IFwibG9vcFwifSwgc3dpdGNoTGFiZWwgPSB7a2luZDogXCJzd2l0Y2hcIn07XG5cbnBwJDguaXNMZXQgPSBmdW5jdGlvbihjb250ZXh0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA2IHx8ICF0aGlzLmlzQ29udGV4dHVhbChcImxldFwiKSkgeyByZXR1cm4gZmFsc2UgfVxuICBza2lwV2hpdGVTcGFjZS5sYXN0SW5kZXggPSB0aGlzLnBvcztcbiAgdmFyIHNraXAgPSBza2lwV2hpdGVTcGFjZS5leGVjKHRoaXMuaW5wdXQpO1xuICB2YXIgbmV4dCA9IHRoaXMucG9zICsgc2tpcFswXS5sZW5ndGgsIG5leHRDaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdChuZXh0KTtcbiAgLy8gRm9yIGFtYmlndW91cyBjYXNlcywgZGV0ZXJtaW5lIGlmIGEgTGV4aWNhbERlY2xhcmF0aW9uIChvciBvbmx5IGFcbiAgLy8gU3RhdGVtZW50KSBpcyBhbGxvd2VkIGhlcmUuIElmIGNvbnRleHQgaXMgbm90IGVtcHR5IHRoZW4gb25seSBhIFN0YXRlbWVudFxuICAvLyBpcyBhbGxvd2VkLiBIb3dldmVyLCBgbGV0IFtgIGlzIGFuIGV4cGxpY2l0IG5lZ2F0aXZlIGxvb2thaGVhZCBmb3JcbiAgLy8gRXhwcmVzc2lvblN0YXRlbWVudCwgc28gc3BlY2lhbC1jYXNlIGl0IGZpcnN0LlxuICBpZiAobmV4dENoID09PSA5MSB8fCBuZXh0Q2ggPT09IDkyKSB7IHJldHVybiB0cnVlIH0gLy8gJ1snLCAnLydcbiAgaWYgKGNvbnRleHQpIHsgcmV0dXJuIGZhbHNlIH1cblxuICBpZiAobmV4dENoID09PSAxMjMgfHwgbmV4dENoID4gMHhkN2ZmICYmIG5leHRDaCA8IDB4ZGMwMCkgeyByZXR1cm4gdHJ1ZSB9IC8vICd7JywgYXN0cmFsXG4gIGlmIChpc0lkZW50aWZpZXJTdGFydChuZXh0Q2gsIHRydWUpKSB7XG4gICAgdmFyIHBvcyA9IG5leHQgKyAxO1xuICAgIHdoaWxlIChpc0lkZW50aWZpZXJDaGFyKG5leHRDaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdChwb3MpLCB0cnVlKSkgeyArK3BvczsgfVxuICAgIGlmIChuZXh0Q2ggPT09IDkyIHx8IG5leHRDaCA+IDB4ZDdmZiAmJiBuZXh0Q2ggPCAweGRjMDApIHsgcmV0dXJuIHRydWUgfVxuICAgIHZhciBpZGVudCA9IHRoaXMuaW5wdXQuc2xpY2UobmV4dCwgcG9zKTtcbiAgICBpZiAoIWtleXdvcmRSZWxhdGlvbmFsT3BlcmF0b3IudGVzdChpZGVudCkpIHsgcmV0dXJuIHRydWUgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gY2hlY2sgJ2FzeW5jIFtubyBMaW5lVGVybWluYXRvciBoZXJlXSBmdW5jdGlvbidcbi8vIC0gJ2FzeW5jIC8qZm9vKi8gZnVuY3Rpb24nIGlzIE9LLlxuLy8gLSAnYXN5bmMgLypcXG4qLyBmdW5jdGlvbicgaXMgaW52YWxpZC5cbnBwJDguaXNBc3luY0Z1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA4IHx8ICF0aGlzLmlzQ29udGV4dHVhbChcImFzeW5jXCIpKVxuICAgIHsgcmV0dXJuIGZhbHNlIH1cblxuICBza2lwV2hpdGVTcGFjZS5sYXN0SW5kZXggPSB0aGlzLnBvcztcbiAgdmFyIHNraXAgPSBza2lwV2hpdGVTcGFjZS5leGVjKHRoaXMuaW5wdXQpO1xuICB2YXIgbmV4dCA9IHRoaXMucG9zICsgc2tpcFswXS5sZW5ndGgsIGFmdGVyO1xuICByZXR1cm4gIWxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5wb3MsIG5leHQpKSAmJlxuICAgIHRoaXMuaW5wdXQuc2xpY2UobmV4dCwgbmV4dCArIDgpID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAobmV4dCArIDggPT09IHRoaXMuaW5wdXQubGVuZ3RoIHx8XG4gICAgICEoaXNJZGVudGlmaWVyQ2hhcihhZnRlciA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdChuZXh0ICsgOCkpIHx8IGFmdGVyID4gMHhkN2ZmICYmIGFmdGVyIDwgMHhkYzAwKSlcbn07XG5cbi8vIFBhcnNlIGEgc2luZ2xlIHN0YXRlbWVudC5cbi8vXG4vLyBJZiBleHBlY3RpbmcgYSBzdGF0ZW1lbnQgYW5kIGZpbmRpbmcgYSBzbGFzaCBvcGVyYXRvciwgcGFyc2UgYVxuLy8gcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWwuIFRoaXMgaXMgdG8gaGFuZGxlIGNhc2VzIGxpa2Vcbi8vIGBpZiAoZm9vKSAvYmxhaC8uZXhlYyhmb28pYCwgd2hlcmUgbG9va2luZyBhdCB0aGUgcHJldmlvdXMgdG9rZW5cbi8vIGRvZXMgbm90IGhlbHAuXG5cbnBwJDgucGFyc2VTdGF0ZW1lbnQgPSBmdW5jdGlvbihjb250ZXh0LCB0b3BMZXZlbCwgZXhwb3J0cykge1xuICB2YXIgc3RhcnR0eXBlID0gdGhpcy50eXBlLCBub2RlID0gdGhpcy5zdGFydE5vZGUoKSwga2luZDtcblxuICBpZiAodGhpcy5pc0xldChjb250ZXh0KSkge1xuICAgIHN0YXJ0dHlwZSA9IHR5cGVzJDEuX3ZhcjtcbiAgICBraW5kID0gXCJsZXRcIjtcbiAgfVxuXG4gIC8vIE1vc3QgdHlwZXMgb2Ygc3RhdGVtZW50cyBhcmUgcmVjb2duaXplZCBieSB0aGUga2V5d29yZCB0aGV5XG4gIC8vIHN0YXJ0IHdpdGguIE1hbnkgYXJlIHRyaXZpYWwgdG8gcGFyc2UsIHNvbWUgcmVxdWlyZSBhIGJpdCBvZlxuICAvLyBjb21wbGV4aXR5LlxuXG4gIHN3aXRjaCAoc3RhcnR0eXBlKSB7XG4gIGNhc2UgdHlwZXMkMS5fYnJlYWs6IGNhc2UgdHlwZXMkMS5fY29udGludWU6IHJldHVybiB0aGlzLnBhcnNlQnJlYWtDb250aW51ZVN0YXRlbWVudChub2RlLCBzdGFydHR5cGUua2V5d29yZClcbiAgY2FzZSB0eXBlcyQxLl9kZWJ1Z2dlcjogcmV0dXJuIHRoaXMucGFyc2VEZWJ1Z2dlclN0YXRlbWVudChub2RlKVxuICBjYXNlIHR5cGVzJDEuX2RvOiByZXR1cm4gdGhpcy5wYXJzZURvU3RhdGVtZW50KG5vZGUpXG4gIGNhc2UgdHlwZXMkMS5fZm9yOiByZXR1cm4gdGhpcy5wYXJzZUZvclN0YXRlbWVudChub2RlKVxuICBjYXNlIHR5cGVzJDEuX2Z1bmN0aW9uOlxuICAgIC8vIEZ1bmN0aW9uIGFzIHNvbGUgYm9keSBvZiBlaXRoZXIgYW4gaWYgc3RhdGVtZW50IG9yIGEgbGFiZWxlZCBzdGF0ZW1lbnRcbiAgICAvLyB3b3JrcywgYnV0IG5vdCB3aGVuIGl0IGlzIHBhcnQgb2YgYSBsYWJlbGVkIHN0YXRlbWVudCB0aGF0IGlzIHRoZSBzb2xlXG4gICAgLy8gYm9keSBvZiBhbiBpZiBzdGF0ZW1lbnQuXG4gICAgaWYgKChjb250ZXh0ICYmICh0aGlzLnN0cmljdCB8fCBjb250ZXh0ICE9PSBcImlmXCIgJiYgY29udGV4dCAhPT0gXCJsYWJlbFwiKSkgJiYgdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbiAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uU3RhdGVtZW50KG5vZGUsIGZhbHNlLCAhY29udGV4dClcbiAgY2FzZSB0eXBlcyQxLl9jbGFzczpcbiAgICBpZiAoY29udGV4dCkgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlQ2xhc3Mobm9kZSwgdHJ1ZSlcbiAgY2FzZSB0eXBlcyQxLl9pZjogcmV0dXJuIHRoaXMucGFyc2VJZlN0YXRlbWVudChub2RlKVxuICBjYXNlIHR5cGVzJDEuX3JldHVybjogcmV0dXJuIHRoaXMucGFyc2VSZXR1cm5TdGF0ZW1lbnQobm9kZSlcbiAgY2FzZSB0eXBlcyQxLl9zd2l0Y2g6IHJldHVybiB0aGlzLnBhcnNlU3dpdGNoU3RhdGVtZW50KG5vZGUpXG4gIGNhc2UgdHlwZXMkMS5fdGhyb3c6IHJldHVybiB0aGlzLnBhcnNlVGhyb3dTdGF0ZW1lbnQobm9kZSlcbiAgY2FzZSB0eXBlcyQxLl90cnk6IHJldHVybiB0aGlzLnBhcnNlVHJ5U3RhdGVtZW50KG5vZGUpXG4gIGNhc2UgdHlwZXMkMS5fY29uc3Q6IGNhc2UgdHlwZXMkMS5fdmFyOlxuICAgIGtpbmQgPSBraW5kIHx8IHRoaXMudmFsdWU7XG4gICAgaWYgKGNvbnRleHQgJiYga2luZCAhPT0gXCJ2YXJcIikgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlVmFyU3RhdGVtZW50KG5vZGUsIGtpbmQpXG4gIGNhc2UgdHlwZXMkMS5fd2hpbGU6IHJldHVybiB0aGlzLnBhcnNlV2hpbGVTdGF0ZW1lbnQobm9kZSlcbiAgY2FzZSB0eXBlcyQxLl93aXRoOiByZXR1cm4gdGhpcy5wYXJzZVdpdGhTdGF0ZW1lbnQobm9kZSlcbiAgY2FzZSB0eXBlcyQxLmJyYWNlTDogcmV0dXJuIHRoaXMucGFyc2VCbG9jayh0cnVlLCBub2RlKVxuICBjYXNlIHR5cGVzJDEuc2VtaTogcmV0dXJuIHRoaXMucGFyc2VFbXB0eVN0YXRlbWVudChub2RlKVxuICBjYXNlIHR5cGVzJDEuX2V4cG9ydDpcbiAgY2FzZSB0eXBlcyQxLl9pbXBvcnQ6XG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+IDEwICYmIHN0YXJ0dHlwZSA9PT0gdHlwZXMkMS5faW1wb3J0KSB7XG4gICAgICBza2lwV2hpdGVTcGFjZS5sYXN0SW5kZXggPSB0aGlzLnBvcztcbiAgICAgIHZhciBza2lwID0gc2tpcFdoaXRlU3BhY2UuZXhlYyh0aGlzLmlucHV0KTtcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5wb3MgKyBza2lwWzBdLmxlbmd0aCwgbmV4dENoID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KG5leHQpO1xuICAgICAgaWYgKG5leHRDaCA9PT0gNDAgfHwgbmV4dENoID09PSA0NikgLy8gJygnIG9yICcuJ1xuICAgICAgICB7IHJldHVybiB0aGlzLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChub2RlLCB0aGlzLnBhcnNlRXhwcmVzc2lvbigpKSB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYWxsb3dJbXBvcnRFeHBvcnRFdmVyeXdoZXJlKSB7XG4gICAgICBpZiAoIXRvcExldmVsKVxuICAgICAgICB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCInaW1wb3J0JyBhbmQgJ2V4cG9ydCcgbWF5IG9ubHkgYXBwZWFyIGF0IHRoZSB0b3AgbGV2ZWxcIik7IH1cbiAgICAgIGlmICghdGhpcy5pbk1vZHVsZSlcbiAgICAgICAgeyB0aGlzLnJhaXNlKHRoaXMuc3RhcnQsIFwiJ2ltcG9ydCcgYW5kICdleHBvcnQnIG1heSBhcHBlYXIgb25seSB3aXRoICdzb3VyY2VUeXBlOiBtb2R1bGUnXCIpOyB9XG4gICAgfVxuICAgIHJldHVybiBzdGFydHR5cGUgPT09IHR5cGVzJDEuX2ltcG9ydCA/IHRoaXMucGFyc2VJbXBvcnQobm9kZSkgOiB0aGlzLnBhcnNlRXhwb3J0KG5vZGUsIGV4cG9ydHMpXG5cbiAgICAvLyBJZiB0aGUgc3RhdGVtZW50IGRvZXMgbm90IHN0YXJ0IHdpdGggYSBzdGF0ZW1lbnQga2V5d29yZCBvciBhXG4gICAgLy8gYnJhY2UsIGl0J3MgYW4gRXhwcmVzc2lvblN0YXRlbWVudCBvciBMYWJlbGVkU3RhdGVtZW50LiBXZVxuICAgIC8vIHNpbXBseSBzdGFydCBwYXJzaW5nIGFuIGV4cHJlc3Npb24sIGFuZCBhZnRlcndhcmRzLCBpZiB0aGVcbiAgICAvLyBuZXh0IHRva2VuIGlzIGEgY29sb24gYW5kIHRoZSBleHByZXNzaW9uIHdhcyBhIHNpbXBsZVxuICAgIC8vIElkZW50aWZpZXIgbm9kZSwgd2Ugc3dpdGNoIHRvIGludGVycHJldGluZyBpdCBhcyBhIGxhYmVsLlxuICBkZWZhdWx0OlxuICAgIGlmICh0aGlzLmlzQXN5bmNGdW5jdGlvbigpKSB7XG4gICAgICBpZiAoY29udGV4dCkgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uU3RhdGVtZW50KG5vZGUsIHRydWUsICFjb250ZXh0KVxuICAgIH1cblxuICAgIHZhciBtYXliZU5hbWUgPSB0aGlzLnZhbHVlLCBleHByID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICBpZiAoc3RhcnR0eXBlID09PSB0eXBlcyQxLm5hbWUgJiYgZXhwci50eXBlID09PSBcIklkZW50aWZpZXJcIiAmJiB0aGlzLmVhdCh0eXBlcyQxLmNvbG9uKSlcbiAgICAgIHsgcmV0dXJuIHRoaXMucGFyc2VMYWJlbGVkU3RhdGVtZW50KG5vZGUsIG1heWJlTmFtZSwgZXhwciwgY29udGV4dCkgfVxuICAgIGVsc2UgeyByZXR1cm4gdGhpcy5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSwgZXhwcikgfVxuICB9XG59O1xuXG5wcCQ4LnBhcnNlQnJlYWtDb250aW51ZVN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUsIGtleXdvcmQpIHtcbiAgdmFyIGlzQnJlYWsgPSBrZXl3b3JkID09PSBcImJyZWFrXCI7XG4gIHRoaXMubmV4dCgpO1xuICBpZiAodGhpcy5lYXQodHlwZXMkMS5zZW1pKSB8fCB0aGlzLmluc2VydFNlbWljb2xvbigpKSB7IG5vZGUubGFiZWwgPSBudWxsOyB9XG4gIGVsc2UgaWYgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5uYW1lKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG4gIGVsc2Uge1xuICAgIG5vZGUubGFiZWwgPSB0aGlzLnBhcnNlSWRlbnQoKTtcbiAgICB0aGlzLnNlbWljb2xvbigpO1xuICB9XG5cbiAgLy8gVmVyaWZ5IHRoYXQgdGhlcmUgaXMgYW4gYWN0dWFsIGRlc3RpbmF0aW9uIHRvIGJyZWFrIG9yXG4gIC8vIGNvbnRpbnVlIHRvLlxuICB2YXIgaSA9IDA7XG4gIGZvciAoOyBpIDwgdGhpcy5sYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgbGFiID0gdGhpcy5sYWJlbHNbaV07XG4gICAgaWYgKG5vZGUubGFiZWwgPT0gbnVsbCB8fCBsYWIubmFtZSA9PT0gbm9kZS5sYWJlbC5uYW1lKSB7XG4gICAgICBpZiAobGFiLmtpbmQgIT0gbnVsbCAmJiAoaXNCcmVhayB8fCBsYWIua2luZCA9PT0gXCJsb29wXCIpKSB7IGJyZWFrIH1cbiAgICAgIGlmIChub2RlLmxhYmVsICYmIGlzQnJlYWspIHsgYnJlYWsgfVxuICAgIH1cbiAgfVxuICBpZiAoaSA9PT0gdGhpcy5sYWJlbHMubGVuZ3RoKSB7IHRoaXMucmFpc2Uobm9kZS5zdGFydCwgXCJVbnN5bnRhY3RpYyBcIiArIGtleXdvcmQpOyB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgaXNCcmVhayA/IFwiQnJlYWtTdGF0ZW1lbnRcIiA6IFwiQ29udGludWVTdGF0ZW1lbnRcIilcbn07XG5cbnBwJDgucGFyc2VEZWJ1Z2dlclN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgdGhpcy5uZXh0KCk7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJEZWJ1Z2dlclN0YXRlbWVudFwiKVxufTtcblxucHAkOC5wYXJzZURvU3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xuICB0aGlzLm5leHQoKTtcbiAgdGhpcy5sYWJlbHMucHVzaChsb29wTGFiZWwpO1xuICBub2RlLmJvZHkgPSB0aGlzLnBhcnNlU3RhdGVtZW50KFwiZG9cIik7XG4gIHRoaXMubGFiZWxzLnBvcCgpO1xuICB0aGlzLmV4cGVjdCh0eXBlcyQxLl93aGlsZSk7XG4gIG5vZGUudGVzdCA9IHRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKTtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KVxuICAgIHsgdGhpcy5lYXQodHlwZXMkMS5zZW1pKTsgfVxuICBlbHNlXG4gICAgeyB0aGlzLnNlbWljb2xvbigpOyB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJEb1doaWxlU3RhdGVtZW50XCIpXG59O1xuXG4vLyBEaXNhbWJpZ3VhdGluZyBiZXR3ZWVuIGEgYGZvcmAgYW5kIGEgYGZvcmAvYGluYCBvciBgZm9yYC9gb2ZgXG4vLyBsb29wIGlzIG5vbi10cml2aWFsLiBCYXNpY2FsbHksIHdlIGhhdmUgdG8gcGFyc2UgdGhlIGluaXQgYHZhcmBcbi8vIHN0YXRlbWVudCBvciBleHByZXNzaW9uLCBkaXNhbGxvd2luZyB0aGUgYGluYCBvcGVyYXRvciAoc2VlXG4vLyB0aGUgc2Vjb25kIHBhcmFtZXRlciB0byBgcGFyc2VFeHByZXNzaW9uYCksIGFuZCB0aGVuIGNoZWNrXG4vLyB3aGV0aGVyIHRoZSBuZXh0IHRva2VuIGlzIGBpbmAgb3IgYG9mYC4gV2hlbiB0aGVyZSBpcyBubyBpbml0XG4vLyBwYXJ0IChzZW1pY29sb24gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIG9wZW5pbmcgcGFyZW50aGVzaXMpLCBpdFxuLy8gaXMgYSByZWd1bGFyIGBmb3JgIGxvb3AuXG5cbnBwJDgucGFyc2VGb3JTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gIHRoaXMubmV4dCgpO1xuICB2YXIgYXdhaXRBdCA9ICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSAmJiB0aGlzLmNhbkF3YWl0ICYmIHRoaXMuZWF0Q29udGV4dHVhbChcImF3YWl0XCIpKSA/IHRoaXMubGFzdFRva1N0YXJ0IDogLTE7XG4gIHRoaXMubGFiZWxzLnB1c2gobG9vcExhYmVsKTtcbiAgdGhpcy5lbnRlclNjb3BlKDApO1xuICB0aGlzLmV4cGVjdCh0eXBlcyQxLnBhcmVuTCk7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuc2VtaSkge1xuICAgIGlmIChhd2FpdEF0ID4gLTEpIHsgdGhpcy51bmV4cGVjdGVkKGF3YWl0QXQpOyB9XG4gICAgcmV0dXJuIHRoaXMucGFyc2VGb3Iobm9kZSwgbnVsbClcbiAgfVxuICB2YXIgaXNMZXQgPSB0aGlzLmlzTGV0KCk7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX3ZhciB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2NvbnN0IHx8IGlzTGV0KSB7XG4gICAgdmFyIGluaXQkMSA9IHRoaXMuc3RhcnROb2RlKCksIGtpbmQgPSBpc0xldCA/IFwibGV0XCIgOiB0aGlzLnZhbHVlO1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHRoaXMucGFyc2VWYXIoaW5pdCQxLCB0cnVlLCBraW5kKTtcbiAgICB0aGlzLmZpbmlzaE5vZGUoaW5pdCQxLCBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIik7XG4gICAgaWYgKCh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luIHx8ICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiAmJiB0aGlzLmlzQ29udGV4dHVhbChcIm9mXCIpKSkgJiYgaW5pdCQxLmRlY2xhcmF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9pbikge1xuICAgICAgICAgIGlmIChhd2FpdEF0ID4gLTEpIHsgdGhpcy51bmV4cGVjdGVkKGF3YWl0QXQpOyB9XG4gICAgICAgIH0gZWxzZSB7IG5vZGUuYXdhaXQgPSBhd2FpdEF0ID4gLTE7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnBhcnNlRm9ySW4obm9kZSwgaW5pdCQxKVxuICAgIH1cbiAgICBpZiAoYXdhaXRBdCA+IC0xKSB7IHRoaXMudW5leHBlY3RlZChhd2FpdEF0KTsgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlRm9yKG5vZGUsIGluaXQkMSlcbiAgfVxuICB2YXIgc3RhcnRzV2l0aExldCA9IHRoaXMuaXNDb250ZXh0dWFsKFwibGV0XCIpLCBpc0Zvck9mID0gZmFsc2U7XG4gIHZhciByZWZEZXN0cnVjdHVyaW5nRXJyb3JzID0gbmV3IERlc3RydWN0dXJpbmdFcnJvcnM7XG4gIHZhciBpbml0ID0gdGhpcy5wYXJzZUV4cHJlc3Npb24oYXdhaXRBdCA+IC0xID8gXCJhd2FpdFwiIDogdHJ1ZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luIHx8IChpc0Zvck9mID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgdGhpcy5pc0NvbnRleHR1YWwoXCJvZlwiKSkpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkpIHtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luKSB7XG4gICAgICAgIGlmIChhd2FpdEF0ID4gLTEpIHsgdGhpcy51bmV4cGVjdGVkKGF3YWl0QXQpOyB9XG4gICAgICB9IGVsc2UgeyBub2RlLmF3YWl0ID0gYXdhaXRBdCA+IC0xOyB9XG4gICAgfVxuICAgIGlmIChzdGFydHNXaXRoTGV0ICYmIGlzRm9yT2YpIHsgdGhpcy5yYWlzZShpbml0LnN0YXJ0LCBcIlRoZSBsZWZ0LWhhbmQgc2lkZSBvZiBhIGZvci1vZiBsb29wIG1heSBub3Qgc3RhcnQgd2l0aCAnbGV0Jy5cIik7IH1cbiAgICB0aGlzLnRvQXNzaWduYWJsZShpbml0LCBmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gICAgdGhpcy5jaGVja0xWYWxQYXR0ZXJuKGluaXQpO1xuICAgIHJldHVybiB0aGlzLnBhcnNlRm9ySW4obm9kZSwgaW5pdClcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCB0cnVlKTtcbiAgfVxuICBpZiAoYXdhaXRBdCA+IC0xKSB7IHRoaXMudW5leHBlY3RlZChhd2FpdEF0KTsgfVxuICByZXR1cm4gdGhpcy5wYXJzZUZvcihub2RlLCBpbml0KVxufTtcblxucHAkOC5wYXJzZUZ1bmN0aW9uU3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSwgaXNBc3luYywgZGVjbGFyYXRpb25Qb3NpdGlvbikge1xuICB0aGlzLm5leHQoKTtcbiAgcmV0dXJuIHRoaXMucGFyc2VGdW5jdGlvbihub2RlLCBGVU5DX1NUQVRFTUVOVCB8IChkZWNsYXJhdGlvblBvc2l0aW9uID8gMCA6IEZVTkNfSEFOR0lOR19TVEFURU1FTlQpLCBmYWxzZSwgaXNBc3luYylcbn07XG5cbnBwJDgucGFyc2VJZlN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgdGhpcy5uZXh0KCk7XG4gIG5vZGUudGVzdCA9IHRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKTtcbiAgLy8gYWxsb3cgZnVuY3Rpb24gZGVjbGFyYXRpb25zIGluIGJyYW5jaGVzLCBidXQgb25seSBpbiBub24tc3RyaWN0IG1vZGVcbiAgbm9kZS5jb25zZXF1ZW50ID0gdGhpcy5wYXJzZVN0YXRlbWVudChcImlmXCIpO1xuICBub2RlLmFsdGVybmF0ZSA9IHRoaXMuZWF0KHR5cGVzJDEuX2Vsc2UpID8gdGhpcy5wYXJzZVN0YXRlbWVudChcImlmXCIpIDogbnVsbDtcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIklmU3RhdGVtZW50XCIpXG59O1xuXG5wcCQ4LnBhcnNlUmV0dXJuU3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xuICBpZiAoIXRoaXMuaW5GdW5jdGlvbiAmJiAhdGhpcy5vcHRpb25zLmFsbG93UmV0dXJuT3V0c2lkZUZ1bmN0aW9uKVxuICAgIHsgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIidyZXR1cm4nIG91dHNpZGUgb2YgZnVuY3Rpb25cIik7IH1cbiAgdGhpcy5uZXh0KCk7XG5cbiAgLy8gSW4gYHJldHVybmAgKGFuZCBgYnJlYWtgL2Bjb250aW51ZWApLCB0aGUga2V5d29yZHMgd2l0aFxuICAvLyBvcHRpb25hbCBhcmd1bWVudHMsIHdlIGVhZ2VybHkgbG9vayBmb3IgYSBzZW1pY29sb24gb3IgdGhlXG4gIC8vIHBvc3NpYmlsaXR5IHRvIGluc2VydCBvbmUuXG5cbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuc2VtaSkgfHwgdGhpcy5pbnNlcnRTZW1pY29sb24oKSkgeyBub2RlLmFyZ3VtZW50ID0gbnVsbDsgfVxuICBlbHNlIHsgbm9kZS5hcmd1bWVudCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7IHRoaXMuc2VtaWNvbG9uKCk7IH1cbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlJldHVyblN0YXRlbWVudFwiKVxufTtcblxucHAkOC5wYXJzZVN3aXRjaFN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgdGhpcy5uZXh0KCk7XG4gIG5vZGUuZGlzY3JpbWluYW50ID0gdGhpcy5wYXJzZVBhcmVuRXhwcmVzc2lvbigpO1xuICBub2RlLmNhc2VzID0gW107XG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEuYnJhY2VMKTtcbiAgdGhpcy5sYWJlbHMucHVzaChzd2l0Y2hMYWJlbCk7XG4gIHRoaXMuZW50ZXJTY29wZSgwKTtcblxuICAvLyBTdGF0ZW1lbnRzIHVuZGVyIG11c3QgYmUgZ3JvdXBlZCAoYnkgbGFiZWwpIGluIFN3aXRjaENhc2VcbiAgLy8gbm9kZXMuIGBjdXJgIGlzIHVzZWQgdG8ga2VlcCB0aGUgbm9kZSB0aGF0IHdlIGFyZSBjdXJyZW50bHlcbiAgLy8gYWRkaW5nIHN0YXRlbWVudHMgdG8uXG5cbiAgdmFyIGN1cjtcbiAgZm9yICh2YXIgc2F3RGVmYXVsdCA9IGZhbHNlOyB0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VSOykge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2Nhc2UgfHwgdGhpcy50eXBlID09PSB0eXBlcyQxLl9kZWZhdWx0KSB7XG4gICAgICB2YXIgaXNDYXNlID0gdGhpcy50eXBlID09PSB0eXBlcyQxLl9jYXNlO1xuICAgICAgaWYgKGN1cikgeyB0aGlzLmZpbmlzaE5vZGUoY3VyLCBcIlN3aXRjaENhc2VcIik7IH1cbiAgICAgIG5vZGUuY2FzZXMucHVzaChjdXIgPSB0aGlzLnN0YXJ0Tm9kZSgpKTtcbiAgICAgIGN1ci5jb25zZXF1ZW50ID0gW107XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIGlmIChpc0Nhc2UpIHtcbiAgICAgICAgY3VyLnRlc3QgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNhd0RlZmF1bHQpIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMubGFzdFRva1N0YXJ0LCBcIk11bHRpcGxlIGRlZmF1bHQgY2xhdXNlc1wiKTsgfVxuICAgICAgICBzYXdEZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgY3VyLnRlc3QgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5jb2xvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY3VyKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG4gICAgICBjdXIuY29uc2VxdWVudC5wdXNoKHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCkpO1xuICAgIH1cbiAgfVxuICB0aGlzLmV4aXRTY29wZSgpO1xuICBpZiAoY3VyKSB7IHRoaXMuZmluaXNoTm9kZShjdXIsIFwiU3dpdGNoQ2FzZVwiKTsgfVxuICB0aGlzLm5leHQoKTsgLy8gQ2xvc2luZyBicmFjZVxuICB0aGlzLmxhYmVscy5wb3AoKTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlN3aXRjaFN0YXRlbWVudFwiKVxufTtcblxucHAkOC5wYXJzZVRocm93U3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xuICB0aGlzLm5leHQoKTtcbiAgaWYgKGxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLCB0aGlzLnN0YXJ0KSkpXG4gICAgeyB0aGlzLnJhaXNlKHRoaXMubGFzdFRva0VuZCwgXCJJbGxlZ2FsIG5ld2xpbmUgYWZ0ZXIgdGhyb3dcIik7IH1cbiAgbm9kZS5hcmd1bWVudCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJUaHJvd1N0YXRlbWVudFwiKVxufTtcblxuLy8gUmV1c2VkIGVtcHR5IGFycmF5IGFkZGVkIGZvciBub2RlIGZpZWxkcyB0aGF0IGFyZSBhbHdheXMgZW1wdHkuXG5cbnZhciBlbXB0eSQxID0gW107XG5cbnBwJDgucGFyc2VDYXRjaENsYXVzZVBhcmFtID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXJhbSA9IHRoaXMucGFyc2VCaW5kaW5nQXRvbSgpO1xuICB2YXIgc2ltcGxlID0gcGFyYW0udHlwZSA9PT0gXCJJZGVudGlmaWVyXCI7XG4gIHRoaXMuZW50ZXJTY29wZShzaW1wbGUgPyBTQ09QRV9TSU1QTEVfQ0FUQ0ggOiAwKTtcbiAgdGhpcy5jaGVja0xWYWxQYXR0ZXJuKHBhcmFtLCBzaW1wbGUgPyBCSU5EX1NJTVBMRV9DQVRDSCA6IEJJTkRfTEVYSUNBTCk7XG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEucGFyZW5SKTtcblxuICByZXR1cm4gcGFyYW1cbn07XG5cbnBwJDgucGFyc2VUcnlTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gIHRoaXMubmV4dCgpO1xuICBub2RlLmJsb2NrID0gdGhpcy5wYXJzZUJsb2NrKCk7XG4gIG5vZGUuaGFuZGxlciA9IG51bGw7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2NhdGNoKSB7XG4gICAgdmFyIGNsYXVzZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgaWYgKHRoaXMuZWF0KHR5cGVzJDEucGFyZW5MKSkge1xuICAgICAgY2xhdXNlLnBhcmFtID0gdGhpcy5wYXJzZUNhdGNoQ2xhdXNlUGFyYW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDEwKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG4gICAgICBjbGF1c2UucGFyYW0gPSBudWxsO1xuICAgICAgdGhpcy5lbnRlclNjb3BlKDApO1xuICAgIH1cbiAgICBjbGF1c2UuYm9keSA9IHRoaXMucGFyc2VCbG9jayhmYWxzZSk7XG4gICAgdGhpcy5leGl0U2NvcGUoKTtcbiAgICBub2RlLmhhbmRsZXIgPSB0aGlzLmZpbmlzaE5vZGUoY2xhdXNlLCBcIkNhdGNoQ2xhdXNlXCIpO1xuICB9XG4gIG5vZGUuZmluYWxpemVyID0gdGhpcy5lYXQodHlwZXMkMS5fZmluYWxseSkgPyB0aGlzLnBhcnNlQmxvY2soKSA6IG51bGw7XG4gIGlmICghbm9kZS5oYW5kbGVyICYmICFub2RlLmZpbmFsaXplcilcbiAgICB7IHRoaXMucmFpc2Uobm9kZS5zdGFydCwgXCJNaXNzaW5nIGNhdGNoIG9yIGZpbmFsbHkgY2xhdXNlXCIpOyB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJUcnlTdGF0ZW1lbnRcIilcbn07XG5cbnBwJDgucGFyc2VWYXJTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlLCBraW5kLCBhbGxvd01pc3NpbmdJbml0aWFsaXplcikge1xuICB0aGlzLm5leHQoKTtcbiAgdGhpcy5wYXJzZVZhcihub2RlLCBmYWxzZSwga2luZCwgYWxsb3dNaXNzaW5nSW5pdGlhbGl6ZXIpO1xuICB0aGlzLnNlbWljb2xvbigpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiVmFyaWFibGVEZWNsYXJhdGlvblwiKVxufTtcblxucHAkOC5wYXJzZVdoaWxlU3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xuICB0aGlzLm5leHQoKTtcbiAgbm9kZS50ZXN0ID0gdGhpcy5wYXJzZVBhcmVuRXhwcmVzc2lvbigpO1xuICB0aGlzLmxhYmVscy5wdXNoKGxvb3BMYWJlbCk7XG4gIG5vZGUuYm9keSA9IHRoaXMucGFyc2VTdGF0ZW1lbnQoXCJ3aGlsZVwiKTtcbiAgdGhpcy5sYWJlbHMucG9wKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJXaGlsZVN0YXRlbWVudFwiKVxufTtcblxucHAkOC5wYXJzZVdpdGhTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gIGlmICh0aGlzLnN0cmljdCkgeyB0aGlzLnJhaXNlKHRoaXMuc3RhcnQsIFwiJ3dpdGgnIGluIHN0cmljdCBtb2RlXCIpOyB9XG4gIHRoaXMubmV4dCgpO1xuICBub2RlLm9iamVjdCA9IHRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKTtcbiAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudChcIndpdGhcIik7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJXaXRoU3RhdGVtZW50XCIpXG59O1xuXG5wcCQ4LnBhcnNlRW1wdHlTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gIHRoaXMubmV4dCgpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiRW1wdHlTdGF0ZW1lbnRcIilcbn07XG5cbnBwJDgucGFyc2VMYWJlbGVkU3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSwgbWF5YmVOYW1lLCBleHByLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGkkMSA9IDAsIGxpc3QgPSB0aGlzLmxhYmVsczsgaSQxIDwgbGlzdC5sZW5ndGg7IGkkMSArPSAxKVxuICAgIHtcbiAgICB2YXIgbGFiZWwgPSBsaXN0W2kkMV07XG5cbiAgICBpZiAobGFiZWwubmFtZSA9PT0gbWF5YmVOYW1lKVxuICAgICAgeyB0aGlzLnJhaXNlKGV4cHIuc3RhcnQsIFwiTGFiZWwgJ1wiICsgbWF5YmVOYW1lICsgXCInIGlzIGFscmVhZHkgZGVjbGFyZWRcIik7XG4gIH0gfVxuICB2YXIga2luZCA9IHRoaXMudHlwZS5pc0xvb3AgPyBcImxvb3BcIiA6IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5fc3dpdGNoID8gXCJzd2l0Y2hcIiA6IG51bGw7XG4gIGZvciAodmFyIGkgPSB0aGlzLmxhYmVscy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYWJlbCQxID0gdGhpcy5sYWJlbHNbaV07XG4gICAgaWYgKGxhYmVsJDEuc3RhdGVtZW50U3RhcnQgPT09IG5vZGUuc3RhcnQpIHtcbiAgICAgIC8vIFVwZGF0ZSBpbmZvcm1hdGlvbiBhYm91dCBwcmV2aW91cyBsYWJlbHMgb24gdGhpcyBub2RlXG4gICAgICBsYWJlbCQxLnN0YXRlbWVudFN0YXJ0ID0gdGhpcy5zdGFydDtcbiAgICAgIGxhYmVsJDEua2luZCA9IGtpbmQ7XG4gICAgfSBlbHNlIHsgYnJlYWsgfVxuICB9XG4gIHRoaXMubGFiZWxzLnB1c2goe25hbWU6IG1heWJlTmFtZSwga2luZDoga2luZCwgc3RhdGVtZW50U3RhcnQ6IHRoaXMuc3RhcnR9KTtcbiAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudChjb250ZXh0ID8gY29udGV4dC5pbmRleE9mKFwibGFiZWxcIikgPT09IC0xID8gY29udGV4dCArIFwibGFiZWxcIiA6IGNvbnRleHQgOiBcImxhYmVsXCIpO1xuICB0aGlzLmxhYmVscy5wb3AoKTtcbiAgbm9kZS5sYWJlbCA9IGV4cHI7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJMYWJlbGVkU3RhdGVtZW50XCIpXG59O1xuXG5wcCQ4LnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudCA9IGZ1bmN0aW9uKG5vZGUsIGV4cHIpIHtcbiAgbm9kZS5leHByZXNzaW9uID0gZXhwcjtcbiAgdGhpcy5zZW1pY29sb24oKTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIilcbn07XG5cbi8vIFBhcnNlIGEgc2VtaWNvbG9uLWVuY2xvc2VkIGJsb2NrIG9mIHN0YXRlbWVudHMsIGhhbmRsaW5nIGBcInVzZVxuLy8gc3RyaWN0XCJgIGRlY2xhcmF0aW9ucyB3aGVuIGBhbGxvd1N0cmljdGAgaXMgdHJ1ZSAodXNlZCBmb3Jcbi8vIGZ1bmN0aW9uIGJvZGllcykuXG5cbnBwJDgucGFyc2VCbG9jayA9IGZ1bmN0aW9uKGNyZWF0ZU5ld0xleGljYWxTY29wZSwgbm9kZSwgZXhpdFN0cmljdCkge1xuICBpZiAoIGNyZWF0ZU5ld0xleGljYWxTY29wZSA9PT0gdm9pZCAwICkgY3JlYXRlTmV3TGV4aWNhbFNjb3BlID0gdHJ1ZTtcbiAgaWYgKCBub2RlID09PSB2b2lkIDAgKSBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcblxuICBub2RlLmJvZHkgPSBbXTtcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFjZUwpO1xuICBpZiAoY3JlYXRlTmV3TGV4aWNhbFNjb3BlKSB7IHRoaXMuZW50ZXJTY29wZSgwKTsgfVxuICB3aGlsZSAodGhpcy50eXBlICE9PSB0eXBlcyQxLmJyYWNlUikge1xuICAgIHZhciBzdG10ID0gdGhpcy5wYXJzZVN0YXRlbWVudChudWxsKTtcbiAgICBub2RlLmJvZHkucHVzaChzdG10KTtcbiAgfVxuICBpZiAoZXhpdFN0cmljdCkgeyB0aGlzLnN0cmljdCA9IGZhbHNlOyB9XG4gIHRoaXMubmV4dCgpO1xuICBpZiAoY3JlYXRlTmV3TGV4aWNhbFNjb3BlKSB7IHRoaXMuZXhpdFNjb3BlKCk7IH1cbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkJsb2NrU3RhdGVtZW50XCIpXG59O1xuXG4vLyBQYXJzZSBhIHJlZ3VsYXIgYGZvcmAgbG9vcC4gVGhlIGRpc2FtYmlndWF0aW9uIGNvZGUgaW5cbi8vIGBwYXJzZVN0YXRlbWVudGAgd2lsbCBhbHJlYWR5IGhhdmUgcGFyc2VkIHRoZSBpbml0IHN0YXRlbWVudCBvclxuLy8gZXhwcmVzc2lvbi5cblxucHAkOC5wYXJzZUZvciA9IGZ1bmN0aW9uKG5vZGUsIGluaXQpIHtcbiAgbm9kZS5pbml0ID0gaW5pdDtcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5zZW1pKTtcbiAgbm9kZS50ZXN0ID0gdGhpcy50eXBlID09PSB0eXBlcyQxLnNlbWkgPyBudWxsIDogdGhpcy5wYXJzZUV4cHJlc3Npb24oKTtcbiAgdGhpcy5leHBlY3QodHlwZXMkMS5zZW1pKTtcbiAgbm9kZS51cGRhdGUgPSB0aGlzLnR5cGUgPT09IHR5cGVzJDEucGFyZW5SID8gbnVsbCA6IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEucGFyZW5SKTtcbiAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudChcImZvclwiKTtcbiAgdGhpcy5leGl0U2NvcGUoKTtcbiAgdGhpcy5sYWJlbHMucG9wKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJGb3JTdGF0ZW1lbnRcIilcbn07XG5cbi8vIFBhcnNlIGEgYGZvcmAvYGluYCBhbmQgYGZvcmAvYG9mYCBsb29wLCB3aGljaCBhcmUgYWxtb3N0XG4vLyBzYW1lIGZyb20gcGFyc2VyJ3MgcGVyc3BlY3RpdmUuXG5cbnBwJDgucGFyc2VGb3JJbiA9IGZ1bmN0aW9uKG5vZGUsIGluaXQpIHtcbiAgdmFyIGlzRm9ySW4gPSB0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luO1xuICB0aGlzLm5leHQoKTtcblxuICBpZiAoXG4gICAgaW5pdC50eXBlID09PSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiAmJlxuICAgIGluaXQuZGVjbGFyYXRpb25zWzBdLmluaXQgIT0gbnVsbCAmJlxuICAgIChcbiAgICAgICFpc0ZvckluIHx8XG4gICAgICB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA4IHx8XG4gICAgICB0aGlzLnN0cmljdCB8fFxuICAgICAgaW5pdC5raW5kICE9PSBcInZhclwiIHx8XG4gICAgICBpbml0LmRlY2xhcmF0aW9uc1swXS5pZC50eXBlICE9PSBcIklkZW50aWZpZXJcIlxuICAgIClcbiAgKSB7XG4gICAgdGhpcy5yYWlzZShcbiAgICAgIGluaXQuc3RhcnQsXG4gICAgICAoKGlzRm9ySW4gPyBcImZvci1pblwiIDogXCJmb3Itb2ZcIikgKyBcIiBsb29wIHZhcmlhYmxlIGRlY2xhcmF0aW9uIG1heSBub3QgaGF2ZSBhbiBpbml0aWFsaXplclwiKVxuICAgICk7XG4gIH1cbiAgbm9kZS5sZWZ0ID0gaW5pdDtcbiAgbm9kZS5yaWdodCA9IGlzRm9ySW4gPyB0aGlzLnBhcnNlRXhwcmVzc2lvbigpIDogdGhpcy5wYXJzZU1heWJlQXNzaWduKCk7XG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEucGFyZW5SKTtcbiAgbm9kZS5ib2R5ID0gdGhpcy5wYXJzZVN0YXRlbWVudChcImZvclwiKTtcbiAgdGhpcy5leGl0U2NvcGUoKTtcbiAgdGhpcy5sYWJlbHMucG9wKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgaXNGb3JJbiA/IFwiRm9ySW5TdGF0ZW1lbnRcIiA6IFwiRm9yT2ZTdGF0ZW1lbnRcIilcbn07XG5cbi8vIFBhcnNlIGEgbGlzdCBvZiB2YXJpYWJsZSBkZWNsYXJhdGlvbnMuXG5cbnBwJDgucGFyc2VWYXIgPSBmdW5jdGlvbihub2RlLCBpc0Zvciwga2luZCwgYWxsb3dNaXNzaW5nSW5pdGlhbGl6ZXIpIHtcbiAgbm9kZS5kZWNsYXJhdGlvbnMgPSBbXTtcbiAgbm9kZS5raW5kID0ga2luZDtcbiAgZm9yICg7Oykge1xuICAgIHZhciBkZWNsID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgICB0aGlzLnBhcnNlVmFySWQoZGVjbCwga2luZCk7XG4gICAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuZXEpKSB7XG4gICAgICBkZWNsLmluaXQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oaXNGb3IpO1xuICAgIH0gZWxzZSBpZiAoIWFsbG93TWlzc2luZ0luaXRpYWxpemVyICYmIGtpbmQgPT09IFwiY29uc3RcIiAmJiAhKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5faW4gfHwgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIHRoaXMuaXNDb250ZXh0dWFsKFwib2ZcIikpKSkge1xuICAgICAgdGhpcy51bmV4cGVjdGVkKCk7XG4gICAgfSBlbHNlIGlmICghYWxsb3dNaXNzaW5nSW5pdGlhbGl6ZXIgJiYgZGVjbC5pZC50eXBlICE9PSBcIklkZW50aWZpZXJcIiAmJiAhKGlzRm9yICYmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuX2luIHx8IHRoaXMuaXNDb250ZXh0dWFsKFwib2ZcIikpKSkge1xuICAgICAgdGhpcy5yYWlzZSh0aGlzLmxhc3RUb2tFbmQsIFwiQ29tcGxleCBiaW5kaW5nIHBhdHRlcm5zIHJlcXVpcmUgYW4gaW5pdGlhbGl6YXRpb24gdmFsdWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlY2wuaW5pdCA9IG51bGw7XG4gICAgfVxuICAgIG5vZGUuZGVjbGFyYXRpb25zLnB1c2godGhpcy5maW5pc2hOb2RlKGRlY2wsIFwiVmFyaWFibGVEZWNsYXJhdG9yXCIpKTtcbiAgICBpZiAoIXRoaXMuZWF0KHR5cGVzJDEuY29tbWEpKSB7IGJyZWFrIH1cbiAgfVxuICByZXR1cm4gbm9kZVxufTtcblxucHAkOC5wYXJzZVZhcklkID0gZnVuY3Rpb24oZGVjbCwga2luZCkge1xuICBkZWNsLmlkID0gdGhpcy5wYXJzZUJpbmRpbmdBdG9tKCk7XG4gIHRoaXMuY2hlY2tMVmFsUGF0dGVybihkZWNsLmlkLCBraW5kID09PSBcInZhclwiID8gQklORF9WQVIgOiBCSU5EX0xFWElDQUwsIGZhbHNlKTtcbn07XG5cbnZhciBGVU5DX1NUQVRFTUVOVCA9IDEsIEZVTkNfSEFOR0lOR19TVEFURU1FTlQgPSAyLCBGVU5DX05VTExBQkxFX0lEID0gNDtcblxuLy8gUGFyc2UgYSBmdW5jdGlvbiBkZWNsYXJhdGlvbiBvciBsaXRlcmFsIChkZXBlbmRpbmcgb24gdGhlXG4vLyBgc3RhdGVtZW50ICYgRlVOQ19TVEFURU1FTlRgKS5cblxuLy8gUmVtb3ZlIGBhbGxvd0V4cHJlc3Npb25Cb2R5YCBmb3IgNy4wLjAsIGFzIGl0IGlzIG9ubHkgY2FsbGVkIHdpdGggZmFsc2VcbnBwJDgucGFyc2VGdW5jdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIHN0YXRlbWVudCwgYWxsb3dFeHByZXNzaW9uQm9keSwgaXNBc3luYywgZm9ySW5pdCkge1xuICB0aGlzLmluaXRGdW5jdGlvbihub2RlKTtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5IHx8IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmICFpc0FzeW5jKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdGFyICYmIChzdGF0ZW1lbnQgJiBGVU5DX0hBTkdJTkdfU1RBVEVNRU5UKSlcbiAgICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbiAgICBub2RlLmdlbmVyYXRvciA9IHRoaXMuZWF0KHR5cGVzJDEuc3Rhcik7XG4gIH1cbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4KVxuICAgIHsgbm9kZS5hc3luYyA9ICEhaXNBc3luYzsgfVxuXG4gIGlmIChzdGF0ZW1lbnQgJiBGVU5DX1NUQVRFTUVOVCkge1xuICAgIG5vZGUuaWQgPSAoc3RhdGVtZW50ICYgRlVOQ19OVUxMQUJMRV9JRCkgJiYgdGhpcy50eXBlICE9PSB0eXBlcyQxLm5hbWUgPyBudWxsIDogdGhpcy5wYXJzZUlkZW50KCk7XG4gICAgaWYgKG5vZGUuaWQgJiYgIShzdGF0ZW1lbnQgJiBGVU5DX0hBTkdJTkdfU1RBVEVNRU5UKSlcbiAgICAgIC8vIElmIGl0IGlzIGEgcmVndWxhciBmdW5jdGlvbiBkZWNsYXJhdGlvbiBpbiBzbG9wcHkgbW9kZSwgdGhlbiBpdCBpc1xuICAgICAgLy8gc3ViamVjdCB0byBBbm5leCBCIHNlbWFudGljcyAoQklORF9GVU5DVElPTikuIE90aGVyd2lzZSwgdGhlIGJpbmRpbmdcbiAgICAgIC8vIG1vZGUgZGVwZW5kcyBvbiBwcm9wZXJ0aWVzIG9mIHRoZSBjdXJyZW50IHNjb3BlIChzZWVcbiAgICAgIC8vIHRyZWF0RnVuY3Rpb25zQXNWYXIpLlxuICAgICAgeyB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmlkLCAodGhpcy5zdHJpY3QgfHwgbm9kZS5nZW5lcmF0b3IgfHwgbm9kZS5hc3luYykgPyB0aGlzLnRyZWF0RnVuY3Rpb25zQXNWYXIgPyBCSU5EX1ZBUiA6IEJJTkRfTEVYSUNBTCA6IEJJTkRfRlVOQ1RJT04pOyB9XG4gIH1cblxuICB2YXIgb2xkWWllbGRQb3MgPSB0aGlzLnlpZWxkUG9zLCBvbGRBd2FpdFBvcyA9IHRoaXMuYXdhaXRQb3MsIG9sZEF3YWl0SWRlbnRQb3MgPSB0aGlzLmF3YWl0SWRlbnRQb3M7XG4gIHRoaXMueWllbGRQb3MgPSAwO1xuICB0aGlzLmF3YWl0UG9zID0gMDtcbiAgdGhpcy5hd2FpdElkZW50UG9zID0gMDtcbiAgdGhpcy5lbnRlclNjb3BlKGZ1bmN0aW9uRmxhZ3Mobm9kZS5hc3luYywgbm9kZS5nZW5lcmF0b3IpKTtcblxuICBpZiAoIShzdGF0ZW1lbnQgJiBGVU5DX1NUQVRFTUVOVCkpXG4gICAgeyBub2RlLmlkID0gdGhpcy50eXBlID09PSB0eXBlcyQxLm5hbWUgPyB0aGlzLnBhcnNlSWRlbnQoKSA6IG51bGw7IH1cblxuICB0aGlzLnBhcnNlRnVuY3Rpb25QYXJhbXMobm9kZSk7XG4gIHRoaXMucGFyc2VGdW5jdGlvbkJvZHkobm9kZSwgYWxsb3dFeHByZXNzaW9uQm9keSwgZmFsc2UsIGZvckluaXQpO1xuXG4gIHRoaXMueWllbGRQb3MgPSBvbGRZaWVsZFBvcztcbiAgdGhpcy5hd2FpdFBvcyA9IG9sZEF3YWl0UG9zO1xuICB0aGlzLmF3YWl0SWRlbnRQb3MgPSBvbGRBd2FpdElkZW50UG9zO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIChzdGF0ZW1lbnQgJiBGVU5DX1NUQVRFTUVOVCkgPyBcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIiA6IFwiRnVuY3Rpb25FeHByZXNzaW9uXCIpXG59O1xuXG5wcCQ4LnBhcnNlRnVuY3Rpb25QYXJhbXMgPSBmdW5jdGlvbihub2RlKSB7XG4gIHRoaXMuZXhwZWN0KHR5cGVzJDEucGFyZW5MKTtcbiAgbm9kZS5wYXJhbXMgPSB0aGlzLnBhcnNlQmluZGluZ0xpc3QodHlwZXMkMS5wYXJlblIsIGZhbHNlLCB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOCk7XG4gIHRoaXMuY2hlY2tZaWVsZEF3YWl0SW5EZWZhdWx0UGFyYW1zKCk7XG59O1xuXG4vLyBQYXJzZSBhIGNsYXNzIGRlY2xhcmF0aW9uIG9yIGxpdGVyYWwgKGRlcGVuZGluZyBvbiB0aGVcbi8vIGBpc1N0YXRlbWVudGAgcGFyYW1ldGVyKS5cblxucHAkOC5wYXJzZUNsYXNzID0gZnVuY3Rpb24obm9kZSwgaXNTdGF0ZW1lbnQpIHtcbiAgdGhpcy5uZXh0KCk7XG5cbiAgLy8gZWNtYS0yNjIgMTQuNiBDbGFzcyBEZWZpbml0aW9uc1xuICAvLyBBIGNsYXNzIGRlZmluaXRpb24gaXMgYWx3YXlzIHN0cmljdCBtb2RlIGNvZGUuXG4gIHZhciBvbGRTdHJpY3QgPSB0aGlzLnN0cmljdDtcbiAgdGhpcy5zdHJpY3QgPSB0cnVlO1xuXG4gIHRoaXMucGFyc2VDbGFzc0lkKG5vZGUsIGlzU3RhdGVtZW50KTtcbiAgdGhpcy5wYXJzZUNsYXNzU3VwZXIobm9kZSk7XG4gIHZhciBwcml2YXRlTmFtZU1hcCA9IHRoaXMuZW50ZXJDbGFzc0JvZHkoKTtcbiAgdmFyIGNsYXNzQm9keSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIHZhciBoYWRDb25zdHJ1Y3RvciA9IGZhbHNlO1xuICBjbGFzc0JvZHkuYm9keSA9IFtdO1xuICB0aGlzLmV4cGVjdCh0eXBlcyQxLmJyYWNlTCk7XG4gIHdoaWxlICh0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VSKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnBhcnNlQ2xhc3NFbGVtZW50KG5vZGUuc3VwZXJDbGFzcyAhPT0gbnVsbCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNsYXNzQm9keS5ib2R5LnB1c2goZWxlbWVudCk7XG4gICAgICBpZiAoZWxlbWVudC50eXBlID09PSBcIk1ldGhvZERlZmluaXRpb25cIiAmJiBlbGVtZW50LmtpbmQgPT09IFwiY29uc3RydWN0b3JcIikge1xuICAgICAgICBpZiAoaGFkQ29uc3RydWN0b3IpIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKGVsZW1lbnQuc3RhcnQsIFwiRHVwbGljYXRlIGNvbnN0cnVjdG9yIGluIHRoZSBzYW1lIGNsYXNzXCIpOyB9XG4gICAgICAgIGhhZENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5rZXkgJiYgZWxlbWVudC5rZXkudHlwZSA9PT0gXCJQcml2YXRlSWRlbnRpZmllclwiICYmIGlzUHJpdmF0ZU5hbWVDb25mbGljdGVkKHByaXZhdGVOYW1lTWFwLCBlbGVtZW50KSkge1xuICAgICAgICB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZWxlbWVudC5rZXkuc3RhcnQsIChcIklkZW50aWZpZXIgJyNcIiArIChlbGVtZW50LmtleS5uYW1lKSArIFwiJyBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGhpcy5zdHJpY3QgPSBvbGRTdHJpY3Q7XG4gIHRoaXMubmV4dCgpO1xuICBub2RlLmJvZHkgPSB0aGlzLmZpbmlzaE5vZGUoY2xhc3NCb2R5LCBcIkNsYXNzQm9keVwiKTtcbiAgdGhpcy5leGl0Q2xhc3NCb2R5KCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgaXNTdGF0ZW1lbnQgPyBcIkNsYXNzRGVjbGFyYXRpb25cIiA6IFwiQ2xhc3NFeHByZXNzaW9uXCIpXG59O1xuXG5wcCQ4LnBhcnNlQ2xhc3NFbGVtZW50ID0gZnVuY3Rpb24oY29uc3RydWN0b3JBbGxvd3NTdXBlcikge1xuICBpZiAodGhpcy5lYXQodHlwZXMkMS5zZW1pKSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgdmFyIGVjbWFWZXJzaW9uID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uO1xuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIHZhciBrZXlOYW1lID0gXCJcIjtcbiAgdmFyIGlzR2VuZXJhdG9yID0gZmFsc2U7XG4gIHZhciBpc0FzeW5jID0gZmFsc2U7XG4gIHZhciBraW5kID0gXCJtZXRob2RcIjtcbiAgdmFyIGlzU3RhdGljID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMuZWF0Q29udGV4dHVhbChcInN0YXRpY1wiKSkge1xuICAgIC8vIFBhcnNlIHN0YXRpYyBpbml0IGJsb2NrXG4gICAgaWYgKGVjbWFWZXJzaW9uID49IDEzICYmIHRoaXMuZWF0KHR5cGVzJDEuYnJhY2VMKSkge1xuICAgICAgdGhpcy5wYXJzZUNsYXNzU3RhdGljQmxvY2sobm9kZSk7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cbiAgICBpZiAodGhpcy5pc0NsYXNzRWxlbWVudE5hbWVTdGFydCgpIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdGFyKSB7XG4gICAgICBpc1N0YXRpYyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleU5hbWUgPSBcInN0YXRpY1wiO1xuICAgIH1cbiAgfVxuICBub2RlLnN0YXRpYyA9IGlzU3RhdGljO1xuICBpZiAoIWtleU5hbWUgJiYgZWNtYVZlcnNpb24gPj0gOCAmJiB0aGlzLmVhdENvbnRleHR1YWwoXCJhc3luY1wiKSkge1xuICAgIGlmICgodGhpcy5pc0NsYXNzRWxlbWVudE5hbWVTdGFydCgpIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdGFyKSAmJiAhdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSkge1xuICAgICAgaXNBc3luYyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleU5hbWUgPSBcImFzeW5jXCI7XG4gICAgfVxuICB9XG4gIGlmICgha2V5TmFtZSAmJiAoZWNtYVZlcnNpb24gPj0gOSB8fCAhaXNBc3luYykgJiYgdGhpcy5lYXQodHlwZXMkMS5zdGFyKSkge1xuICAgIGlzR2VuZXJhdG9yID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWtleU5hbWUgJiYgIWlzQXN5bmMgJiYgIWlzR2VuZXJhdG9yKSB7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgaWYgKHRoaXMuZWF0Q29udGV4dHVhbChcImdldFwiKSB8fCB0aGlzLmVhdENvbnRleHR1YWwoXCJzZXRcIikpIHtcbiAgICAgIGlmICh0aGlzLmlzQ2xhc3NFbGVtZW50TmFtZVN0YXJ0KCkpIHtcbiAgICAgICAga2luZCA9IGxhc3RWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleU5hbWUgPSBsYXN0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2UgZWxlbWVudCBuYW1lXG4gIGlmIChrZXlOYW1lKSB7XG4gICAgLy8gJ2FzeW5jJywgJ2dldCcsICdzZXQnLCBvciAnc3RhdGljJyB3ZXJlIG5vdCBhIGtleXdvcmQgY29udGV4dHVhbGx5LlxuICAgIC8vIFRoZSBsYXN0IHRva2VuIGlzIGFueSBvZiB0aG9zZS4gTWFrZSBpdCB0aGUgZWxlbWVudCBuYW1lLlxuICAgIG5vZGUuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICBub2RlLmtleSA9IHRoaXMuc3RhcnROb2RlQXQodGhpcy5sYXN0VG9rU3RhcnQsIHRoaXMubGFzdFRva1N0YXJ0TG9jKTtcbiAgICBub2RlLmtleS5uYW1lID0ga2V5TmFtZTtcbiAgICB0aGlzLmZpbmlzaE5vZGUobm9kZS5rZXksIFwiSWRlbnRpZmllclwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBhcnNlQ2xhc3NFbGVtZW50TmFtZShub2RlKTtcbiAgfVxuXG4gIC8vIFBhcnNlIGVsZW1lbnQgdmFsdWVcbiAgaWYgKGVjbWFWZXJzaW9uIDwgMTMgfHwgdGhpcy50eXBlID09PSB0eXBlcyQxLnBhcmVuTCB8fCBraW5kICE9PSBcIm1ldGhvZFwiIHx8IGlzR2VuZXJhdG9yIHx8IGlzQXN5bmMpIHtcbiAgICB2YXIgaXNDb25zdHJ1Y3RvciA9ICFub2RlLnN0YXRpYyAmJiBjaGVja0tleU5hbWUobm9kZSwgXCJjb25zdHJ1Y3RvclwiKTtcbiAgICB2YXIgYWxsb3dzRGlyZWN0U3VwZXIgPSBpc0NvbnN0cnVjdG9yICYmIGNvbnN0cnVjdG9yQWxsb3dzU3VwZXI7XG4gICAgLy8gQ291bGRuJ3QgbW92ZSB0aGlzIGNoZWNrIGludG8gdGhlICdwYXJzZUNsYXNzTWV0aG9kJyBtZXRob2QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAgaWYgKGlzQ29uc3RydWN0b3IgJiYga2luZCAhPT0gXCJtZXRob2RcIikgeyB0aGlzLnJhaXNlKG5vZGUua2V5LnN0YXJ0LCBcIkNvbnN0cnVjdG9yIGNhbid0IGhhdmUgZ2V0L3NldCBtb2RpZmllclwiKTsgfVxuICAgIG5vZGUua2luZCA9IGlzQ29uc3RydWN0b3IgPyBcImNvbnN0cnVjdG9yXCIgOiBraW5kO1xuICAgIHRoaXMucGFyc2VDbGFzc01ldGhvZChub2RlLCBpc0dlbmVyYXRvciwgaXNBc3luYywgYWxsb3dzRGlyZWN0U3VwZXIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucGFyc2VDbGFzc0ZpZWxkKG5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn07XG5cbnBwJDguaXNDbGFzc0VsZW1lbnROYW1lU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSB8fFxuICAgIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5wcml2YXRlSWQgfHxcbiAgICB0aGlzLnR5cGUgPT09IHR5cGVzJDEubnVtIHx8XG4gICAgdGhpcy50eXBlID09PSB0eXBlcyQxLnN0cmluZyB8fFxuICAgIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5icmFja2V0TCB8fFxuICAgIHRoaXMudHlwZS5rZXl3b3JkXG4gIClcbn07XG5cbnBwJDgucGFyc2VDbGFzc0VsZW1lbnROYW1lID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnByaXZhdGVJZCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgIHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJDbGFzc2VzIGNhbid0IGhhdmUgYW4gZWxlbWVudCBuYW1lZCAnI2NvbnN0cnVjdG9yJ1wiKTtcbiAgICB9XG4gICAgZWxlbWVudC5jb21wdXRlZCA9IGZhbHNlO1xuICAgIGVsZW1lbnQua2V5ID0gdGhpcy5wYXJzZVByaXZhdGVJZGVudCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucGFyc2VQcm9wZXJ0eU5hbWUoZWxlbWVudCk7XG4gIH1cbn07XG5cbnBwJDgucGFyc2VDbGFzc01ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCwgaXNHZW5lcmF0b3IsIGlzQXN5bmMsIGFsbG93c0RpcmVjdFN1cGVyKSB7XG4gIC8vIENoZWNrIGtleSBhbmQgZmxhZ3NcbiAgdmFyIGtleSA9IG1ldGhvZC5rZXk7XG4gIGlmIChtZXRob2Qua2luZCA9PT0gXCJjb25zdHJ1Y3RvclwiKSB7XG4gICAgaWYgKGlzR2VuZXJhdG9yKSB7IHRoaXMucmFpc2Uoa2V5LnN0YXJ0LCBcIkNvbnN0cnVjdG9yIGNhbid0IGJlIGEgZ2VuZXJhdG9yXCIpOyB9XG4gICAgaWYgKGlzQXN5bmMpIHsgdGhpcy5yYWlzZShrZXkuc3RhcnQsIFwiQ29uc3RydWN0b3IgY2FuJ3QgYmUgYW4gYXN5bmMgbWV0aG9kXCIpOyB9XG4gIH0gZWxzZSBpZiAobWV0aG9kLnN0YXRpYyAmJiBjaGVja0tleU5hbWUobWV0aG9kLCBcInByb3RvdHlwZVwiKSkge1xuICAgIHRoaXMucmFpc2Uoa2V5LnN0YXJ0LCBcIkNsYXNzZXMgbWF5IG5vdCBoYXZlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIHByb3RvdHlwZVwiKTtcbiAgfVxuXG4gIC8vIFBhcnNlIHZhbHVlXG4gIHZhciB2YWx1ZSA9IG1ldGhvZC52YWx1ZSA9IHRoaXMucGFyc2VNZXRob2QoaXNHZW5lcmF0b3IsIGlzQXN5bmMsIGFsbG93c0RpcmVjdFN1cGVyKTtcblxuICAvLyBDaGVjayB2YWx1ZVxuICBpZiAobWV0aG9kLmtpbmQgPT09IFwiZ2V0XCIgJiYgdmFsdWUucGFyYW1zLmxlbmd0aCAhPT0gMClcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh2YWx1ZS5zdGFydCwgXCJnZXR0ZXIgc2hvdWxkIGhhdmUgbm8gcGFyYW1zXCIpOyB9XG4gIGlmIChtZXRob2Qua2luZCA9PT0gXCJzZXRcIiAmJiB2YWx1ZS5wYXJhbXMubGVuZ3RoICE9PSAxKVxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHZhbHVlLnN0YXJ0LCBcInNldHRlciBzaG91bGQgaGF2ZSBleGFjdGx5IG9uZSBwYXJhbVwiKTsgfVxuICBpZiAobWV0aG9kLmtpbmQgPT09IFwic2V0XCIgJiYgdmFsdWUucGFyYW1zWzBdLnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIilcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh2YWx1ZS5wYXJhbXNbMF0uc3RhcnQsIFwiU2V0dGVyIGNhbm5vdCB1c2UgcmVzdCBwYXJhbXNcIik7IH1cblxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG1ldGhvZCwgXCJNZXRob2REZWZpbml0aW9uXCIpXG59O1xuXG5wcCQ4LnBhcnNlQ2xhc3NGaWVsZCA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gIGlmIChjaGVja0tleU5hbWUoZmllbGQsIFwiY29uc3RydWN0b3JcIikpIHtcbiAgICB0aGlzLnJhaXNlKGZpZWxkLmtleS5zdGFydCwgXCJDbGFzc2VzIGNhbid0IGhhdmUgYSBmaWVsZCBuYW1lZCAnY29uc3RydWN0b3InXCIpO1xuICB9IGVsc2UgaWYgKGZpZWxkLnN0YXRpYyAmJiBjaGVja0tleU5hbWUoZmllbGQsIFwicHJvdG90eXBlXCIpKSB7XG4gICAgdGhpcy5yYWlzZShmaWVsZC5rZXkuc3RhcnQsIFwiQ2xhc3NlcyBjYW4ndCBoYXZlIGEgc3RhdGljIGZpZWxkIG5hbWVkICdwcm90b3R5cGUnXCIpO1xuICB9XG5cbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuZXEpKSB7XG4gICAgLy8gVG8gcmFpc2UgU3ludGF4RXJyb3IgaWYgJ2FyZ3VtZW50cycgZXhpc3RzIGluIHRoZSBpbml0aWFsaXplci5cbiAgICB2YXIgc2NvcGUgPSB0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKTtcbiAgICB2YXIgaW5DbGFzc0ZpZWxkSW5pdCA9IHNjb3BlLmluQ2xhc3NGaWVsZEluaXQ7XG4gICAgc2NvcGUuaW5DbGFzc0ZpZWxkSW5pdCA9IHRydWU7XG4gICAgZmllbGQudmFsdWUgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtcbiAgICBzY29wZS5pbkNsYXNzRmllbGRJbml0ID0gaW5DbGFzc0ZpZWxkSW5pdDtcbiAgfSBlbHNlIHtcbiAgICBmaWVsZC52YWx1ZSA9IG51bGw7XG4gIH1cbiAgdGhpcy5zZW1pY29sb24oKTtcblxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKGZpZWxkLCBcIlByb3BlcnR5RGVmaW5pdGlvblwiKVxufTtcblxucHAkOC5wYXJzZUNsYXNzU3RhdGljQmxvY2sgPSBmdW5jdGlvbihub2RlKSB7XG4gIG5vZGUuYm9keSA9IFtdO1xuXG4gIHZhciBvbGRMYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgdGhpcy5sYWJlbHMgPSBbXTtcbiAgdGhpcy5lbnRlclNjb3BlKFNDT1BFX0NMQVNTX1NUQVRJQ19CTE9DSyB8IFNDT1BFX1NVUEVSKTtcbiAgd2hpbGUgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5icmFjZVIpIHtcbiAgICB2YXIgc3RtdCA9IHRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCk7XG4gICAgbm9kZS5ib2R5LnB1c2goc3RtdCk7XG4gIH1cbiAgdGhpcy5uZXh0KCk7XG4gIHRoaXMuZXhpdFNjb3BlKCk7XG4gIHRoaXMubGFiZWxzID0gb2xkTGFiZWxzO1xuXG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJTdGF0aWNCbG9ja1wiKVxufTtcblxucHAkOC5wYXJzZUNsYXNzSWQgPSBmdW5jdGlvbihub2RlLCBpc1N0YXRlbWVudCkge1xuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLm5hbWUpIHtcbiAgICBub2RlLmlkID0gdGhpcy5wYXJzZUlkZW50KCk7XG4gICAgaWYgKGlzU3RhdGVtZW50KVxuICAgICAgeyB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmlkLCBCSU5EX0xFWElDQUwsIGZhbHNlKTsgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc1N0YXRlbWVudCA9PT0gdHJ1ZSlcbiAgICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbiAgICBub2RlLmlkID0gbnVsbDtcbiAgfVxufTtcblxucHAkOC5wYXJzZUNsYXNzU3VwZXIgPSBmdW5jdGlvbihub2RlKSB7XG4gIG5vZGUuc3VwZXJDbGFzcyA9IHRoaXMuZWF0KHR5cGVzJDEuX2V4dGVuZHMpID8gdGhpcy5wYXJzZUV4cHJTdWJzY3JpcHRzKG51bGwsIGZhbHNlKSA6IG51bGw7XG59O1xuXG5wcCQ4LmVudGVyQ2xhc3NCb2R5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlbGVtZW50ID0ge2RlY2xhcmVkOiBPYmplY3QuY3JlYXRlKG51bGwpLCB1c2VkOiBbXX07XG4gIHRoaXMucHJpdmF0ZU5hbWVTdGFjay5wdXNoKGVsZW1lbnQpO1xuICByZXR1cm4gZWxlbWVudC5kZWNsYXJlZFxufTtcblxucHAkOC5leGl0Q2xhc3NCb2R5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZWYgPSB0aGlzLnByaXZhdGVOYW1lU3RhY2sucG9wKCk7XG4gIHZhciBkZWNsYXJlZCA9IHJlZi5kZWNsYXJlZDtcbiAgdmFyIHVzZWQgPSByZWYudXNlZDtcbiAgaWYgKCF0aGlzLm9wdGlvbnMuY2hlY2tQcml2YXRlRmllbGRzKSB7IHJldHVybiB9XG4gIHZhciBsZW4gPSB0aGlzLnByaXZhdGVOYW1lU3RhY2subGVuZ3RoO1xuICB2YXIgcGFyZW50ID0gbGVuID09PSAwID8gbnVsbCA6IHRoaXMucHJpdmF0ZU5hbWVTdGFja1tsZW4gLSAxXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1c2VkLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGlkID0gdXNlZFtpXTtcbiAgICBpZiAoIWhhc093bihkZWNsYXJlZCwgaWQubmFtZSkpIHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnVzZWQucHVzaChpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoaWQuc3RhcnQsIChcIlByaXZhdGUgZmllbGQgJyNcIiArIChpZC5uYW1lKSArIFwiJyBtdXN0IGJlIGRlY2xhcmVkIGluIGFuIGVuY2xvc2luZyBjbGFzc1wiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBpc1ByaXZhdGVOYW1lQ29uZmxpY3RlZChwcml2YXRlTmFtZU1hcCwgZWxlbWVudCkge1xuICB2YXIgbmFtZSA9IGVsZW1lbnQua2V5Lm5hbWU7XG4gIHZhciBjdXJyID0gcHJpdmF0ZU5hbWVNYXBbbmFtZV07XG5cbiAgdmFyIG5leHQgPSBcInRydWVcIjtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJNZXRob2REZWZpbml0aW9uXCIgJiYgKGVsZW1lbnQua2luZCA9PT0gXCJnZXRcIiB8fCBlbGVtZW50LmtpbmQgPT09IFwic2V0XCIpKSB7XG4gICAgbmV4dCA9IChlbGVtZW50LnN0YXRpYyA/IFwic1wiIDogXCJpXCIpICsgZWxlbWVudC5raW5kO1xuICB9XG5cbiAgLy8gYGNsYXNzIHsgZ2V0ICNhKCl7fTsgc3RhdGljIHNldCAjYShfKXt9IH1gIGlzIGFsc28gY29uZmxpY3QuXG4gIGlmIChcbiAgICBjdXJyID09PSBcImlnZXRcIiAmJiBuZXh0ID09PSBcImlzZXRcIiB8fFxuICAgIGN1cnIgPT09IFwiaXNldFwiICYmIG5leHQgPT09IFwiaWdldFwiIHx8XG4gICAgY3VyciA9PT0gXCJzZ2V0XCIgJiYgbmV4dCA9PT0gXCJzc2V0XCIgfHxcbiAgICBjdXJyID09PSBcInNzZXRcIiAmJiBuZXh0ID09PSBcInNnZXRcIlxuICApIHtcbiAgICBwcml2YXRlTmFtZU1hcFtuYW1lXSA9IFwidHJ1ZVwiO1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKCFjdXJyKSB7XG4gICAgcHJpdmF0ZU5hbWVNYXBbbmFtZV0gPSBuZXh0O1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tLZXlOYW1lKG5vZGUsIG5hbWUpIHtcbiAgdmFyIGNvbXB1dGVkID0gbm9kZS5jb21wdXRlZDtcbiAgdmFyIGtleSA9IG5vZGUua2V5O1xuICByZXR1cm4gIWNvbXB1dGVkICYmIChcbiAgICBrZXkudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgJiYga2V5Lm5hbWUgPT09IG5hbWUgfHxcbiAgICBrZXkudHlwZSA9PT0gXCJMaXRlcmFsXCIgJiYga2V5LnZhbHVlID09PSBuYW1lXG4gIClcbn1cblxuLy8gUGFyc2VzIG1vZHVsZSBleHBvcnQgZGVjbGFyYXRpb24uXG5cbnBwJDgucGFyc2VFeHBvcnRBbGxEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIGV4cG9ydHMpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMSkge1xuICAgIGlmICh0aGlzLmVhdENvbnRleHR1YWwoXCJhc1wiKSkge1xuICAgICAgbm9kZS5leHBvcnRlZCA9IHRoaXMucGFyc2VNb2R1bGVFeHBvcnROYW1lKCk7XG4gICAgICB0aGlzLmNoZWNrRXhwb3J0KGV4cG9ydHMsIG5vZGUuZXhwb3J0ZWQsIHRoaXMubGFzdFRva1N0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5leHBvcnRlZCA9IG51bGw7XG4gICAgfVxuICB9XG4gIHRoaXMuZXhwZWN0Q29udGV4dHVhbChcImZyb21cIik7XG4gIGlmICh0aGlzLnR5cGUgIT09IHR5cGVzJDEuc3RyaW5nKSB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG4gIG5vZGUuc291cmNlID0gdGhpcy5wYXJzZUV4cHJBdG9tKCk7XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJFeHBvcnRBbGxEZWNsYXJhdGlvblwiKVxufTtcblxucHAkOC5wYXJzZUV4cG9ydCA9IGZ1bmN0aW9uKG5vZGUsIGV4cG9ydHMpIHtcbiAgdGhpcy5uZXh0KCk7XG4gIC8vIGV4cG9ydCAqIGZyb20gJy4uLidcbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuc3RhcikpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUV4cG9ydEFsbERlY2xhcmF0aW9uKG5vZGUsIGV4cG9ydHMpXG4gIH1cbiAgaWYgKHRoaXMuZWF0KHR5cGVzJDEuX2RlZmF1bHQpKSB7IC8vIGV4cG9ydCBkZWZhdWx0IC4uLlxuICAgIHRoaXMuY2hlY2tFeHBvcnQoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHRoaXMubGFzdFRva1N0YXJ0KTtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy5wYXJzZUV4cG9ydERlZmF1bHREZWNsYXJhdGlvbigpO1xuICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb25cIilcbiAgfVxuICAvLyBleHBvcnQgdmFyfGNvbnN0fGxldHxmdW5jdGlvbnxjbGFzcyAuLi5cbiAgaWYgKHRoaXMuc2hvdWxkUGFyc2VFeHBvcnRTdGF0ZW1lbnQoKSkge1xuICAgIG5vZGUuZGVjbGFyYXRpb24gPSB0aGlzLnBhcnNlRXhwb3J0RGVjbGFyYXRpb24obm9kZSk7XG4gICAgaWYgKG5vZGUuZGVjbGFyYXRpb24udHlwZSA9PT0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCIpXG4gICAgICB7IHRoaXMuY2hlY2tWYXJpYWJsZUV4cG9ydChleHBvcnRzLCBub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucyk7IH1cbiAgICBlbHNlXG4gICAgICB7IHRoaXMuY2hlY2tFeHBvcnQoZXhwb3J0cywgbm9kZS5kZWNsYXJhdGlvbi5pZCwgbm9kZS5kZWNsYXJhdGlvbi5pZC5zdGFydCk7IH1cbiAgICBub2RlLnNwZWNpZmllcnMgPSBbXTtcbiAgICBub2RlLnNvdXJjZSA9IG51bGw7XG4gIH0gZWxzZSB7IC8vIGV4cG9ydCB7IHgsIHkgYXMgeiB9IFtmcm9tICcuLi4nXVxuICAgIG5vZGUuZGVjbGFyYXRpb24gPSBudWxsO1xuICAgIG5vZGUuc3BlY2lmaWVycyA9IHRoaXMucGFyc2VFeHBvcnRTcGVjaWZpZXJzKGV4cG9ydHMpO1xuICAgIGlmICh0aGlzLmVhdENvbnRleHR1YWwoXCJmcm9tXCIpKSB7XG4gICAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlcyQxLnN0cmluZykgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgICAgbm9kZS5zb3VyY2UgPSB0aGlzLnBhcnNlRXhwckF0b20oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBub2RlLnNwZWNpZmllcnM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBrZXl3b3JkcyB1c2VkIGFzIGxvY2FsIG5hbWVzXG4gICAgICAgIHZhciBzcGVjID0gbGlzdFtpXTtcblxuICAgICAgICB0aGlzLmNoZWNrVW5yZXNlcnZlZChzcGVjLmxvY2FsKTtcbiAgICAgICAgLy8gY2hlY2sgaWYgZXhwb3J0IGlzIGRlZmluZWRcbiAgICAgICAgdGhpcy5jaGVja0xvY2FsRXhwb3J0KHNwZWMubG9jYWwpO1xuXG4gICAgICAgIGlmIChzcGVjLmxvY2FsLnR5cGUgPT09IFwiTGl0ZXJhbFwiKSB7XG4gICAgICAgICAgdGhpcy5yYWlzZShzcGVjLmxvY2FsLnN0YXJ0LCBcIkEgc3RyaW5nIGxpdGVyYWwgY2Fubm90IGJlIHVzZWQgYXMgYW4gZXhwb3J0ZWQgYmluZGluZyB3aXRob3V0IGBmcm9tYC5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbm9kZS5zb3VyY2UgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNlbWljb2xvbigpO1xuICB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJFeHBvcnROYW1lZERlY2xhcmF0aW9uXCIpXG59O1xuXG5wcCQ4LnBhcnNlRXhwb3J0RGVjbGFyYXRpb24gPSBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiB0aGlzLnBhcnNlU3RhdGVtZW50KG51bGwpXG59O1xuXG5wcCQ4LnBhcnNlRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc0FzeW5jO1xuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9mdW5jdGlvbiB8fCAoaXNBc3luYyA9IHRoaXMuaXNBc3luY0Z1bmN0aW9uKCkpKSB7XG4gICAgdmFyIGZOb2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgICB0aGlzLm5leHQoKTtcbiAgICBpZiAoaXNBc3luYykgeyB0aGlzLm5leHQoKTsgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlRnVuY3Rpb24oZk5vZGUsIEZVTkNfU1RBVEVNRU5UIHwgRlVOQ19OVUxMQUJMRV9JRCwgZmFsc2UsIGlzQXN5bmMpXG4gIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLl9jbGFzcykge1xuICAgIHZhciBjTm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VDbGFzcyhjTm9kZSwgXCJudWxsYWJsZUlEXCIpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGRlY2xhcmF0aW9uID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKCk7XG4gICAgdGhpcy5zZW1pY29sb24oKTtcbiAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgfVxufTtcblxucHAkOC5jaGVja0V4cG9ydCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIHBvcykge1xuICBpZiAoIWV4cG9ydHMpIHsgcmV0dXJuIH1cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKVxuICAgIHsgbmFtZSA9IG5hbWUudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgPyBuYW1lLm5hbWUgOiBuYW1lLnZhbHVlOyB9XG4gIGlmIChoYXNPd24oZXhwb3J0cywgbmFtZSkpXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUocG9zLCBcIkR1cGxpY2F0ZSBleHBvcnQgJ1wiICsgbmFtZSArIFwiJ1wiKTsgfVxuICBleHBvcnRzW25hbWVdID0gdHJ1ZTtcbn07XG5cbnBwJDguY2hlY2tQYXR0ZXJuRXhwb3J0ID0gZnVuY3Rpb24oZXhwb3J0cywgcGF0KSB7XG4gIHZhciB0eXBlID0gcGF0LnR5cGU7XG4gIGlmICh0eXBlID09PSBcIklkZW50aWZpZXJcIilcbiAgICB7IHRoaXMuY2hlY2tFeHBvcnQoZXhwb3J0cywgcGF0LCBwYXQuc3RhcnQpOyB9XG4gIGVsc2UgaWYgKHR5cGUgPT09IFwiT2JqZWN0UGF0dGVyblwiKVxuICAgIHsgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBwYXQucHJvcGVydGllczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXG4gICAgICB7XG4gICAgICAgIHZhciBwcm9wID0gbGlzdFtpXTtcblxuICAgICAgICB0aGlzLmNoZWNrUGF0dGVybkV4cG9ydChleHBvcnRzLCBwcm9wKTtcbiAgICAgIH0gfVxuICBlbHNlIGlmICh0eXBlID09PSBcIkFycmF5UGF0dGVyblwiKVxuICAgIHsgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gcGF0LmVsZW1lbnRzOyBpJDEgPCBsaXN0JDEubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgdmFyIGVsdCA9IGxpc3QkMVtpJDFdO1xuXG4gICAgICAgIGlmIChlbHQpIHsgdGhpcy5jaGVja1BhdHRlcm5FeHBvcnQoZXhwb3J0cywgZWx0KTsgfVxuICAgIH0gfVxuICBlbHNlIGlmICh0eXBlID09PSBcIlByb3BlcnR5XCIpXG4gICAgeyB0aGlzLmNoZWNrUGF0dGVybkV4cG9ydChleHBvcnRzLCBwYXQudmFsdWUpOyB9XG4gIGVsc2UgaWYgKHR5cGUgPT09IFwiQXNzaWdubWVudFBhdHRlcm5cIilcbiAgICB7IHRoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGV4cG9ydHMsIHBhdC5sZWZ0KTsgfVxuICBlbHNlIGlmICh0eXBlID09PSBcIlJlc3RFbGVtZW50XCIpXG4gICAgeyB0aGlzLmNoZWNrUGF0dGVybkV4cG9ydChleHBvcnRzLCBwYXQuYXJndW1lbnQpOyB9XG59O1xuXG5wcCQ4LmNoZWNrVmFyaWFibGVFeHBvcnQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWNscykge1xuICBpZiAoIWV4cG9ydHMpIHsgcmV0dXJuIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBkZWNsczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpXG4gICAge1xuICAgIHZhciBkZWNsID0gbGlzdFtpXTtcblxuICAgIHRoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGV4cG9ydHMsIGRlY2wuaWQpO1xuICB9XG59O1xuXG5wcCQ4LnNob3VsZFBhcnNlRXhwb3J0U3RhdGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnR5cGUua2V5d29yZCA9PT0gXCJ2YXJcIiB8fFxuICAgIHRoaXMudHlwZS5rZXl3b3JkID09PSBcImNvbnN0XCIgfHxcbiAgICB0aGlzLnR5cGUua2V5d29yZCA9PT0gXCJjbGFzc1wiIHx8XG4gICAgdGhpcy50eXBlLmtleXdvcmQgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgIHRoaXMuaXNMZXQoKSB8fFxuICAgIHRoaXMuaXNBc3luY0Z1bmN0aW9uKClcbn07XG5cbi8vIFBhcnNlcyBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIG1vZHVsZSBleHBvcnRzLlxuXG5wcCQ4LnBhcnNlRXhwb3J0U3BlY2lmaWVyID0gZnVuY3Rpb24oZXhwb3J0cykge1xuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIG5vZGUubG9jYWwgPSB0aGlzLnBhcnNlTW9kdWxlRXhwb3J0TmFtZSgpO1xuXG4gIG5vZGUuZXhwb3J0ZWQgPSB0aGlzLmVhdENvbnRleHR1YWwoXCJhc1wiKSA/IHRoaXMucGFyc2VNb2R1bGVFeHBvcnROYW1lKCkgOiBub2RlLmxvY2FsO1xuICB0aGlzLmNoZWNrRXhwb3J0KFxuICAgIGV4cG9ydHMsXG4gICAgbm9kZS5leHBvcnRlZCxcbiAgICBub2RlLmV4cG9ydGVkLnN0YXJ0XG4gICk7XG5cbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkV4cG9ydFNwZWNpZmllclwiKVxufTtcblxucHAkOC5wYXJzZUV4cG9ydFNwZWNpZmllcnMgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gIHZhciBub2RlcyA9IFtdLCBmaXJzdCA9IHRydWU7XG4gIC8vIGV4cG9ydCB7IHgsIHkgYXMgeiB9IFtmcm9tICcuLi4nXVxuICB0aGlzLmV4cGVjdCh0eXBlcyQxLmJyYWNlTCk7XG4gIHdoaWxlICghdGhpcy5lYXQodHlwZXMkMS5icmFjZVIpKSB7XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5jb21tYSk7XG4gICAgICBpZiAodGhpcy5hZnRlclRyYWlsaW5nQ29tbWEodHlwZXMkMS5icmFjZVIpKSB7IGJyZWFrIH1cbiAgICB9IGVsc2UgeyBmaXJzdCA9IGZhbHNlOyB9XG5cbiAgICBub2Rlcy5wdXNoKHRoaXMucGFyc2VFeHBvcnRTcGVjaWZpZXIoZXhwb3J0cykpO1xuICB9XG4gIHJldHVybiBub2Rlc1xufTtcblxuLy8gUGFyc2VzIGltcG9ydCBkZWNsYXJhdGlvbi5cblxucHAkOC5wYXJzZUltcG9ydCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgdGhpcy5uZXh0KCk7XG5cbiAgLy8gaW1wb3J0ICcuLi4nXG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3RyaW5nKSB7XG4gICAgbm9kZS5zcGVjaWZpZXJzID0gZW1wdHkkMTtcbiAgICBub2RlLnNvdXJjZSA9IHRoaXMucGFyc2VFeHByQXRvbSgpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuc3BlY2lmaWVycyA9IHRoaXMucGFyc2VJbXBvcnRTcGVjaWZpZXJzKCk7XG4gICAgdGhpcy5leHBlY3RDb250ZXh0dWFsKFwiZnJvbVwiKTtcbiAgICBub2RlLnNvdXJjZSA9IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdHJpbmcgPyB0aGlzLnBhcnNlRXhwckF0b20oKSA6IHRoaXMudW5leHBlY3RlZCgpO1xuICB9XG4gIHRoaXMuc2VtaWNvbG9uKCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJJbXBvcnREZWNsYXJhdGlvblwiKVxufTtcblxuLy8gUGFyc2VzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgbW9kdWxlIGltcG9ydHMuXG5cbnBwJDgucGFyc2VJbXBvcnRTcGVjaWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xuICBub2RlLmltcG9ydGVkID0gdGhpcy5wYXJzZU1vZHVsZUV4cG9ydE5hbWUoKTtcblxuICBpZiAodGhpcy5lYXRDb250ZXh0dWFsKFwiYXNcIikpIHtcbiAgICBub2RlLmxvY2FsID0gdGhpcy5wYXJzZUlkZW50KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jaGVja1VucmVzZXJ2ZWQobm9kZS5pbXBvcnRlZCk7XG4gICAgbm9kZS5sb2NhbCA9IG5vZGUuaW1wb3J0ZWQ7XG4gIH1cbiAgdGhpcy5jaGVja0xWYWxTaW1wbGUobm9kZS5sb2NhbCwgQklORF9MRVhJQ0FMKTtcblxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSW1wb3J0U3BlY2lmaWVyXCIpXG59O1xuXG5wcCQ4LnBhcnNlSW1wb3J0RGVmYXVsdFNwZWNpZmllciA9IGZ1bmN0aW9uKCkge1xuICAvLyBpbXBvcnQgZGVmYXVsdE9iaiwgeyB4LCB5IGFzIHogfSBmcm9tICcuLi4nXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgbm9kZS5sb2NhbCA9IHRoaXMucGFyc2VJZGVudCgpO1xuICB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmxvY2FsLCBCSU5EX0xFWElDQUwpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSW1wb3J0RGVmYXVsdFNwZWNpZmllclwiKVxufTtcblxucHAkOC5wYXJzZUltcG9ydE5hbWVzcGFjZVNwZWNpZmllciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIHRoaXMubmV4dCgpO1xuICB0aGlzLmV4cGVjdENvbnRleHR1YWwoXCJhc1wiKTtcbiAgbm9kZS5sb2NhbCA9IHRoaXMucGFyc2VJZGVudCgpO1xuICB0aGlzLmNoZWNrTFZhbFNpbXBsZShub2RlLmxvY2FsLCBCSU5EX0xFWElDQUwpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCIpXG59O1xuXG5wcCQ4LnBhcnNlSW1wb3J0U3BlY2lmaWVycyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMgPSBbXSwgZmlyc3QgPSB0cnVlO1xuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLm5hbWUpIHtcbiAgICBub2Rlcy5wdXNoKHRoaXMucGFyc2VJbXBvcnREZWZhdWx0U3BlY2lmaWVyKCkpO1xuICAgIGlmICghdGhpcy5lYXQodHlwZXMkMS5jb21tYSkpIHsgcmV0dXJuIG5vZGVzIH1cbiAgfVxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnN0YXIpIHtcbiAgICBub2Rlcy5wdXNoKHRoaXMucGFyc2VJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIoKSk7XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cbiAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFjZUwpO1xuICB3aGlsZSAoIXRoaXMuZWF0KHR5cGVzJDEuYnJhY2VSKSkge1xuICAgIGlmICghZmlyc3QpIHtcbiAgICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuY29tbWEpO1xuICAgICAgaWYgKHRoaXMuYWZ0ZXJUcmFpbGluZ0NvbW1hKHR5cGVzJDEuYnJhY2VSKSkgeyBicmVhayB9XG4gICAgfSBlbHNlIHsgZmlyc3QgPSBmYWxzZTsgfVxuXG4gICAgbm9kZXMucHVzaCh0aGlzLnBhcnNlSW1wb3J0U3BlY2lmaWVyKCkpO1xuICB9XG4gIHJldHVybiBub2Rlc1xufTtcblxucHAkOC5wYXJzZU1vZHVsZUV4cG9ydE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMyAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuc3RyaW5nKSB7XG4gICAgdmFyIHN0cmluZ0xpdGVyYWwgPSB0aGlzLnBhcnNlTGl0ZXJhbCh0aGlzLnZhbHVlKTtcbiAgICBpZiAobG9uZVN1cnJvZ2F0ZS50ZXN0KHN0cmluZ0xpdGVyYWwudmFsdWUpKSB7XG4gICAgICB0aGlzLnJhaXNlKHN0cmluZ0xpdGVyYWwuc3RhcnQsIFwiQW4gZXhwb3J0IG5hbWUgY2Fubm90IGluY2x1ZGUgYSBsb25lIHN1cnJvZ2F0ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdMaXRlcmFsXG4gIH1cbiAgcmV0dXJuIHRoaXMucGFyc2VJZGVudCh0cnVlKVxufTtcblxuLy8gU2V0IGBFeHByZXNzaW9uU3RhdGVtZW50I2RpcmVjdGl2ZWAgcHJvcGVydHkgZm9yIGRpcmVjdGl2ZSBwcm9sb2d1ZXMuXG5wcCQ4LmFkYXB0RGlyZWN0aXZlUHJvbG9ndWUgPSBmdW5jdGlvbihzdGF0ZW1lbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVtZW50cy5sZW5ndGggJiYgdGhpcy5pc0RpcmVjdGl2ZUNhbmRpZGF0ZShzdGF0ZW1lbnRzW2ldKTsgKytpKSB7XG4gICAgc3RhdGVtZW50c1tpXS5kaXJlY3RpdmUgPSBzdGF0ZW1lbnRzW2ldLmV4cHJlc3Npb24ucmF3LnNsaWNlKDEsIC0xKTtcbiAgfVxufTtcbnBwJDguaXNEaXJlY3RpdmVDYW5kaWRhdGUgPSBmdW5jdGlvbihzdGF0ZW1lbnQpIHtcbiAgcmV0dXJuIChcbiAgICB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNSAmJlxuICAgIHN0YXRlbWVudC50eXBlID09PSBcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIiAmJlxuICAgIHN0YXRlbWVudC5leHByZXNzaW9uLnR5cGUgPT09IFwiTGl0ZXJhbFwiICYmXG4gICAgdHlwZW9mIHN0YXRlbWVudC5leHByZXNzaW9uLnZhbHVlID09PSBcInN0cmluZ1wiICYmXG4gICAgLy8gUmVqZWN0IHBhcmVudGhlc2l6ZWQgc3RyaW5ncy5cbiAgICAodGhpcy5pbnB1dFtzdGF0ZW1lbnQuc3RhcnRdID09PSBcIlxcXCJcIiB8fCB0aGlzLmlucHV0W3N0YXRlbWVudC5zdGFydF0gPT09IFwiJ1wiKVxuICApXG59O1xuXG52YXIgcHAkNyA9IFBhcnNlci5wcm90b3R5cGU7XG5cbi8vIENvbnZlcnQgZXhpc3RpbmcgZXhwcmVzc2lvbiBhdG9tIHRvIGFzc2lnbmFibGUgcGF0dGVyblxuLy8gaWYgcG9zc2libGUuXG5cbnBwJDcudG9Bc3NpZ25hYmxlID0gZnVuY3Rpb24obm9kZSwgaXNCaW5kaW5nLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiAmJiBub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlIFwiSWRlbnRpZmllclwiOlxuICAgICAgaWYgKHRoaXMuaW5Bc3luYyAmJiBub2RlLm5hbWUgPT09IFwiYXdhaXRcIilcbiAgICAgICAgeyB0aGlzLnJhaXNlKG5vZGUuc3RhcnQsIFwiQ2Fubm90IHVzZSAnYXdhaXQnIGFzIGlkZW50aWZpZXIgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uXCIpOyB9XG4gICAgICBicmVha1xuXG4gICAgY2FzZSBcIk9iamVjdFBhdHRlcm5cIjpcbiAgICBjYXNlIFwiQXJyYXlQYXR0ZXJuXCI6XG4gICAgY2FzZSBcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6XG4gICAgY2FzZSBcIlJlc3RFbGVtZW50XCI6XG4gICAgICBicmVha1xuXG4gICAgY2FzZSBcIk9iamVjdEV4cHJlc3Npb25cIjpcbiAgICAgIG5vZGUudHlwZSA9IFwiT2JqZWN0UGF0dGVyblwiO1xuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7IH1cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gbm9kZS5wcm9wZXJ0aWVzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgcHJvcCA9IGxpc3RbaV07XG5cbiAgICAgIHRoaXMudG9Bc3NpZ25hYmxlKHByb3AsIGlzQmluZGluZyk7XG4gICAgICAgIC8vIEVhcmx5IGVycm9yOlxuICAgICAgICAvLyAgIEFzc2lnbm1lbnRSZXN0UHJvcGVydHlbWWllbGQsIEF3YWl0XSA6XG4gICAgICAgIC8vICAgICBgLi4uYCBEZXN0cnVjdHVyaW5nQXNzaWdubWVudFRhcmdldFtZaWVsZCwgQXdhaXRdXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgSXQgaXMgYSBTeW50YXggRXJyb3IgaWYgfERlc3RydWN0dXJpbmdBc3NpZ25tZW50VGFyZ2V0fCBpcyBhbiB8QXJyYXlMaXRlcmFsfCBvciBhbiB8T2JqZWN0TGl0ZXJhbHwuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wLnR5cGUgPT09IFwiUmVzdEVsZW1lbnRcIiAmJlxuICAgICAgICAgIChwcm9wLmFyZ3VtZW50LnR5cGUgPT09IFwiQXJyYXlQYXR0ZXJuXCIgfHwgcHJvcC5hcmd1bWVudC50eXBlID09PSBcIk9iamVjdFBhdHRlcm5cIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5yYWlzZShwcm9wLmFyZ3VtZW50LnN0YXJ0LCBcIlVuZXhwZWN0ZWQgdG9rZW5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIFwiUHJvcGVydHlcIjpcbiAgICAgIC8vIEFzc2lnbm1lbnRQcm9wZXJ0eSBoYXMgdHlwZSA9PT0gXCJQcm9wZXJ0eVwiXG4gICAgICBpZiAobm9kZS5raW5kICE9PSBcImluaXRcIikgeyB0aGlzLnJhaXNlKG5vZGUua2V5LnN0YXJ0LCBcIk9iamVjdCBwYXR0ZXJuIGNhbid0IGNvbnRhaW4gZ2V0dGVyIG9yIHNldHRlclwiKTsgfVxuICAgICAgdGhpcy50b0Fzc2lnbmFibGUobm9kZS52YWx1ZSwgaXNCaW5kaW5nKTtcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIFwiQXJyYXlFeHByZXNzaW9uXCI6XG4gICAgICBub2RlLnR5cGUgPSBcIkFycmF5UGF0dGVyblwiO1xuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7IH1cbiAgICAgIHRoaXMudG9Bc3NpZ25hYmxlTGlzdChub2RlLmVsZW1lbnRzLCBpc0JpbmRpbmcpO1xuICAgICAgYnJlYWtcblxuICAgIGNhc2UgXCJTcHJlYWRFbGVtZW50XCI6XG4gICAgICBub2RlLnR5cGUgPSBcIlJlc3RFbGVtZW50XCI7XG4gICAgICB0aGlzLnRvQXNzaWduYWJsZShub2RlLmFyZ3VtZW50LCBpc0JpbmRpbmcpO1xuICAgICAgaWYgKG5vZGUuYXJndW1lbnQudHlwZSA9PT0gXCJBc3NpZ25tZW50UGF0dGVyblwiKVxuICAgICAgICB7IHRoaXMucmFpc2Uobm9kZS5hcmd1bWVudC5zdGFydCwgXCJSZXN0IGVsZW1lbnRzIGNhbm5vdCBoYXZlIGEgZGVmYXVsdCB2YWx1ZVwiKTsgfVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiOlxuICAgICAgaWYgKG5vZGUub3BlcmF0b3IgIT09IFwiPVwiKSB7IHRoaXMucmFpc2Uobm9kZS5sZWZ0LmVuZCwgXCJPbmx5ICc9JyBvcGVyYXRvciBjYW4gYmUgdXNlZCBmb3Igc3BlY2lmeWluZyBkZWZhdWx0IHZhbHVlLlwiKTsgfVxuICAgICAgbm9kZS50eXBlID0gXCJBc3NpZ25tZW50UGF0dGVyblwiO1xuICAgICAgZGVsZXRlIG5vZGUub3BlcmF0b3I7XG4gICAgICB0aGlzLnRvQXNzaWduYWJsZShub2RlLmxlZnQsIGlzQmluZGluZyk7XG4gICAgICBicmVha1xuXG4gICAgY2FzZSBcIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCI6XG4gICAgICB0aGlzLnRvQXNzaWduYWJsZShub2RlLmV4cHJlc3Npb24sIGlzQmluZGluZywgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gICAgICBicmVha1xuXG4gICAgY2FzZSBcIkNoYWluRXhwcmVzc2lvblwiOlxuICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiT3B0aW9uYWwgY2hhaW5pbmcgY2Fubm90IGFwcGVhciBpbiBsZWZ0LWhhbmQgc2lkZVwiKTtcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIFwiTWVtYmVyRXhwcmVzc2lvblwiOlxuICAgICAgaWYgKCFpc0JpbmRpbmcpIHsgYnJlYWsgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMucmFpc2Uobm9kZS5zdGFydCwgXCJBc3NpZ25pbmcgdG8gcnZhbHVlXCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7IHRoaXMuY2hlY2tQYXR0ZXJuRXJyb3JzKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIHRydWUpOyB9XG4gIHJldHVybiBub2RlXG59O1xuXG4vLyBDb252ZXJ0IGxpc3Qgb2YgZXhwcmVzc2lvbiBhdG9tcyB0byBiaW5kaW5nIGxpc3QuXG5cbnBwJDcudG9Bc3NpZ25hYmxlTGlzdCA9IGZ1bmN0aW9uKGV4cHJMaXN0LCBpc0JpbmRpbmcpIHtcbiAgdmFyIGVuZCA9IGV4cHJMaXN0Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmQ7IGkrKykge1xuICAgIHZhciBlbHQgPSBleHByTGlzdFtpXTtcbiAgICBpZiAoZWx0KSB7IHRoaXMudG9Bc3NpZ25hYmxlKGVsdCwgaXNCaW5kaW5nKTsgfVxuICB9XG4gIGlmIChlbmQpIHtcbiAgICB2YXIgbGFzdCA9IGV4cHJMaXN0W2VuZCAtIDFdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPT09IDYgJiYgaXNCaW5kaW5nICYmIGxhc3QgJiYgbGFzdC50eXBlID09PSBcIlJlc3RFbGVtZW50XCIgJiYgbGFzdC5hcmd1bWVudC50eXBlICE9PSBcIklkZW50aWZpZXJcIilcbiAgICAgIHsgdGhpcy51bmV4cGVjdGVkKGxhc3QuYXJndW1lbnQuc3RhcnQpOyB9XG4gIH1cbiAgcmV0dXJuIGV4cHJMaXN0XG59O1xuXG4vLyBQYXJzZXMgc3ByZWFkIGVsZW1lbnQuXG5cbnBwJDcucGFyc2VTcHJlYWQgPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgdGhpcy5uZXh0KCk7XG4gIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZmFsc2UsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiU3ByZWFkRWxlbWVudFwiKVxufTtcblxucHAkNy5wYXJzZVJlc3RCaW5kaW5nID0gZnVuY3Rpb24oKSB7XG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgdGhpcy5uZXh0KCk7XG5cbiAgLy8gUmVzdEVsZW1lbnQgaW5zaWRlIG9mIGEgZnVuY3Rpb24gcGFyYW1ldGVyIG11c3QgYmUgYW4gaWRlbnRpZmllclxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID09PSA2ICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5uYW1lKVxuICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cblxuICBub2RlLmFyZ3VtZW50ID0gdGhpcy5wYXJzZUJpbmRpbmdBdG9tKCk7XG5cbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlJlc3RFbGVtZW50XCIpXG59O1xuXG4vLyBQYXJzZXMgbHZhbHVlIChhc3NpZ25hYmxlKSBhdG9tLlxuXG5wcCQ3LnBhcnNlQmluZGluZ0F0b20gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzJDEuYnJhY2tldEw6XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIG5vZGUuZWxlbWVudHMgPSB0aGlzLnBhcnNlQmluZGluZ0xpc3QodHlwZXMkMS5icmFja2V0UiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiQXJyYXlQYXR0ZXJuXCIpXG5cbiAgICBjYXNlIHR5cGVzJDEuYnJhY2VMOlxuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmoodHJ1ZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXMucGFyc2VJZGVudCgpXG59O1xuXG5wcCQ3LnBhcnNlQmluZGluZ0xpc3QgPSBmdW5jdGlvbihjbG9zZSwgYWxsb3dFbXB0eSwgYWxsb3dUcmFpbGluZ0NvbW1hLCBhbGxvd01vZGlmaWVycykge1xuICB2YXIgZWx0cyA9IFtdLCBmaXJzdCA9IHRydWU7XG4gIHdoaWxlICghdGhpcy5lYXQoY2xvc2UpKSB7XG4gICAgaWYgKGZpcnN0KSB7IGZpcnN0ID0gZmFsc2U7IH1cbiAgICBlbHNlIHsgdGhpcy5leHBlY3QodHlwZXMkMS5jb21tYSk7IH1cbiAgICBpZiAoYWxsb3dFbXB0eSAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEpIHtcbiAgICAgIGVsdHMucHVzaChudWxsKTtcbiAgICB9IGVsc2UgaWYgKGFsbG93VHJhaWxpbmdDb21tYSAmJiB0aGlzLmFmdGVyVHJhaWxpbmdDb21tYShjbG9zZSkpIHtcbiAgICAgIGJyZWFrXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuZWxsaXBzaXMpIHtcbiAgICAgIHZhciByZXN0ID0gdGhpcy5wYXJzZVJlc3RCaW5kaW5nKCk7XG4gICAgICB0aGlzLnBhcnNlQmluZGluZ0xpc3RJdGVtKHJlc3QpO1xuICAgICAgZWx0cy5wdXNoKHJlc3QpO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5jb21tYSkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCwgXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIik7IH1cbiAgICAgIHRoaXMuZXhwZWN0KGNsb3NlKTtcbiAgICAgIGJyZWFrXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsdHMucHVzaCh0aGlzLnBhcnNlQXNzaWduYWJsZUxpc3RJdGVtKGFsbG93TW9kaWZpZXJzKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbHRzXG59O1xuXG5wcCQ3LnBhcnNlQXNzaWduYWJsZUxpc3RJdGVtID0gZnVuY3Rpb24oYWxsb3dNb2RpZmllcnMpIHtcbiAgdmFyIGVsZW0gPSB0aGlzLnBhcnNlTWF5YmVEZWZhdWx0KHRoaXMuc3RhcnQsIHRoaXMuc3RhcnRMb2MpO1xuICB0aGlzLnBhcnNlQmluZGluZ0xpc3RJdGVtKGVsZW0pO1xuICByZXR1cm4gZWxlbVxufTtcblxucHAkNy5wYXJzZUJpbmRpbmdMaXN0SXRlbSA9IGZ1bmN0aW9uKHBhcmFtKSB7XG4gIHJldHVybiBwYXJhbVxufTtcblxuLy8gUGFyc2VzIGFzc2lnbm1lbnQgcGF0dGVybiBhcm91bmQgZ2l2ZW4gYXRvbSBpZiBwb3NzaWJsZS5cblxucHAkNy5wYXJzZU1heWJlRGVmYXVsdCA9IGZ1bmN0aW9uKHN0YXJ0UG9zLCBzdGFydExvYywgbGVmdCkge1xuICBsZWZ0ID0gbGVmdCB8fCB0aGlzLnBhcnNlQmluZGluZ0F0b20oKTtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDYgfHwgIXRoaXMuZWF0KHR5cGVzJDEuZXEpKSB7IHJldHVybiBsZWZ0IH1cbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XG4gIG5vZGUubGVmdCA9IGxlZnQ7XG4gIG5vZGUucmlnaHQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkFzc2lnbm1lbnRQYXR0ZXJuXCIpXG59O1xuXG4vLyBUaGUgZm9sbG93aW5nIHRocmVlIGZ1bmN0aW9ucyBhbGwgdmVyaWZ5IHRoYXQgYSBub2RlIGlzIGFuIGx2YWx1ZSBcdTIwMTRcbi8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBib3VuZCwgb3IgYXNzaWduZWQgdG8uIEluIG9yZGVyIHRvIGRvIHNvLCB0aGV5IHBlcmZvcm1cbi8vIGEgdmFyaWV0eSBvZiBjaGVja3M6XG4vL1xuLy8gLSBDaGVjayB0aGF0IG5vbmUgb2YgdGhlIGJvdW5kL2Fzc2lnbmVkLXRvIGlkZW50aWZpZXJzIGFyZSByZXNlcnZlZCB3b3Jkcy5cbi8vIC0gUmVjb3JkIG5hbWUgZGVjbGFyYXRpb25zIGZvciBiaW5kaW5ncyBpbiB0aGUgYXBwcm9wcmlhdGUgc2NvcGUuXG4vLyAtIENoZWNrIGR1cGxpY2F0ZSBhcmd1bWVudCBuYW1lcywgaWYgY2hlY2tDbGFzaGVzIGlzIHNldC5cbi8vXG4vLyBJZiBhIGNvbXBsZXggYmluZGluZyBwYXR0ZXJuIGlzIGVuY291bnRlcmVkIChlLmcuLCBvYmplY3QgYW5kIGFycmF5XG4vLyBkZXN0cnVjdHVyaW5nKSwgdGhlIGVudGlyZSBwYXR0ZXJuIGlzIHJlY3Vyc2l2ZWx5IGNoZWNrZWQuXG4vL1xuLy8gVGhlcmUgYXJlIHRocmVlIHZlcnNpb25zIG9mIGNoZWNrTFZhbCooKSBhcHByb3ByaWF0ZSBmb3IgZGlmZmVyZW50XG4vLyBjaXJjdW1zdGFuY2VzOlxuLy9cbi8vIC0gY2hlY2tMVmFsU2ltcGxlKCkgc2hhbGwgYmUgdXNlZCBpZiB0aGUgc3ludGFjdGljIGNvbnN0cnVjdCBzdXBwb3J0c1xuLy8gICBub3RoaW5nIG90aGVyIHRoYW4gaWRlbnRpZmllcnMgYW5kIG1lbWJlciBleHByZXNzaW9ucy4gUGFyZW50aGVzaXplZFxuLy8gICBleHByZXNzaW9ucyBhcmUgYWxzbyBjb3JyZWN0bHkgaGFuZGxlZC4gVGhpcyBpcyBnZW5lcmFsbHkgYXBwcm9wcmlhdGUgZm9yXG4vLyAgIGNvbnN0cnVjdHMgZm9yIHdoaWNoIHRoZSBzcGVjIHNheXNcbi8vXG4vLyAgID4gSXQgaXMgYSBTeW50YXggRXJyb3IgaWYgQXNzaWdubWVudFRhcmdldFR5cGUgb2YgW3RoZSBwcm9kdWN0aW9uXSBpcyBub3Rcbi8vICAgPiBzaW1wbGUuXG4vL1xuLy8gICBJdCBpcyBhbHNvIGFwcHJvcHJpYXRlIGZvciBjaGVja2luZyBpZiBhbiBpZGVudGlmaWVyIGlzIHZhbGlkIGFuZCBub3Rcbi8vICAgZGVmaW5lZCBlbHNld2hlcmUsIGxpa2UgaW1wb3J0IGRlY2xhcmF0aW9ucyBvciBmdW5jdGlvbi9jbGFzcyBpZGVudGlmaWVycy5cbi8vXG4vLyAgIEV4YW1wbGVzIHdoZXJlIHRoaXMgaXMgdXNlZCBpbmNsdWRlOlxuLy8gICAgIGEgKz0gXHUyMDI2O1xuLy8gICAgIGltcG9ydCBhIGZyb20gJ1x1MjAyNic7XG4vLyAgIHdoZXJlIGEgaXMgdGhlIG5vZGUgdG8gYmUgY2hlY2tlZC5cbi8vXG4vLyAtIGNoZWNrTFZhbFBhdHRlcm4oKSBzaGFsbCBiZSB1c2VkIGlmIHRoZSBzeW50YWN0aWMgY29uc3RydWN0IHN1cHBvcnRzXG4vLyAgIGFueXRoaW5nIGNoZWNrTFZhbFNpbXBsZSgpIHN1cHBvcnRzLCBhcyB3ZWxsIGFzIG9iamVjdCBhbmQgYXJyYXlcbi8vICAgZGVzdHJ1Y3R1cmluZyBwYXR0ZXJucy4gVGhpcyBpcyBnZW5lcmFsbHkgYXBwcm9wcmlhdGUgZm9yIGNvbnN0cnVjdHMgZm9yXG4vLyAgIHdoaWNoIHRoZSBzcGVjIHNheXNcbi8vXG4vLyAgID4gSXQgaXMgYSBTeW50YXggRXJyb3IgaWYgW3RoZSBwcm9kdWN0aW9uXSBpcyBuZWl0aGVyIGFuIE9iamVjdExpdGVyYWwgbm9yXG4vLyAgID4gYW4gQXJyYXlMaXRlcmFsIGFuZCBBc3NpZ25tZW50VGFyZ2V0VHlwZSBvZiBbdGhlIHByb2R1Y3Rpb25dIGlzIG5vdFxuLy8gICA+IHNpbXBsZS5cbi8vXG4vLyAgIEV4YW1wbGVzIHdoZXJlIHRoaXMgaXMgdXNlZCBpbmNsdWRlOlxuLy8gICAgIChhID0gXHUyMDI2KTtcbi8vICAgICBjb25zdCBhID0gXHUyMDI2O1xuLy8gICAgIHRyeSB7IFx1MjAyNiB9IGNhdGNoIChhKSB7IFx1MjAyNiB9XG4vLyAgIHdoZXJlIGEgaXMgdGhlIG5vZGUgdG8gYmUgY2hlY2tlZC5cbi8vXG4vLyAtIGNoZWNrTFZhbElubmVyUGF0dGVybigpIHNoYWxsIGJlIHVzZWQgaWYgdGhlIHN5bnRhY3RpYyBjb25zdHJ1Y3Qgc3VwcG9ydHNcbi8vICAgYW55dGhpbmcgY2hlY2tMVmFsUGF0dGVybigpIHN1cHBvcnRzLCBhcyB3ZWxsIGFzIGRlZmF1bHQgYXNzaWdubWVudFxuLy8gICBwYXR0ZXJucywgcmVzdCBlbGVtZW50cywgYW5kIG90aGVyIGNvbnN0cnVjdHMgdGhhdCBtYXkgYXBwZWFyIHdpdGhpbiBhblxuLy8gICBvYmplY3Qgb3IgYXJyYXkgZGVzdHJ1Y3R1cmluZyBwYXR0ZXJuLlxuLy9cbi8vICAgQXMgYSBzcGVjaWFsIGNhc2UsIGZ1bmN0aW9uIHBhcmFtZXRlcnMgYWxzbyB1c2UgY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKCksXG4vLyAgIGFzIHRoZXkgYWxzbyBzdXBwb3J0IGRlZmF1bHRzIGFuZCByZXN0IGNvbnN0cnVjdHMuXG4vL1xuLy8gVGhlc2UgZnVuY3Rpb25zIGRlbGliZXJhdGVseSBzdXBwb3J0IGJvdGggYXNzaWdubWVudCBhbmQgYmluZGluZyBjb25zdHJ1Y3RzLFxuLy8gYXMgdGhlIGxvZ2ljIGZvciBib3RoIGlzIGV4Y2VlZGluZ2x5IHNpbWlsYXIuIElmIHRoZSBub2RlIGlzIHRoZSB0YXJnZXQgb2Zcbi8vIGFuIGFzc2lnbm1lbnQsIHRoZW4gYmluZGluZ1R5cGUgc2hvdWxkIGJlIHNldCB0byBCSU5EX05PTkUuIE90aGVyd2lzZSwgaXRcbi8vIHNob3VsZCBiZSBzZXQgdG8gdGhlIGFwcHJvcHJpYXRlIEJJTkRfKiBjb25zdGFudCwgbGlrZSBCSU5EX1ZBUiBvclxuLy8gQklORF9MRVhJQ0FMLlxuLy9cbi8vIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhIG5vbi1CSU5EX05PTkUgYmluZGluZ1R5cGUsIHRoZW5cbi8vIGFkZGl0aW9uYWxseSBhIGNoZWNrQ2xhc2hlcyBvYmplY3QgbWF5IGJlIHNwZWNpZmllZCB0byBhbGxvdyBjaGVja2luZyBmb3Jcbi8vIGR1cGxpY2F0ZSBhcmd1bWVudCBuYW1lcy4gY2hlY2tDbGFzaGVzIGlzIGlnbm9yZWQgaWYgdGhlIHByb3ZpZGVkIGNvbnN0cnVjdFxuLy8gaXMgYW4gYXNzaWdubWVudCAoaS5lLiwgYmluZGluZ1R5cGUgaXMgQklORF9OT05FKS5cblxucHAkNy5jaGVja0xWYWxTaW1wbGUgPSBmdW5jdGlvbihleHByLCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKSB7XG4gIGlmICggYmluZGluZ1R5cGUgPT09IHZvaWQgMCApIGJpbmRpbmdUeXBlID0gQklORF9OT05FO1xuXG4gIHZhciBpc0JpbmQgPSBiaW5kaW5nVHlwZSAhPT0gQklORF9OT05FO1xuXG4gIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gIGNhc2UgXCJJZGVudGlmaWVyXCI6XG4gICAgaWYgKHRoaXMuc3RyaWN0ICYmIHRoaXMucmVzZXJ2ZWRXb3Jkc1N0cmljdEJpbmQudGVzdChleHByLm5hbWUpKVxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZXhwci5zdGFydCwgKGlzQmluZCA/IFwiQmluZGluZyBcIiA6IFwiQXNzaWduaW5nIHRvIFwiKSArIGV4cHIubmFtZSArIFwiIGluIHN0cmljdCBtb2RlXCIpOyB9XG4gICAgaWYgKGlzQmluZCkge1xuICAgICAgaWYgKGJpbmRpbmdUeXBlID09PSBCSU5EX0xFWElDQUwgJiYgZXhwci5uYW1lID09PSBcImxldFwiKVxuICAgICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShleHByLnN0YXJ0LCBcImxldCBpcyBkaXNhbGxvd2VkIGFzIGEgbGV4aWNhbGx5IGJvdW5kIG5hbWVcIik7IH1cbiAgICAgIGlmIChjaGVja0NsYXNoZXMpIHtcbiAgICAgICAgaWYgKGhhc093bihjaGVja0NsYXNoZXMsIGV4cHIubmFtZSkpXG4gICAgICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZXhwci5zdGFydCwgXCJBcmd1bWVudCBuYW1lIGNsYXNoXCIpOyB9XG4gICAgICAgIGNoZWNrQ2xhc2hlc1tleHByLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChiaW5kaW5nVHlwZSAhPT0gQklORF9PVVRTSURFKSB7IHRoaXMuZGVjbGFyZU5hbWUoZXhwci5uYW1lLCBiaW5kaW5nVHlwZSwgZXhwci5zdGFydCk7IH1cbiAgICB9XG4gICAgYnJlYWtcblxuICBjYXNlIFwiQ2hhaW5FeHByZXNzaW9uXCI6XG4gICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKGV4cHIuc3RhcnQsIFwiT3B0aW9uYWwgY2hhaW5pbmcgY2Fubm90IGFwcGVhciBpbiBsZWZ0LWhhbmQgc2lkZVwiKTtcbiAgICBicmVha1xuXG4gIGNhc2UgXCJNZW1iZXJFeHByZXNzaW9uXCI6XG4gICAgaWYgKGlzQmluZCkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZXhwci5zdGFydCwgXCJCaW5kaW5nIG1lbWJlciBleHByZXNzaW9uXCIpOyB9XG4gICAgYnJlYWtcblxuICBjYXNlIFwiUGFyZW50aGVzaXplZEV4cHJlc3Npb25cIjpcbiAgICBpZiAoaXNCaW5kKSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShleHByLnN0YXJ0LCBcIkJpbmRpbmcgcGFyZW50aGVzaXplZCBleHByZXNzaW9uXCIpOyB9XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tMVmFsU2ltcGxlKGV4cHIuZXhwcmVzc2lvbiwgYmluZGluZ1R5cGUsIGNoZWNrQ2xhc2hlcylcblxuICBkZWZhdWx0OlxuICAgIHRoaXMucmFpc2UoZXhwci5zdGFydCwgKGlzQmluZCA/IFwiQmluZGluZ1wiIDogXCJBc3NpZ25pbmcgdG9cIikgKyBcIiBydmFsdWVcIik7XG4gIH1cbn07XG5cbnBwJDcuY2hlY2tMVmFsUGF0dGVybiA9IGZ1bmN0aW9uKGV4cHIsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpIHtcbiAgaWYgKCBiaW5kaW5nVHlwZSA9PT0gdm9pZCAwICkgYmluZGluZ1R5cGUgPSBCSU5EX05PTkU7XG5cbiAgc3dpdGNoIChleHByLnR5cGUpIHtcbiAgY2FzZSBcIk9iamVjdFBhdHRlcm5cIjpcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IGV4cHIucHJvcGVydGllczsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBwcm9wID0gbGlzdFtpXTtcblxuICAgIHRoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKHByb3AsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpO1xuICAgIH1cbiAgICBicmVha1xuXG4gIGNhc2UgXCJBcnJheVBhdHRlcm5cIjpcbiAgICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0JDEgPSBleHByLmVsZW1lbnRzOyBpJDEgPCBsaXN0JDEubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgdmFyIGVsZW0gPSBsaXN0JDFbaSQxXTtcblxuICAgIGlmIChlbGVtKSB7IHRoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKGVsZW0sIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpOyB9XG4gICAgfVxuICAgIGJyZWFrXG5cbiAgZGVmYXVsdDpcbiAgICB0aGlzLmNoZWNrTFZhbFNpbXBsZShleHByLCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKTtcbiAgfVxufTtcblxucHAkNy5jaGVja0xWYWxJbm5lclBhdHRlcm4gPSBmdW5jdGlvbihleHByLCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKSB7XG4gIGlmICggYmluZGluZ1R5cGUgPT09IHZvaWQgMCApIGJpbmRpbmdUeXBlID0gQklORF9OT05FO1xuXG4gIHN3aXRjaCAoZXhwci50eXBlKSB7XG4gIGNhc2UgXCJQcm9wZXJ0eVwiOlxuICAgIC8vIEFzc2lnbm1lbnRQcm9wZXJ0eSBoYXMgdHlwZSA9PT0gXCJQcm9wZXJ0eVwiXG4gICAgdGhpcy5jaGVja0xWYWxJbm5lclBhdHRlcm4oZXhwci52YWx1ZSwgYmluZGluZ1R5cGUsIGNoZWNrQ2xhc2hlcyk7XG4gICAgYnJlYWtcblxuICBjYXNlIFwiQXNzaWdubWVudFBhdHRlcm5cIjpcbiAgICB0aGlzLmNoZWNrTFZhbFBhdHRlcm4oZXhwci5sZWZ0LCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKTtcbiAgICBicmVha1xuXG4gIGNhc2UgXCJSZXN0RWxlbWVudFwiOlxuICAgIHRoaXMuY2hlY2tMVmFsUGF0dGVybihleHByLmFyZ3VtZW50LCBiaW5kaW5nVHlwZSwgY2hlY2tDbGFzaGVzKTtcbiAgICBicmVha1xuXG4gIGRlZmF1bHQ6XG4gICAgdGhpcy5jaGVja0xWYWxQYXR0ZXJuKGV4cHIsIGJpbmRpbmdUeXBlLCBjaGVja0NsYXNoZXMpO1xuICB9XG59O1xuXG4vLyBUaGUgYWxnb3JpdGhtIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSByZWdleHAgY2FuIGFwcGVhciBhdCBhXG4vLyBnaXZlbiBwb2ludCBpbiB0aGUgcHJvZ3JhbSBpcyBsb29zZWx5IGJhc2VkIG9uIHN3ZWV0LmpzJyBhcHByb2FjaC5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9zd2VldC5qcy93aWtpL2Rlc2lnblxuXG5cbnZhciBUb2tDb250ZXh0ID0gZnVuY3Rpb24gVG9rQ29udGV4dCh0b2tlbiwgaXNFeHByLCBwcmVzZXJ2ZVNwYWNlLCBvdmVycmlkZSwgZ2VuZXJhdG9yKSB7XG4gIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgdGhpcy5pc0V4cHIgPSAhIWlzRXhwcjtcbiAgdGhpcy5wcmVzZXJ2ZVNwYWNlID0gISFwcmVzZXJ2ZVNwYWNlO1xuICB0aGlzLm92ZXJyaWRlID0gb3ZlcnJpZGU7XG4gIHRoaXMuZ2VuZXJhdG9yID0gISFnZW5lcmF0b3I7XG59O1xuXG52YXIgdHlwZXMgPSB7XG4gIGJfc3RhdDogbmV3IFRva0NvbnRleHQoXCJ7XCIsIGZhbHNlKSxcbiAgYl9leHByOiBuZXcgVG9rQ29udGV4dChcIntcIiwgdHJ1ZSksXG4gIGJfdG1wbDogbmV3IFRva0NvbnRleHQoXCIke1wiLCBmYWxzZSksXG4gIHBfc3RhdDogbmV3IFRva0NvbnRleHQoXCIoXCIsIGZhbHNlKSxcbiAgcF9leHByOiBuZXcgVG9rQ29udGV4dChcIihcIiwgdHJ1ZSksXG4gIHFfdG1wbDogbmV3IFRva0NvbnRleHQoXCJgXCIsIHRydWUsIHRydWUsIGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRyeVJlYWRUZW1wbGF0ZVRva2VuKCk7IH0pLFxuICBmX3N0YXQ6IG5ldyBUb2tDb250ZXh0KFwiZnVuY3Rpb25cIiwgZmFsc2UpLFxuICBmX2V4cHI6IG5ldyBUb2tDb250ZXh0KFwiZnVuY3Rpb25cIiwgdHJ1ZSksXG4gIGZfZXhwcl9nZW46IG5ldyBUb2tDb250ZXh0KFwiZnVuY3Rpb25cIiwgdHJ1ZSwgZmFsc2UsIG51bGwsIHRydWUpLFxuICBmX2dlbjogbmV3IFRva0NvbnRleHQoXCJmdW5jdGlvblwiLCBmYWxzZSwgZmFsc2UsIG51bGwsIHRydWUpXG59O1xuXG52YXIgcHAkNiA9IFBhcnNlci5wcm90b3R5cGU7XG5cbnBwJDYuaW5pdGlhbENvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFt0eXBlcy5iX3N0YXRdXG59O1xuXG5wcCQ2LmN1ckNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmNvbnRleHQubGVuZ3RoIC0gMV1cbn07XG5cbnBwJDYuYnJhY2VJc0Jsb2NrID0gZnVuY3Rpb24ocHJldlR5cGUpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuY3VyQ29udGV4dCgpO1xuICBpZiAocGFyZW50ID09PSB0eXBlcy5mX2V4cHIgfHwgcGFyZW50ID09PSB0eXBlcy5mX3N0YXQpXG4gICAgeyByZXR1cm4gdHJ1ZSB9XG4gIGlmIChwcmV2VHlwZSA9PT0gdHlwZXMkMS5jb2xvbiAmJiAocGFyZW50ID09PSB0eXBlcy5iX3N0YXQgfHwgcGFyZW50ID09PSB0eXBlcy5iX2V4cHIpKVxuICAgIHsgcmV0dXJuICFwYXJlbnQuaXNFeHByIH1cblxuICAvLyBUaGUgY2hlY2sgZm9yIGB0dC5uYW1lICYmIGV4cHJBbGxvd2VkYCBkZXRlY3RzIHdoZXRoZXIgd2UgYXJlXG4gIC8vIGFmdGVyIGEgYHlpZWxkYCBvciBgb2ZgIGNvbnN0cnVjdC4gU2VlIHRoZSBgdXBkYXRlQ29udGV4dGAgZm9yXG4gIC8vIGB0dC5uYW1lYC5cbiAgaWYgKHByZXZUeXBlID09PSB0eXBlcyQxLl9yZXR1cm4gfHwgcHJldlR5cGUgPT09IHR5cGVzJDEubmFtZSAmJiB0aGlzLmV4cHJBbGxvd2VkKVxuICAgIHsgcmV0dXJuIGxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLCB0aGlzLnN0YXJ0KSkgfVxuICBpZiAocHJldlR5cGUgPT09IHR5cGVzJDEuX2Vsc2UgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEuc2VtaSB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5lb2YgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEucGFyZW5SIHx8IHByZXZUeXBlID09PSB0eXBlcyQxLmFycm93KVxuICAgIHsgcmV0dXJuIHRydWUgfVxuICBpZiAocHJldlR5cGUgPT09IHR5cGVzJDEuYnJhY2VMKVxuICAgIHsgcmV0dXJuIHBhcmVudCA9PT0gdHlwZXMuYl9zdGF0IH1cbiAgaWYgKHByZXZUeXBlID09PSB0eXBlcyQxLl92YXIgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEuX2NvbnN0IHx8IHByZXZUeXBlID09PSB0eXBlcyQxLm5hbWUpXG4gICAgeyByZXR1cm4gZmFsc2UgfVxuICByZXR1cm4gIXRoaXMuZXhwckFsbG93ZWRcbn07XG5cbnBwJDYuaW5HZW5lcmF0b3JDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLmNvbnRleHQubGVuZ3RoIC0gMTsgaSA+PSAxOyBpLS0pIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFtpXTtcbiAgICBpZiAoY29udGV4dC50b2tlbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgeyByZXR1cm4gY29udGV4dC5nZW5lcmF0b3IgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxucHAkNi51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24ocHJldlR5cGUpIHtcbiAgdmFyIHVwZGF0ZSwgdHlwZSA9IHRoaXMudHlwZTtcbiAgaWYgKHR5cGUua2V5d29yZCAmJiBwcmV2VHlwZSA9PT0gdHlwZXMkMS5kb3QpXG4gICAgeyB0aGlzLmV4cHJBbGxvd2VkID0gZmFsc2U7IH1cbiAgZWxzZSBpZiAodXBkYXRlID0gdHlwZS51cGRhdGVDb250ZXh0KVxuICAgIHsgdXBkYXRlLmNhbGwodGhpcywgcHJldlR5cGUpOyB9XG4gIGVsc2VcbiAgICB7IHRoaXMuZXhwckFsbG93ZWQgPSB0eXBlLmJlZm9yZUV4cHI7IH1cbn07XG5cbi8vIFVzZWQgdG8gaGFuZGxlIGVkZ2UgY2FzZXMgd2hlbiB0b2tlbiBjb250ZXh0IGNvdWxkIG5vdCBiZSBpbmZlcnJlZCBjb3JyZWN0bHkgZHVyaW5nIHRva2VuaXphdGlvbiBwaGFzZVxuXG5wcCQ2Lm92ZXJyaWRlQ29udGV4dCA9IGZ1bmN0aW9uKHRva2VuQ3R4KSB7XG4gIGlmICh0aGlzLmN1ckNvbnRleHQoKSAhPT0gdG9rZW5DdHgpIHtcbiAgICB0aGlzLmNvbnRleHRbdGhpcy5jb250ZXh0Lmxlbmd0aCAtIDFdID0gdG9rZW5DdHg7XG4gIH1cbn07XG5cbi8vIFRva2VuLXNwZWNpZmljIGNvbnRleHQgdXBkYXRlIGNvZGVcblxudHlwZXMkMS5wYXJlblIudXBkYXRlQ29udGV4dCA9IHR5cGVzJDEuYnJhY2VSLnVwZGF0ZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuY29udGV4dC5sZW5ndGggPT09IDEpIHtcbiAgICB0aGlzLmV4cHJBbGxvd2VkID0gdHJ1ZTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb3V0ID0gdGhpcy5jb250ZXh0LnBvcCgpO1xuICBpZiAob3V0ID09PSB0eXBlcy5iX3N0YXQgJiYgdGhpcy5jdXJDb250ZXh0KCkudG9rZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIG91dCA9IHRoaXMuY29udGV4dC5wb3AoKTtcbiAgfVxuICB0aGlzLmV4cHJBbGxvd2VkID0gIW91dC5pc0V4cHI7XG59O1xuXG50eXBlcyQxLmJyYWNlTC51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24ocHJldlR5cGUpIHtcbiAgdGhpcy5jb250ZXh0LnB1c2godGhpcy5icmFjZUlzQmxvY2socHJldlR5cGUpID8gdHlwZXMuYl9zdGF0IDogdHlwZXMuYl9leHByKTtcbiAgdGhpcy5leHByQWxsb3dlZCA9IHRydWU7XG59O1xuXG50eXBlcyQxLmRvbGxhckJyYWNlTC51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29udGV4dC5wdXNoKHR5cGVzLmJfdG1wbCk7XG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xufTtcblxudHlwZXMkMS5wYXJlbkwudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKHByZXZUeXBlKSB7XG4gIHZhciBzdGF0ZW1lbnRQYXJlbnMgPSBwcmV2VHlwZSA9PT0gdHlwZXMkMS5faWYgfHwgcHJldlR5cGUgPT09IHR5cGVzJDEuX2ZvciB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5fd2l0aCB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5fd2hpbGU7XG4gIHRoaXMuY29udGV4dC5wdXNoKHN0YXRlbWVudFBhcmVucyA/IHR5cGVzLnBfc3RhdCA6IHR5cGVzLnBfZXhwcik7XG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xufTtcblxudHlwZXMkMS5pbmNEZWMudXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICAvLyB0b2tFeHByQWxsb3dlZCBzdGF5cyB1bmNoYW5nZWRcbn07XG5cbnR5cGVzJDEuX2Z1bmN0aW9uLnVwZGF0ZUNvbnRleHQgPSB0eXBlcyQxLl9jbGFzcy51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24ocHJldlR5cGUpIHtcbiAgaWYgKHByZXZUeXBlLmJlZm9yZUV4cHIgJiYgcHJldlR5cGUgIT09IHR5cGVzJDEuX2Vsc2UgJiZcbiAgICAgICEocHJldlR5cGUgPT09IHR5cGVzJDEuc2VtaSAmJiB0aGlzLmN1ckNvbnRleHQoKSAhPT0gdHlwZXMucF9zdGF0KSAmJlxuICAgICAgIShwcmV2VHlwZSA9PT0gdHlwZXMkMS5fcmV0dXJuICYmIGxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLCB0aGlzLnN0YXJ0KSkpICYmXG4gICAgICAhKChwcmV2VHlwZSA9PT0gdHlwZXMkMS5jb2xvbiB8fCBwcmV2VHlwZSA9PT0gdHlwZXMkMS5icmFjZUwpICYmIHRoaXMuY3VyQ29udGV4dCgpID09PSB0eXBlcy5iX3N0YXQpKVxuICAgIHsgdGhpcy5jb250ZXh0LnB1c2godHlwZXMuZl9leHByKTsgfVxuICBlbHNlXG4gICAgeyB0aGlzLmNvbnRleHQucHVzaCh0eXBlcy5mX3N0YXQpOyB9XG4gIHRoaXMuZXhwckFsbG93ZWQgPSBmYWxzZTtcbn07XG5cbnR5cGVzJDEuY29sb24udXBkYXRlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jdXJDb250ZXh0KCkudG9rZW4gPT09IFwiZnVuY3Rpb25cIikgeyB0aGlzLmNvbnRleHQucG9wKCk7IH1cbiAgdGhpcy5leHByQWxsb3dlZCA9IHRydWU7XG59O1xuXG50eXBlcyQxLmJhY2tRdW90ZS51cGRhdGVDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmN1ckNvbnRleHQoKSA9PT0gdHlwZXMucV90bXBsKVxuICAgIHsgdGhpcy5jb250ZXh0LnBvcCgpOyB9XG4gIGVsc2VcbiAgICB7IHRoaXMuY29udGV4dC5wdXNoKHR5cGVzLnFfdG1wbCk7IH1cbiAgdGhpcy5leHByQWxsb3dlZCA9IGZhbHNlO1xufTtcblxudHlwZXMkMS5zdGFyLnVwZGF0ZUNvbnRleHQgPSBmdW5jdGlvbihwcmV2VHlwZSkge1xuICBpZiAocHJldlR5cGUgPT09IHR5cGVzJDEuX2Z1bmN0aW9uKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0Lmxlbmd0aCAtIDE7XG4gICAgaWYgKHRoaXMuY29udGV4dFtpbmRleF0gPT09IHR5cGVzLmZfZXhwcilcbiAgICAgIHsgdGhpcy5jb250ZXh0W2luZGV4XSA9IHR5cGVzLmZfZXhwcl9nZW47IH1cbiAgICBlbHNlXG4gICAgICB7IHRoaXMuY29udGV4dFtpbmRleF0gPSB0eXBlcy5mX2dlbjsgfVxuICB9XG4gIHRoaXMuZXhwckFsbG93ZWQgPSB0cnVlO1xufTtcblxudHlwZXMkMS5uYW1lLnVwZGF0ZUNvbnRleHQgPSBmdW5jdGlvbihwcmV2VHlwZSkge1xuICB2YXIgYWxsb3dlZCA9IGZhbHNlO1xuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgcHJldlR5cGUgIT09IHR5cGVzJDEuZG90KSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IFwib2ZcIiAmJiAhdGhpcy5leHByQWxsb3dlZCB8fFxuICAgICAgICB0aGlzLnZhbHVlID09PSBcInlpZWxkXCIgJiYgdGhpcy5pbkdlbmVyYXRvckNvbnRleHQoKSlcbiAgICAgIHsgYWxsb3dlZCA9IHRydWU7IH1cbiAgfVxuICB0aGlzLmV4cHJBbGxvd2VkID0gYWxsb3dlZDtcbn07XG5cbi8vIEEgcmVjdXJzaXZlIGRlc2NlbnQgcGFyc2VyIG9wZXJhdGVzIGJ5IGRlZmluaW5nIGZ1bmN0aW9ucyBmb3IgYWxsXG4vLyBzeW50YWN0aWMgZWxlbWVudHMsIGFuZCByZWN1cnNpdmVseSBjYWxsaW5nIHRob3NlLCBlYWNoIGZ1bmN0aW9uXG4vLyBhZHZhbmNpbmcgdGhlIGlucHV0IHN0cmVhbSBhbmQgcmV0dXJuaW5nIGFuIEFTVCBub2RlLiBQcmVjZWRlbmNlXG4vLyBvZiBjb25zdHJ1Y3RzIChmb3IgZXhhbXBsZSwgdGhlIGZhY3QgdGhhdCBgIXhbMV1gIG1lYW5zIGAhKHhbMV0pYFxuLy8gaW5zdGVhZCBvZiBgKCF4KVsxXWAgaXMgaGFuZGxlZCBieSB0aGUgZmFjdCB0aGF0IHRoZSBwYXJzZXJcbi8vIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHVuYXJ5IHByZWZpeCBvcGVyYXRvcnMgaXMgY2FsbGVkIGZpcnN0LCBhbmRcbi8vIGluIHR1cm4gY2FsbHMgdGhlIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIGBbXWAgc3Vic2NyaXB0cyBcdTIwMTQgdGhhdFxuLy8gd2F5LCBpdCdsbCByZWNlaXZlIHRoZSBub2RlIGZvciBgeFsxXWAgYWxyZWFkeSBwYXJzZWQsIGFuZCB3cmFwc1xuLy8gKnRoYXQqIGluIHRoZSB1bmFyeSBvcGVyYXRvciBub2RlLlxuLy9cbi8vIEFjb3JuIHVzZXMgYW4gW29wZXJhdG9yIHByZWNlZGVuY2UgcGFyc2VyXVtvcHBdIHRvIGhhbmRsZSBiaW5hcnlcbi8vIG9wZXJhdG9yIHByZWNlZGVuY2UsIGJlY2F1c2UgaXQgaXMgbXVjaCBtb3JlIGNvbXBhY3QgdGhhbiB1c2luZ1xuLy8gdGhlIHRlY2huaXF1ZSBvdXRsaW5lZCBhYm92ZSwgd2hpY2ggdXNlcyBkaWZmZXJlbnQsIG5lc3Rpbmdcbi8vIGZ1bmN0aW9ucyB0byBzcGVjaWZ5IHByZWNlZGVuY2UsIGZvciBhbGwgb2YgdGhlIHRlbiBiaW5hcnlcbi8vIHByZWNlZGVuY2UgbGV2ZWxzIHRoYXQgSmF2YVNjcmlwdCBkZWZpbmVzLlxuLy9cbi8vIFtvcHBdOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL09wZXJhdG9yLXByZWNlZGVuY2VfcGFyc2VyXG5cblxudmFyIHBwJDUgPSBQYXJzZXIucHJvdG90eXBlO1xuXG4vLyBDaGVjayBpZiBwcm9wZXJ0eSBuYW1lIGNsYXNoZXMgd2l0aCBhbHJlYWR5IGFkZGVkLlxuLy8gT2JqZWN0L2NsYXNzIGdldHRlcnMgYW5kIHNldHRlcnMgYXJlIG5vdCBhbGxvd2VkIHRvIGNsYXNoIFx1MjAxNFxuLy8gZWl0aGVyIHdpdGggZWFjaCBvdGhlciBvciB3aXRoIGFuIGluaXQgcHJvcGVydHkgXHUyMDE0IGFuZCBpblxuLy8gc3RyaWN0IG1vZGUsIGluaXQgcHJvcGVydGllcyBhcmUgYWxzbyBub3QgYWxsb3dlZCB0byBiZSByZXBlYXRlZC5cblxucHAkNS5jaGVja1Byb3BDbGFzaCA9IGZ1bmN0aW9uKHByb3AsIHByb3BIYXNoLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSAmJiBwcm9wLnR5cGUgPT09IFwiU3ByZWFkRWxlbWVudFwiKVxuICAgIHsgcmV0dXJuIH1cbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2ICYmIChwcm9wLmNvbXB1dGVkIHx8IHByb3AubWV0aG9kIHx8IHByb3Auc2hvcnRoYW5kKSlcbiAgICB7IHJldHVybiB9XG4gIHZhciBrZXkgPSBwcm9wLmtleTtcbiAgdmFyIG5hbWU7XG4gIHN3aXRjaCAoa2V5LnR5cGUpIHtcbiAgY2FzZSBcIklkZW50aWZpZXJcIjogbmFtZSA9IGtleS5uYW1lOyBicmVha1xuICBjYXNlIFwiTGl0ZXJhbFwiOiBuYW1lID0gU3RyaW5nKGtleS52YWx1ZSk7IGJyZWFrXG4gIGRlZmF1bHQ6IHJldHVyblxuICB9XG4gIHZhciBraW5kID0gcHJvcC5raW5kO1xuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpIHtcbiAgICBpZiAobmFtZSA9PT0gXCJfX3Byb3RvX19cIiAmJiBraW5kID09PSBcImluaXRcIikge1xuICAgICAgaWYgKHByb3BIYXNoLnByb3RvKSB7XG4gICAgICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gICAgICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuZG91YmxlUHJvdG8gPCAwKSB7XG4gICAgICAgICAgICByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLmRvdWJsZVByb3RvID0ga2V5LnN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoa2V5LnN0YXJ0LCBcIlJlZGVmaW5pdGlvbiBvZiBfX3Byb3RvX18gcHJvcGVydHlcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3BIYXNoLnByb3RvID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgbmFtZSA9IFwiJFwiICsgbmFtZTtcbiAgdmFyIG90aGVyID0gcHJvcEhhc2hbbmFtZV07XG4gIGlmIChvdGhlcikge1xuICAgIHZhciByZWRlZmluaXRpb247XG4gICAgaWYgKGtpbmQgPT09IFwiaW5pdFwiKSB7XG4gICAgICByZWRlZmluaXRpb24gPSB0aGlzLnN0cmljdCAmJiBvdGhlci5pbml0IHx8IG90aGVyLmdldCB8fCBvdGhlci5zZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZGVmaW5pdGlvbiA9IG90aGVyLmluaXQgfHwgb3RoZXJba2luZF07XG4gICAgfVxuICAgIGlmIChyZWRlZmluaXRpb24pXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShrZXkuc3RhcnQsIFwiUmVkZWZpbml0aW9uIG9mIHByb3BlcnR5XCIpOyB9XG4gIH0gZWxzZSB7XG4gICAgb3RoZXIgPSBwcm9wSGFzaFtuYW1lXSA9IHtcbiAgICAgIGluaXQ6IGZhbHNlLFxuICAgICAgZ2V0OiBmYWxzZSxcbiAgICAgIHNldDogZmFsc2VcbiAgICB9O1xuICB9XG4gIG90aGVyW2tpbmRdID0gdHJ1ZTtcbn07XG5cbi8vICMjIyBFeHByZXNzaW9uIHBhcnNpbmdcblxuLy8gVGhlc2UgbmVzdCwgZnJvbSB0aGUgbW9zdCBnZW5lcmFsIGV4cHJlc3Npb24gdHlwZSBhdCB0aGUgdG9wIHRvXG4vLyAnYXRvbWljJywgbm9uZGl2aXNpYmxlIGV4cHJlc3Npb24gdHlwZXMgYXQgdGhlIGJvdHRvbS4gTW9zdCBvZlxuLy8gdGhlIGZ1bmN0aW9ucyB3aWxsIHNpbXBseSBsZXQgdGhlIGZ1bmN0aW9uKHMpIGJlbG93IHRoZW0gcGFyc2UsXG4vLyBhbmQsICppZiogdGhlIHN5bnRhY3RpYyBjb25zdHJ1Y3QgdGhleSBoYW5kbGUgaXMgcHJlc2VudCwgd3JhcFxuLy8gdGhlIEFTVCBub2RlIHRoYXQgdGhlIGlubmVyIHBhcnNlciBnYXZlIHRoZW0gaW4gYW5vdGhlciBub2RlLlxuXG4vLyBQYXJzZSBhIGZ1bGwgZXhwcmVzc2lvbi4gVGhlIG9wdGlvbmFsIGFyZ3VtZW50cyBhcmUgdXNlZCB0b1xuLy8gZm9yYmlkIHRoZSBgaW5gIG9wZXJhdG9yIChpbiBmb3IgbG9vcHMgaW5pdGFsaXphdGlvbiBleHByZXNzaW9ucylcbi8vIGFuZCBwcm92aWRlIHJlZmVyZW5jZSBmb3Igc3RvcmluZyAnPScgb3BlcmF0b3IgaW5zaWRlIHNob3J0aGFuZFxuLy8gcHJvcGVydHkgYXNzaWdubWVudCBpbiBjb250ZXh0cyB3aGVyZSBib3RoIG9iamVjdCBleHByZXNzaW9uXG4vLyBhbmQgb2JqZWN0IHBhdHRlcm4gbWlnaHQgYXBwZWFyIChzbyBpdCdzIHBvc3NpYmxlIHRvIHJhaXNlXG4vLyBkZWxheWVkIHN5bnRheCBlcnJvciBhdCBjb3JyZWN0IHBvc2l0aW9uKS5cblxucHAkNS5wYXJzZUV4cHJlc3Npb24gPSBmdW5jdGlvbihmb3JJbml0LCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gIHZhciBzdGFydFBvcyA9IHRoaXMuc3RhcnQsIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcbiAgdmFyIGV4cHIgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcbiAgICBub2RlLmV4cHJlc3Npb25zID0gW2V4cHJdO1xuICAgIHdoaWxlICh0aGlzLmVhdCh0eXBlcyQxLmNvbW1hKSkgeyBub2RlLmV4cHJlc3Npb25zLnB1c2godGhpcy5wYXJzZU1heWJlQXNzaWduKGZvckluaXQsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpKTsgfVxuICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJTZXF1ZW5jZUV4cHJlc3Npb25cIilcbiAgfVxuICByZXR1cm4gZXhwclxufTtcblxuLy8gUGFyc2UgYW4gYXNzaWdubWVudCBleHByZXNzaW9uLiBUaGlzIGluY2x1ZGVzIGFwcGxpY2F0aW9ucyBvZlxuLy8gb3BlcmF0b3JzIGxpa2UgYCs9YC5cblxucHAkNS5wYXJzZU1heWJlQXNzaWduID0gZnVuY3Rpb24oZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgYWZ0ZXJMZWZ0UGFyc2UpIHtcbiAgaWYgKHRoaXMuaXNDb250ZXh0dWFsKFwieWllbGRcIikpIHtcbiAgICBpZiAodGhpcy5pbkdlbmVyYXRvcikgeyByZXR1cm4gdGhpcy5wYXJzZVlpZWxkKGZvckluaXQpIH1cbiAgICAvLyBUaGUgdG9rZW5pemVyIHdpbGwgYXNzdW1lIGFuIGV4cHJlc3Npb24gaXMgYWxsb3dlZCBhZnRlclxuICAgIC8vIGB5aWVsZGAsIGJ1dCB0aGlzIGlzbid0IHRoYXQga2luZCBvZiB5aWVsZFxuICAgIGVsc2UgeyB0aGlzLmV4cHJBbGxvd2VkID0gZmFsc2U7IH1cbiAgfVxuXG4gIHZhciBvd25EZXN0cnVjdHVyaW5nRXJyb3JzID0gZmFsc2UsIG9sZFBhcmVuQXNzaWduID0gLTEsIG9sZFRyYWlsaW5nQ29tbWEgPSAtMSwgb2xkRG91YmxlUHJvdG8gPSAtMTtcbiAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcbiAgICBvbGRQYXJlbkFzc2lnbiA9IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEFzc2lnbjtcbiAgICBvbGRUcmFpbGluZ0NvbW1hID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hO1xuICAgIG9sZERvdWJsZVByb3RvID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5kb3VibGVQcm90bztcbiAgICByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ24gPSByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZWZEZXN0cnVjdHVyaW5nRXJyb3JzID0gbmV3IERlc3RydWN0dXJpbmdFcnJvcnM7XG4gICAgb3duRGVzdHJ1Y3R1cmluZ0Vycm9ycyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucGFyZW5MIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5uYW1lKSB7XG4gICAgdGhpcy5wb3RlbnRpYWxBcnJvd0F0ID0gdGhpcy5zdGFydDtcbiAgICB0aGlzLnBvdGVudGlhbEFycm93SW5Gb3JBd2FpdCA9IGZvckluaXQgPT09IFwiYXdhaXRcIjtcbiAgfVxuICB2YXIgbGVmdCA9IHRoaXMucGFyc2VNYXliZUNvbmRpdGlvbmFsKGZvckluaXQsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xuICBpZiAoYWZ0ZXJMZWZ0UGFyc2UpIHsgbGVmdCA9IGFmdGVyTGVmdFBhcnNlLmNhbGwodGhpcywgbGVmdCwgc3RhcnRQb3MsIHN0YXJ0TG9jKTsgfVxuICBpZiAodGhpcy50eXBlLmlzQXNzaWduKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XG4gICAgbm9kZS5vcGVyYXRvciA9IHRoaXMudmFsdWU7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5lcSlcbiAgICAgIHsgbGVmdCA9IHRoaXMudG9Bc3NpZ25hYmxlKGxlZnQsIGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTsgfVxuICAgIGlmICghb3duRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xuICAgICAgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQXNzaWduID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hID0gcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5kb3VibGVQcm90byA9IC0xO1xuICAgIH1cbiAgICBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5zaG9ydGhhbmRBc3NpZ24gPj0gbGVmdC5zdGFydClcbiAgICAgIHsgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5zaG9ydGhhbmRBc3NpZ24gPSAtMTsgfSAvLyByZXNldCBiZWNhdXNlIHNob3J0aGFuZCBkZWZhdWx0IHdhcyB1c2VkIGNvcnJlY3RseVxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuZXEpXG4gICAgICB7IHRoaXMuY2hlY2tMVmFsUGF0dGVybihsZWZ0KTsgfVxuICAgIGVsc2VcbiAgICAgIHsgdGhpcy5jaGVja0xWYWxTaW1wbGUobGVmdCk7IH1cbiAgICBub2RlLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMubmV4dCgpO1xuICAgIG5vZGUucmlnaHQgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCk7XG4gICAgaWYgKG9sZERvdWJsZVByb3RvID4gLTEpIHsgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5kb3VibGVQcm90byA9IG9sZERvdWJsZVByb3RvOyB9XG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIpXG4gIH0gZWxzZSB7XG4gICAgaWYgKG93bkRlc3RydWN0dXJpbmdFcnJvcnMpIHsgdGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgdHJ1ZSk7IH1cbiAgfVxuICBpZiAob2xkUGFyZW5Bc3NpZ24gPiAtMSkgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ24gPSBvbGRQYXJlbkFzc2lnbjsgfVxuICBpZiAob2xkVHJhaWxpbmdDb21tYSA+IC0xKSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSA9IG9sZFRyYWlsaW5nQ29tbWE7IH1cbiAgcmV0dXJuIGxlZnRcbn07XG5cbi8vIFBhcnNlIGEgdGVybmFyeSBjb25kaXRpb25hbCAoYD86YCkgb3BlcmF0b3IuXG5cbnBwJDUucGFyc2VNYXliZUNvbmRpdGlvbmFsID0gZnVuY3Rpb24oZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XG4gIHZhciBleHByID0gdGhpcy5wYXJzZUV4cHJPcHMoZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gIGlmICh0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSkgeyByZXR1cm4gZXhwciB9XG4gIGlmICh0aGlzLmVhdCh0eXBlcyQxLnF1ZXN0aW9uKSkge1xuICAgIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xuICAgIG5vZGUudGVzdCA9IGV4cHI7XG4gICAgbm9kZS5jb25zZXF1ZW50ID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKCk7XG4gICAgdGhpcy5leHBlY3QodHlwZXMkMS5jb2xvbik7XG4gICAgbm9kZS5hbHRlcm5hdGUgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCk7XG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiKVxuICB9XG4gIHJldHVybiBleHByXG59O1xuXG4vLyBTdGFydCB0aGUgcHJlY2VkZW5jZSBwYXJzZXIuXG5cbnBwJDUucGFyc2VFeHByT3BzID0gZnVuY3Rpb24oZm9ySW5pdCwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XG4gIHZhciBleHByID0gdGhpcy5wYXJzZU1heWJlVW5hcnkocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZmFsc2UsIGZhbHNlLCBmb3JJbml0KTtcbiAgaWYgKHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpKSB7IHJldHVybiBleHByIH1cbiAgcmV0dXJuIGV4cHIuc3RhcnQgPT09IHN0YXJ0UG9zICYmIGV4cHIudHlwZSA9PT0gXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiID8gZXhwciA6IHRoaXMucGFyc2VFeHByT3AoZXhwciwgc3RhcnRQb3MsIHN0YXJ0TG9jLCAtMSwgZm9ySW5pdClcbn07XG5cbi8vIFBhcnNlIGJpbmFyeSBvcGVyYXRvcnMgd2l0aCB0aGUgb3BlcmF0b3IgcHJlY2VkZW5jZSBwYXJzaW5nXG4vLyBhbGdvcml0aG0uIGBsZWZ0YCBpcyB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIG9wZXJhdG9yLlxuLy8gYG1pblByZWNgIHByb3ZpZGVzIGNvbnRleHQgdGhhdCBhbGxvd3MgdGhlIGZ1bmN0aW9uIHRvIHN0b3AgYW5kXG4vLyBkZWZlciBmdXJ0aGVyIHBhcnNlciB0byBvbmUgb2YgaXRzIGNhbGxlcnMgd2hlbiBpdCBlbmNvdW50ZXJzIGFuXG4vLyBvcGVyYXRvciB0aGF0IGhhcyBhIGxvd2VyIHByZWNlZGVuY2UgdGhhbiB0aGUgc2V0IGl0IGlzIHBhcnNpbmcuXG5cbnBwJDUucGFyc2VFeHByT3AgPSBmdW5jdGlvbihsZWZ0LCBsZWZ0U3RhcnRQb3MsIGxlZnRTdGFydExvYywgbWluUHJlYywgZm9ySW5pdCkge1xuICB2YXIgcHJlYyA9IHRoaXMudHlwZS5iaW5vcDtcbiAgaWYgKHByZWMgIT0gbnVsbCAmJiAoIWZvckluaXQgfHwgdGhpcy50eXBlICE9PSB0eXBlcyQxLl9pbikpIHtcbiAgICBpZiAocHJlYyA+IG1pblByZWMpIHtcbiAgICAgIHZhciBsb2dpY2FsID0gdGhpcy50eXBlID09PSB0eXBlcyQxLmxvZ2ljYWxPUiB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEubG9naWNhbEFORDtcbiAgICAgIHZhciBjb2FsZXNjZSA9IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5jb2FsZXNjZTtcbiAgICAgIGlmIChjb2FsZXNjZSkge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIHByZWNlZGVuY2Ugb2YgYHR0LmNvYWxlc2NlYCBhcyBlcXVhbCB0byB0aGUgcmFuZ2Ugb2YgbG9naWNhbCBleHByZXNzaW9ucy5cbiAgICAgICAgLy8gSW4gb3RoZXIgd29yZHMsIGBub2RlLnJpZ2h0YCBzaG91bGRuJ3QgY29udGFpbiBsb2dpY2FsIGV4cHJlc3Npb25zIGluIG9yZGVyIHRvIGNoZWNrIHRoZSBtaXhlZCBlcnJvci5cbiAgICAgICAgcHJlYyA9IHR5cGVzJDEubG9naWNhbEFORC5iaW5vcDtcbiAgICAgIH1cbiAgICAgIHZhciBvcCA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIHZhciBzdGFydFBvcyA9IHRoaXMuc3RhcnQsIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcbiAgICAgIHZhciByaWdodCA9IHRoaXMucGFyc2VFeHByT3AodGhpcy5wYXJzZU1heWJlVW5hcnkobnVsbCwgZmFsc2UsIGZhbHNlLCBmb3JJbml0KSwgc3RhcnRQb3MsIHN0YXJ0TG9jLCBwcmVjLCBmb3JJbml0KTtcbiAgICAgIHZhciBub2RlID0gdGhpcy5idWlsZEJpbmFyeShsZWZ0U3RhcnRQb3MsIGxlZnRTdGFydExvYywgbGVmdCwgcmlnaHQsIG9wLCBsb2dpY2FsIHx8IGNvYWxlc2NlKTtcbiAgICAgIGlmICgobG9naWNhbCAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29hbGVzY2UpIHx8IChjb2FsZXNjZSAmJiAodGhpcy50eXBlID09PSB0eXBlcyQxLmxvZ2ljYWxPUiB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEubG9naWNhbEFORCkpKSB7XG4gICAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LCBcIkxvZ2ljYWwgZXhwcmVzc2lvbnMgYW5kIGNvYWxlc2NlIGV4cHJlc3Npb25zIGNhbm5vdCBiZSBtaXhlZC4gV3JhcCBlaXRoZXIgYnkgcGFyZW50aGVzZXNcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUV4cHJPcChub2RlLCBsZWZ0U3RhcnRQb3MsIGxlZnRTdGFydExvYywgbWluUHJlYywgZm9ySW5pdClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxlZnRcbn07XG5cbnBwJDUuYnVpbGRCaW5hcnkgPSBmdW5jdGlvbihzdGFydFBvcywgc3RhcnRMb2MsIGxlZnQsIHJpZ2h0LCBvcCwgbG9naWNhbCkge1xuICBpZiAocmlnaHQudHlwZSA9PT0gXCJQcml2YXRlSWRlbnRpZmllclwiKSB7IHRoaXMucmFpc2UocmlnaHQuc3RhcnQsIFwiUHJpdmF0ZSBpZGVudGlmaWVyIGNhbiBvbmx5IGJlIGxlZnQgc2lkZSBvZiBiaW5hcnkgZXhwcmVzc2lvblwiKTsgfVxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcbiAgbm9kZS5sZWZ0ID0gbGVmdDtcbiAgbm9kZS5vcGVyYXRvciA9IG9wO1xuICBub2RlLnJpZ2h0ID0gcmlnaHQ7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgbG9naWNhbCA/IFwiTG9naWNhbEV4cHJlc3Npb25cIiA6IFwiQmluYXJ5RXhwcmVzc2lvblwiKVxufTtcblxuLy8gUGFyc2UgdW5hcnkgb3BlcmF0b3JzLCBib3RoIHByZWZpeCBhbmQgcG9zdGZpeC5cblxucHAkNS5wYXJzZU1heWJlVW5hcnkgPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBzYXdVbmFyeSwgaW5jRGVjLCBmb3JJbml0KSB7XG4gIHZhciBzdGFydFBvcyA9IHRoaXMuc3RhcnQsIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYywgZXhwcjtcbiAgaWYgKHRoaXMuaXNDb250ZXh0dWFsKFwiYXdhaXRcIikgJiYgdGhpcy5jYW5Bd2FpdCkge1xuICAgIGV4cHIgPSB0aGlzLnBhcnNlQXdhaXQoZm9ySW5pdCk7XG4gICAgc2F3VW5hcnkgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMudHlwZS5wcmVmaXgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCksIHVwZGF0ZSA9IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5pbmNEZWM7XG4gICAgbm9kZS5vcGVyYXRvciA9IHRoaXMudmFsdWU7XG4gICAgbm9kZS5wcmVmaXggPSB0cnVlO1xuICAgIHRoaXMubmV4dCgpO1xuICAgIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCB0cnVlLCB1cGRhdGUsIGZvckluaXQpO1xuICAgIHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIHRydWUpO1xuICAgIGlmICh1cGRhdGUpIHsgdGhpcy5jaGVja0xWYWxTaW1wbGUobm9kZS5hcmd1bWVudCk7IH1cbiAgICBlbHNlIGlmICh0aGlzLnN0cmljdCAmJiBub2RlLm9wZXJhdG9yID09PSBcImRlbGV0ZVwiICYmXG4gICAgICAgICAgICAgbm9kZS5hcmd1bWVudC50eXBlID09PSBcIklkZW50aWZpZXJcIilcbiAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiRGVsZXRpbmcgbG9jYWwgdmFyaWFibGUgaW4gc3RyaWN0IG1vZGVcIik7IH1cbiAgICBlbHNlIGlmIChub2RlLm9wZXJhdG9yID09PSBcImRlbGV0ZVwiICYmIGlzUHJpdmF0ZUZpZWxkQWNjZXNzKG5vZGUuYXJndW1lbnQpKVxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUobm9kZS5zdGFydCwgXCJQcml2YXRlIGZpZWxkcyBjYW4gbm90IGJlIGRlbGV0ZWRcIik7IH1cbiAgICBlbHNlIHsgc2F3VW5hcnkgPSB0cnVlOyB9XG4gICAgZXhwciA9IHRoaXMuZmluaXNoTm9kZShub2RlLCB1cGRhdGUgPyBcIlVwZGF0ZUV4cHJlc3Npb25cIiA6IFwiVW5hcnlFeHByZXNzaW9uXCIpO1xuICB9IGVsc2UgaWYgKCFzYXdVbmFyeSAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEucHJpdmF0ZUlkKSB7XG4gICAgaWYgKChmb3JJbml0IHx8IHRoaXMucHJpdmF0ZU5hbWVTdGFjay5sZW5ndGggPT09IDApICYmIHRoaXMub3B0aW9ucy5jaGVja1ByaXZhdGVGaWVsZHMpIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbiAgICBleHByID0gdGhpcy5wYXJzZVByaXZhdGVJZGVudCgpO1xuICAgIC8vIG9ubHkgY291bGQgYmUgcHJpdmF0ZSBmaWVsZHMgaW4gJ2luJywgc3VjaCBhcyAjeCBpbiBvYmpcbiAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlcyQxLl9pbikgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICB9IGVsc2Uge1xuICAgIGV4cHIgPSB0aGlzLnBhcnNlRXhwclN1YnNjcmlwdHMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZm9ySW5pdCk7XG4gICAgaWYgKHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpKSB7IHJldHVybiBleHByIH1cbiAgICB3aGlsZSAodGhpcy50eXBlLnBvc3RmaXggJiYgIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkpIHtcbiAgICAgIHZhciBub2RlJDEgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XG4gICAgICBub2RlJDEub3BlcmF0b3IgPSB0aGlzLnZhbHVlO1xuICAgICAgbm9kZSQxLnByZWZpeCA9IGZhbHNlO1xuICAgICAgbm9kZSQxLmFyZ3VtZW50ID0gZXhwcjtcbiAgICAgIHRoaXMuY2hlY2tMVmFsU2ltcGxlKGV4cHIpO1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICBleHByID0gdGhpcy5maW5pc2hOb2RlKG5vZGUkMSwgXCJVcGRhdGVFeHByZXNzaW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaW5jRGVjICYmIHRoaXMuZWF0KHR5cGVzJDEuc3RhcnN0YXIpKSB7XG4gICAgaWYgKHNhd1VuYXJ5KVxuICAgICAgeyB0aGlzLnVuZXhwZWN0ZWQodGhpcy5sYXN0VG9rU3RhcnQpOyB9XG4gICAgZWxzZVxuICAgICAgeyByZXR1cm4gdGhpcy5idWlsZEJpbmFyeShzdGFydFBvcywgc3RhcnRMb2MsIGV4cHIsIHRoaXMucGFyc2VNYXliZVVuYXJ5KG51bGwsIGZhbHNlLCBmYWxzZSwgZm9ySW5pdCksIFwiKipcIiwgZmFsc2UpIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhwclxuICB9XG59O1xuXG5mdW5jdGlvbiBpc1ByaXZhdGVGaWVsZEFjY2Vzcyhub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50eXBlID09PSBcIk1lbWJlckV4cHJlc3Npb25cIiAmJiBub2RlLnByb3BlcnR5LnR5cGUgPT09IFwiUHJpdmF0ZUlkZW50aWZpZXJcIiB8fFxuICAgIG5vZGUudHlwZSA9PT0gXCJDaGFpbkV4cHJlc3Npb25cIiAmJiBpc1ByaXZhdGVGaWVsZEFjY2Vzcyhub2RlLmV4cHJlc3Npb24pXG4gIClcbn1cblxuLy8gUGFyc2UgY2FsbCwgZG90LCBhbmQgYFtdYC1zdWJzY3JpcHQgZXhwcmVzc2lvbnMuXG5cbnBwJDUucGFyc2VFeHByU3Vic2NyaXB0cyA9IGZ1bmN0aW9uKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIGZvckluaXQpIHtcbiAgdmFyIHN0YXJ0UG9zID0gdGhpcy5zdGFydCwgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jO1xuICB2YXIgZXhwciA9IHRoaXMucGFyc2VFeHByQXRvbShyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBmb3JJbml0KTtcbiAgaWYgKGV4cHIudHlwZSA9PT0gXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiICYmIHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rU3RhcnQsIHRoaXMubGFzdFRva0VuZCkgIT09IFwiKVwiKVxuICAgIHsgcmV0dXJuIGV4cHIgfVxuICB2YXIgcmVzdWx0ID0gdGhpcy5wYXJzZVN1YnNjcmlwdHMoZXhwciwgc3RhcnRQb3MsIHN0YXJ0TG9jLCBmYWxzZSwgZm9ySW5pdCk7XG4gIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzICYmIHJlc3VsdC50eXBlID09PSBcIk1lbWJlckV4cHJlc3Npb25cIikge1xuICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ24gPj0gcmVzdWx0LnN0YXJ0KSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEFzc2lnbiA9IC0xOyB9XG4gICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEJpbmQgPj0gcmVzdWx0LnN0YXJ0KSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEJpbmQgPSAtMTsgfVxuICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPj0gcmVzdWx0LnN0YXJ0KSB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMudHJhaWxpbmdDb21tYSA9IC0xOyB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufTtcblxucHAkNS5wYXJzZVN1YnNjcmlwdHMgPSBmdW5jdGlvbihiYXNlLCBzdGFydFBvcywgc3RhcnRMb2MsIG5vQ2FsbHMsIGZvckluaXQpIHtcbiAgdmFyIG1heWJlQXN5bmNBcnJvdyA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4ICYmIGJhc2UudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgJiYgYmFzZS5uYW1lID09PSBcImFzeW5jXCIgJiZcbiAgICAgIHRoaXMubGFzdFRva0VuZCA9PT0gYmFzZS5lbmQgJiYgIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkgJiYgYmFzZS5lbmQgLSBiYXNlLnN0YXJ0ID09PSA1ICYmXG4gICAgICB0aGlzLnBvdGVudGlhbEFycm93QXQgPT09IGJhc2Uuc3RhcnQ7XG4gIHZhciBvcHRpb25hbENoYWluZWQgPSBmYWxzZTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wYXJzZVN1YnNjcmlwdChiYXNlLCBzdGFydFBvcywgc3RhcnRMb2MsIG5vQ2FsbHMsIG1heWJlQXN5bmNBcnJvdywgb3B0aW9uYWxDaGFpbmVkLCBmb3JJbml0KTtcblxuICAgIGlmIChlbGVtZW50Lm9wdGlvbmFsKSB7IG9wdGlvbmFsQ2hhaW5lZCA9IHRydWU7IH1cbiAgICBpZiAoZWxlbWVudCA9PT0gYmFzZSB8fCBlbGVtZW50LnR5cGUgPT09IFwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIikge1xuICAgICAgaWYgKG9wdGlvbmFsQ2hhaW5lZCkge1xuICAgICAgICB2YXIgY2hhaW5Ob2RlID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xuICAgICAgICBjaGFpbk5vZGUuZXhwcmVzc2lvbiA9IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmZpbmlzaE5vZGUoY2hhaW5Ob2RlLCBcIkNoYWluRXhwcmVzc2lvblwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgYmFzZSA9IGVsZW1lbnQ7XG4gIH1cbn07XG5cbnBwJDUuc2hvdWxkUGFyc2VBc3luY0Fycm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAhdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSAmJiB0aGlzLmVhdCh0eXBlcyQxLmFycm93KVxufTtcblxucHAkNS5wYXJzZVN1YnNjcmlwdEFzeW5jQXJyb3cgPSBmdW5jdGlvbihzdGFydFBvcywgc3RhcnRMb2MsIGV4cHJMaXN0LCBmb3JJbml0KSB7XG4gIHJldHVybiB0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKSwgZXhwckxpc3QsIHRydWUsIGZvckluaXQpXG59O1xuXG5wcCQ1LnBhcnNlU3Vic2NyaXB0ID0gZnVuY3Rpb24oYmFzZSwgc3RhcnRQb3MsIHN0YXJ0TG9jLCBub0NhbGxzLCBtYXliZUFzeW5jQXJyb3csIG9wdGlvbmFsQ2hhaW5lZCwgZm9ySW5pdCkge1xuICB2YXIgb3B0aW9uYWxTdXBwb3J0ZWQgPSB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTE7XG4gIHZhciBvcHRpb25hbCA9IG9wdGlvbmFsU3VwcG9ydGVkICYmIHRoaXMuZWF0KHR5cGVzJDEucXVlc3Rpb25Eb3QpO1xuICBpZiAobm9DYWxscyAmJiBvcHRpb25hbCkgeyB0aGlzLnJhaXNlKHRoaXMubGFzdFRva1N0YXJ0LCBcIk9wdGlvbmFsIGNoYWluaW5nIGNhbm5vdCBhcHBlYXIgaW4gdGhlIGNhbGxlZSBvZiBuZXcgZXhwcmVzc2lvbnNcIik7IH1cblxuICB2YXIgY29tcHV0ZWQgPSB0aGlzLmVhdCh0eXBlcyQxLmJyYWNrZXRMKTtcbiAgaWYgKGNvbXB1dGVkIHx8IChvcHRpb25hbCAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEucGFyZW5MICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5iYWNrUXVvdGUpIHx8IHRoaXMuZWF0KHR5cGVzJDEuZG90KSkge1xuICAgIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xuICAgIG5vZGUub2JqZWN0ID0gYmFzZTtcbiAgICBpZiAoY29tcHV0ZWQpIHtcbiAgICAgIG5vZGUucHJvcGVydHkgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFja2V0Uik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucHJpdmF0ZUlkICYmIGJhc2UudHlwZSAhPT0gXCJTdXBlclwiKSB7XG4gICAgICBub2RlLnByb3BlcnR5ID0gdGhpcy5wYXJzZVByaXZhdGVJZGVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnByb3BlcnR5ID0gdGhpcy5wYXJzZUlkZW50KHRoaXMub3B0aW9ucy5hbGxvd1Jlc2VydmVkICE9PSBcIm5ldmVyXCIpO1xuICAgIH1cbiAgICBub2RlLmNvbXB1dGVkID0gISFjb21wdXRlZDtcbiAgICBpZiAob3B0aW9uYWxTdXBwb3J0ZWQpIHtcbiAgICAgIG5vZGUub3B0aW9uYWwgPSBvcHRpb25hbDtcbiAgICB9XG4gICAgYmFzZSA9IHRoaXMuZmluaXNoTm9kZShub2RlLCBcIk1lbWJlckV4cHJlc3Npb25cIik7XG4gIH0gZWxzZSBpZiAoIW5vQ2FsbHMgJiYgdGhpcy5lYXQodHlwZXMkMS5wYXJlbkwpKSB7XG4gICAgdmFyIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMgPSBuZXcgRGVzdHJ1Y3R1cmluZ0Vycm9ycywgb2xkWWllbGRQb3MgPSB0aGlzLnlpZWxkUG9zLCBvbGRBd2FpdFBvcyA9IHRoaXMuYXdhaXRQb3MsIG9sZEF3YWl0SWRlbnRQb3MgPSB0aGlzLmF3YWl0SWRlbnRQb3M7XG4gICAgdGhpcy55aWVsZFBvcyA9IDA7XG4gICAgdGhpcy5hd2FpdFBvcyA9IDA7XG4gICAgdGhpcy5hd2FpdElkZW50UG9zID0gMDtcbiAgICB2YXIgZXhwckxpc3QgPSB0aGlzLnBhcnNlRXhwckxpc3QodHlwZXMkMS5wYXJlblIsIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4LCBmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gICAgaWYgKG1heWJlQXN5bmNBcnJvdyAmJiAhb3B0aW9uYWwgJiYgdGhpcy5zaG91bGRQYXJzZUFzeW5jQXJyb3coKSkge1xuICAgICAgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZmFsc2UpO1xuICAgICAgdGhpcy5jaGVja1lpZWxkQXdhaXRJbkRlZmF1bHRQYXJhbXMoKTtcbiAgICAgIGlmICh0aGlzLmF3YWl0SWRlbnRQb3MgPiAwKVxuICAgICAgICB7IHRoaXMucmFpc2UodGhpcy5hd2FpdElkZW50UG9zLCBcIkNhbm5vdCB1c2UgJ2F3YWl0JyBhcyBpZGVudGlmaWVyIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvblwiKTsgfVxuICAgICAgdGhpcy55aWVsZFBvcyA9IG9sZFlpZWxkUG9zO1xuICAgICAgdGhpcy5hd2FpdFBvcyA9IG9sZEF3YWl0UG9zO1xuICAgICAgdGhpcy5hd2FpdElkZW50UG9zID0gb2xkQXdhaXRJZGVudFBvcztcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlU3Vic2NyaXB0QXN5bmNBcnJvdyhzdGFydFBvcywgc3RhcnRMb2MsIGV4cHJMaXN0LCBmb3JJbml0KVxuICAgIH1cbiAgICB0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCB0cnVlKTtcbiAgICB0aGlzLnlpZWxkUG9zID0gb2xkWWllbGRQb3MgfHwgdGhpcy55aWVsZFBvcztcbiAgICB0aGlzLmF3YWl0UG9zID0gb2xkQXdhaXRQb3MgfHwgdGhpcy5hd2FpdFBvcztcbiAgICB0aGlzLmF3YWl0SWRlbnRQb3MgPSBvbGRBd2FpdElkZW50UG9zIHx8IHRoaXMuYXdhaXRJZGVudFBvcztcbiAgICB2YXIgbm9kZSQxID0gdGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpO1xuICAgIG5vZGUkMS5jYWxsZWUgPSBiYXNlO1xuICAgIG5vZGUkMS5hcmd1bWVudHMgPSBleHByTGlzdDtcbiAgICBpZiAob3B0aW9uYWxTdXBwb3J0ZWQpIHtcbiAgICAgIG5vZGUkMS5vcHRpb25hbCA9IG9wdGlvbmFsO1xuICAgIH1cbiAgICBiYXNlID0gdGhpcy5maW5pc2hOb2RlKG5vZGUkMSwgXCJDYWxsRXhwcmVzc2lvblwiKTtcbiAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuYmFja1F1b3RlKSB7XG4gICAgaWYgKG9wdGlvbmFsIHx8IG9wdGlvbmFsQ2hhaW5lZCkge1xuICAgICAgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIk9wdGlvbmFsIGNoYWluaW5nIGNhbm5vdCBhcHBlYXIgaW4gdGhlIHRhZyBvZiB0YWdnZWQgdGVtcGxhdGUgZXhwcmVzc2lvbnNcIik7XG4gICAgfVxuICAgIHZhciBub2RlJDIgPSB0aGlzLnN0YXJ0Tm9kZUF0KHN0YXJ0UG9zLCBzdGFydExvYyk7XG4gICAgbm9kZSQyLnRhZyA9IGJhc2U7XG4gICAgbm9kZSQyLnF1YXNpID0gdGhpcy5wYXJzZVRlbXBsYXRlKHtpc1RhZ2dlZDogdHJ1ZX0pO1xuICAgIGJhc2UgPSB0aGlzLmZpbmlzaE5vZGUobm9kZSQyLCBcIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiKTtcbiAgfVxuICByZXR1cm4gYmFzZVxufTtcblxuLy8gUGFyc2UgYW4gYXRvbWljIGV4cHJlc3Npb24gXHUyMDE0IGVpdGhlciBhIHNpbmdsZSB0b2tlbiB0aGF0IGlzIGFuXG4vLyBleHByZXNzaW9uLCBhbiBleHByZXNzaW9uIHN0YXJ0ZWQgYnkgYSBrZXl3b3JkIGxpa2UgYGZ1bmN0aW9uYCBvclxuLy8gYG5ld2AsIG9yIGFuIGV4cHJlc3Npb24gd3JhcHBlZCBpbiBwdW5jdHVhdGlvbiBsaWtlIGAoKWAsIGBbXWAsXG4vLyBvciBge31gLlxuXG5wcCQ1LnBhcnNlRXhwckF0b20gPSBmdW5jdGlvbihyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCBmb3JJbml0LCBmb3JOZXcpIHtcbiAgLy8gSWYgYSBkaXZpc2lvbiBvcGVyYXRvciBhcHBlYXJzIGluIGFuIGV4cHJlc3Npb24gcG9zaXRpb24sIHRoZVxuICAvLyB0b2tlbml6ZXIgZ290IGNvbmZ1c2VkLCBhbmQgd2UgZm9yY2UgaXQgdG8gcmVhZCBhIHJlZ2V4cCBpbnN0ZWFkLlxuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnNsYXNoKSB7IHRoaXMucmVhZFJlZ2V4cCgpOyB9XG5cbiAgdmFyIG5vZGUsIGNhbkJlQXJyb3cgPSB0aGlzLnBvdGVudGlhbEFycm93QXQgPT09IHRoaXMuc3RhcnQ7XG4gIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gIGNhc2UgdHlwZXMkMS5fc3VwZXI6XG4gICAgaWYgKCF0aGlzLmFsbG93U3VwZXIpXG4gICAgICB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCInc3VwZXInIGtleXdvcmQgb3V0c2lkZSBhIG1ldGhvZFwiKTsgfVxuICAgIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xuICAgIHRoaXMubmV4dCgpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEucGFyZW5MICYmICF0aGlzLmFsbG93RGlyZWN0U3VwZXIpXG4gICAgICB7IHRoaXMucmFpc2Uobm9kZS5zdGFydCwgXCJzdXBlcigpIGNhbGwgb3V0c2lkZSBjb25zdHJ1Y3RvciBvZiBhIHN1YmNsYXNzXCIpOyB9XG4gICAgLy8gVGhlIGBzdXBlcmAga2V5d29yZCBjYW4gYXBwZWFyIGF0IGJlbG93OlxuICAgIC8vIFN1cGVyUHJvcGVydHk6XG4gICAgLy8gICAgIHN1cGVyIFsgRXhwcmVzc2lvbiBdXG4gICAgLy8gICAgIHN1cGVyIC4gSWRlbnRpZmllck5hbWVcbiAgICAvLyBTdXBlckNhbGw6XG4gICAgLy8gICAgIHN1cGVyICggQXJndW1lbnRzIClcbiAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlcyQxLmRvdCAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2tldEwgJiYgdGhpcy50eXBlICE9PSB0eXBlcyQxLnBhcmVuTClcbiAgICAgIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiU3VwZXJcIilcblxuICBjYXNlIHR5cGVzJDEuX3RoaXM6XG4gICAgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlRoaXNFeHByZXNzaW9uXCIpXG5cbiAgY2FzZSB0eXBlcyQxLm5hbWU6XG4gICAgdmFyIHN0YXJ0UG9zID0gdGhpcy5zdGFydCwgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jLCBjb250YWluc0VzYyA9IHRoaXMuY29udGFpbnNFc2M7XG4gICAgdmFyIGlkID0gdGhpcy5wYXJzZUlkZW50KGZhbHNlKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDggJiYgIWNvbnRhaW5zRXNjICYmIGlkLm5hbWUgPT09IFwiYXN5bmNcIiAmJiAhdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSAmJiB0aGlzLmVhdCh0eXBlcyQxLl9mdW5jdGlvbikpIHtcbiAgICAgIHRoaXMub3ZlcnJpZGVDb250ZXh0KHR5cGVzLmZfZXhwcik7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKSwgMCwgZmFsc2UsIHRydWUsIGZvckluaXQpXG4gICAgfVxuICAgIGlmIChjYW5CZUFycm93ICYmICF0aGlzLmNhbkluc2VydFNlbWljb2xvbigpKSB7XG4gICAgICBpZiAodGhpcy5lYXQodHlwZXMkMS5hcnJvdykpXG4gICAgICAgIHsgcmV0dXJuIHRoaXMucGFyc2VBcnJvd0V4cHJlc3Npb24odGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpLCBbaWRdLCBmYWxzZSwgZm9ySW5pdCkgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4ICYmIGlkLm5hbWUgPT09IFwiYXN5bmNcIiAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSAmJiAhY29udGFpbnNFc2MgJiZcbiAgICAgICAgICAoIXRoaXMucG90ZW50aWFsQXJyb3dJbkZvckF3YWl0IHx8IHRoaXMudmFsdWUgIT09IFwib2ZcIiB8fCB0aGlzLmNvbnRhaW5zRXNjKSkge1xuICAgICAgICBpZCA9IHRoaXMucGFyc2VJZGVudChmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmNhbkluc2VydFNlbWljb2xvbigpIHx8ICF0aGlzLmVhdCh0eXBlcyQxLmFycm93KSlcbiAgICAgICAgICB7IHRoaXMudW5leHBlY3RlZCgpOyB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKSwgW2lkXSwgdHJ1ZSwgZm9ySW5pdClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkXG5cbiAgY2FzZSB0eXBlcyQxLnJlZ2V4cDpcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIG5vZGUgPSB0aGlzLnBhcnNlTGl0ZXJhbCh2YWx1ZS52YWx1ZSk7XG4gICAgbm9kZS5yZWdleCA9IHtwYXR0ZXJuOiB2YWx1ZS5wYXR0ZXJuLCBmbGFnczogdmFsdWUuZmxhZ3N9O1xuICAgIHJldHVybiBub2RlXG5cbiAgY2FzZSB0eXBlcyQxLm51bTogY2FzZSB0eXBlcyQxLnN0cmluZzpcbiAgICByZXR1cm4gdGhpcy5wYXJzZUxpdGVyYWwodGhpcy52YWx1ZSlcblxuICBjYXNlIHR5cGVzJDEuX251bGw6IGNhc2UgdHlwZXMkMS5fdHJ1ZTogY2FzZSB0eXBlcyQxLl9mYWxzZTpcbiAgICBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgICBub2RlLnZhbHVlID0gdGhpcy50eXBlID09PSB0eXBlcyQxLl9udWxsID8gbnVsbCA6IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5fdHJ1ZTtcbiAgICBub2RlLnJhdyA9IHRoaXMudHlwZS5rZXl3b3JkO1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJMaXRlcmFsXCIpXG5cbiAgY2FzZSB0eXBlcyQxLnBhcmVuTDpcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0LCBleHByID0gdGhpcy5wYXJzZVBhcmVuQW5kRGlzdGluZ3Vpc2hFeHByZXNzaW9uKGNhbkJlQXJyb3csIGZvckluaXQpO1xuICAgIGlmIChyZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gICAgICBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy5wYXJlbnRoZXNpemVkQXNzaWduIDwgMCAmJiAhdGhpcy5pc1NpbXBsZUFzc2lnblRhcmdldChleHByKSlcbiAgICAgICAgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnBhcmVudGhlc2l6ZWRBc3NpZ24gPSBzdGFydDsgfVxuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEJpbmQgPCAwKVxuICAgICAgICB7IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMucGFyZW50aGVzaXplZEJpbmQgPSBzdGFydDsgfVxuICAgIH1cbiAgICByZXR1cm4gZXhwclxuXG4gIGNhc2UgdHlwZXMkMS5icmFja2V0TDpcbiAgICBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgICB0aGlzLm5leHQoKTtcbiAgICBub2RlLmVsZW1lbnRzID0gdGhpcy5wYXJzZUV4cHJMaXN0KHR5cGVzJDEuYnJhY2tldFIsIHRydWUsIHRydWUsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xuICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJBcnJheUV4cHJlc3Npb25cIilcblxuICBjYXNlIHR5cGVzJDEuYnJhY2VMOlxuICAgIHRoaXMub3ZlcnJpZGVDb250ZXh0KHR5cGVzLmJfZXhwcik7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VPYmooZmFsc2UsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpXG5cbiAgY2FzZSB0eXBlcyQxLl9mdW5jdGlvbjpcbiAgICBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgICB0aGlzLm5leHQoKTtcbiAgICByZXR1cm4gdGhpcy5wYXJzZUZ1bmN0aW9uKG5vZGUsIDApXG5cbiAgY2FzZSB0eXBlcyQxLl9jbGFzczpcbiAgICByZXR1cm4gdGhpcy5wYXJzZUNsYXNzKHRoaXMuc3RhcnROb2RlKCksIGZhbHNlKVxuXG4gIGNhc2UgdHlwZXMkMS5fbmV3OlxuICAgIHJldHVybiB0aGlzLnBhcnNlTmV3KClcblxuICBjYXNlIHR5cGVzJDEuYmFja1F1b3RlOlxuICAgIHJldHVybiB0aGlzLnBhcnNlVGVtcGxhdGUoKVxuXG4gIGNhc2UgdHlwZXMkMS5faW1wb3J0OlxuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTEpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlRXhwckltcG9ydChmb3JOZXcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnVuZXhwZWN0ZWQoKVxuICAgIH1cblxuICBkZWZhdWx0OlxuICAgIHJldHVybiB0aGlzLnBhcnNlRXhwckF0b21EZWZhdWx0KClcbiAgfVxufTtcblxucHAkNS5wYXJzZUV4cHJBdG9tRGVmYXVsdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnVuZXhwZWN0ZWQoKTtcbn07XG5cbnBwJDUucGFyc2VFeHBySW1wb3J0ID0gZnVuY3Rpb24oZm9yTmV3KSB7XG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcblxuICAvLyBDb25zdW1lIGBpbXBvcnRgIGFzIGFuIGlkZW50aWZpZXIgZm9yIGBpbXBvcnQubWV0YWAuXG4gIC8vIEJlY2F1c2UgYHRoaXMucGFyc2VJZGVudCh0cnVlKWAgZG9lc24ndCBjaGVjayBlc2NhcGUgc2VxdWVuY2VzLCBpdCBuZWVkcyB0aGUgY2hlY2sgb2YgYHRoaXMuY29udGFpbnNFc2NgLlxuICBpZiAodGhpcy5jb250YWluc0VzYykgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCwgXCJFc2NhcGUgc2VxdWVuY2UgaW4ga2V5d29yZCBpbXBvcnRcIik7IH1cbiAgdmFyIG1ldGEgPSB0aGlzLnBhcnNlSWRlbnQodHJ1ZSk7XG5cbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5wYXJlbkwgJiYgIWZvck5ldykge1xuICAgIHJldHVybiB0aGlzLnBhcnNlRHluYW1pY0ltcG9ydChub2RlKVxuICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5kb3QpIHtcbiAgICBub2RlLm1ldGEgPSBtZXRhO1xuICAgIHJldHVybiB0aGlzLnBhcnNlSW1wb3J0TWV0YShub2RlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMudW5leHBlY3RlZCgpO1xuICB9XG59O1xuXG5wcCQ1LnBhcnNlRHluYW1pY0ltcG9ydCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgdGhpcy5uZXh0KCk7IC8vIHNraXAgYChgXG5cbiAgLy8gUGFyc2Ugbm9kZS5zb3VyY2UuXG4gIG5vZGUuc291cmNlID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKCk7XG5cbiAgLy8gVmVyaWZ5IGVuZGluZy5cbiAgaWYgKCF0aGlzLmVhdCh0eXBlcyQxLnBhcmVuUikpIHtcbiAgICB2YXIgZXJyb3JQb3MgPSB0aGlzLnN0YXJ0O1xuICAgIGlmICh0aGlzLmVhdCh0eXBlcyQxLmNvbW1hKSAmJiB0aGlzLmVhdCh0eXBlcyQxLnBhcmVuUikpIHtcbiAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZShlcnJvclBvcywgXCJUcmFpbGluZyBjb21tYSBpcyBub3QgYWxsb3dlZCBpbiBpbXBvcnQoKVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bmV4cGVjdGVkKGVycm9yUG9zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSW1wb3J0RXhwcmVzc2lvblwiKVxufTtcblxucHAkNS5wYXJzZUltcG9ydE1ldGEgPSBmdW5jdGlvbihub2RlKSB7XG4gIHRoaXMubmV4dCgpOyAvLyBza2lwIGAuYFxuXG4gIHZhciBjb250YWluc0VzYyA9IHRoaXMuY29udGFpbnNFc2M7XG4gIG5vZGUucHJvcGVydHkgPSB0aGlzLnBhcnNlSWRlbnQodHJ1ZSk7XG5cbiAgaWYgKG5vZGUucHJvcGVydHkubmFtZSAhPT0gXCJtZXRhXCIpXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUobm9kZS5wcm9wZXJ0eS5zdGFydCwgXCJUaGUgb25seSB2YWxpZCBtZXRhIHByb3BlcnR5IGZvciBpbXBvcnQgaXMgJ2ltcG9ydC5tZXRhJ1wiKTsgfVxuICBpZiAoY29udGFpbnNFc2MpXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUobm9kZS5zdGFydCwgXCInaW1wb3J0Lm1ldGEnIG11c3Qgbm90IGNvbnRhaW4gZXNjYXBlZCBjaGFyYWN0ZXJzXCIpOyB9XG4gIGlmICh0aGlzLm9wdGlvbnMuc291cmNlVHlwZSAhPT0gXCJtb2R1bGVcIiAmJiAhdGhpcy5vcHRpb25zLmFsbG93SW1wb3J0RXhwb3J0RXZlcnl3aGVyZSlcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIkNhbm5vdCB1c2UgJ2ltcG9ydC5tZXRhJyBvdXRzaWRlIGEgbW9kdWxlXCIpOyB9XG5cbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIk1ldGFQcm9wZXJ0eVwiKVxufTtcblxucHAkNS5wYXJzZUxpdGVyYWwgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgbm9kZS5yYXcgPSB0aGlzLmlucHV0LnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcbiAgaWYgKG5vZGUucmF3LmNoYXJDb2RlQXQobm9kZS5yYXcubGVuZ3RoIC0gMSkgPT09IDExMCkgeyBub2RlLmJpZ2ludCA9IG5vZGUucmF3LnNsaWNlKDAsIC0xKS5yZXBsYWNlKC9fL2csIFwiXCIpOyB9XG4gIHRoaXMubmV4dCgpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiTGl0ZXJhbFwiKVxufTtcblxucHAkNS5wYXJzZVBhcmVuRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmV4cGVjdCh0eXBlcyQxLnBhcmVuTCk7XG4gIHZhciB2YWwgPSB0aGlzLnBhcnNlRXhwcmVzc2lvbigpO1xuICB0aGlzLmV4cGVjdCh0eXBlcyQxLnBhcmVuUik7XG4gIHJldHVybiB2YWxcbn07XG5cbnBwJDUuc2hvdWxkUGFyc2VBcnJvdyA9IGZ1bmN0aW9uKGV4cHJMaXN0KSB7XG4gIHJldHVybiAhdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKVxufTtcblxucHAkNS5wYXJzZVBhcmVuQW5kRGlzdGluZ3Vpc2hFeHByZXNzaW9uID0gZnVuY3Rpb24oY2FuQmVBcnJvdywgZm9ySW5pdCkge1xuICB2YXIgc3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBzdGFydExvYyA9IHRoaXMuc3RhcnRMb2MsIHZhbCwgYWxsb3dUcmFpbGluZ0NvbW1hID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDg7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikge1xuICAgIHRoaXMubmV4dCgpO1xuXG4gICAgdmFyIGlubmVyU3RhcnRQb3MgPSB0aGlzLnN0YXJ0LCBpbm5lclN0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcbiAgICB2YXIgZXhwckxpc3QgPSBbXSwgZmlyc3QgPSB0cnVlLCBsYXN0SXNDb21tYSA9IGZhbHNlO1xuICAgIHZhciByZWZEZXN0cnVjdHVyaW5nRXJyb3JzID0gbmV3IERlc3RydWN0dXJpbmdFcnJvcnMsIG9sZFlpZWxkUG9zID0gdGhpcy55aWVsZFBvcywgb2xkQXdhaXRQb3MgPSB0aGlzLmF3YWl0UG9zLCBzcHJlYWRTdGFydDtcbiAgICB0aGlzLnlpZWxkUG9zID0gMDtcbiAgICB0aGlzLmF3YWl0UG9zID0gMDtcbiAgICAvLyBEbyBub3Qgc2F2ZSBhd2FpdElkZW50UG9zIHRvIGFsbG93IGNoZWNraW5nIGF3YWl0cyBuZXN0ZWQgaW4gcGFyYW1ldGVyc1xuICAgIHdoaWxlICh0aGlzLnR5cGUgIT09IHR5cGVzJDEucGFyZW5SKSB7XG4gICAgICBmaXJzdCA/IGZpcnN0ID0gZmFsc2UgOiB0aGlzLmV4cGVjdCh0eXBlcyQxLmNvbW1hKTtcbiAgICAgIGlmIChhbGxvd1RyYWlsaW5nQ29tbWEgJiYgdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEodHlwZXMkMS5wYXJlblIsIHRydWUpKSB7XG4gICAgICAgIGxhc3RJc0NvbW1hID0gdHJ1ZTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmVsbGlwc2lzKSB7XG4gICAgICAgIHNwcmVhZFN0YXJ0ID0gdGhpcy5zdGFydDtcbiAgICAgICAgZXhwckxpc3QucHVzaCh0aGlzLnBhcnNlUGFyZW5JdGVtKHRoaXMucGFyc2VSZXN0QmluZGluZygpKSk7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEpIHtcbiAgICAgICAgICB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoXG4gICAgICAgICAgICB0aGlzLnN0YXJ0LFxuICAgICAgICAgICAgXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cHJMaXN0LnB1c2godGhpcy5wYXJzZU1heWJlQXNzaWduKGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCB0aGlzLnBhcnNlUGFyZW5JdGVtKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBpbm5lckVuZFBvcyA9IHRoaXMubGFzdFRva0VuZCwgaW5uZXJFbmRMb2MgPSB0aGlzLmxhc3RUb2tFbmRMb2M7XG4gICAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlblIpO1xuXG4gICAgaWYgKGNhbkJlQXJyb3cgJiYgdGhpcy5zaG91bGRQYXJzZUFycm93KGV4cHJMaXN0KSAmJiB0aGlzLmVhdCh0eXBlcyQxLmFycm93KSkge1xuICAgICAgdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgZmFsc2UpO1xuICAgICAgdGhpcy5jaGVja1lpZWxkQXdhaXRJbkRlZmF1bHRQYXJhbXMoKTtcbiAgICAgIHRoaXMueWllbGRQb3MgPSBvbGRZaWVsZFBvcztcbiAgICAgIHRoaXMuYXdhaXRQb3MgPSBvbGRBd2FpdFBvcztcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlUGFyZW5BcnJvd0xpc3Qoc3RhcnRQb3MsIHN0YXJ0TG9jLCBleHByTGlzdCwgZm9ySW5pdClcbiAgICB9XG5cbiAgICBpZiAoIWV4cHJMaXN0Lmxlbmd0aCB8fCBsYXN0SXNDb21tYSkgeyB0aGlzLnVuZXhwZWN0ZWQodGhpcy5sYXN0VG9rU3RhcnQpOyB9XG4gICAgaWYgKHNwcmVhZFN0YXJ0KSB7IHRoaXMudW5leHBlY3RlZChzcHJlYWRTdGFydCk7IH1cbiAgICB0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhyZWZEZXN0cnVjdHVyaW5nRXJyb3JzLCB0cnVlKTtcbiAgICB0aGlzLnlpZWxkUG9zID0gb2xkWWllbGRQb3MgfHwgdGhpcy55aWVsZFBvcztcbiAgICB0aGlzLmF3YWl0UG9zID0gb2xkQXdhaXRQb3MgfHwgdGhpcy5hd2FpdFBvcztcblxuICAgIGlmIChleHByTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICB2YWwgPSB0aGlzLnN0YXJ0Tm9kZUF0KGlubmVyU3RhcnRQb3MsIGlubmVyU3RhcnRMb2MpO1xuICAgICAgdmFsLmV4cHJlc3Npb25zID0gZXhwckxpc3Q7XG4gICAgICB0aGlzLmZpbmlzaE5vZGVBdCh2YWwsIFwiU2VxdWVuY2VFeHByZXNzaW9uXCIsIGlubmVyRW5kUG9zLCBpbm5lckVuZExvYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IGV4cHJMaXN0WzBdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWwgPSB0aGlzLnBhcnNlUGFyZW5FeHByZXNzaW9uKCk7XG4gIH1cblxuICBpZiAodGhpcy5vcHRpb25zLnByZXNlcnZlUGFyZW5zKSB7XG4gICAgdmFyIHBhciA9IHRoaXMuc3RhcnROb2RlQXQoc3RhcnRQb3MsIHN0YXJ0TG9jKTtcbiAgICBwYXIuZXhwcmVzc2lvbiA9IHZhbDtcbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKHBhciwgXCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWxcbiAgfVxufTtcblxucHAkNS5wYXJzZVBhcmVuSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW1cbn07XG5cbnBwJDUucGFyc2VQYXJlbkFycm93TGlzdCA9IGZ1bmN0aW9uKHN0YXJ0UG9zLCBzdGFydExvYywgZXhwckxpc3QsIGZvckluaXQpIHtcbiAgcmV0dXJuIHRoaXMucGFyc2VBcnJvd0V4cHJlc3Npb24odGhpcy5zdGFydE5vZGVBdChzdGFydFBvcywgc3RhcnRMb2MpLCBleHByTGlzdCwgZmFsc2UsIGZvckluaXQpXG59O1xuXG4vLyBOZXcncyBwcmVjZWRlbmNlIGlzIHNsaWdodGx5IHRyaWNreS4gSXQgbXVzdCBhbGxvdyBpdHMgYXJndW1lbnQgdG9cbi8vIGJlIGEgYFtdYCBvciBkb3Qgc3Vic2NyaXB0IGV4cHJlc3Npb24sIGJ1dCBub3QgYSBjYWxsIFx1MjAxNCBhdCBsZWFzdCxcbi8vIG5vdCB3aXRob3V0IHdyYXBwaW5nIGl0IGluIHBhcmVudGhlc2VzLiBUaHVzLCBpdCB1c2VzIHRoZSBub0NhbGxzXG4vLyBhcmd1bWVudCB0byBwYXJzZVN1YnNjcmlwdHMgdG8gcHJldmVudCBpdCBmcm9tIGNvbnN1bWluZyB0aGVcbi8vIGFyZ3VtZW50IGxpc3QuXG5cbnZhciBlbXB0eSA9IFtdO1xuXG5wcCQ1LnBhcnNlTmV3ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmNvbnRhaW5zRXNjKSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LCBcIkVzY2FwZSBzZXF1ZW5jZSBpbiBrZXl3b3JkIG5ld1wiKTsgfVxuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIHRoaXMubmV4dCgpO1xuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgdGhpcy50eXBlID09PSB0eXBlcyQxLmRvdCkge1xuICAgIHZhciBtZXRhID0gdGhpcy5zdGFydE5vZGVBdChub2RlLnN0YXJ0LCBub2RlLnN0YXJ0TG9jKTtcbiAgICBtZXRhLm5hbWUgPSBcIm5ld1wiO1xuICAgIG5vZGUubWV0YSA9IHRoaXMuZmluaXNoTm9kZShtZXRhLCBcIklkZW50aWZpZXJcIik7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdmFyIGNvbnRhaW5zRXNjID0gdGhpcy5jb250YWluc0VzYztcbiAgICBub2RlLnByb3BlcnR5ID0gdGhpcy5wYXJzZUlkZW50KHRydWUpO1xuICAgIGlmIChub2RlLnByb3BlcnR5Lm5hbWUgIT09IFwidGFyZ2V0XCIpXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnByb3BlcnR5LnN0YXJ0LCBcIlRoZSBvbmx5IHZhbGlkIG1ldGEgcHJvcGVydHkgZm9yIG5ldyBpcyAnbmV3LnRhcmdldCdcIik7IH1cbiAgICBpZiAoY29udGFpbnNFc2MpXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShub2RlLnN0YXJ0LCBcIiduZXcudGFyZ2V0JyBtdXN0IG5vdCBjb250YWluIGVzY2FwZWQgY2hhcmFjdGVyc1wiKTsgfVxuICAgIGlmICghdGhpcy5hbGxvd05ld0RvdFRhcmdldClcbiAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiJ25ldy50YXJnZXQnIGNhbiBvbmx5IGJlIHVzZWQgaW4gZnVuY3Rpb25zIGFuZCBjbGFzcyBzdGF0aWMgYmxvY2tcIik7IH1cbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiTWV0YVByb3BlcnR5XCIpXG4gIH1cbiAgdmFyIHN0YXJ0UG9zID0gdGhpcy5zdGFydCwgc3RhcnRMb2MgPSB0aGlzLnN0YXJ0TG9jO1xuICBub2RlLmNhbGxlZSA9IHRoaXMucGFyc2VTdWJzY3JpcHRzKHRoaXMucGFyc2VFeHByQXRvbShudWxsLCBmYWxzZSwgdHJ1ZSksIHN0YXJ0UG9zLCBzdGFydExvYywgdHJ1ZSwgZmFsc2UpO1xuICBpZiAodGhpcy5lYXQodHlwZXMkMS5wYXJlbkwpKSB7IG5vZGUuYXJndW1lbnRzID0gdGhpcy5wYXJzZUV4cHJMaXN0KHR5cGVzJDEucGFyZW5SLCB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOCwgZmFsc2UpOyB9XG4gIGVsc2UgeyBub2RlLmFyZ3VtZW50cyA9IGVtcHR5OyB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJOZXdFeHByZXNzaW9uXCIpXG59O1xuXG4vLyBQYXJzZSB0ZW1wbGF0ZSBleHByZXNzaW9uLlxuXG5wcCQ1LnBhcnNlVGVtcGxhdGVFbGVtZW50ID0gZnVuY3Rpb24ocmVmKSB7XG4gIHZhciBpc1RhZ2dlZCA9IHJlZi5pc1RhZ2dlZDtcblxuICB2YXIgZWxlbSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuaW52YWxpZFRlbXBsYXRlKSB7XG4gICAgaWYgKCFpc1RhZ2dlZCkge1xuICAgICAgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsIFwiQmFkIGVzY2FwZSBzZXF1ZW5jZSBpbiB1bnRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXCIpO1xuICAgIH1cbiAgICBlbGVtLnZhbHVlID0ge1xuICAgICAgcmF3OiB0aGlzLnZhbHVlLFxuICAgICAgY29va2VkOiBudWxsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnZhbHVlID0ge1xuICAgICAgcmF3OiB0aGlzLmlucHV0LnNsaWNlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKS5yZXBsYWNlKC9cXHJcXG4/L2csIFwiXFxuXCIpLFxuICAgICAgY29va2VkOiB0aGlzLnZhbHVlXG4gICAgfTtcbiAgfVxuICB0aGlzLm5leHQoKTtcbiAgZWxlbS50YWlsID0gdGhpcy50eXBlID09PSB0eXBlcyQxLmJhY2tRdW90ZTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShlbGVtLCBcIlRlbXBsYXRlRWxlbWVudFwiKVxufTtcblxucHAkNS5wYXJzZVRlbXBsYXRlID0gZnVuY3Rpb24ocmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGlzVGFnZ2VkID0gcmVmLmlzVGFnZ2VkOyBpZiAoIGlzVGFnZ2VkID09PSB2b2lkIDAgKSBpc1RhZ2dlZCA9IGZhbHNlO1xuXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgdGhpcy5uZXh0KCk7XG4gIG5vZGUuZXhwcmVzc2lvbnMgPSBbXTtcbiAgdmFyIGN1ckVsdCA9IHRoaXMucGFyc2VUZW1wbGF0ZUVsZW1lbnQoe2lzVGFnZ2VkOiBpc1RhZ2dlZH0pO1xuICBub2RlLnF1YXNpcyA9IFtjdXJFbHRdO1xuICB3aGlsZSAoIWN1ckVsdC50YWlsKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5lb2YpIHsgdGhpcy5yYWlzZSh0aGlzLnBvcywgXCJVbnRlcm1pbmF0ZWQgdGVtcGxhdGUgbGl0ZXJhbFwiKTsgfVxuICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuZG9sbGFyQnJhY2VMKTtcbiAgICBub2RlLmV4cHJlc3Npb25zLnB1c2godGhpcy5wYXJzZUV4cHJlc3Npb24oKSk7XG4gICAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFjZVIpO1xuICAgIG5vZGUucXVhc2lzLnB1c2goY3VyRWx0ID0gdGhpcy5wYXJzZVRlbXBsYXRlRWxlbWVudCh7aXNUYWdnZWQ6IGlzVGFnZ2VkfSkpO1xuICB9XG4gIHRoaXMubmV4dCgpO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiVGVtcGxhdGVMaXRlcmFsXCIpXG59O1xuXG5wcCQ1LmlzQXN5bmNQcm9wID0gZnVuY3Rpb24ocHJvcCkge1xuICByZXR1cm4gIXByb3AuY29tcHV0ZWQgJiYgcHJvcC5rZXkudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIgJiYgcHJvcC5rZXkubmFtZSA9PT0gXCJhc3luY1wiICYmXG4gICAgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5uYW1lIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5udW0gfHwgdGhpcy50eXBlID09PSB0eXBlcyQxLnN0cmluZyB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEuYnJhY2tldEwgfHwgdGhpcy50eXBlLmtleXdvcmQgfHwgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5ICYmIHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdGFyKSkgJiZcbiAgICAhbGluZUJyZWFrLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tFbmQsIHRoaXMuc3RhcnQpKVxufTtcblxuLy8gUGFyc2UgYW4gb2JqZWN0IGxpdGVyYWwgb3IgYmluZGluZyBwYXR0ZXJuLlxuXG5wcCQ1LnBhcnNlT2JqID0gZnVuY3Rpb24oaXNQYXR0ZXJuLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKSwgZmlyc3QgPSB0cnVlLCBwcm9wSGFzaCA9IHt9O1xuICBub2RlLnByb3BlcnRpZXMgPSBbXTtcbiAgdGhpcy5uZXh0KCk7XG4gIHdoaWxlICghdGhpcy5lYXQodHlwZXMkMS5icmFjZVIpKSB7XG4gICAgaWYgKCFmaXJzdCkge1xuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5jb21tYSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDUgJiYgdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEodHlwZXMkMS5icmFjZVIpKSB7IGJyZWFrIH1cbiAgICB9IGVsc2UgeyBmaXJzdCA9IGZhbHNlOyB9XG5cbiAgICB2YXIgcHJvcCA9IHRoaXMucGFyc2VQcm9wZXJ0eShpc1BhdHRlcm4sIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpO1xuICAgIGlmICghaXNQYXR0ZXJuKSB7IHRoaXMuY2hlY2tQcm9wQ2xhc2gocHJvcCwgcHJvcEhhc2gsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpOyB9XG4gICAgbm9kZS5wcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShub2RlLCBpc1BhdHRlcm4gPyBcIk9iamVjdFBhdHRlcm5cIiA6IFwiT2JqZWN0RXhwcmVzc2lvblwiKVxufTtcblxucHAkNS5wYXJzZVByb3BlcnR5ID0gZnVuY3Rpb24oaXNQYXR0ZXJuLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKSB7XG4gIHZhciBwcm9wID0gdGhpcy5zdGFydE5vZGUoKSwgaXNHZW5lcmF0b3IsIGlzQXN5bmMsIHN0YXJ0UG9zLCBzdGFydExvYztcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5ICYmIHRoaXMuZWF0KHR5cGVzJDEuZWxsaXBzaXMpKSB7XG4gICAgaWYgKGlzUGF0dGVybikge1xuICAgICAgcHJvcC5hcmd1bWVudCA9IHRoaXMucGFyc2VJZGVudChmYWxzZSk7XG4gICAgICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLmNvbW1hKSB7XG4gICAgICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LCBcIkNvbW1hIGlzIG5vdCBwZXJtaXR0ZWQgYWZ0ZXIgdGhlIHJlc3QgZWxlbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmZpbmlzaE5vZGUocHJvcCwgXCJSZXN0RWxlbWVudFwiKVxuICAgIH1cbiAgICAvLyBQYXJzZSBhcmd1bWVudC5cbiAgICBwcm9wLmFyZ3VtZW50ID0gdGhpcy5wYXJzZU1heWJlQXNzaWduKGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTtcbiAgICAvLyBUbyBkaXNhbGxvdyB0cmFpbGluZyBjb21tYSB2aWEgYHRoaXMudG9Bc3NpZ25hYmxlKClgLlxuICAgIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEgJiYgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyAmJiByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPCAwKSB7XG4gICAgICByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPSB0aGlzLnN0YXJ0O1xuICAgIH1cbiAgICAvLyBGaW5pc2hcbiAgICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKHByb3AsIFwiU3ByZWFkRWxlbWVudFwiKVxuICB9XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikge1xuICAgIHByb3AubWV0aG9kID0gZmFsc2U7XG4gICAgcHJvcC5zaG9ydGhhbmQgPSBmYWxzZTtcbiAgICBpZiAoaXNQYXR0ZXJuIHx8IHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcbiAgICAgIHN0YXJ0UG9zID0gdGhpcy5zdGFydDtcbiAgICAgIHN0YXJ0TG9jID0gdGhpcy5zdGFydExvYztcbiAgICB9XG4gICAgaWYgKCFpc1BhdHRlcm4pXG4gICAgICB7IGlzR2VuZXJhdG9yID0gdGhpcy5lYXQodHlwZXMkMS5zdGFyKTsgfVxuICB9XG4gIHZhciBjb250YWluc0VzYyA9IHRoaXMuY29udGFpbnNFc2M7XG4gIHRoaXMucGFyc2VQcm9wZXJ0eU5hbWUocHJvcCk7XG4gIGlmICghaXNQYXR0ZXJuICYmICFjb250YWluc0VzYyAmJiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOCAmJiAhaXNHZW5lcmF0b3IgJiYgdGhpcy5pc0FzeW5jUHJvcChwcm9wKSkge1xuICAgIGlzQXN5bmMgPSB0cnVlO1xuICAgIGlzR2VuZXJhdG9yID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkgJiYgdGhpcy5lYXQodHlwZXMkMS5zdGFyKTtcbiAgICB0aGlzLnBhcnNlUHJvcGVydHlOYW1lKHByb3ApO1xuICB9IGVsc2Uge1xuICAgIGlzQXN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBhcnNlUHJvcGVydHlWYWx1ZShwcm9wLCBpc1BhdHRlcm4sIGlzR2VuZXJhdG9yLCBpc0FzeW5jLCBzdGFydFBvcywgc3RhcnRMb2MsIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMsIGNvbnRhaW5zRXNjKTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoTm9kZShwcm9wLCBcIlByb3BlcnR5XCIpXG59O1xuXG5wcCQ1LnBhcnNlR2V0dGVyU2V0dGVyID0gZnVuY3Rpb24ocHJvcCkge1xuICBwcm9wLmtpbmQgPSBwcm9wLmtleS5uYW1lO1xuICB0aGlzLnBhcnNlUHJvcGVydHlOYW1lKHByb3ApO1xuICBwcm9wLnZhbHVlID0gdGhpcy5wYXJzZU1ldGhvZChmYWxzZSk7XG4gIHZhciBwYXJhbUNvdW50ID0gcHJvcC5raW5kID09PSBcImdldFwiID8gMCA6IDE7XG4gIGlmIChwcm9wLnZhbHVlLnBhcmFtcy5sZW5ndGggIT09IHBhcmFtQ291bnQpIHtcbiAgICB2YXIgc3RhcnQgPSBwcm9wLnZhbHVlLnN0YXJ0O1xuICAgIGlmIChwcm9wLmtpbmQgPT09IFwiZ2V0XCIpXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShzdGFydCwgXCJnZXR0ZXIgc2hvdWxkIGhhdmUgbm8gcGFyYW1zXCIpOyB9XG4gICAgZWxzZVxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoc3RhcnQsIFwic2V0dGVyIHNob3VsZCBoYXZlIGV4YWN0bHkgb25lIHBhcmFtXCIpOyB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3Aua2luZCA9PT0gXCJzZXRcIiAmJiBwcm9wLnZhbHVlLnBhcmFtc1swXS50eXBlID09PSBcIlJlc3RFbGVtZW50XCIpXG4gICAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShwcm9wLnZhbHVlLnBhcmFtc1swXS5zdGFydCwgXCJTZXR0ZXIgY2Fubm90IHVzZSByZXN0IHBhcmFtc1wiKTsgfVxuICB9XG59O1xuXG5wcCQ1LnBhcnNlUHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHByb3AsIGlzUGF0dGVybiwgaXNHZW5lcmF0b3IsIGlzQXN5bmMsIHN0YXJ0UG9zLCBzdGFydExvYywgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycywgY29udGFpbnNFc2MpIHtcbiAgaWYgKChpc0dlbmVyYXRvciB8fCBpc0FzeW5jKSAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29sb24pXG4gICAgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuXG4gIGlmICh0aGlzLmVhdCh0eXBlcyQxLmNvbG9uKSkge1xuICAgIHByb3AudmFsdWUgPSBpc1BhdHRlcm4gPyB0aGlzLnBhcnNlTWF5YmVEZWZhdWx0KHRoaXMuc3RhcnQsIHRoaXMuc3RhcnRMb2MpIDogdGhpcy5wYXJzZU1heWJlQXNzaWduKGZhbHNlLCByZWZEZXN0cnVjdHVyaW5nRXJyb3JzKTtcbiAgICBwcm9wLmtpbmQgPSBcImluaXRcIjtcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEucGFyZW5MKSB7XG4gICAgaWYgKGlzUGF0dGVybikgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgIHByb3Aua2luZCA9IFwiaW5pdFwiO1xuICAgIHByb3AubWV0aG9kID0gdHJ1ZTtcbiAgICBwcm9wLnZhbHVlID0gdGhpcy5wYXJzZU1ldGhvZChpc0dlbmVyYXRvciwgaXNBc3luYyk7XG4gIH0gZWxzZSBpZiAoIWlzUGF0dGVybiAmJiAhY29udGFpbnNFc2MgJiZcbiAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNSAmJiAhcHJvcC5jb21wdXRlZCAmJiBwcm9wLmtleS50eXBlID09PSBcIklkZW50aWZpZXJcIiAmJlxuICAgICAgICAgICAgIChwcm9wLmtleS5uYW1lID09PSBcImdldFwiIHx8IHByb3Aua2V5Lm5hbWUgPT09IFwic2V0XCIpICYmXG4gICAgICAgICAgICAgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5jb21tYSAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VSICYmIHRoaXMudHlwZSAhPT0gdHlwZXMkMS5lcSkpIHtcbiAgICBpZiAoaXNHZW5lcmF0b3IgfHwgaXNBc3luYykgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgIHRoaXMucGFyc2VHZXR0ZXJTZXR0ZXIocHJvcCk7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgIXByb3AuY29tcHV0ZWQgJiYgcHJvcC5rZXkudHlwZSA9PT0gXCJJZGVudGlmaWVyXCIpIHtcbiAgICBpZiAoaXNHZW5lcmF0b3IgfHwgaXNBc3luYykgeyB0aGlzLnVuZXhwZWN0ZWQoKTsgfVxuICAgIHRoaXMuY2hlY2tVbnJlc2VydmVkKHByb3Aua2V5KTtcbiAgICBpZiAocHJvcC5rZXkubmFtZSA9PT0gXCJhd2FpdFwiICYmICF0aGlzLmF3YWl0SWRlbnRQb3MpXG4gICAgICB7IHRoaXMuYXdhaXRJZGVudFBvcyA9IHN0YXJ0UG9zOyB9XG4gICAgcHJvcC5raW5kID0gXCJpbml0XCI7XG4gICAgaWYgKGlzUGF0dGVybikge1xuICAgICAgcHJvcC52YWx1ZSA9IHRoaXMucGFyc2VNYXliZURlZmF1bHQoc3RhcnRQb3MsIHN0YXJ0TG9jLCB0aGlzLmNvcHlOb2RlKHByb3Aua2V5KSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuZXEgJiYgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycykge1xuICAgICAgaWYgKHJlZkRlc3RydWN0dXJpbmdFcnJvcnMuc2hvcnRoYW5kQXNzaWduIDwgMClcbiAgICAgICAgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnNob3J0aGFuZEFzc2lnbiA9IHRoaXMuc3RhcnQ7IH1cbiAgICAgIHByb3AudmFsdWUgPSB0aGlzLnBhcnNlTWF5YmVEZWZhdWx0KHN0YXJ0UG9zLCBzdGFydExvYywgdGhpcy5jb3B5Tm9kZShwcm9wLmtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wLnZhbHVlID0gdGhpcy5jb3B5Tm9kZShwcm9wLmtleSk7XG4gICAgfVxuICAgIHByb3Auc2hvcnRoYW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbn07XG5cbnBwJDUucGFyc2VQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbihwcm9wKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikge1xuICAgIGlmICh0aGlzLmVhdCh0eXBlcyQxLmJyYWNrZXRMKSkge1xuICAgICAgcHJvcC5jb21wdXRlZCA9IHRydWU7XG4gICAgICBwcm9wLmtleSA9IHRoaXMucGFyc2VNYXliZUFzc2lnbigpO1xuICAgICAgdGhpcy5leHBlY3QodHlwZXMkMS5icmFja2V0Uik7XG4gICAgICByZXR1cm4gcHJvcC5rZXlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcC5jb21wdXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvcC5rZXkgPSB0aGlzLnR5cGUgPT09IHR5cGVzJDEubnVtIHx8IHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zdHJpbmcgPyB0aGlzLnBhcnNlRXhwckF0b20oKSA6IHRoaXMucGFyc2VJZGVudCh0aGlzLm9wdGlvbnMuYWxsb3dSZXNlcnZlZCAhPT0gXCJuZXZlclwiKVxufTtcblxuLy8gSW5pdGlhbGl6ZSBlbXB0eSBmdW5jdGlvbiBub2RlLlxuXG5wcCQ1LmluaXRGdW5jdGlvbiA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgbm9kZS5pZCA9IG51bGw7XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikgeyBub2RlLmdlbmVyYXRvciA9IG5vZGUuZXhwcmVzc2lvbiA9IGZhbHNlOyB9XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOCkgeyBub2RlLmFzeW5jID0gZmFsc2U7IH1cbn07XG5cbi8vIFBhcnNlIG9iamVjdCBvciBjbGFzcyBtZXRob2QuXG5cbnBwJDUucGFyc2VNZXRob2QgPSBmdW5jdGlvbihpc0dlbmVyYXRvciwgaXNBc3luYywgYWxsb3dEaXJlY3RTdXBlcikge1xuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCksIG9sZFlpZWxkUG9zID0gdGhpcy55aWVsZFBvcywgb2xkQXdhaXRQb3MgPSB0aGlzLmF3YWl0UG9zLCBvbGRBd2FpdElkZW50UG9zID0gdGhpcy5hd2FpdElkZW50UG9zO1xuXG4gIHRoaXMuaW5pdEZ1bmN0aW9uKG5vZGUpO1xuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYpXG4gICAgeyBub2RlLmdlbmVyYXRvciA9IGlzR2VuZXJhdG9yOyB9XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOClcbiAgICB7IG5vZGUuYXN5bmMgPSAhIWlzQXN5bmM7IH1cblxuICB0aGlzLnlpZWxkUG9zID0gMDtcbiAgdGhpcy5hd2FpdFBvcyA9IDA7XG4gIHRoaXMuYXdhaXRJZGVudFBvcyA9IDA7XG4gIHRoaXMuZW50ZXJTY29wZShmdW5jdGlvbkZsYWdzKGlzQXN5bmMsIG5vZGUuZ2VuZXJhdG9yKSB8IFNDT1BFX1NVUEVSIHwgKGFsbG93RGlyZWN0U3VwZXIgPyBTQ09QRV9ESVJFQ1RfU1VQRVIgOiAwKSk7XG5cbiAgdGhpcy5leHBlY3QodHlwZXMkMS5wYXJlbkwpO1xuICBub2RlLnBhcmFtcyA9IHRoaXMucGFyc2VCaW5kaW5nTGlzdCh0eXBlcyQxLnBhcmVuUiwgZmFsc2UsIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4KTtcbiAgdGhpcy5jaGVja1lpZWxkQXdhaXRJbkRlZmF1bHRQYXJhbXMoKTtcbiAgdGhpcy5wYXJzZUZ1bmN0aW9uQm9keShub2RlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gIHRoaXMueWllbGRQb3MgPSBvbGRZaWVsZFBvcztcbiAgdGhpcy5hd2FpdFBvcyA9IG9sZEF3YWl0UG9zO1xuICB0aGlzLmF3YWl0SWRlbnRQb3MgPSBvbGRBd2FpdElkZW50UG9zO1xuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiRnVuY3Rpb25FeHByZXNzaW9uXCIpXG59O1xuXG4vLyBQYXJzZSBhcnJvdyBmdW5jdGlvbiBleHByZXNzaW9uIHdpdGggZ2l2ZW4gcGFyYW1ldGVycy5cblxucHAkNS5wYXJzZUFycm93RXhwcmVzc2lvbiA9IGZ1bmN0aW9uKG5vZGUsIHBhcmFtcywgaXNBc3luYywgZm9ySW5pdCkge1xuICB2YXIgb2xkWWllbGRQb3MgPSB0aGlzLnlpZWxkUG9zLCBvbGRBd2FpdFBvcyA9IHRoaXMuYXdhaXRQb3MsIG9sZEF3YWl0SWRlbnRQb3MgPSB0aGlzLmF3YWl0SWRlbnRQb3M7XG5cbiAgdGhpcy5lbnRlclNjb3BlKGZ1bmN0aW9uRmxhZ3MoaXNBc3luYywgZmFsc2UpIHwgU0NPUEVfQVJST1cpO1xuICB0aGlzLmluaXRGdW5jdGlvbihub2RlKTtcbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA4KSB7IG5vZGUuYXN5bmMgPSAhIWlzQXN5bmM7IH1cblxuICB0aGlzLnlpZWxkUG9zID0gMDtcbiAgdGhpcy5hd2FpdFBvcyA9IDA7XG4gIHRoaXMuYXdhaXRJZGVudFBvcyA9IDA7XG5cbiAgbm9kZS5wYXJhbXMgPSB0aGlzLnRvQXNzaWduYWJsZUxpc3QocGFyYW1zLCB0cnVlKTtcbiAgdGhpcy5wYXJzZUZ1bmN0aW9uQm9keShub2RlLCB0cnVlLCBmYWxzZSwgZm9ySW5pdCk7XG5cbiAgdGhpcy55aWVsZFBvcyA9IG9sZFlpZWxkUG9zO1xuICB0aGlzLmF3YWl0UG9zID0gb2xkQXdhaXRQb3M7XG4gIHRoaXMuYXdhaXRJZGVudFBvcyA9IG9sZEF3YWl0SWRlbnRQb3M7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiKVxufTtcblxuLy8gUGFyc2UgZnVuY3Rpb24gYm9keSBhbmQgY2hlY2sgcGFyYW1ldGVycy5cblxucHAkNS5wYXJzZUZ1bmN0aW9uQm9keSA9IGZ1bmN0aW9uKG5vZGUsIGlzQXJyb3dGdW5jdGlvbiwgaXNNZXRob2QsIGZvckluaXQpIHtcbiAgdmFyIGlzRXhwcmVzc2lvbiA9IGlzQXJyb3dGdW5jdGlvbiAmJiB0aGlzLnR5cGUgIT09IHR5cGVzJDEuYnJhY2VMO1xuICB2YXIgb2xkU3RyaWN0ID0gdGhpcy5zdHJpY3QsIHVzZVN0cmljdCA9IGZhbHNlO1xuXG4gIGlmIChpc0V4cHJlc3Npb24pIHtcbiAgICBub2RlLmJvZHkgPSB0aGlzLnBhcnNlTWF5YmVBc3NpZ24oZm9ySW5pdCk7XG4gICAgbm9kZS5leHByZXNzaW9uID0gdHJ1ZTtcbiAgICB0aGlzLmNoZWNrUGFyYW1zKG5vZGUsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9uU2ltcGxlID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDcgJiYgIXRoaXMuaXNTaW1wbGVQYXJhbUxpc3Qobm9kZS5wYXJhbXMpO1xuICAgIGlmICghb2xkU3RyaWN0IHx8IG5vblNpbXBsZSkge1xuICAgICAgdXNlU3RyaWN0ID0gdGhpcy5zdHJpY3REaXJlY3RpdmUodGhpcy5lbmQpO1xuICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmljdCBtb2RlIGZ1bmN0aW9uLCB2ZXJpZnkgdGhhdCBhcmd1bWVudCBuYW1lc1xuICAgICAgLy8gYXJlIG5vdCByZXBlYXRlZCwgYW5kIGl0IGRvZXMgbm90IHRyeSB0byBiaW5kIHRoZSB3b3JkcyBgZXZhbGBcbiAgICAgIC8vIG9yIGBhcmd1bWVudHNgLlxuICAgICAgaWYgKHVzZVN0cmljdCAmJiBub25TaW1wbGUpXG4gICAgICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKG5vZGUuc3RhcnQsIFwiSWxsZWdhbCAndXNlIHN0cmljdCcgZGlyZWN0aXZlIGluIGZ1bmN0aW9uIHdpdGggbm9uLXNpbXBsZSBwYXJhbWV0ZXIgbGlzdFwiKTsgfVxuICAgIH1cbiAgICAvLyBTdGFydCBhIG5ldyBzY29wZSB3aXRoIHJlZ2FyZCB0byBsYWJlbHMgYW5kIHRoZSBgaW5GdW5jdGlvbmBcbiAgICAvLyBmbGFnIChyZXN0b3JlIHRoZW0gdG8gdGhlaXIgb2xkIHZhbHVlIGFmdGVyd2FyZHMpLlxuICAgIHZhciBvbGRMYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgICB0aGlzLmxhYmVscyA9IFtdO1xuICAgIGlmICh1c2VTdHJpY3QpIHsgdGhpcy5zdHJpY3QgPSB0cnVlOyB9XG5cbiAgICAvLyBBZGQgdGhlIHBhcmFtcyB0byB2YXJEZWNsYXJlZE5hbWVzIHRvIGVuc3VyZSB0aGF0IGFuIGVycm9yIGlzIHRocm93blxuICAgIC8vIGlmIGEgbGV0L2NvbnN0IGRlY2xhcmF0aW9uIGluIHRoZSBmdW5jdGlvbiBjbGFzaGVzIHdpdGggb25lIG9mIHRoZSBwYXJhbXMuXG4gICAgdGhpcy5jaGVja1BhcmFtcyhub2RlLCAhb2xkU3RyaWN0ICYmICF1c2VTdHJpY3QgJiYgIWlzQXJyb3dGdW5jdGlvbiAmJiAhaXNNZXRob2QgJiYgdGhpcy5pc1NpbXBsZVBhcmFtTGlzdChub2RlLnBhcmFtcykpO1xuICAgIC8vIEVuc3VyZSB0aGUgZnVuY3Rpb24gbmFtZSBpc24ndCBhIGZvcmJpZGRlbiBpZGVudGlmaWVyIGluIHN0cmljdCBtb2RlLCBlLmcuICdldmFsJ1xuICAgIGlmICh0aGlzLnN0cmljdCAmJiBub2RlLmlkKSB7IHRoaXMuY2hlY2tMVmFsU2ltcGxlKG5vZGUuaWQsIEJJTkRfT1VUU0lERSk7IH1cbiAgICBub2RlLmJvZHkgPSB0aGlzLnBhcnNlQmxvY2soZmFsc2UsIHVuZGVmaW5lZCwgdXNlU3RyaWN0ICYmICFvbGRTdHJpY3QpO1xuICAgIG5vZGUuZXhwcmVzc2lvbiA9IGZhbHNlO1xuICAgIHRoaXMuYWRhcHREaXJlY3RpdmVQcm9sb2d1ZShub2RlLmJvZHkuYm9keSk7XG4gICAgdGhpcy5sYWJlbHMgPSBvbGRMYWJlbHM7XG4gIH1cbiAgdGhpcy5leGl0U2NvcGUoKTtcbn07XG5cbnBwJDUuaXNTaW1wbGVQYXJhbUxpc3QgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBwYXJhbXM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKVxuICAgIHtcbiAgICB2YXIgcGFyYW0gPSBsaXN0W2ldO1xuXG4gICAgaWYgKHBhcmFtLnR5cGUgIT09IFwiSWRlbnRpZmllclwiKSB7IHJldHVybiBmYWxzZVxuICB9IH1cbiAgcmV0dXJuIHRydWVcbn07XG5cbi8vIENoZWNrcyBmdW5jdGlvbiBwYXJhbXMgZm9yIHZhcmlvdXMgZGlzYWxsb3dlZCBwYXR0ZXJucyBzdWNoIGFzIHVzaW5nIFwiZXZhbFwiXG4vLyBvciBcImFyZ3VtZW50c1wiIGFuZCBkdXBsaWNhdGUgcGFyYW1ldGVycy5cblxucHAkNS5jaGVja1BhcmFtcyA9IGZ1bmN0aW9uKG5vZGUsIGFsbG93RHVwbGljYXRlcykge1xuICB2YXIgbmFtZUhhc2ggPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IG5vZGUucGFyYW1zOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSlcbiAgICB7XG4gICAgdmFyIHBhcmFtID0gbGlzdFtpXTtcblxuICAgIHRoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKHBhcmFtLCBCSU5EX1ZBUiwgYWxsb3dEdXBsaWNhdGVzID8gbnVsbCA6IG5hbWVIYXNoKTtcbiAgfVxufTtcblxuLy8gUGFyc2VzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZXhwcmVzc2lvbnMsIGFuZCByZXR1cm5zIHRoZW0gYXNcbi8vIGFuIGFycmF5LiBgY2xvc2VgIGlzIHRoZSB0b2tlbiB0eXBlIHRoYXQgZW5kcyB0aGUgbGlzdCwgYW5kXG4vLyBgYWxsb3dFbXB0eWAgY2FuIGJlIHR1cm5lZCBvbiB0byBhbGxvdyBzdWJzZXF1ZW50IGNvbW1hcyB3aXRoXG4vLyBub3RoaW5nIGluIGJldHdlZW4gdGhlbSB0byBiZSBwYXJzZWQgYXMgYG51bGxgICh3aGljaCBpcyBuZWVkZWRcbi8vIGZvciBhcnJheSBsaXRlcmFscykuXG5cbnBwJDUucGFyc2VFeHByTGlzdCA9IGZ1bmN0aW9uKGNsb3NlLCBhbGxvd1RyYWlsaW5nQ29tbWEsIGFsbG93RW1wdHksIHJlZkRlc3RydWN0dXJpbmdFcnJvcnMpIHtcbiAgdmFyIGVsdHMgPSBbXSwgZmlyc3QgPSB0cnVlO1xuICB3aGlsZSAoIXRoaXMuZWF0KGNsb3NlKSkge1xuICAgIGlmICghZmlyc3QpIHtcbiAgICAgIHRoaXMuZXhwZWN0KHR5cGVzJDEuY29tbWEpO1xuICAgICAgaWYgKGFsbG93VHJhaWxpbmdDb21tYSAmJiB0aGlzLmFmdGVyVHJhaWxpbmdDb21tYShjbG9zZSkpIHsgYnJlYWsgfVxuICAgIH0gZWxzZSB7IGZpcnN0ID0gZmFsc2U7IH1cblxuICAgIHZhciBlbHQgPSAodm9pZCAwKTtcbiAgICBpZiAoYWxsb3dFbXB0eSAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEpXG4gICAgICB7IGVsdCA9IG51bGw7IH1cbiAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEuZWxsaXBzaXMpIHtcbiAgICAgIGVsdCA9IHRoaXMucGFyc2VTcHJlYWQocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gICAgICBpZiAocmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyAmJiB0aGlzLnR5cGUgPT09IHR5cGVzJDEuY29tbWEgJiYgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycy50cmFpbGluZ0NvbW1hIDwgMClcbiAgICAgICAgeyByZWZEZXN0cnVjdHVyaW5nRXJyb3JzLnRyYWlsaW5nQ29tbWEgPSB0aGlzLnN0YXJ0OyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsdCA9IHRoaXMucGFyc2VNYXliZUFzc2lnbihmYWxzZSwgcmVmRGVzdHJ1Y3R1cmluZ0Vycm9ycyk7XG4gICAgfVxuICAgIGVsdHMucHVzaChlbHQpO1xuICB9XG4gIHJldHVybiBlbHRzXG59O1xuXG5wcCQ1LmNoZWNrVW5yZXNlcnZlZCA9IGZ1bmN0aW9uKHJlZikge1xuICB2YXIgc3RhcnQgPSByZWYuc3RhcnQ7XG4gIHZhciBlbmQgPSByZWYuZW5kO1xuICB2YXIgbmFtZSA9IHJlZi5uYW1lO1xuXG4gIGlmICh0aGlzLmluR2VuZXJhdG9yICYmIG5hbWUgPT09IFwieWllbGRcIilcbiAgICB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZShzdGFydCwgXCJDYW5ub3QgdXNlICd5aWVsZCcgYXMgaWRlbnRpZmllciBpbnNpZGUgYSBnZW5lcmF0b3JcIik7IH1cbiAgaWYgKHRoaXMuaW5Bc3luYyAmJiBuYW1lID09PSBcImF3YWl0XCIpXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoc3RhcnQsIFwiQ2Fubm90IHVzZSAnYXdhaXQnIGFzIGlkZW50aWZpZXIgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uXCIpOyB9XG4gIGlmICh0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKS5pbkNsYXNzRmllbGRJbml0ICYmIG5hbWUgPT09IFwiYXJndW1lbnRzXCIpXG4gICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoc3RhcnQsIFwiQ2Fubm90IHVzZSAnYXJndW1lbnRzJyBpbiBjbGFzcyBmaWVsZCBpbml0aWFsaXplclwiKTsgfVxuICBpZiAodGhpcy5pbkNsYXNzU3RhdGljQmxvY2sgJiYgKG5hbWUgPT09IFwiYXJndW1lbnRzXCIgfHwgbmFtZSA9PT0gXCJhd2FpdFwiKSlcbiAgICB7IHRoaXMucmFpc2Uoc3RhcnQsIChcIkNhbm5vdCB1c2UgXCIgKyBuYW1lICsgXCIgaW4gY2xhc3Mgc3RhdGljIGluaXRpYWxpemF0aW9uIGJsb2NrXCIpKTsgfVxuICBpZiAodGhpcy5rZXl3b3Jkcy50ZXN0KG5hbWUpKVxuICAgIHsgdGhpcy5yYWlzZShzdGFydCwgKFwiVW5leHBlY3RlZCBrZXl3b3JkICdcIiArIG5hbWUgKyBcIidcIikpOyB9XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPCA2ICYmXG4gICAgdGhpcy5pbnB1dC5zbGljZShzdGFydCwgZW5kKS5pbmRleE9mKFwiXFxcXFwiKSAhPT0gLTEpIHsgcmV0dXJuIH1cbiAgdmFyIHJlID0gdGhpcy5zdHJpY3QgPyB0aGlzLnJlc2VydmVkV29yZHNTdHJpY3QgOiB0aGlzLnJlc2VydmVkV29yZHM7XG4gIGlmIChyZS50ZXN0KG5hbWUpKSB7XG4gICAgaWYgKCF0aGlzLmluQXN5bmMgJiYgbmFtZSA9PT0gXCJhd2FpdFwiKVxuICAgICAgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUoc3RhcnQsIFwiQ2Fubm90IHVzZSBrZXl3b3JkICdhd2FpdCcgb3V0c2lkZSBhbiBhc3luYyBmdW5jdGlvblwiKTsgfVxuICAgIHRoaXMucmFpc2VSZWNvdmVyYWJsZShzdGFydCwgKFwiVGhlIGtleXdvcmQgJ1wiICsgbmFtZSArIFwiJyBpcyByZXNlcnZlZFwiKSk7XG4gIH1cbn07XG5cbi8vIFBhcnNlIHRoZSBuZXh0IHRva2VuIGFzIGFuIGlkZW50aWZpZXIuIElmIGBsaWJlcmFsYCBpcyB0cnVlICh1c2VkXG4vLyB3aGVuIHBhcnNpbmcgcHJvcGVydGllcyksIGl0IHdpbGwgYWxzbyBjb252ZXJ0IGtleXdvcmRzIGludG9cbi8vIGlkZW50aWZpZXJzLlxuXG5wcCQ1LnBhcnNlSWRlbnQgPSBmdW5jdGlvbihsaWJlcmFsKSB7XG4gIHZhciBub2RlID0gdGhpcy5wYXJzZUlkZW50Tm9kZSgpO1xuICB0aGlzLm5leHQoISFsaWJlcmFsKTtcbiAgdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiSWRlbnRpZmllclwiKTtcbiAgaWYgKCFsaWJlcmFsKSB7XG4gICAgdGhpcy5jaGVja1VucmVzZXJ2ZWQobm9kZSk7XG4gICAgaWYgKG5vZGUubmFtZSA9PT0gXCJhd2FpdFwiICYmICF0aGlzLmF3YWl0SWRlbnRQb3MpXG4gICAgICB7IHRoaXMuYXdhaXRJZGVudFBvcyA9IG5vZGUuc3RhcnQ7IH1cbiAgfVxuICByZXR1cm4gbm9kZVxufTtcblxucHAkNS5wYXJzZUlkZW50Tm9kZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZSA9IHRoaXMuc3RhcnROb2RlKCk7XG4gIGlmICh0aGlzLnR5cGUgPT09IHR5cGVzJDEubmFtZSkge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmFsdWU7XG4gIH0gZWxzZSBpZiAodGhpcy50eXBlLmtleXdvcmQpIHtcbiAgICBub2RlLm5hbWUgPSB0aGlzLnR5cGUua2V5d29yZDtcblxuICAgIC8vIFRvIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYWNvcm5qcy9hY29ybi9pc3N1ZXMvNTc1XG4gICAgLy8gYGNsYXNzYCBhbmQgYGZ1bmN0aW9uYCBrZXl3b3JkcyBwdXNoIG5ldyBjb250ZXh0IGludG8gdGhpcy5jb250ZXh0LlxuICAgIC8vIEJ1dCB0aGVyZSBpcyBubyBjaGFuY2UgdG8gcG9wIHRoZSBjb250ZXh0IGlmIHRoZSBrZXl3b3JkIGlzIGNvbnN1bWVkIGFzIGFuIGlkZW50aWZpZXIgc3VjaCBhcyBhIHByb3BlcnR5IG5hbWUuXG4gICAgLy8gSWYgdGhlIHByZXZpb3VzIHRva2VuIGlzIGEgZG90LCB0aGlzIGRvZXMgbm90IGFwcGx5IGJlY2F1c2UgdGhlIGNvbnRleHQtbWFuYWdpbmcgY29kZSBhbHJlYWR5IGlnbm9yZWQgdGhlIGtleXdvcmRcbiAgICBpZiAoKG5vZGUubmFtZSA9PT0gXCJjbGFzc1wiIHx8IG5vZGUubmFtZSA9PT0gXCJmdW5jdGlvblwiKSAmJlxuICAgICAgKHRoaXMubGFzdFRva0VuZCAhPT0gdGhpcy5sYXN0VG9rU3RhcnQgKyAxIHx8IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmxhc3RUb2tTdGFydCkgIT09IDQ2KSkge1xuICAgICAgdGhpcy5jb250ZXh0LnBvcCgpO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSB0eXBlcyQxLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH1cbiAgcmV0dXJuIG5vZGVcbn07XG5cbnBwJDUucGFyc2VQcml2YXRlSWRlbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xuICBpZiAodGhpcy50eXBlID09PSB0eXBlcyQxLnByaXZhdGVJZCkge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51bmV4cGVjdGVkKCk7XG4gIH1cbiAgdGhpcy5uZXh0KCk7XG4gIHRoaXMuZmluaXNoTm9kZShub2RlLCBcIlByaXZhdGVJZGVudGlmaWVyXCIpO1xuXG4gIC8vIEZvciB2YWxpZGF0aW5nIGV4aXN0ZW5jZVxuICBpZiAodGhpcy5vcHRpb25zLmNoZWNrUHJpdmF0ZUZpZWxkcykge1xuICAgIGlmICh0aGlzLnByaXZhdGVOYW1lU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnJhaXNlKG5vZGUuc3RhcnQsIChcIlByaXZhdGUgZmllbGQgJyNcIiArIChub2RlLm5hbWUpICsgXCInIG11c3QgYmUgZGVjbGFyZWQgaW4gYW4gZW5jbG9zaW5nIGNsYXNzXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcml2YXRlTmFtZVN0YWNrW3RoaXMucHJpdmF0ZU5hbWVTdGFjay5sZW5ndGggLSAxXS51c2VkLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn07XG5cbi8vIFBhcnNlcyB5aWVsZCBleHByZXNzaW9uIGluc2lkZSBnZW5lcmF0b3IuXG5cbnBwJDUucGFyc2VZaWVsZCA9IGZ1bmN0aW9uKGZvckluaXQpIHtcbiAgaWYgKCF0aGlzLnlpZWxkUG9zKSB7IHRoaXMueWllbGRQb3MgPSB0aGlzLnN0YXJ0OyB9XG5cbiAgdmFyIG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSgpO1xuICB0aGlzLm5leHQoKTtcbiAgaWYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS5zZW1pIHx8IHRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkgfHwgKHRoaXMudHlwZSAhPT0gdHlwZXMkMS5zdGFyICYmICF0aGlzLnR5cGUuc3RhcnRzRXhwcikpIHtcbiAgICBub2RlLmRlbGVnYXRlID0gZmFsc2U7XG4gICAgbm9kZS5hcmd1bWVudCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZWxlZ2F0ZSA9IHRoaXMuZWF0KHR5cGVzJDEuc3Rhcik7XG4gICAgbm9kZS5hcmd1bWVudCA9IHRoaXMucGFyc2VNYXliZUFzc2lnbihmb3JJbml0KTtcbiAgfVxuICByZXR1cm4gdGhpcy5maW5pc2hOb2RlKG5vZGUsIFwiWWllbGRFeHByZXNzaW9uXCIpXG59O1xuXG5wcCQ1LnBhcnNlQXdhaXQgPSBmdW5jdGlvbihmb3JJbml0KSB7XG4gIGlmICghdGhpcy5hd2FpdFBvcykgeyB0aGlzLmF3YWl0UG9zID0gdGhpcy5zdGFydDsgfVxuXG4gIHZhciBub2RlID0gdGhpcy5zdGFydE5vZGUoKTtcbiAgdGhpcy5uZXh0KCk7XG4gIG5vZGUuYXJndW1lbnQgPSB0aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCB0cnVlLCBmYWxzZSwgZm9ySW5pdCk7XG4gIHJldHVybiB0aGlzLmZpbmlzaE5vZGUobm9kZSwgXCJBd2FpdEV4cHJlc3Npb25cIilcbn07XG5cbnZhciBwcCQ0ID0gUGFyc2VyLnByb3RvdHlwZTtcblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJhaXNlIGV4Y2VwdGlvbnMgb24gcGFyc2UgZXJyb3JzLiBJdFxuLy8gdGFrZXMgYW4gb2Zmc2V0IGludGVnZXIgKGludG8gdGhlIGN1cnJlbnQgYGlucHV0YCkgdG8gaW5kaWNhdGVcbi8vIHRoZSBsb2NhdGlvbiBvZiB0aGUgZXJyb3IsIGF0dGFjaGVzIHRoZSBwb3NpdGlvbiB0byB0aGUgZW5kXG4vLyBvZiB0aGUgZXJyb3IgbWVzc2FnZSwgYW5kIHRoZW4gcmFpc2VzIGEgYFN5bnRheEVycm9yYCB3aXRoIHRoYXRcbi8vIG1lc3NhZ2UuXG5cbnBwJDQucmFpc2UgPSBmdW5jdGlvbihwb3MsIG1lc3NhZ2UpIHtcbiAgdmFyIGxvYyA9IGdldExpbmVJbmZvKHRoaXMuaW5wdXQsIHBvcyk7XG4gIG1lc3NhZ2UgKz0gXCIgKFwiICsgbG9jLmxpbmUgKyBcIjpcIiArIGxvYy5jb2x1bW4gKyBcIilcIjtcbiAgdmFyIGVyciA9IG5ldyBTeW50YXhFcnJvcihtZXNzYWdlKTtcbiAgZXJyLnBvcyA9IHBvczsgZXJyLmxvYyA9IGxvYzsgZXJyLnJhaXNlZEF0ID0gdGhpcy5wb3M7XG4gIHRocm93IGVyclxufTtcblxucHAkNC5yYWlzZVJlY292ZXJhYmxlID0gcHAkNC5yYWlzZTtcblxucHAkNC5jdXJQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5vcHRpb25zLmxvY2F0aW9ucykge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb24odGhpcy5jdXJMaW5lLCB0aGlzLnBvcyAtIHRoaXMubGluZVN0YXJ0KVxuICB9XG59O1xuXG52YXIgcHAkMyA9IFBhcnNlci5wcm90b3R5cGU7XG5cbnZhciBTY29wZSA9IGZ1bmN0aW9uIFNjb3BlKGZsYWdzKSB7XG4gIHRoaXMuZmxhZ3MgPSBmbGFncztcbiAgLy8gQSBsaXN0IG9mIHZhci1kZWNsYXJlZCBuYW1lcyBpbiB0aGUgY3VycmVudCBsZXhpY2FsIHNjb3BlXG4gIHRoaXMudmFyID0gW107XG4gIC8vIEEgbGlzdCBvZiBsZXhpY2FsbHktZGVjbGFyZWQgbmFtZXMgaW4gdGhlIGN1cnJlbnQgbGV4aWNhbCBzY29wZVxuICB0aGlzLmxleGljYWwgPSBbXTtcbiAgLy8gQSBsaXN0IG9mIGxleGljYWxseS1kZWNsYXJlZCBGdW5jdGlvbkRlY2xhcmF0aW9uIG5hbWVzIGluIHRoZSBjdXJyZW50IGxleGljYWwgc2NvcGVcbiAgdGhpcy5mdW5jdGlvbnMgPSBbXTtcbiAgLy8gQSBzd2l0Y2ggdG8gZGlzYWxsb3cgdGhlIGlkZW50aWZpZXIgcmVmZXJlbmNlICdhcmd1bWVudHMnXG4gIHRoaXMuaW5DbGFzc0ZpZWxkSW5pdCA9IGZhbHNlO1xufTtcblxuLy8gVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSBrZWVwIHRyYWNrIG9mIGRlY2xhcmVkIHZhcmlhYmxlcyBpbiB0aGUgY3VycmVudCBzY29wZSBpbiBvcmRlciB0byBkZXRlY3QgZHVwbGljYXRlIHZhcmlhYmxlIG5hbWVzLlxuXG5wcCQzLmVudGVyU2NvcGUgPSBmdW5jdGlvbihmbGFncykge1xuICB0aGlzLnNjb3BlU3RhY2sucHVzaChuZXcgU2NvcGUoZmxhZ3MpKTtcbn07XG5cbnBwJDMuZXhpdFNjb3BlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2NvcGVTdGFjay5wb3AoKTtcbn07XG5cbi8vIFRoZSBzcGVjIHNheXM6XG4vLyA+IEF0IHRoZSB0b3AgbGV2ZWwgb2YgYSBmdW5jdGlvbiwgb3Igc2NyaXB0LCBmdW5jdGlvbiBkZWNsYXJhdGlvbnMgYXJlXG4vLyA+IHRyZWF0ZWQgbGlrZSB2YXIgZGVjbGFyYXRpb25zIHJhdGhlciB0aGFuIGxpa2UgbGV4aWNhbCBkZWNsYXJhdGlvbnMuXG5wcCQzLnRyZWF0RnVuY3Rpb25zQXNWYXJJblNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgcmV0dXJuIChzY29wZS5mbGFncyAmIFNDT1BFX0ZVTkNUSU9OKSB8fCAhdGhpcy5pbk1vZHVsZSAmJiAoc2NvcGUuZmxhZ3MgJiBTQ09QRV9UT1ApXG59O1xuXG5wcCQzLmRlY2xhcmVOYW1lID0gZnVuY3Rpb24obmFtZSwgYmluZGluZ1R5cGUsIHBvcykge1xuICB2YXIgcmVkZWNsYXJlZCA9IGZhbHNlO1xuICBpZiAoYmluZGluZ1R5cGUgPT09IEJJTkRfTEVYSUNBTCkge1xuICAgIHZhciBzY29wZSA9IHRoaXMuY3VycmVudFNjb3BlKCk7XG4gICAgcmVkZWNsYXJlZCA9IHNjb3BlLmxleGljYWwuaW5kZXhPZihuYW1lKSA+IC0xIHx8IHNjb3BlLmZ1bmN0aW9ucy5pbmRleE9mKG5hbWUpID4gLTEgfHwgc2NvcGUudmFyLmluZGV4T2YobmFtZSkgPiAtMTtcbiAgICBzY29wZS5sZXhpY2FsLnB1c2gobmFtZSk7XG4gICAgaWYgKHRoaXMuaW5Nb2R1bGUgJiYgKHNjb3BlLmZsYWdzICYgU0NPUEVfVE9QKSlcbiAgICAgIHsgZGVsZXRlIHRoaXMudW5kZWZpbmVkRXhwb3J0c1tuYW1lXTsgfVxuICB9IGVsc2UgaWYgKGJpbmRpbmdUeXBlID09PSBCSU5EX1NJTVBMRV9DQVRDSCkge1xuICAgIHZhciBzY29wZSQxID0gdGhpcy5jdXJyZW50U2NvcGUoKTtcbiAgICBzY29wZSQxLmxleGljYWwucHVzaChuYW1lKTtcbiAgfSBlbHNlIGlmIChiaW5kaW5nVHlwZSA9PT0gQklORF9GVU5DVElPTikge1xuICAgIHZhciBzY29wZSQyID0gdGhpcy5jdXJyZW50U2NvcGUoKTtcbiAgICBpZiAodGhpcy50cmVhdEZ1bmN0aW9uc0FzVmFyKVxuICAgICAgeyByZWRlY2xhcmVkID0gc2NvcGUkMi5sZXhpY2FsLmluZGV4T2YobmFtZSkgPiAtMTsgfVxuICAgIGVsc2VcbiAgICAgIHsgcmVkZWNsYXJlZCA9IHNjb3BlJDIubGV4aWNhbC5pbmRleE9mKG5hbWUpID4gLTEgfHwgc2NvcGUkMi52YXIuaW5kZXhPZihuYW1lKSA+IC0xOyB9XG4gICAgc2NvcGUkMi5mdW5jdGlvbnMucHVzaChuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5zY29wZVN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB2YXIgc2NvcGUkMyA9IHRoaXMuc2NvcGVTdGFja1tpXTtcbiAgICAgIGlmIChzY29wZSQzLmxleGljYWwuaW5kZXhPZihuYW1lKSA+IC0xICYmICEoKHNjb3BlJDMuZmxhZ3MgJiBTQ09QRV9TSU1QTEVfQ0FUQ0gpICYmIHNjb3BlJDMubGV4aWNhbFswXSA9PT0gbmFtZSkgfHxcbiAgICAgICAgICAhdGhpcy50cmVhdEZ1bmN0aW9uc0FzVmFySW5TY29wZShzY29wZSQzKSAmJiBzY29wZSQzLmZ1bmN0aW9ucy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgcmVkZWNsYXJlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBzY29wZSQzLnZhci5wdXNoKG5hbWUpO1xuICAgICAgaWYgKHRoaXMuaW5Nb2R1bGUgJiYgKHNjb3BlJDMuZmxhZ3MgJiBTQ09QRV9UT1ApKVxuICAgICAgICB7IGRlbGV0ZSB0aGlzLnVuZGVmaW5lZEV4cG9ydHNbbmFtZV07IH1cbiAgICAgIGlmIChzY29wZSQzLmZsYWdzICYgU0NPUEVfVkFSKSB7IGJyZWFrIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJlZGVjbGFyZWQpIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHBvcywgKFwiSWRlbnRpZmllciAnXCIgKyBuYW1lICsgXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWRcIikpOyB9XG59O1xuXG5wcCQzLmNoZWNrTG9jYWxFeHBvcnQgPSBmdW5jdGlvbihpZCkge1xuICAvLyBzY29wZS5mdW5jdGlvbnMgbXVzdCBiZSBlbXB0eSBhcyBNb2R1bGUgY29kZSBpcyBhbHdheXMgc3RyaWN0LlxuICBpZiAodGhpcy5zY29wZVN0YWNrWzBdLmxleGljYWwuaW5kZXhPZihpZC5uYW1lKSA9PT0gLTEgJiZcbiAgICAgIHRoaXMuc2NvcGVTdGFja1swXS52YXIuaW5kZXhPZihpZC5uYW1lKSA9PT0gLTEpIHtcbiAgICB0aGlzLnVuZGVmaW5lZEV4cG9ydHNbaWQubmFtZV0gPSBpZDtcbiAgfVxufTtcblxucHAkMy5jdXJyZW50U2NvcGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2NvcGVTdGFja1t0aGlzLnNjb3BlU3RhY2subGVuZ3RoIC0gMV1cbn07XG5cbnBwJDMuY3VycmVudFZhclNjb3BlID0gZnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLnNjb3BlU3RhY2subGVuZ3RoIC0gMTs7IGktLSkge1xuICAgIHZhciBzY29wZSA9IHRoaXMuc2NvcGVTdGFja1tpXTtcbiAgICBpZiAoc2NvcGUuZmxhZ3MgJiBTQ09QRV9WQVIpIHsgcmV0dXJuIHNjb3BlIH1cbiAgfVxufTtcblxuLy8gQ291bGQgYmUgdXNlZnVsIGZvciBgdGhpc2AsIGBuZXcudGFyZ2V0YCwgYHN1cGVyKClgLCBgc3VwZXIucHJvcGVydHlgLCBhbmQgYHN1cGVyW3Byb3BlcnR5XWAuXG5wcCQzLmN1cnJlbnRUaGlzU2NvcGUgPSBmdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgaSA9IHRoaXMuc2NvcGVTdGFjay5sZW5ndGggLSAxOzsgaS0tKSB7XG4gICAgdmFyIHNjb3BlID0gdGhpcy5zY29wZVN0YWNrW2ldO1xuICAgIGlmIChzY29wZS5mbGFncyAmIFNDT1BFX1ZBUiAmJiAhKHNjb3BlLmZsYWdzICYgU0NPUEVfQVJST1cpKSB7IHJldHVybiBzY29wZSB9XG4gIH1cbn07XG5cbnZhciBOb2RlID0gZnVuY3Rpb24gTm9kZShwYXJzZXIsIHBvcywgbG9jKSB7XG4gIHRoaXMudHlwZSA9IFwiXCI7XG4gIHRoaXMuc3RhcnQgPSBwb3M7XG4gIHRoaXMuZW5kID0gMDtcbiAgaWYgKHBhcnNlci5vcHRpb25zLmxvY2F0aW9ucylcbiAgICB7IHRoaXMubG9jID0gbmV3IFNvdXJjZUxvY2F0aW9uKHBhcnNlciwgbG9jKTsgfVxuICBpZiAocGFyc2VyLm9wdGlvbnMuZGlyZWN0U291cmNlRmlsZSlcbiAgICB7IHRoaXMuc291cmNlRmlsZSA9IHBhcnNlci5vcHRpb25zLmRpcmVjdFNvdXJjZUZpbGU7IH1cbiAgaWYgKHBhcnNlci5vcHRpb25zLnJhbmdlcylcbiAgICB7IHRoaXMucmFuZ2UgPSBbcG9zLCAwXTsgfVxufTtcblxuLy8gU3RhcnQgYW4gQVNUIG5vZGUsIGF0dGFjaGluZyBhIHN0YXJ0IG9mZnNldC5cblxudmFyIHBwJDIgPSBQYXJzZXIucHJvdG90eXBlO1xuXG5wcCQyLnN0YXJ0Tm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IE5vZGUodGhpcywgdGhpcy5zdGFydCwgdGhpcy5zdGFydExvYylcbn07XG5cbnBwJDIuc3RhcnROb2RlQXQgPSBmdW5jdGlvbihwb3MsIGxvYykge1xuICByZXR1cm4gbmV3IE5vZGUodGhpcywgcG9zLCBsb2MpXG59O1xuXG4vLyBGaW5pc2ggYW4gQVNUIG5vZGUsIGFkZGluZyBgdHlwZWAgYW5kIGBlbmRgIHByb3BlcnRpZXMuXG5cbmZ1bmN0aW9uIGZpbmlzaE5vZGVBdChub2RlLCB0eXBlLCBwb3MsIGxvYykge1xuICBub2RlLnR5cGUgPSB0eXBlO1xuICBub2RlLmVuZCA9IHBvcztcbiAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpXG4gICAgeyBub2RlLmxvYy5lbmQgPSBsb2M7IH1cbiAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpXG4gICAgeyBub2RlLnJhbmdlWzFdID0gcG9zOyB9XG4gIHJldHVybiBub2RlXG59XG5cbnBwJDIuZmluaXNoTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIHR5cGUpIHtcbiAgcmV0dXJuIGZpbmlzaE5vZGVBdC5jYWxsKHRoaXMsIG5vZGUsIHR5cGUsIHRoaXMubGFzdFRva0VuZCwgdGhpcy5sYXN0VG9rRW5kTG9jKVxufTtcblxuLy8gRmluaXNoIG5vZGUgYXQgZ2l2ZW4gcG9zaXRpb25cblxucHAkMi5maW5pc2hOb2RlQXQgPSBmdW5jdGlvbihub2RlLCB0eXBlLCBwb3MsIGxvYykge1xuICByZXR1cm4gZmluaXNoTm9kZUF0LmNhbGwodGhpcywgbm9kZSwgdHlwZSwgcG9zLCBsb2MpXG59O1xuXG5wcCQyLmNvcHlOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICB2YXIgbmV3Tm9kZSA9IG5ldyBOb2RlKHRoaXMsIG5vZGUuc3RhcnQsIHRoaXMuc3RhcnRMb2MpO1xuICBmb3IgKHZhciBwcm9wIGluIG5vZGUpIHsgbmV3Tm9kZVtwcm9wXSA9IG5vZGVbcHJvcF07IH1cbiAgcmV0dXJuIG5ld05vZGVcbn07XG5cbi8vIFRoaXMgZmlsZSBjb250YWlucyBVbmljb2RlIHByb3BlcnRpZXMgZXh0cmFjdGVkIGZyb20gdGhlIEVDTUFTY3JpcHQgc3BlY2lmaWNhdGlvbi5cbi8vIFRoZSBsaXN0cyBhcmUgZXh0cmFjdGVkIGxpa2Ugc286XG4vLyAkJCgnI3RhYmxlLWJpbmFyeS11bmljb2RlLXByb3BlcnRpZXMgPiBmaWd1cmUgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoMSkgY29kZScpLm1hcChlbCA9PiBlbC5pbm5lclRleHQpXG5cbi8vICN0YWJsZS1iaW5hcnktdW5pY29kZS1wcm9wZXJ0aWVzXG52YXIgZWNtYTlCaW5hcnlQcm9wZXJ0aWVzID0gXCJBU0NJSSBBU0NJSV9IZXhfRGlnaXQgQUhleCBBbHBoYWJldGljIEFscGhhIEFueSBBc3NpZ25lZCBCaWRpX0NvbnRyb2wgQmlkaV9DIEJpZGlfTWlycm9yZWQgQmlkaV9NIENhc2VfSWdub3JhYmxlIENJIENhc2VkIENoYW5nZXNfV2hlbl9DYXNlZm9sZGVkIENXQ0YgQ2hhbmdlc19XaGVuX0Nhc2VtYXBwZWQgQ1dDTSBDaGFuZ2VzX1doZW5fTG93ZXJjYXNlZCBDV0wgQ2hhbmdlc19XaGVuX05GS0NfQ2FzZWZvbGRlZCBDV0tDRiBDaGFuZ2VzX1doZW5fVGl0bGVjYXNlZCBDV1QgQ2hhbmdlc19XaGVuX1VwcGVyY2FzZWQgQ1dVIERhc2ggRGVmYXVsdF9JZ25vcmFibGVfQ29kZV9Qb2ludCBESSBEZXByZWNhdGVkIERlcCBEaWFjcml0aWMgRGlhIEVtb2ppIEVtb2ppX0NvbXBvbmVudCBFbW9qaV9Nb2RpZmllciBFbW9qaV9Nb2RpZmllcl9CYXNlIEVtb2ppX1ByZXNlbnRhdGlvbiBFeHRlbmRlciBFeHQgR3JhcGhlbWVfQmFzZSBHcl9CYXNlIEdyYXBoZW1lX0V4dGVuZCBHcl9FeHQgSGV4X0RpZ2l0IEhleCBJRFNfQmluYXJ5X09wZXJhdG9yIElEU0IgSURTX1RyaW5hcnlfT3BlcmF0b3IgSURTVCBJRF9Db250aW51ZSBJREMgSURfU3RhcnQgSURTIElkZW9ncmFwaGljIElkZW8gSm9pbl9Db250cm9sIEpvaW5fQyBMb2dpY2FsX09yZGVyX0V4Y2VwdGlvbiBMT0UgTG93ZXJjYXNlIExvd2VyIE1hdGggTm9uY2hhcmFjdGVyX0NvZGVfUG9pbnQgTkNoYXIgUGF0dGVybl9TeW50YXggUGF0X1N5biBQYXR0ZXJuX1doaXRlX1NwYWNlIFBhdF9XUyBRdW90YXRpb25fTWFyayBRTWFyayBSYWRpY2FsIFJlZ2lvbmFsX0luZGljYXRvciBSSSBTZW50ZW5jZV9UZXJtaW5hbCBTVGVybSBTb2Z0X0RvdHRlZCBTRCBUZXJtaW5hbF9QdW5jdHVhdGlvbiBUZXJtIFVuaWZpZWRfSWRlb2dyYXBoIFVJZGVvIFVwcGVyY2FzZSBVcHBlciBWYXJpYXRpb25fU2VsZWN0b3IgVlMgV2hpdGVfU3BhY2Ugc3BhY2UgWElEX0NvbnRpbnVlIFhJREMgWElEX1N0YXJ0IFhJRFNcIjtcbnZhciBlY21hMTBCaW5hcnlQcm9wZXJ0aWVzID0gZWNtYTlCaW5hcnlQcm9wZXJ0aWVzICsgXCIgRXh0ZW5kZWRfUGljdG9ncmFwaGljXCI7XG52YXIgZWNtYTExQmluYXJ5UHJvcGVydGllcyA9IGVjbWExMEJpbmFyeVByb3BlcnRpZXM7XG52YXIgZWNtYTEyQmluYXJ5UHJvcGVydGllcyA9IGVjbWExMUJpbmFyeVByb3BlcnRpZXMgKyBcIiBFQmFzZSBFQ29tcCBFTW9kIEVQcmVzIEV4dFBpY3RcIjtcbnZhciBlY21hMTNCaW5hcnlQcm9wZXJ0aWVzID0gZWNtYTEyQmluYXJ5UHJvcGVydGllcztcbnZhciBlY21hMTRCaW5hcnlQcm9wZXJ0aWVzID0gZWNtYTEzQmluYXJ5UHJvcGVydGllcztcblxudmFyIHVuaWNvZGVCaW5hcnlQcm9wZXJ0aWVzID0ge1xuICA5OiBlY21hOUJpbmFyeVByb3BlcnRpZXMsXG4gIDEwOiBlY21hMTBCaW5hcnlQcm9wZXJ0aWVzLFxuICAxMTogZWNtYTExQmluYXJ5UHJvcGVydGllcyxcbiAgMTI6IGVjbWExMkJpbmFyeVByb3BlcnRpZXMsXG4gIDEzOiBlY21hMTNCaW5hcnlQcm9wZXJ0aWVzLFxuICAxNDogZWNtYTE0QmluYXJ5UHJvcGVydGllc1xufTtcblxuLy8gI3RhYmxlLWJpbmFyeS11bmljb2RlLXByb3BlcnRpZXMtb2Ytc3RyaW5nc1xudmFyIGVjbWExNEJpbmFyeVByb3BlcnRpZXNPZlN0cmluZ3MgPSBcIkJhc2ljX0Vtb2ppIEVtb2ppX0tleWNhcF9TZXF1ZW5jZSBSR0lfRW1vamlfTW9kaWZpZXJfU2VxdWVuY2UgUkdJX0Vtb2ppX0ZsYWdfU2VxdWVuY2UgUkdJX0Vtb2ppX1RhZ19TZXF1ZW5jZSBSR0lfRW1vamlfWldKX1NlcXVlbmNlIFJHSV9FbW9qaVwiO1xuXG52YXIgdW5pY29kZUJpbmFyeVByb3BlcnRpZXNPZlN0cmluZ3MgPSB7XG4gIDk6IFwiXCIsXG4gIDEwOiBcIlwiLFxuICAxMTogXCJcIixcbiAgMTI6IFwiXCIsXG4gIDEzOiBcIlwiLFxuICAxNDogZWNtYTE0QmluYXJ5UHJvcGVydGllc09mU3RyaW5nc1xufTtcblxuLy8gI3RhYmxlLXVuaWNvZGUtZ2VuZXJhbC1jYXRlZ29yeS12YWx1ZXNcbnZhciB1bmljb2RlR2VuZXJhbENhdGVnb3J5VmFsdWVzID0gXCJDYXNlZF9MZXR0ZXIgTEMgQ2xvc2VfUHVuY3R1YXRpb24gUGUgQ29ubmVjdG9yX1B1bmN0dWF0aW9uIFBjIENvbnRyb2wgQ2MgY250cmwgQ3VycmVuY3lfU3ltYm9sIFNjIERhc2hfUHVuY3R1YXRpb24gUGQgRGVjaW1hbF9OdW1iZXIgTmQgZGlnaXQgRW5jbG9zaW5nX01hcmsgTWUgRmluYWxfUHVuY3R1YXRpb24gUGYgRm9ybWF0IENmIEluaXRpYWxfUHVuY3R1YXRpb24gUGkgTGV0dGVyIEwgTGV0dGVyX051bWJlciBObCBMaW5lX1NlcGFyYXRvciBabCBMb3dlcmNhc2VfTGV0dGVyIExsIE1hcmsgTSBDb21iaW5pbmdfTWFyayBNYXRoX1N5bWJvbCBTbSBNb2RpZmllcl9MZXR0ZXIgTG0gTW9kaWZpZXJfU3ltYm9sIFNrIE5vbnNwYWNpbmdfTWFyayBNbiBOdW1iZXIgTiBPcGVuX1B1bmN0dWF0aW9uIFBzIE90aGVyIEMgT3RoZXJfTGV0dGVyIExvIE90aGVyX051bWJlciBObyBPdGhlcl9QdW5jdHVhdGlvbiBQbyBPdGhlcl9TeW1ib2wgU28gUGFyYWdyYXBoX1NlcGFyYXRvciBacCBQcml2YXRlX1VzZSBDbyBQdW5jdHVhdGlvbiBQIHB1bmN0IFNlcGFyYXRvciBaIFNwYWNlX1NlcGFyYXRvciBacyBTcGFjaW5nX01hcmsgTWMgU3Vycm9nYXRlIENzIFN5bWJvbCBTIFRpdGxlY2FzZV9MZXR0ZXIgTHQgVW5hc3NpZ25lZCBDbiBVcHBlcmNhc2VfTGV0dGVyIEx1XCI7XG5cbi8vICN0YWJsZS11bmljb2RlLXNjcmlwdC12YWx1ZXNcbnZhciBlY21hOVNjcmlwdFZhbHVlcyA9IFwiQWRsYW0gQWRsbSBBaG9tIEFuYXRvbGlhbl9IaWVyb2dseXBocyBIbHV3IEFyYWJpYyBBcmFiIEFybWVuaWFuIEFybW4gQXZlc3RhbiBBdnN0IEJhbGluZXNlIEJhbGkgQmFtdW0gQmFtdSBCYXNzYV9WYWggQmFzcyBCYXRhayBCYXRrIEJlbmdhbGkgQmVuZyBCaGFpa3N1a2kgQmhrcyBCb3BvbW9mbyBCb3BvIEJyYWhtaSBCcmFoIEJyYWlsbGUgQnJhaSBCdWdpbmVzZSBCdWdpIEJ1aGlkIEJ1aGQgQ2FuYWRpYW5fQWJvcmlnaW5hbCBDYW5zIENhcmlhbiBDYXJpIENhdWNhc2lhbl9BbGJhbmlhbiBBZ2hiIENoYWttYSBDYWttIENoYW0gQ2hhbSBDaGVyb2tlZSBDaGVyIENvbW1vbiBaeXl5IENvcHRpYyBDb3B0IFFhYWMgQ3VuZWlmb3JtIFhzdXggQ3lwcmlvdCBDcHJ0IEN5cmlsbGljIEN5cmwgRGVzZXJldCBEc3J0IERldmFuYWdhcmkgRGV2YSBEdXBsb3lhbiBEdXBsIEVneXB0aWFuX0hpZXJvZ2x5cGhzIEVneXAgRWxiYXNhbiBFbGJhIEV0aGlvcGljIEV0aGkgR2VvcmdpYW4gR2VvciBHbGFnb2xpdGljIEdsYWcgR290aGljIEdvdGggR3JhbnRoYSBHcmFuIEdyZWVrIEdyZWsgR3VqYXJhdGkgR3VqciBHdXJtdWtoaSBHdXJ1IEhhbiBIYW5pIEhhbmd1bCBIYW5nIEhhbnVub28gSGFubyBIYXRyYW4gSGF0ciBIZWJyZXcgSGViciBIaXJhZ2FuYSBIaXJhIEltcGVyaWFsX0FyYW1haWMgQXJtaSBJbmhlcml0ZWQgWmluaCBRYWFpIEluc2NyaXB0aW9uYWxfUGFobGF2aSBQaGxpIEluc2NyaXB0aW9uYWxfUGFydGhpYW4gUHJ0aSBKYXZhbmVzZSBKYXZhIEthaXRoaSBLdGhpIEthbm5hZGEgS25kYSBLYXRha2FuYSBLYW5hIEtheWFoX0xpIEthbGkgS2hhcm9zaHRoaSBLaGFyIEtobWVyIEtobXIgS2hvamtpIEtob2ogS2h1ZGF3YWRpIFNpbmQgTGFvIExhb28gTGF0aW4gTGF0biBMZXBjaGEgTGVwYyBMaW1idSBMaW1iIExpbmVhcl9BIExpbmEgTGluZWFyX0IgTGluYiBMaXN1IExpc3UgTHljaWFuIEx5Y2kgTHlkaWFuIEx5ZGkgTWFoYWphbmkgTWFoaiBNYWxheWFsYW0gTWx5bSBNYW5kYWljIE1hbmQgTWFuaWNoYWVhbiBNYW5pIE1hcmNoZW4gTWFyYyBNYXNhcmFtX0dvbmRpIEdvbm0gTWVldGVpX01heWVrIE10ZWkgTWVuZGVfS2lrYWt1aSBNZW5kIE1lcm9pdGljX0N1cnNpdmUgTWVyYyBNZXJvaXRpY19IaWVyb2dseXBocyBNZXJvIE1pYW8gUGxyZCBNb2RpIE1vbmdvbGlhbiBNb25nIE1ybyBNcm9vIE11bHRhbmkgTXVsdCBNeWFubWFyIE15bXIgTmFiYXRhZWFuIE5iYXQgTmV3X1RhaV9MdWUgVGFsdSBOZXdhIE5ld2EgTmtvIE5rb28gTnVzaHUgTnNodSBPZ2hhbSBPZ2FtIE9sX0NoaWtpIE9sY2sgT2xkX0h1bmdhcmlhbiBIdW5nIE9sZF9JdGFsaWMgSXRhbCBPbGRfTm9ydGhfQXJhYmlhbiBOYXJiIE9sZF9QZXJtaWMgUGVybSBPbGRfUGVyc2lhbiBYcGVvIE9sZF9Tb3V0aF9BcmFiaWFuIFNhcmIgT2xkX1R1cmtpYyBPcmtoIE9yaXlhIE9yeWEgT3NhZ2UgT3NnZSBPc21hbnlhIE9zbWEgUGFoYXdoX0htb25nIEhtbmcgUGFsbXlyZW5lIFBhbG0gUGF1X0Npbl9IYXUgUGF1YyBQaGFnc19QYSBQaGFnIFBob2VuaWNpYW4gUGhueCBQc2FsdGVyX1BhaGxhdmkgUGhscCBSZWphbmcgUmpuZyBSdW5pYyBSdW5yIFNhbWFyaXRhbiBTYW1yIFNhdXJhc2h0cmEgU2F1ciBTaGFyYWRhIFNocmQgU2hhdmlhbiBTaGF3IFNpZGRoYW0gU2lkZCBTaWduV3JpdGluZyBTZ253IFNpbmhhbGEgU2luaCBTb3JhX1NvbXBlbmcgU29yYSBTb3lvbWJvIFNveW8gU3VuZGFuZXNlIFN1bmQgU3lsb3RpX05hZ3JpIFN5bG8gU3lyaWFjIFN5cmMgVGFnYWxvZyBUZ2xnIFRhZ2JhbndhIFRhZ2IgVGFpX0xlIFRhbGUgVGFpX1RoYW0gTGFuYSBUYWlfVmlldCBUYXZ0IFRha3JpIFRha3IgVGFtaWwgVGFtbCBUYW5ndXQgVGFuZyBUZWx1Z3UgVGVsdSBUaGFhbmEgVGhhYSBUaGFpIFRoYWkgVGliZXRhbiBUaWJ0IFRpZmluYWdoIFRmbmcgVGlyaHV0YSBUaXJoIFVnYXJpdGljIFVnYXIgVmFpIFZhaWkgV2FyYW5nX0NpdGkgV2FyYSBZaSBZaWlpIFphbmFiYXphcl9TcXVhcmUgWmFuYlwiO1xudmFyIGVjbWExMFNjcmlwdFZhbHVlcyA9IGVjbWE5U2NyaXB0VmFsdWVzICsgXCIgRG9ncmEgRG9nciBHdW5qYWxhX0dvbmRpIEdvbmcgSGFuaWZpX1JvaGluZ3lhIFJvaGcgTWFrYXNhciBNYWthIE1lZGVmYWlkcmluIE1lZGYgT2xkX1NvZ2RpYW4gU29nbyBTb2dkaWFuIFNvZ2RcIjtcbnZhciBlY21hMTFTY3JpcHRWYWx1ZXMgPSBlY21hMTBTY3JpcHRWYWx1ZXMgKyBcIiBFbHltYWljIEVseW0gTmFuZGluYWdhcmkgTmFuZCBOeWlha2VuZ19QdWFjaHVlX0htb25nIEhtbnAgV2FuY2hvIFdjaG9cIjtcbnZhciBlY21hMTJTY3JpcHRWYWx1ZXMgPSBlY21hMTFTY3JpcHRWYWx1ZXMgKyBcIiBDaG9yYXNtaWFuIENocnMgRGlhayBEaXZlc19Ba3VydSBLaGl0YW5fU21hbGxfU2NyaXB0IEtpdHMgWWV6aSBZZXppZGlcIjtcbnZhciBlY21hMTNTY3JpcHRWYWx1ZXMgPSBlY21hMTJTY3JpcHRWYWx1ZXMgKyBcIiBDeXByb19NaW5vYW4gQ3BtbiBPbGRfVXlnaHVyIE91Z3IgVGFuZ3NhIFRuc2EgVG90byBWaXRoa3VxaSBWaXRoXCI7XG52YXIgZWNtYTE0U2NyaXB0VmFsdWVzID0gZWNtYTEzU2NyaXB0VmFsdWVzICsgXCIgSHJrdCBLYXRha2FuYV9Pcl9IaXJhZ2FuYSBLYXdpIE5hZ19NdW5kYXJpIE5hZ20gVW5rbm93biBaenp6XCI7XG5cbnZhciB1bmljb2RlU2NyaXB0VmFsdWVzID0ge1xuICA5OiBlY21hOVNjcmlwdFZhbHVlcyxcbiAgMTA6IGVjbWExMFNjcmlwdFZhbHVlcyxcbiAgMTE6IGVjbWExMVNjcmlwdFZhbHVlcyxcbiAgMTI6IGVjbWExMlNjcmlwdFZhbHVlcyxcbiAgMTM6IGVjbWExM1NjcmlwdFZhbHVlcyxcbiAgMTQ6IGVjbWExNFNjcmlwdFZhbHVlc1xufTtcblxudmFyIGRhdGEgPSB7fTtcbmZ1bmN0aW9uIGJ1aWxkVW5pY29kZURhdGEoZWNtYVZlcnNpb24pIHtcbiAgdmFyIGQgPSBkYXRhW2VjbWFWZXJzaW9uXSA9IHtcbiAgICBiaW5hcnk6IHdvcmRzUmVnZXhwKHVuaWNvZGVCaW5hcnlQcm9wZXJ0aWVzW2VjbWFWZXJzaW9uXSArIFwiIFwiICsgdW5pY29kZUdlbmVyYWxDYXRlZ29yeVZhbHVlcyksXG4gICAgYmluYXJ5T2ZTdHJpbmdzOiB3b3Jkc1JlZ2V4cCh1bmljb2RlQmluYXJ5UHJvcGVydGllc09mU3RyaW5nc1tlY21hVmVyc2lvbl0pLFxuICAgIG5vbkJpbmFyeToge1xuICAgICAgR2VuZXJhbF9DYXRlZ29yeTogd29yZHNSZWdleHAodW5pY29kZUdlbmVyYWxDYXRlZ29yeVZhbHVlcyksXG4gICAgICBTY3JpcHQ6IHdvcmRzUmVnZXhwKHVuaWNvZGVTY3JpcHRWYWx1ZXNbZWNtYVZlcnNpb25dKVxuICAgIH1cbiAgfTtcbiAgZC5ub25CaW5hcnkuU2NyaXB0X0V4dGVuc2lvbnMgPSBkLm5vbkJpbmFyeS5TY3JpcHQ7XG5cbiAgZC5ub25CaW5hcnkuZ2MgPSBkLm5vbkJpbmFyeS5HZW5lcmFsX0NhdGVnb3J5O1xuICBkLm5vbkJpbmFyeS5zYyA9IGQubm9uQmluYXJ5LlNjcmlwdDtcbiAgZC5ub25CaW5hcnkuc2N4ID0gZC5ub25CaW5hcnkuU2NyaXB0X0V4dGVuc2lvbnM7XG59XG5cbmZvciAodmFyIGkgPSAwLCBsaXN0ID0gWzksIDEwLCAxMSwgMTIsIDEzLCAxNF07IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gIHZhciBlY21hVmVyc2lvbiA9IGxpc3RbaV07XG5cbiAgYnVpbGRVbmljb2RlRGF0YShlY21hVmVyc2lvbik7XG59XG5cbnZhciBwcCQxID0gUGFyc2VyLnByb3RvdHlwZTtcblxudmFyIFJlZ0V4cFZhbGlkYXRpb25TdGF0ZSA9IGZ1bmN0aW9uIFJlZ0V4cFZhbGlkYXRpb25TdGF0ZShwYXJzZXIpIHtcbiAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIHRoaXMudmFsaWRGbGFncyA9IFwiZ2ltXCIgKyAocGFyc2VyLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNiA/IFwidXlcIiA6IFwiXCIpICsgKHBhcnNlci5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkgPyBcInNcIiA6IFwiXCIpICsgKHBhcnNlci5vcHRpb25zLmVjbWFWZXJzaW9uID49IDEzID8gXCJkXCIgOiBcIlwiKSArIChwYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxNSA/IFwidlwiIDogXCJcIik7XG4gIHRoaXMudW5pY29kZVByb3BlcnRpZXMgPSBkYXRhW3BhcnNlci5vcHRpb25zLmVjbWFWZXJzaW9uID49IDE0ID8gMTQgOiBwYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbl07XG4gIHRoaXMuc291cmNlID0gXCJcIjtcbiAgdGhpcy5mbGFncyA9IFwiXCI7XG4gIHRoaXMuc3RhcnQgPSAwO1xuICB0aGlzLnN3aXRjaFUgPSBmYWxzZTtcbiAgdGhpcy5zd2l0Y2hWID0gZmFsc2U7XG4gIHRoaXMuc3dpdGNoTiA9IGZhbHNlO1xuICB0aGlzLnBvcyA9IDA7XG4gIHRoaXMubGFzdEludFZhbHVlID0gMDtcbiAgdGhpcy5sYXN0U3RyaW5nVmFsdWUgPSBcIlwiO1xuICB0aGlzLmxhc3RBc3NlcnRpb25Jc1F1YW50aWZpYWJsZSA9IGZhbHNlO1xuICB0aGlzLm51bUNhcHR1cmluZ1BhcmVucyA9IDA7XG4gIHRoaXMubWF4QmFja1JlZmVyZW5jZSA9IDA7XG4gIHRoaXMuZ3JvdXBOYW1lcyA9IFtdO1xuICB0aGlzLmJhY2tSZWZlcmVuY2VOYW1lcyA9IFtdO1xufTtcblxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0IChzdGFydCwgcGF0dGVybiwgZmxhZ3MpIHtcbiAgdmFyIHVuaWNvZGVTZXRzID0gZmxhZ3MuaW5kZXhPZihcInZcIikgIT09IC0xO1xuICB2YXIgdW5pY29kZSA9IGZsYWdzLmluZGV4T2YoXCJ1XCIpICE9PSAtMTtcbiAgdGhpcy5zdGFydCA9IHN0YXJ0IHwgMDtcbiAgdGhpcy5zb3VyY2UgPSBwYXR0ZXJuICsgXCJcIjtcbiAgdGhpcy5mbGFncyA9IGZsYWdzO1xuICBpZiAodW5pY29kZVNldHMgJiYgdGhpcy5wYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxNSkge1xuICAgIHRoaXMuc3dpdGNoVSA9IHRydWU7XG4gICAgdGhpcy5zd2l0Y2hWID0gdHJ1ZTtcbiAgICB0aGlzLnN3aXRjaE4gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3dpdGNoVSA9IHVuaWNvZGUgJiYgdGhpcy5wYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2O1xuICAgIHRoaXMuc3dpdGNoViA9IGZhbHNlO1xuICAgIHRoaXMuc3dpdGNoTiA9IHVuaWNvZGUgJiYgdGhpcy5wYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5O1xuICB9XG59O1xuXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLnJhaXNlID0gZnVuY3Rpb24gcmFpc2UgKG1lc3NhZ2UpIHtcbiAgdGhpcy5wYXJzZXIucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LCAoXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbjogL1wiICsgKHRoaXMuc291cmNlKSArIFwiLzogXCIgKyBtZXNzYWdlKSk7XG59O1xuXG4vLyBJZiB1IGZsYWcgaXMgZ2l2ZW4sIHRoaXMgcmV0dXJucyB0aGUgY29kZSBwb2ludCBhdCB0aGUgaW5kZXggKGl0IGNvbWJpbmVzIGEgc3Vycm9nYXRlIHBhaXIpLlxuLy8gT3RoZXJ3aXNlLCB0aGlzIHJldHVybnMgdGhlIGNvZGUgdW5pdCBvZiB0aGUgaW5kZXggKGNhbiBiZSBhIHBhcnQgb2YgYSBzdXJyb2dhdGUgcGFpcikuXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gYXQgKGksIGZvcmNlVSkge1xuICAgIGlmICggZm9yY2VVID09PSB2b2lkIDAgKSBmb3JjZVUgPSBmYWxzZTtcblxuICB2YXIgcyA9IHRoaXMuc291cmNlO1xuICB2YXIgbCA9IHMubGVuZ3RoO1xuICBpZiAoaSA+PSBsKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSk7XG4gIGlmICghKGZvcmNlVSB8fCB0aGlzLnN3aXRjaFUpIHx8IGMgPD0gMHhEN0ZGIHx8IGMgPj0gMHhFMDAwIHx8IGkgKyAxID49IGwpIHtcbiAgICByZXR1cm4gY1xuICB9XG4gIHZhciBuZXh0ID0gcy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgcmV0dXJuIG5leHQgPj0gMHhEQzAwICYmIG5leHQgPD0gMHhERkZGID8gKGMgPDwgMTApICsgbmV4dCAtIDB4MzVGREMwMCA6IGNcbn07XG5cblJlZ0V4cFZhbGlkYXRpb25TdGF0ZS5wcm90b3R5cGUubmV4dEluZGV4ID0gZnVuY3Rpb24gbmV4dEluZGV4IChpLCBmb3JjZVUpIHtcbiAgICBpZiAoIGZvcmNlVSA9PT0gdm9pZCAwICkgZm9yY2VVID0gZmFsc2U7XG5cbiAgdmFyIHMgPSB0aGlzLnNvdXJjZTtcbiAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgaWYgKGkgPj0gbCkge1xuICAgIHJldHVybiBsXG4gIH1cbiAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSksIG5leHQ7XG4gIGlmICghKGZvcmNlVSB8fCB0aGlzLnN3aXRjaFUpIHx8IGMgPD0gMHhEN0ZGIHx8IGMgPj0gMHhFMDAwIHx8IGkgKyAxID49IGwgfHxcbiAgICAgIChuZXh0ID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweERDMDAgfHwgbmV4dCA+IDB4REZGRikge1xuICAgIHJldHVybiBpICsgMVxuICB9XG4gIHJldHVybiBpICsgMlxufTtcblxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gY3VycmVudCAoZm9yY2VVKSB7XG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xuXG4gIHJldHVybiB0aGlzLmF0KHRoaXMucG9zLCBmb3JjZVUpXG59O1xuXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLmxvb2thaGVhZCA9IGZ1bmN0aW9uIGxvb2thaGVhZCAoZm9yY2VVKSB7XG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xuXG4gIHJldHVybiB0aGlzLmF0KHRoaXMubmV4dEluZGV4KHRoaXMucG9zLCBmb3JjZVUpLCBmb3JjZVUpXG59O1xuXG5SZWdFeHBWYWxpZGF0aW9uU3RhdGUucHJvdG90eXBlLmFkdmFuY2UgPSBmdW5jdGlvbiBhZHZhbmNlIChmb3JjZVUpIHtcbiAgICBpZiAoIGZvcmNlVSA9PT0gdm9pZCAwICkgZm9yY2VVID0gZmFsc2U7XG5cbiAgdGhpcy5wb3MgPSB0aGlzLm5leHRJbmRleCh0aGlzLnBvcywgZm9yY2VVKTtcbn07XG5cblJlZ0V4cFZhbGlkYXRpb25TdGF0ZS5wcm90b3R5cGUuZWF0ID0gZnVuY3Rpb24gZWF0IChjaCwgZm9yY2VVKSB7XG4gICAgaWYgKCBmb3JjZVUgPT09IHZvaWQgMCApIGZvcmNlVSA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmN1cnJlbnQoZm9yY2VVKSA9PT0gY2gpIHtcbiAgICB0aGlzLmFkdmFuY2UoZm9yY2VVKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuUmVnRXhwVmFsaWRhdGlvblN0YXRlLnByb3RvdHlwZS5lYXRDaGFycyA9IGZ1bmN0aW9uIGVhdENoYXJzIChjaHMsIGZvcmNlVSkge1xuICAgIGlmICggZm9yY2VVID09PSB2b2lkIDAgKSBmb3JjZVUgPSBmYWxzZTtcblxuICB2YXIgcG9zID0gdGhpcy5wb3M7XG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gY2hzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBjaCA9IGxpc3RbaV07XG5cbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5hdChwb3MsIGZvcmNlVSk7XG4gICAgaWYgKGN1cnJlbnQgPT09IC0xIHx8IGN1cnJlbnQgIT09IGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcG9zID0gdGhpcy5uZXh0SW5kZXgocG9zLCBmb3JjZVUpO1xuICB9XG4gIHRoaXMucG9zID0gcG9zO1xuICByZXR1cm4gdHJ1ZVxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgZmxhZ3MgcGFydCBvZiBhIGdpdmVuIFJlZ0V4cExpdGVyYWwuXG4gKlxuICogQHBhcmFtIHtSZWdFeHBWYWxpZGF0aW9uU3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSB0byB2YWxpZGF0ZSBSZWdFeHAuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xucHAkMS52YWxpZGF0ZVJlZ0V4cEZsYWdzID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIHZhbGlkRmxhZ3MgPSBzdGF0ZS52YWxpZEZsYWdzO1xuICB2YXIgZmxhZ3MgPSBzdGF0ZS5mbGFncztcblxuICB2YXIgdSA9IGZhbHNlO1xuICB2YXIgdiA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmxhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmxhZyA9IGZsYWdzLmNoYXJBdChpKTtcbiAgICBpZiAodmFsaWRGbGFncy5pbmRleE9mKGZsYWcpID09PSAtMSkge1xuICAgICAgdGhpcy5yYWlzZShzdGF0ZS5zdGFydCwgXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbiBmbGFnXCIpO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MuaW5kZXhPZihmbGFnLCBpICsgMSkgPiAtMSkge1xuICAgICAgdGhpcy5yYWlzZShzdGF0ZS5zdGFydCwgXCJEdXBsaWNhdGUgcmVndWxhciBleHByZXNzaW9uIGZsYWdcIik7XG4gICAgfVxuICAgIGlmIChmbGFnID09PSBcInVcIikgeyB1ID0gdHJ1ZTsgfVxuICAgIGlmIChmbGFnID09PSBcInZcIikgeyB2ID0gdHJ1ZTsgfVxuICB9XG4gIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gMTUgJiYgdSAmJiB2KSB7XG4gICAgdGhpcy5yYWlzZShzdGF0ZS5zdGFydCwgXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbiBmbGFnXCIpO1xuICB9XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIHRoZSBwYXR0ZXJuIHBhcnQgb2YgYSBnaXZlbiBSZWdFeHBMaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwVmFsaWRhdGlvblN0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgdG8gdmFsaWRhdGUgUmVnRXhwLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbnBwJDEudmFsaWRhdGVSZWdFeHBQYXR0ZXJuID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdGhpcy5yZWdleHBfcGF0dGVybihzdGF0ZSk7XG5cbiAgLy8gVGhlIGdvYWwgc3ltYm9sIGZvciB0aGUgcGFyc2UgaXMgfFBhdHRlcm5bflUsIH5OXXwuIElmIHRoZSByZXN1bHQgb2ZcbiAgLy8gcGFyc2luZyBjb250YWlucyBhIHxHcm91cE5hbWV8LCByZXBhcnNlIHdpdGggdGhlIGdvYWwgc3ltYm9sXG4gIC8vIHxQYXR0ZXJuW35VLCArTl18IGFuZCB1c2UgdGhpcyByZXN1bHQgaW5zdGVhZC4gVGhyb3cgYSAqU3ludGF4RXJyb3IqXG4gIC8vIGV4Y2VwdGlvbiBpZiBfUF8gZGlkIG5vdCBjb25mb3JtIHRvIHRoZSBncmFtbWFyLCBpZiBhbnkgZWxlbWVudHMgb2YgX1BfXG4gIC8vIHdlcmUgbm90IG1hdGNoZWQgYnkgdGhlIHBhcnNlLCBvciBpZiBhbnkgRWFybHkgRXJyb3IgY29uZGl0aW9ucyBleGlzdC5cbiAgaWYgKCFzdGF0ZS5zd2l0Y2hOICYmIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5ICYmIHN0YXRlLmdyb3VwTmFtZXMubGVuZ3RoID4gMCkge1xuICAgIHN0YXRlLnN3aXRjaE4gPSB0cnVlO1xuICAgIHRoaXMucmVnZXhwX3BhdHRlcm4oc3RhdGUpO1xuICB9XG59O1xuXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1QYXR0ZXJuXG5wcCQxLnJlZ2V4cF9wYXR0ZXJuID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgc3RhdGUucG9zID0gMDtcbiAgc3RhdGUubGFzdEludFZhbHVlID0gMDtcbiAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcbiAgc3RhdGUubGFzdEFzc2VydGlvbklzUXVhbnRpZmlhYmxlID0gZmFsc2U7XG4gIHN0YXRlLm51bUNhcHR1cmluZ1BhcmVucyA9IDA7XG4gIHN0YXRlLm1heEJhY2tSZWZlcmVuY2UgPSAwO1xuICBzdGF0ZS5ncm91cE5hbWVzLmxlbmd0aCA9IDA7XG4gIHN0YXRlLmJhY2tSZWZlcmVuY2VOYW1lcy5sZW5ndGggPSAwO1xuXG4gIHRoaXMucmVnZXhwX2Rpc2p1bmN0aW9uKHN0YXRlKTtcblxuICBpZiAoc3RhdGUucG9zICE9PSBzdGF0ZS5zb3VyY2UubGVuZ3RoKSB7XG4gICAgLy8gTWFrZSB0aGUgc2FtZSBtZXNzYWdlcyBhcyBWOC5cbiAgICBpZiAoc3RhdGUuZWF0KDB4MjkgLyogKSAqLykpIHtcbiAgICAgIHN0YXRlLnJhaXNlKFwiVW5tYXRjaGVkICcpJ1wiKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmVhdCgweDVEIC8qIF0gKi8pIHx8IHN0YXRlLmVhdCgweDdEIC8qIH0gKi8pKSB7XG4gICAgICBzdGF0ZS5yYWlzZShcIkxvbmUgcXVhbnRpZmllciBicmFja2V0c1wiKTtcbiAgICB9XG4gIH1cbiAgaWYgKHN0YXRlLm1heEJhY2tSZWZlcmVuY2UgPiBzdGF0ZS5udW1DYXB0dXJpbmdQYXJlbnMpIHtcbiAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpO1xuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gc3RhdGUuYmFja1JlZmVyZW5jZU5hbWVzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBuYW1lID0gbGlzdFtpXTtcblxuICAgIGlmIChzdGF0ZS5ncm91cE5hbWVzLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgbmFtZWQgY2FwdHVyZSByZWZlcmVuY2VkXCIpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtRGlzanVuY3Rpb25cbnBwJDEucmVnZXhwX2Rpc2p1bmN0aW9uID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdGhpcy5yZWdleHBfYWx0ZXJuYXRpdmUoc3RhdGUpO1xuICB3aGlsZSAoc3RhdGUuZWF0KDB4N0MgLyogfCAqLykpIHtcbiAgICB0aGlzLnJlZ2V4cF9hbHRlcm5hdGl2ZShzdGF0ZSk7XG4gIH1cblxuICAvLyBNYWtlIHRoZSBzYW1lIG1lc3NhZ2UgYXMgVjguXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXRRdWFudGlmaWVyKHN0YXRlLCB0cnVlKSkge1xuICAgIHN0YXRlLnJhaXNlKFwiTm90aGluZyB0byByZXBlYXRcIik7XG4gIH1cbiAgaWYgKHN0YXRlLmVhdCgweDdCIC8qIHsgKi8pKSB7XG4gICAgc3RhdGUucmFpc2UoXCJMb25lIHF1YW50aWZpZXIgYnJhY2tldHNcIik7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUFsdGVybmF0aXZlXG5wcCQxLnJlZ2V4cF9hbHRlcm5hdGl2ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBzdGF0ZS5zb3VyY2UubGVuZ3RoICYmIHRoaXMucmVnZXhwX2VhdFRlcm0oc3RhdGUpKVxuICAgIHsgfVxufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtYW5uZXhCLVRlcm1cbnBwJDEucmVnZXhwX2VhdFRlcm0gPSBmdW5jdGlvbihzdGF0ZSkge1xuICBpZiAodGhpcy5yZWdleHBfZWF0QXNzZXJ0aW9uKHN0YXRlKSkge1xuICAgIC8vIEhhbmRsZSBgUXVhbnRpZmlhYmxlQXNzZXJ0aW9uIFF1YW50aWZpZXJgIGFsdGVybmF0aXZlLlxuICAgIC8vIGBzdGF0ZS5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGVgIGlzIHRydWUgaWYgdGhlIGxhc3QgZWF0ZW4gQXNzZXJ0aW9uXG4gICAgLy8gaXMgYSBRdWFudGlmaWFibGVBc3NlcnRpb24uXG4gICAgaWYgKHN0YXRlLmxhc3RBc3NlcnRpb25Jc1F1YW50aWZpYWJsZSAmJiB0aGlzLnJlZ2V4cF9lYXRRdWFudGlmaWVyKHN0YXRlKSkge1xuICAgICAgLy8gTWFrZSB0aGUgc2FtZSBtZXNzYWdlIGFzIFY4LlxuICAgICAgaWYgKHN0YXRlLnN3aXRjaFUpIHtcbiAgICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHF1YW50aWZpZXJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoc3RhdGUuc3dpdGNoVSA/IHRoaXMucmVnZXhwX2VhdEF0b20oc3RhdGUpIDogdGhpcy5yZWdleHBfZWF0RXh0ZW5kZWRBdG9tKHN0YXRlKSkge1xuICAgIHRoaXMucmVnZXhwX2VhdFF1YW50aWZpZXIoc3RhdGUpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1Bc3NlcnRpb25cbnBwJDEucmVnZXhwX2VhdEFzc2VydGlvbiA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgc3RhdGUubGFzdEFzc2VydGlvbklzUXVhbnRpZmlhYmxlID0gZmFsc2U7XG5cbiAgLy8gXiwgJFxuICBpZiAoc3RhdGUuZWF0KDB4NUUgLyogXiAqLykgfHwgc3RhdGUuZWF0KDB4MjQgLyogJCAqLykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gXFxiIFxcQlxuICBpZiAoc3RhdGUuZWF0KDB4NUMgLyogXFwgKi8pKSB7XG4gICAgaWYgKHN0YXRlLmVhdCgweDQyIC8qIEIgKi8pIHx8IHN0YXRlLmVhdCgweDYyIC8qIGIgKi8pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgfVxuXG4gIC8vIExvb2thaGVhZCAvIExvb2tiZWhpbmRcbiAgaWYgKHN0YXRlLmVhdCgweDI4IC8qICggKi8pICYmIHN0YXRlLmVhdCgweDNGIC8qID8gKi8pKSB7XG4gICAgdmFyIGxvb2tiZWhpbmQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDkpIHtcbiAgICAgIGxvb2tiZWhpbmQgPSBzdGF0ZS5lYXQoMHgzQyAvKiA8ICovKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmVhdCgweDNEIC8qID0gKi8pIHx8IHN0YXRlLmVhdCgweDIxIC8qICEgKi8pKSB7XG4gICAgICB0aGlzLnJlZ2V4cF9kaXNqdW5jdGlvbihzdGF0ZSk7XG4gICAgICBpZiAoIXN0YXRlLmVhdCgweDI5IC8qICkgKi8pKSB7XG4gICAgICAgIHN0YXRlLnJhaXNlKFwiVW50ZXJtaW5hdGVkIGdyb3VwXCIpO1xuICAgICAgfVxuICAgICAgc3RhdGUubGFzdEFzc2VydGlvbklzUXVhbnRpZmlhYmxlID0gIWxvb2tiZWhpbmQ7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLVF1YW50aWZpZXJcbnBwJDEucmVnZXhwX2VhdFF1YW50aWZpZXIgPSBmdW5jdGlvbihzdGF0ZSwgbm9FcnJvcikge1xuICBpZiAoIG5vRXJyb3IgPT09IHZvaWQgMCApIG5vRXJyb3IgPSBmYWxzZTtcblxuICBpZiAodGhpcy5yZWdleHBfZWF0UXVhbnRpZmllclByZWZpeChzdGF0ZSwgbm9FcnJvcikpIHtcbiAgICBzdGF0ZS5lYXQoMHgzRiAvKiA/ICovKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtUXVhbnRpZmllclByZWZpeFxucHAkMS5yZWdleHBfZWF0UXVhbnRpZmllclByZWZpeCA9IGZ1bmN0aW9uKHN0YXRlLCBub0Vycm9yKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGUuZWF0KDB4MkEgLyogKiAqLykgfHxcbiAgICBzdGF0ZS5lYXQoMHgyQiAvKiArICovKSB8fFxuICAgIHN0YXRlLmVhdCgweDNGIC8qID8gKi8pIHx8XG4gICAgdGhpcy5yZWdleHBfZWF0QnJhY2VkUXVhbnRpZmllcihzdGF0ZSwgbm9FcnJvcilcbiAgKVxufTtcbnBwJDEucmVnZXhwX2VhdEJyYWNlZFF1YW50aWZpZXIgPSBmdW5jdGlvbihzdGF0ZSwgbm9FcnJvcikge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIGlmIChzdGF0ZS5lYXQoMHg3QiAvKiB7ICovKSkge1xuICAgIHZhciBtaW4gPSAwLCBtYXggPSAtMTtcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0RGVjaW1hbERpZ2l0cyhzdGF0ZSkpIHtcbiAgICAgIG1pbiA9IHN0YXRlLmxhc3RJbnRWYWx1ZTtcbiAgICAgIGlmIChzdGF0ZS5lYXQoMHgyQyAvKiAsICovKSAmJiB0aGlzLnJlZ2V4cF9lYXREZWNpbWFsRGlnaXRzKHN0YXRlKSkge1xuICAgICAgICBtYXggPSBzdGF0ZS5sYXN0SW50VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuZWF0KDB4N0QgLyogfSAqLykpIHtcbiAgICAgICAgLy8gU3ludGF4RXJyb3IgaW4gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3NlYy10ZXJtXG4gICAgICAgIGlmIChtYXggIT09IC0xICYmIG1heCA8IG1pbiAmJiAhbm9FcnJvcikge1xuICAgICAgICAgIHN0YXRlLnJhaXNlKFwibnVtYmVycyBvdXQgb2Ygb3JkZXIgaW4ge30gcXVhbnRpZmllclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3RhdGUuc3dpdGNoVSAmJiAhbm9FcnJvcikge1xuICAgICAgc3RhdGUucmFpc2UoXCJJbmNvbXBsZXRlIHF1YW50aWZpZXJcIik7XG4gICAgfVxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtQXRvbVxucHAkMS5yZWdleHBfZWF0QXRvbSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiAoXG4gICAgdGhpcy5yZWdleHBfZWF0UGF0dGVybkNoYXJhY3RlcnMoc3RhdGUpIHx8XG4gICAgc3RhdGUuZWF0KDB4MkUgLyogLiAqLykgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRSZXZlcnNlU29saWR1c0F0b21Fc2NhcGUoc3RhdGUpIHx8XG4gICAgdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3Moc3RhdGUpIHx8XG4gICAgdGhpcy5yZWdleHBfZWF0VW5jYXB0dXJpbmdHcm91cChzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRDYXB0dXJpbmdHcm91cChzdGF0ZSlcbiAgKVxufTtcbnBwJDEucmVnZXhwX2VhdFJldmVyc2VTb2xpZHVzQXRvbUVzY2FwZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgaWYgKHN0YXRlLmVhdCgweDVDIC8qIFxcICovKSkge1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRBdG9tRXNjYXBlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xucHAkMS5yZWdleHBfZWF0VW5jYXB0dXJpbmdHcm91cCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgaWYgKHN0YXRlLmVhdCgweDI4IC8qICggKi8pKSB7XG4gICAgaWYgKHN0YXRlLmVhdCgweDNGIC8qID8gKi8pICYmIHN0YXRlLmVhdCgweDNBIC8qIDogKi8pKSB7XG4gICAgICB0aGlzLnJlZ2V4cF9kaXNqdW5jdGlvbihzdGF0ZSk7XG4gICAgICBpZiAoc3RhdGUuZWF0KDB4MjkgLyogKSAqLykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHN0YXRlLnJhaXNlKFwiVW50ZXJtaW5hdGVkIGdyb3VwXCIpO1xuICAgIH1cbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5wcCQxLnJlZ2V4cF9lYXRDYXB0dXJpbmdHcm91cCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lYXQoMHgyOCAvKiAoICovKSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSkge1xuICAgICAgdGhpcy5yZWdleHBfZ3JvdXBTcGVjaWZpZXIoc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuY3VycmVudCgpID09PSAweDNGIC8qID8gKi8pIHtcbiAgICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBncm91cFwiKTtcbiAgICB9XG4gICAgdGhpcy5yZWdleHBfZGlzanVuY3Rpb24oc3RhdGUpO1xuICAgIGlmIChzdGF0ZS5lYXQoMHgyOSAvKiApICovKSkge1xuICAgICAgc3RhdGUubnVtQ2FwdHVyaW5nUGFyZW5zICs9IDE7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBzdGF0ZS5yYWlzZShcIlVudGVybWluYXRlZCBncm91cFwiKTtcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1FeHRlbmRlZEF0b21cbnBwJDEucmVnZXhwX2VhdEV4dGVuZGVkQXRvbSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiAoXG4gICAgc3RhdGUuZWF0KDB4MkUgLyogLiAqLykgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRSZXZlcnNlU29saWR1c0F0b21Fc2NhcGUoc3RhdGUpIHx8XG4gICAgdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3Moc3RhdGUpIHx8XG4gICAgdGhpcy5yZWdleHBfZWF0VW5jYXB0dXJpbmdHcm91cChzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRDYXB0dXJpbmdHcm91cChzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRJbnZhbGlkQnJhY2VkUXVhbnRpZmllcihzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRFeHRlbmRlZFBhdHRlcm5DaGFyYWN0ZXIoc3RhdGUpXG4gIClcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1JbnZhbGlkQnJhY2VkUXVhbnRpZmllclxucHAkMS5yZWdleHBfZWF0SW52YWxpZEJyYWNlZFF1YW50aWZpZXIgPSBmdW5jdGlvbihzdGF0ZSkge1xuICBpZiAodGhpcy5yZWdleHBfZWF0QnJhY2VkUXVhbnRpZmllcihzdGF0ZSwgdHJ1ZSkpIHtcbiAgICBzdGF0ZS5yYWlzZShcIk5vdGhpbmcgdG8gcmVwZWF0XCIpO1xuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtU3ludGF4Q2hhcmFjdGVyXG5wcCQxLnJlZ2V4cF9lYXRTeW50YXhDaGFyYWN0ZXIgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG4gIGlmIChpc1N5bnRheENoYXJhY3RlcihjaCkpIHtcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSBjaDtcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5mdW5jdGlvbiBpc1N5bnRheENoYXJhY3RlcihjaCkge1xuICByZXR1cm4gKFxuICAgIGNoID09PSAweDI0IC8qICQgKi8gfHxcbiAgICBjaCA+PSAweDI4IC8qICggKi8gJiYgY2ggPD0gMHgyQiAvKiArICovIHx8XG4gICAgY2ggPT09IDB4MkUgLyogLiAqLyB8fFxuICAgIGNoID09PSAweDNGIC8qID8gKi8gfHxcbiAgICBjaCA+PSAweDVCIC8qIFsgKi8gJiYgY2ggPD0gMHg1RSAvKiBeICovIHx8XG4gICAgY2ggPj0gMHg3QiAvKiB7ICovICYmIGNoIDw9IDB4N0QgLyogfSAqL1xuICApXG59XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLVBhdHRlcm5DaGFyYWN0ZXJcbi8vIEJ1dCBlYXQgZWFnZXIuXG5wcCQxLnJlZ2V4cF9lYXRQYXR0ZXJuQ2hhcmFjdGVycyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgdmFyIGNoID0gMDtcbiAgd2hpbGUgKChjaCA9IHN0YXRlLmN1cnJlbnQoKSkgIT09IC0xICYmICFpc1N5bnRheENoYXJhY3RlcihjaCkpIHtcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLnBvcyAhPT0gc3RhcnRcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1FeHRlbmRlZFBhdHRlcm5DaGFyYWN0ZXJcbnBwJDEucmVnZXhwX2VhdEV4dGVuZGVkUGF0dGVybkNoYXJhY3RlciA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcbiAgaWYgKFxuICAgIGNoICE9PSAtMSAmJlxuICAgIGNoICE9PSAweDI0IC8qICQgKi8gJiZcbiAgICAhKGNoID49IDB4MjggLyogKCAqLyAmJiBjaCA8PSAweDJCIC8qICsgKi8pICYmXG4gICAgY2ggIT09IDB4MkUgLyogLiAqLyAmJlxuICAgIGNoICE9PSAweDNGIC8qID8gKi8gJiZcbiAgICBjaCAhPT0gMHg1QiAvKiBbICovICYmXG4gICAgY2ggIT09IDB4NUUgLyogXiAqLyAmJlxuICAgIGNoICE9PSAweDdDIC8qIHwgKi9cbiAgKSB7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xuXG4vLyBHcm91cFNwZWNpZmllciA6OlxuLy8gICBbZW1wdHldXG4vLyAgIGA/YCBHcm91cE5hbWVcbnBwJDEucmVnZXhwX2dyb3VwU3BlY2lmaWVyID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmVhdCgweDNGIC8qID8gKi8pKSB7XG4gICAgaWYgKHRoaXMucmVnZXhwX2VhdEdyb3VwTmFtZShzdGF0ZSkpIHtcbiAgICAgIGlmIChzdGF0ZS5ncm91cE5hbWVzLmluZGV4T2Yoc3RhdGUubGFzdFN0cmluZ1ZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgc3RhdGUucmFpc2UoXCJEdXBsaWNhdGUgY2FwdHVyZSBncm91cCBuYW1lXCIpO1xuICAgICAgfVxuICAgICAgc3RhdGUuZ3JvdXBOYW1lcy5wdXNoKHN0YXRlLmxhc3RTdHJpbmdWYWx1ZSk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGdyb3VwXCIpO1xuICB9XG59O1xuXG4vLyBHcm91cE5hbWUgOjpcbi8vICAgYDxgIFJlZ0V4cElkZW50aWZpZXJOYW1lIGA+YFxuLy8gTm90ZTogdGhpcyB1cGRhdGVzIGBzdGF0ZS5sYXN0U3RyaW5nVmFsdWVgIHByb3BlcnR5IHdpdGggdGhlIGVhdGVuIG5hbWUuXG5wcCQxLnJlZ2V4cF9lYXRHcm91cE5hbWUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgPSBcIlwiO1xuICBpZiAoc3RhdGUuZWF0KDB4M0MgLyogPCAqLykpIHtcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0UmVnRXhwSWRlbnRpZmllck5hbWUoc3RhdGUpICYmIHN0YXRlLmVhdCgweDNFIC8qID4gKi8pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgY2FwdHVyZSBncm91cCBuYW1lXCIpO1xuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gUmVnRXhwSWRlbnRpZmllck5hbWUgOjpcbi8vICAgUmVnRXhwSWRlbnRpZmllclN0YXJ0XG4vLyAgIFJlZ0V4cElkZW50aWZpZXJOYW1lIFJlZ0V4cElkZW50aWZpZXJQYXJ0XG4vLyBOb3RlOiB0aGlzIHVwZGF0ZXMgYHN0YXRlLmxhc3RTdHJpbmdWYWx1ZWAgcHJvcGVydHkgd2l0aCB0aGUgZWF0ZW4gbmFtZS5cbnBwJDEucmVnZXhwX2VhdFJlZ0V4cElkZW50aWZpZXJOYW1lID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcbiAgaWYgKHRoaXMucmVnZXhwX2VhdFJlZ0V4cElkZW50aWZpZXJTdGFydChzdGF0ZSkpIHtcbiAgICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgKz0gY29kZVBvaW50VG9TdHJpbmcoc3RhdGUubGFzdEludFZhbHVlKTtcbiAgICB3aGlsZSAodGhpcy5yZWdleHBfZWF0UmVnRXhwSWRlbnRpZmllclBhcnQoc3RhdGUpKSB7XG4gICAgICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgKz0gY29kZVBvaW50VG9TdHJpbmcoc3RhdGUubGFzdEludFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIFJlZ0V4cElkZW50aWZpZXJTdGFydCA6OlxuLy8gICBVbmljb2RlSURTdGFydFxuLy8gICBgJGBcbi8vICAgYF9gXG4vLyAgIGBcXGAgUmVnRXhwVW5pY29kZUVzY2FwZVNlcXVlbmNlWytVXVxucHAkMS5yZWdleHBfZWF0UmVnRXhwSWRlbnRpZmllclN0YXJ0ID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xuICB2YXIgZm9yY2VVID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDExO1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KGZvcmNlVSk7XG4gIHN0YXRlLmFkdmFuY2UoZm9yY2VVKTtcblxuICBpZiAoY2ggPT09IDB4NUMgLyogXFwgKi8gJiYgdGhpcy5yZWdleHBfZWF0UmVnRXhwVW5pY29kZUVzY2FwZVNlcXVlbmNlKHN0YXRlLCBmb3JjZVUpKSB7XG4gICAgY2ggPSBzdGF0ZS5sYXN0SW50VmFsdWU7XG4gIH1cbiAgaWYgKGlzUmVnRXhwSWRlbnRpZmllclN0YXJ0KGNoKSkge1xuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgcmV0dXJuIGZhbHNlXG59O1xuZnVuY3Rpb24gaXNSZWdFeHBJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgcmV0dXJuIGlzSWRlbnRpZmllclN0YXJ0KGNoLCB0cnVlKSB8fCBjaCA9PT0gMHgyNCAvKiAkICovIHx8IGNoID09PSAweDVGIC8qIF8gKi9cbn1cblxuLy8gUmVnRXhwSWRlbnRpZmllclBhcnQgOjpcbi8vICAgVW5pY29kZUlEQ29udGludWVcbi8vICAgYCRgXG4vLyAgIGBfYFxuLy8gICBgXFxgIFJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZVsrVV1cbi8vICAgPFpXTko+XG4vLyAgIDxaV0o+XG5wcCQxLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyUGFydCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgdmFyIGZvcmNlVSA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMTtcbiAgdmFyIGNoID0gc3RhdGUuY3VycmVudChmb3JjZVUpO1xuICBzdGF0ZS5hZHZhbmNlKGZvcmNlVSk7XG5cbiAgaWYgKGNoID09PSAweDVDIC8qIFxcICovICYmIHRoaXMucmVnZXhwX2VhdFJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZShzdGF0ZSwgZm9yY2VVKSkge1xuICAgIGNoID0gc3RhdGUubGFzdEludFZhbHVlO1xuICB9XG4gIGlmIChpc1JlZ0V4cElkZW50aWZpZXJQYXJ0KGNoKSkge1xuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgcmV0dXJuIGZhbHNlXG59O1xuZnVuY3Rpb24gaXNSZWdFeHBJZGVudGlmaWVyUGFydChjaCkge1xuICByZXR1cm4gaXNJZGVudGlmaWVyQ2hhcihjaCwgdHJ1ZSkgfHwgY2ggPT09IDB4MjQgLyogJCAqLyB8fCBjaCA9PT0gMHg1RiAvKiBfICovIHx8IGNoID09PSAweDIwMEMgLyogPFpXTko+ICovIHx8IGNoID09PSAweDIwMEQgLyogPFpXSj4gKi9cbn1cblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtYW5uZXhCLUF0b21Fc2NhcGVcbnBwJDEucmVnZXhwX2VhdEF0b21Fc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICBpZiAoXG4gICAgdGhpcy5yZWdleHBfZWF0QmFja1JlZmVyZW5jZShzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzc0VzY2FwZShzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJFc2NhcGUoc3RhdGUpIHx8XG4gICAgKHN0YXRlLnN3aXRjaE4gJiYgdGhpcy5yZWdleHBfZWF0S0dyb3VwTmFtZShzdGF0ZSkpXG4gICkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKHN0YXRlLnN3aXRjaFUpIHtcbiAgICAvLyBNYWtlIHRoZSBzYW1lIG1lc3NhZ2UgYXMgVjguXG4gICAgaWYgKHN0YXRlLmN1cnJlbnQoKSA9PT0gMHg2MyAvKiBjICovKSB7XG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgdW5pY29kZSBlc2NhcGVcIik7XG4gICAgfVxuICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBlc2NhcGVcIik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xucHAkMS5yZWdleHBfZWF0QmFja1JlZmVyZW5jZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgaWYgKHRoaXMucmVnZXhwX2VhdERlY2ltYWxFc2NhcGUoc3RhdGUpKSB7XG4gICAgdmFyIG4gPSBzdGF0ZS5sYXN0SW50VmFsdWU7XG4gICAgaWYgKHN0YXRlLnN3aXRjaFUpIHtcbiAgICAgIC8vIEZvciBTeW50YXhFcnJvciBpbiBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jc2VjLWF0b21lc2NhcGVcbiAgICAgIGlmIChuID4gc3RhdGUubWF4QmFja1JlZmVyZW5jZSkge1xuICAgICAgICBzdGF0ZS5tYXhCYWNrUmVmZXJlbmNlID0gbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChuIDw9IHN0YXRlLm51bUNhcHR1cmluZ1BhcmVucykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xucHAkMS5yZWdleHBfZWF0S0dyb3VwTmFtZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lYXQoMHg2QiAvKiBrICovKSkge1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRHcm91cE5hbWUoc3RhdGUpKSB7XG4gICAgICBzdGF0ZS5iYWNrUmVmZXJlbmNlTmFtZXMucHVzaChzdGF0ZS5sYXN0U3RyaW5nVmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIG5hbWVkIHJlZmVyZW5jZVwiKTtcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1DaGFyYWN0ZXJFc2NhcGVcbnBwJDEucmVnZXhwX2VhdENoYXJhY3RlckVzY2FwZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiAoXG4gICAgdGhpcy5yZWdleHBfZWF0Q29udHJvbEVzY2FwZShzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRDQ29udHJvbExldHRlcihzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRaZXJvKHN0YXRlKSB8fFxuICAgIHRoaXMucmVnZXhwX2VhdEhleEVzY2FwZVNlcXVlbmNlKHN0YXRlKSB8fFxuICAgIHRoaXMucmVnZXhwX2VhdFJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZShzdGF0ZSwgZmFsc2UpIHx8XG4gICAgKCFzdGF0ZS5zd2l0Y2hVICYmIHRoaXMucmVnZXhwX2VhdExlZ2FjeU9jdGFsRXNjYXBlU2VxdWVuY2Uoc3RhdGUpKSB8fFxuICAgIHRoaXMucmVnZXhwX2VhdElkZW50aXR5RXNjYXBlKHN0YXRlKVxuICApXG59O1xucHAkMS5yZWdleHBfZWF0Q0NvbnRyb2xMZXR0ZXIgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIGlmIChzdGF0ZS5lYXQoMHg2MyAvKiBjICovKSkge1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRDb250cm9sTGV0dGVyKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xucHAkMS5yZWdleHBfZWF0WmVybyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5jdXJyZW50KCkgPT09IDB4MzAgLyogMCAqLyAmJiAhaXNEZWNpbWFsRGlnaXQoc3RhdGUubG9va2FoZWFkKCkpKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gMDtcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNvbnRyb2xFc2NhcGVcbnBwJDEucmVnZXhwX2VhdENvbnRyb2xFc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG4gIGlmIChjaCA9PT0gMHg3NCAvKiB0ICovKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gMHgwOTsgLyogXFx0ICovXG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGNoID09PSAweDZFIC8qIG4gKi8pIHtcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDBBOyAvKiBcXG4gKi9cbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBpZiAoY2ggPT09IDB4NzYgLyogdiAqLykge1xuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDB4MEI7IC8qIFxcdiAqL1xuICAgIHN0YXRlLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChjaCA9PT0gMHg2NiAvKiBmICovKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gMHgwQzsgLyogXFxmICovXG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGNoID09PSAweDcyIC8qIHIgKi8pIHtcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDBEOyAvKiBcXHIgKi9cbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNvbnRyb2xMZXR0ZXJcbnBwJDEucmVnZXhwX2VhdENvbnRyb2xMZXR0ZXIgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG4gIGlmIChpc0NvbnRyb2xMZXR0ZXIoY2gpKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gY2ggJSAweDIwO1xuICAgIHN0YXRlLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcbmZ1bmN0aW9uIGlzQ29udHJvbExldHRlcihjaCkge1xuICByZXR1cm4gKFxuICAgIChjaCA+PSAweDQxIC8qIEEgKi8gJiYgY2ggPD0gMHg1QSAvKiBaICovKSB8fFxuICAgIChjaCA+PSAweDYxIC8qIGEgKi8gJiYgY2ggPD0gMHg3QSAvKiB6ICovKVxuICApXG59XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLVJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZVxucHAkMS5yZWdleHBfZWF0UmVnRXhwVW5pY29kZUVzY2FwZVNlcXVlbmNlID0gZnVuY3Rpb24oc3RhdGUsIGZvcmNlVSkge1xuICBpZiAoIGZvcmNlVSA9PT0gdm9pZCAwICkgZm9yY2VVID0gZmFsc2U7XG5cbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xuICB2YXIgc3dpdGNoVSA9IGZvcmNlVSB8fCBzdGF0ZS5zd2l0Y2hVO1xuXG4gIGlmIChzdGF0ZS5lYXQoMHg3NSAvKiB1ICovKSkge1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRGaXhlZEhleERpZ2l0cyhzdGF0ZSwgNCkpIHtcbiAgICAgIHZhciBsZWFkID0gc3RhdGUubGFzdEludFZhbHVlO1xuICAgICAgaWYgKHN3aXRjaFUgJiYgbGVhZCA+PSAweEQ4MDAgJiYgbGVhZCA8PSAweERCRkYpIHtcbiAgICAgICAgdmFyIGxlYWRTdXJyb2dhdGVFbmQgPSBzdGF0ZS5wb3M7XG4gICAgICAgIGlmIChzdGF0ZS5lYXQoMHg1QyAvKiBcXCAqLykgJiYgc3RhdGUuZWF0KDB4NzUgLyogdSAqLykgJiYgdGhpcy5yZWdleHBfZWF0Rml4ZWRIZXhEaWdpdHMoc3RhdGUsIDQpKSB7XG4gICAgICAgICAgdmFyIHRyYWlsID0gc3RhdGUubGFzdEludFZhbHVlO1xuICAgICAgICAgIGlmICh0cmFpbCA+PSAweERDMDAgJiYgdHJhaWwgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAobGVhZCAtIDB4RDgwMCkgKiAweDQwMCArICh0cmFpbCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucG9zID0gbGVhZFN1cnJvZ2F0ZUVuZDtcbiAgICAgICAgc3RhdGUubGFzdEludFZhbHVlID0gbGVhZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChcbiAgICAgIHN3aXRjaFUgJiZcbiAgICAgIHN0YXRlLmVhdCgweDdCIC8qIHsgKi8pICYmXG4gICAgICB0aGlzLnJlZ2V4cF9lYXRIZXhEaWdpdHMoc3RhdGUpICYmXG4gICAgICBzdGF0ZS5lYXQoMHg3RCAvKiB9ICovKSAmJlxuICAgICAgaXNWYWxpZFVuaWNvZGUoc3RhdGUubGFzdEludFZhbHVlKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKHN3aXRjaFUpIHtcbiAgICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZVwiKTtcbiAgICB9XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn07XG5mdW5jdGlvbiBpc1ZhbGlkVW5pY29kZShjaCkge1xuICByZXR1cm4gY2ggPj0gMCAmJiBjaCA8PSAweDEwRkZGRlxufVxuXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1hbm5leEItSWRlbnRpdHlFc2NhcGVcbnBwJDEucmVnZXhwX2VhdElkZW50aXR5RXNjYXBlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgaWYgKHN0YXRlLnN3aXRjaFUpIHtcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0U3ludGF4Q2hhcmFjdGVyKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKHN0YXRlLmVhdCgweDJGIC8qIC8gKi8pKSB7XG4gICAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAweDJGOyAvKiAvICovXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcbiAgaWYgKGNoICE9PSAweDYzIC8qIGMgKi8gJiYgKCFzdGF0ZS5zd2l0Y2hOIHx8IGNoICE9PSAweDZCIC8qIGsgKi8pKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gY2g7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLURlY2ltYWxFc2NhcGVcbnBwJDEucmVnZXhwX2VhdERlY2ltYWxFc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAwO1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG4gIGlmIChjaCA+PSAweDMxIC8qIDEgKi8gJiYgY2ggPD0gMHgzOSAvKiA5ICovKSB7XG4gICAgZG8ge1xuICAgICAgc3RhdGUubGFzdEludFZhbHVlID0gMTAgKiBzdGF0ZS5sYXN0SW50VmFsdWUgKyAoY2ggLSAweDMwIC8qIDAgKi8pO1xuICAgICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIH0gd2hpbGUgKChjaCA9IHN0YXRlLmN1cnJlbnQoKSkgPj0gMHgzMCAvKiAwICovICYmIGNoIDw9IDB4MzkgLyogOSAqLylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gUmV0dXJuIHZhbHVlcyB1c2VkIGJ5IGNoYXJhY3RlciBzZXQgcGFyc2luZyBtZXRob2RzLCBuZWVkZWQgdG9cbi8vIGZvcmJpZCBuZWdhdGlvbiBvZiBzZXRzIHRoYXQgY2FuIG1hdGNoIHN0cmluZ3MuXG52YXIgQ2hhclNldE5vbmUgPSAwOyAvLyBOb3RoaW5nIHBhcnNlZFxudmFyIENoYXJTZXRPayA9IDE7IC8vIENvbnN0cnVjdCBwYXJzZWQsIGNhbm5vdCBjb250YWluIHN0cmluZ3NcbnZhciBDaGFyU2V0U3RyaW5nID0gMjsgLy8gQ29uc3RydWN0IHBhcnNlZCwgY2FuIGNvbnRhaW4gc3RyaW5nc1xuXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1DaGFyYWN0ZXJDbGFzc0VzY2FwZVxucHAkMS5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3NFc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG5cbiAgaWYgKGlzQ2hhcmFjdGVyQ2xhc3NFc2NhcGUoY2gpKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gLTE7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiBDaGFyU2V0T2tcbiAgfVxuXG4gIHZhciBuZWdhdGUgPSBmYWxzZTtcbiAgaWYgKFxuICAgIHN0YXRlLnN3aXRjaFUgJiZcbiAgICB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gOSAmJlxuICAgICgobmVnYXRlID0gY2ggPT09IDB4NTAgLyogUCAqLykgfHwgY2ggPT09IDB4NzAgLyogcCAqLylcbiAgKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gLTE7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKFxuICAgICAgc3RhdGUuZWF0KDB4N0IgLyogeyAqLykgJiZcbiAgICAgIChyZXN1bHQgPSB0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZUV4cHJlc3Npb24oc3RhdGUpKSAmJlxuICAgICAgc3RhdGUuZWF0KDB4N0QgLyogfSAqLylcbiAgICApIHtcbiAgICAgIGlmIChuZWdhdGUgJiYgcmVzdWx0ID09PSBDaGFyU2V0U3RyaW5nKSB7IHN0YXRlLnJhaXNlKFwiSW52YWxpZCBwcm9wZXJ0eSBuYW1lXCIpOyB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBwcm9wZXJ0eSBuYW1lXCIpO1xuICB9XG5cbiAgcmV0dXJuIENoYXJTZXROb25lXG59O1xuXG5mdW5jdGlvbiBpc0NoYXJhY3RlckNsYXNzRXNjYXBlKGNoKSB7XG4gIHJldHVybiAoXG4gICAgY2ggPT09IDB4NjQgLyogZCAqLyB8fFxuICAgIGNoID09PSAweDQ0IC8qIEQgKi8gfHxcbiAgICBjaCA9PT0gMHg3MyAvKiBzICovIHx8XG4gICAgY2ggPT09IDB4NTMgLyogUyAqLyB8fFxuICAgIGNoID09PSAweDc3IC8qIHcgKi8gfHxcbiAgICBjaCA9PT0gMHg1NyAvKiBXICovXG4gIClcbn1cblxuLy8gVW5pY29kZVByb3BlcnR5VmFsdWVFeHByZXNzaW9uIDo6XG4vLyAgIFVuaWNvZGVQcm9wZXJ0eU5hbWUgYD1gIFVuaWNvZGVQcm9wZXJ0eVZhbHVlXG4vLyAgIExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZVxucHAkMS5yZWdleHBfZWF0VW5pY29kZVByb3BlcnR5VmFsdWVFeHByZXNzaW9uID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIC8vIFVuaWNvZGVQcm9wZXJ0eU5hbWUgYD1gIFVuaWNvZGVQcm9wZXJ0eVZhbHVlXG4gIGlmICh0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlOYW1lKHN0YXRlKSAmJiBzdGF0ZS5lYXQoMHgzRCAvKiA9ICovKSkge1xuICAgIHZhciBuYW1lID0gc3RhdGUubGFzdFN0cmluZ1ZhbHVlO1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZShzdGF0ZSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlLmxhc3RTdHJpbmdWYWx1ZTtcbiAgICAgIHRoaXMucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZUFuZFZhbHVlKHN0YXRlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gQ2hhclNldE9rXG4gICAgfVxuICB9XG4gIHN0YXRlLnBvcyA9IHN0YXJ0O1xuXG4gIC8vIExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZVxuICBpZiAodGhpcy5yZWdleHBfZWF0TG9uZVVuaWNvZGVQcm9wZXJ0eU5hbWVPclZhbHVlKHN0YXRlKSkge1xuICAgIHZhciBuYW1lT3JWYWx1ZSA9IHN0YXRlLmxhc3RTdHJpbmdWYWx1ZTtcbiAgICByZXR1cm4gdGhpcy5yZWdleHBfdmFsaWRhdGVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZShzdGF0ZSwgbmFtZU9yVmFsdWUpXG4gIH1cbiAgcmV0dXJuIENoYXJTZXROb25lXG59O1xuXG5wcCQxLnJlZ2V4cF92YWxpZGF0ZVVuaWNvZGVQcm9wZXJ0eU5hbWVBbmRWYWx1ZSA9IGZ1bmN0aW9uKHN0YXRlLCBuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWhhc093bihzdGF0ZS51bmljb2RlUHJvcGVydGllcy5ub25CaW5hcnksIG5hbWUpKVxuICAgIHsgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IG5hbWVcIik7IH1cbiAgaWYgKCFzdGF0ZS51bmljb2RlUHJvcGVydGllcy5ub25CaW5hcnlbbmFtZV0udGVzdCh2YWx1ZSkpXG4gICAgeyBzdGF0ZS5yYWlzZShcIkludmFsaWQgcHJvcGVydHkgdmFsdWVcIik7IH1cbn07XG5cbnBwJDEucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZU9yVmFsdWUgPSBmdW5jdGlvbihzdGF0ZSwgbmFtZU9yVmFsdWUpIHtcbiAgaWYgKHN0YXRlLnVuaWNvZGVQcm9wZXJ0aWVzLmJpbmFyeS50ZXN0KG5hbWVPclZhbHVlKSkgeyByZXR1cm4gQ2hhclNldE9rIH1cbiAgaWYgKHN0YXRlLnN3aXRjaFYgJiYgc3RhdGUudW5pY29kZVByb3BlcnRpZXMuYmluYXJ5T2ZTdHJpbmdzLnRlc3QobmFtZU9yVmFsdWUpKSB7IHJldHVybiBDaGFyU2V0U3RyaW5nIH1cbiAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IG5hbWVcIik7XG59O1xuXG4vLyBVbmljb2RlUHJvcGVydHlOYW1lIDo6XG4vLyAgIFVuaWNvZGVQcm9wZXJ0eU5hbWVDaGFyYWN0ZXJzXG5wcCQxLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlOYW1lID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIGNoID0gMDtcbiAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcbiAgd2hpbGUgKGlzVW5pY29kZVByb3BlcnR5TmFtZUNoYXJhY3RlcihjaCA9IHN0YXRlLmN1cnJlbnQoKSkpIHtcbiAgICBzdGF0ZS5sYXN0U3RyaW5nVmFsdWUgKz0gY29kZVBvaW50VG9TdHJpbmcoY2gpO1xuICAgIHN0YXRlLmFkdmFuY2UoKTtcbiAgfVxuICByZXR1cm4gc3RhdGUubGFzdFN0cmluZ1ZhbHVlICE9PSBcIlwiXG59O1xuXG5mdW5jdGlvbiBpc1VuaWNvZGVQcm9wZXJ0eU5hbWVDaGFyYWN0ZXIoY2gpIHtcbiAgcmV0dXJuIGlzQ29udHJvbExldHRlcihjaCkgfHwgY2ggPT09IDB4NUYgLyogXyAqL1xufVxuXG4vLyBVbmljb2RlUHJvcGVydHlWYWx1ZSA6OlxuLy8gICBVbmljb2RlUHJvcGVydHlWYWx1ZUNoYXJhY3RlcnNcbnBwJDEucmVnZXhwX2VhdFVuaWNvZGVQcm9wZXJ0eVZhbHVlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIGNoID0gMDtcbiAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlID0gXCJcIjtcbiAgd2hpbGUgKGlzVW5pY29kZVByb3BlcnR5VmFsdWVDaGFyYWN0ZXIoY2ggPSBzdGF0ZS5jdXJyZW50KCkpKSB7XG4gICAgc3RhdGUubGFzdFN0cmluZ1ZhbHVlICs9IGNvZGVQb2ludFRvU3RyaW5nKGNoKTtcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLmxhc3RTdHJpbmdWYWx1ZSAhPT0gXCJcIlxufTtcbmZ1bmN0aW9uIGlzVW5pY29kZVByb3BlcnR5VmFsdWVDaGFyYWN0ZXIoY2gpIHtcbiAgcmV0dXJuIGlzVW5pY29kZVByb3BlcnR5TmFtZUNoYXJhY3RlcihjaCkgfHwgaXNEZWNpbWFsRGlnaXQoY2gpXG59XG5cbi8vIExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZSA6OlxuLy8gICBVbmljb2RlUHJvcGVydHlWYWx1ZUNoYXJhY3RlcnNcbnBwJDEucmVnZXhwX2VhdExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiB0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZShzdGF0ZSlcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNoYXJhY3RlckNsYXNzXG5wcCQxLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzcyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lYXQoMHg1QiAvKiBbICovKSkge1xuICAgIHZhciBuZWdhdGUgPSBzdGF0ZS5lYXQoMHg1RSAvKiBeICovKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZWdleHBfY2xhc3NDb250ZW50cyhzdGF0ZSk7XG4gICAgaWYgKCFzdGF0ZS5lYXQoMHg1RCAvKiBdICovKSlcbiAgICAgIHsgc3RhdGUucmFpc2UoXCJVbnRlcm1pbmF0ZWQgY2hhcmFjdGVyIGNsYXNzXCIpOyB9XG4gICAgaWYgKG5lZ2F0ZSAmJiByZXN1bHQgPT09IENoYXJTZXRTdHJpbmcpXG4gICAgICB7IHN0YXRlLnJhaXNlKFwiTmVnYXRlZCBjaGFyYWN0ZXIgY2xhc3MgbWF5IGNvbnRhaW4gc3RyaW5nc1wiKTsgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc0NvbnRlbnRzXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1DbGFzc1Jhbmdlc1xucHAkMS5yZWdleHBfY2xhc3NDb250ZW50cyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5jdXJyZW50KCkgPT09IDB4NUQgLyogXSAqLykgeyByZXR1cm4gQ2hhclNldE9rIH1cbiAgaWYgKHN0YXRlLnN3aXRjaFYpIHsgcmV0dXJuIHRoaXMucmVnZXhwX2NsYXNzU2V0RXhwcmVzc2lvbihzdGF0ZSkgfVxuICB0aGlzLnJlZ2V4cF9ub25FbXB0eUNsYXNzUmFuZ2VzKHN0YXRlKTtcbiAgcmV0dXJuIENoYXJTZXRPa1xufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtTm9uZW1wdHlDbGFzc1Jhbmdlc1xuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtTm9uZW1wdHlDbGFzc1Jhbmdlc05vRGFzaFxucHAkMS5yZWdleHBfbm9uRW1wdHlDbGFzc1JhbmdlcyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHdoaWxlICh0aGlzLnJlZ2V4cF9lYXRDbGFzc0F0b20oc3RhdGUpKSB7XG4gICAgdmFyIGxlZnQgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XG4gICAgaWYgKHN0YXRlLmVhdCgweDJEIC8qIC0gKi8pICYmIHRoaXMucmVnZXhwX2VhdENsYXNzQXRvbShzdGF0ZSkpIHtcbiAgICAgIHZhciByaWdodCA9IHN0YXRlLmxhc3RJbnRWYWx1ZTtcbiAgICAgIGlmIChzdGF0ZS5zd2l0Y2hVICYmIChsZWZ0ID09PSAtMSB8fCByaWdodCA9PT0gLTEpKSB7XG4gICAgICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBjaGFyYWN0ZXIgY2xhc3NcIik7XG4gICAgICB9XG4gICAgICBpZiAobGVmdCAhPT0gLTEgJiYgcmlnaHQgIT09IC0xICYmIGxlZnQgPiByaWdodCkge1xuICAgICAgICBzdGF0ZS5yYWlzZShcIlJhbmdlIG91dCBvZiBvcmRlciBpbiBjaGFyYWN0ZXIgY2xhc3NcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1DbGFzc0F0b21cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLUNsYXNzQXRvbU5vRGFzaFxucHAkMS5yZWdleHBfZWF0Q2xhc3NBdG9tID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5lYXQoMHg1QyAvKiBcXCAqLykpIHtcbiAgICBpZiAodGhpcy5yZWdleHBfZWF0Q2xhc3NFc2NhcGUoc3RhdGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBpZiAoc3RhdGUuc3dpdGNoVSkge1xuICAgICAgLy8gTWFrZSB0aGUgc2FtZSBtZXNzYWdlIGFzIFY4LlxuICAgICAgdmFyIGNoJDEgPSBzdGF0ZS5jdXJyZW50KCk7XG4gICAgICBpZiAoY2gkMSA9PT0gMHg2MyAvKiBjICovIHx8IGlzT2N0YWxEaWdpdChjaCQxKSkge1xuICAgICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgY2xhc3MgZXNjYXBlXCIpO1xuICAgICAgfVxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGVzY2FwZVwiKTtcbiAgICB9XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gIH1cblxuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG4gIGlmIChjaCAhPT0gMHg1RCAvKiBdICovKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gY2g7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1DbGFzc0VzY2FwZVxucHAkMS5yZWdleHBfZWF0Q2xhc3NFc2NhcGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLmVhdCgweDYyIC8qIGIgKi8pKSB7XG4gICAgc3RhdGUubGFzdEludFZhbHVlID0gMHgwODsgLyogPEJTPiAqL1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoc3RhdGUuc3dpdGNoVSAmJiBzdGF0ZS5lYXQoMHgyRCAvKiAtICovKSkge1xuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDB4MkQ7IC8qIC0gKi9cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKCFzdGF0ZS5zd2l0Y2hVICYmIHN0YXRlLmVhdCgweDYzIC8qIGMgKi8pKSB7XG4gICAgaWYgKHRoaXMucmVnZXhwX2VhdENsYXNzQ29udHJvbExldHRlcihzdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzc0VzY2FwZShzdGF0ZSkgfHxcbiAgICB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJFc2NhcGUoc3RhdGUpXG4gIClcbn07XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU2V0RXhwcmVzc2lvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NVbmlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NJbnRlcnNlY3Rpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU3VidHJhY3Rpb25cbnBwJDEucmVnZXhwX2NsYXNzU2V0RXhwcmVzc2lvbiA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciByZXN1bHQgPSBDaGFyU2V0T2ssIHN1YlJlc3VsdDtcbiAgaWYgKHRoaXMucmVnZXhwX2VhdENsYXNzU2V0UmFuZ2Uoc3RhdGUpKSA7IGVsc2UgaWYgKHN1YlJlc3VsdCA9IHRoaXMucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZChzdGF0ZSkpIHtcbiAgICBpZiAoc3ViUmVzdWx0ID09PSBDaGFyU2V0U3RyaW5nKSB7IHJlc3VsdCA9IENoYXJTZXRTdHJpbmc7IH1cbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc0ludGVyc2VjdGlvblxuICAgIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgICB3aGlsZSAoc3RhdGUuZWF0Q2hhcnMoWzB4MjYsIDB4MjZdIC8qICYmICovKSkge1xuICAgICAgaWYgKFxuICAgICAgICBzdGF0ZS5jdXJyZW50KCkgIT09IDB4MjYgLyogJiAqLyAmJlxuICAgICAgICAoc3ViUmVzdWx0ID0gdGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRPcGVyYW5kKHN0YXRlKSlcbiAgICAgICkge1xuICAgICAgICBpZiAoc3ViUmVzdWx0ICE9PSBDaGFyU2V0U3RyaW5nKSB7IHJlc3VsdCA9IENoYXJTZXRPazsgfVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBjaGFyYWN0ZXIgY2xhc3NcIik7XG4gICAgfVxuICAgIGlmIChzdGFydCAhPT0gc3RhdGUucG9zKSB7IHJldHVybiByZXN1bHQgfVxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU3VidHJhY3Rpb25cbiAgICB3aGlsZSAoc3RhdGUuZWF0Q2hhcnMoWzB4MkQsIDB4MkRdIC8qIC0tICovKSkge1xuICAgICAgaWYgKHRoaXMucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZChzdGF0ZSkpIHsgY29udGludWUgfVxuICAgICAgc3RhdGUucmFpc2UoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBjaGFyYWN0ZXIgY2xhc3NcIik7XG4gICAgfVxuICAgIGlmIChzdGFydCAhPT0gc3RhdGUucG9zKSB7IHJldHVybiByZXN1bHQgfVxuICB9IGVsc2Uge1xuICAgIHN0YXRlLnJhaXNlKFwiSW52YWxpZCBjaGFyYWN0ZXIgaW4gY2hhcmFjdGVyIGNsYXNzXCIpO1xuICB9XG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzVW5pb25cbiAgZm9yICg7Oykge1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldFJhbmdlKHN0YXRlKSkgeyBjb250aW51ZSB9XG4gICAgc3ViUmVzdWx0ID0gdGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRPcGVyYW5kKHN0YXRlKTtcbiAgICBpZiAoIXN1YlJlc3VsdCkgeyByZXR1cm4gcmVzdWx0IH1cbiAgICBpZiAoc3ViUmVzdWx0ID09PSBDaGFyU2V0U3RyaW5nKSB7IHJlc3VsdCA9IENoYXJTZXRTdHJpbmc7IH1cbiAgfVxufTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRSYW5nZVxucHAkMS5yZWdleHBfZWF0Q2xhc3NTZXRSYW5nZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgaWYgKHRoaXMucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyKHN0YXRlKSkge1xuICAgIHZhciBsZWZ0ID0gc3RhdGUubGFzdEludFZhbHVlO1xuICAgIGlmIChzdGF0ZS5lYXQoMHgyRCAvKiAtICovKSAmJiB0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldENoYXJhY3RlcihzdGF0ZSkpIHtcbiAgICAgIHZhciByaWdodCA9IHN0YXRlLmxhc3RJbnRWYWx1ZTtcbiAgICAgIGlmIChsZWZ0ICE9PSAtMSAmJiByaWdodCAhPT0gLTEgJiYgbGVmdCA+IHJpZ2h0KSB7XG4gICAgICAgIHN0YXRlLnJhaXNlKFwiUmFuZ2Ugb3V0IG9mIG9yZGVyIGluIGNoYXJhY3RlciBjbGFzc1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRPcGVyYW5kXG5wcCQxLnJlZ2V4cF9lYXRDbGFzc1NldE9wZXJhbmQgPSBmdW5jdGlvbihzdGF0ZSkge1xuICBpZiAodGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRDaGFyYWN0ZXIoc3RhdGUpKSB7IHJldHVybiBDaGFyU2V0T2sgfVxuICByZXR1cm4gdGhpcy5yZWdleHBfZWF0Q2xhc3NTdHJpbmdEaXNqdW5jdGlvbihzdGF0ZSkgfHwgdGhpcy5yZWdleHBfZWF0TmVzdGVkQ2xhc3Moc3RhdGUpXG59O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1OZXN0ZWRDbGFzc1xucHAkMS5yZWdleHBfZWF0TmVzdGVkQ2xhc3MgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIGlmIChzdGF0ZS5lYXQoMHg1QiAvKiBbICovKSkge1xuICAgIHZhciBuZWdhdGUgPSBzdGF0ZS5lYXQoMHg1RSAvKiBeICovKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZWdleHBfY2xhc3NDb250ZW50cyhzdGF0ZSk7XG4gICAgaWYgKHN0YXRlLmVhdCgweDVEIC8qIF0gKi8pKSB7XG4gICAgICBpZiAobmVnYXRlICYmIHJlc3VsdCA9PT0gQ2hhclNldFN0cmluZykge1xuICAgICAgICBzdGF0ZS5yYWlzZShcIk5lZ2F0ZWQgY2hhcmFjdGVyIGNsYXNzIG1heSBjb250YWluIHN0cmluZ3NcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICB9XG4gIGlmIChzdGF0ZS5lYXQoMHg1QyAvKiBcXCAqLykpIHtcbiAgICB2YXIgcmVzdWx0JDEgPSB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzc0VzY2FwZShzdGF0ZSk7XG4gICAgaWYgKHJlc3VsdCQxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0JDFcbiAgICB9XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gIH1cbiAgcmV0dXJuIG51bGxcbn07XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNwcm9kLUNsYXNzU3RyaW5nRGlzanVuY3Rpb25cbnBwJDEucmVnZXhwX2VhdENsYXNzU3RyaW5nRGlzanVuY3Rpb24gPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIGlmIChzdGF0ZS5lYXRDaGFycyhbMHg1QywgMHg3MV0gLyogXFxxICovKSkge1xuICAgIGlmIChzdGF0ZS5lYXQoMHg3QiAvKiB7ICovKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVnZXhwX2NsYXNzU3RyaW5nRGlzanVuY3Rpb25Db250ZW50cyhzdGF0ZSk7XG4gICAgICBpZiAoc3RhdGUuZWF0KDB4N0QgLyogfSAqLykpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHRoZSBzYW1lIG1lc3NhZ2UgYXMgVjguXG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpO1xuICAgIH1cbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgfVxuICByZXR1cm4gbnVsbFxufTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTdHJpbmdEaXNqdW5jdGlvbkNvbnRlbnRzXG5wcCQxLnJlZ2V4cF9jbGFzc1N0cmluZ0Rpc2p1bmN0aW9uQ29udGVudHMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5yZWdleHBfY2xhc3NTdHJpbmcoc3RhdGUpO1xuICB3aGlsZSAoc3RhdGUuZWF0KDB4N0MgLyogfCAqLykpIHtcbiAgICBpZiAodGhpcy5yZWdleHBfY2xhc3NTdHJpbmcoc3RhdGUpID09PSBDaGFyU2V0U3RyaW5nKSB7IHJlc3VsdCA9IENoYXJTZXRTdHJpbmc7IH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1N0cmluZ1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtTm9uRW1wdHlDbGFzc1N0cmluZ1xucHAkMS5yZWdleHBfY2xhc3NTdHJpbmcgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgY291bnQgPSAwO1xuICB3aGlsZSAodGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRDaGFyYWN0ZXIoc3RhdGUpKSB7IGNvdW50Kys7IH1cbiAgcmV0dXJuIGNvdW50ID09PSAxID8gQ2hhclNldE9rIDogQ2hhclNldFN0cmluZ1xufTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRDaGFyYWN0ZXJcbnBwJDEucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIHN0YXJ0ID0gc3RhdGUucG9zO1xuICBpZiAoc3RhdGUuZWF0KDB4NUMgLyogXFwgKi8pKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyRXNjYXBlKHN0YXRlKSB8fFxuICAgICAgdGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3Ioc3RhdGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBpZiAoc3RhdGUuZWF0KDB4NjIgLyogYiAqLykpIHtcbiAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDB4MDg7IC8qIDxCUz4gKi9cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcbiAgaWYgKGNoIDwgMCB8fCBjaCA9PT0gc3RhdGUubG9va2FoZWFkKCkgJiYgaXNDbGFzc1NldFJlc2VydmVkRG91YmxlUHVuY3R1YXRvckNoYXJhY3RlcihjaCkpIHsgcmV0dXJuIGZhbHNlIH1cbiAgaWYgKGlzQ2xhc3NTZXRTeW50YXhDaGFyYWN0ZXIoY2gpKSB7IHJldHVybiBmYWxzZSB9XG4gIHN0YXRlLmFkdmFuY2UoKTtcbiAgc3RhdGUubGFzdEludFZhbHVlID0gY2g7XG4gIHJldHVybiB0cnVlXG59O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1NldFJlc2VydmVkRG91YmxlUHVuY3R1YXRvclxuZnVuY3Rpb24gaXNDbGFzc1NldFJlc2VydmVkRG91YmxlUHVuY3R1YXRvckNoYXJhY3RlcihjaCkge1xuICByZXR1cm4gKFxuICAgIGNoID09PSAweDIxIC8qICEgKi8gfHxcbiAgICBjaCA+PSAweDIzIC8qICMgKi8gJiYgY2ggPD0gMHgyNiAvKiAmICovIHx8XG4gICAgY2ggPj0gMHgyQSAvKiAqICovICYmIGNoIDw9IDB4MkMgLyogLCAqLyB8fFxuICAgIGNoID09PSAweDJFIC8qIC4gKi8gfHxcbiAgICBjaCA+PSAweDNBIC8qIDogKi8gJiYgY2ggPD0gMHg0MCAvKiBAICovIHx8XG4gICAgY2ggPT09IDB4NUUgLyogXiAqLyB8fFxuICAgIGNoID09PSAweDYwIC8qIGAgKi8gfHxcbiAgICBjaCA9PT0gMHg3RSAvKiB+ICovXG4gIClcbn1cblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRTeW50YXhDaGFyYWN0ZXJcbmZ1bmN0aW9uIGlzQ2xhc3NTZXRTeW50YXhDaGFyYWN0ZXIoY2gpIHtcbiAgcmV0dXJuIChcbiAgICBjaCA9PT0gMHgyOCAvKiAoICovIHx8XG4gICAgY2ggPT09IDB4MjkgLyogKSAqLyB8fFxuICAgIGNoID09PSAweDJEIC8qIC0gKi8gfHxcbiAgICBjaCA9PT0gMHgyRiAvKiAvICovIHx8XG4gICAgY2ggPj0gMHg1QiAvKiBbICovICYmIGNoIDw9IDB4NUQgLyogXSAqLyB8fFxuICAgIGNoID49IDB4N0IgLyogeyAqLyAmJiBjaCA8PSAweDdEIC8qIH0gKi9cbiAgKVxufVxuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jcHJvZC1DbGFzc1NldFJlc2VydmVkUHVuY3R1YXRvclxucHAkMS5yZWdleHBfZWF0Q2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3IgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgY2ggPSBzdGF0ZS5jdXJyZW50KCk7XG4gIGlmIChpc0NsYXNzU2V0UmVzZXJ2ZWRQdW5jdHVhdG9yKGNoKSkge1xuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IGNoO1xuICAgIHN0YXRlLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3Byb2QtQ2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3JcbmZ1bmN0aW9uIGlzQ2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3IoY2gpIHtcbiAgcmV0dXJuIChcbiAgICBjaCA9PT0gMHgyMSAvKiAhICovIHx8XG4gICAgY2ggPT09IDB4MjMgLyogIyAqLyB8fFxuICAgIGNoID09PSAweDI1IC8qICUgKi8gfHxcbiAgICBjaCA9PT0gMHgyNiAvKiAmICovIHx8XG4gICAgY2ggPT09IDB4MkMgLyogLCAqLyB8fFxuICAgIGNoID09PSAweDJEIC8qIC0gKi8gfHxcbiAgICBjaCA+PSAweDNBIC8qIDogKi8gJiYgY2ggPD0gMHgzRSAvKiA+ICovIHx8XG4gICAgY2ggPT09IDB4NDAgLyogQCAqLyB8fFxuICAgIGNoID09PSAweDYwIC8qIGAgKi8gfHxcbiAgICBjaCA9PT0gMHg3RSAvKiB+ICovXG4gIClcbn1cblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtYW5uZXhCLUNsYXNzQ29udHJvbExldHRlclxucHAkMS5yZWdleHBfZWF0Q2xhc3NDb250cm9sTGV0dGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgdmFyIGNoID0gc3RhdGUuY3VycmVudCgpO1xuICBpZiAoaXNEZWNpbWFsRGlnaXQoY2gpIHx8IGNoID09PSAweDVGIC8qIF8gKi8pIHtcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSBjaCAlIDB4MjA7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59O1xuXG4vLyBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1IZXhFc2NhcGVTZXF1ZW5jZVxucHAkMS5yZWdleHBfZWF0SGV4RXNjYXBlU2VxdWVuY2UgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIGlmIChzdGF0ZS5lYXQoMHg3OCAvKiB4ICovKSkge1xuICAgIGlmICh0aGlzLnJlZ2V4cF9lYXRGaXhlZEhleERpZ2l0cyhzdGF0ZSwgMikpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChzdGF0ZS5zd2l0Y2hVKSB7XG4gICAgICBzdGF0ZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpO1xuICAgIH1cbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn07XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLURlY2ltYWxEaWdpdHNcbnBwJDEucmVnZXhwX2VhdERlY2ltYWxEaWdpdHMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIHZhciBjaCA9IDA7XG4gIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDA7XG4gIHdoaWxlIChpc0RlY2ltYWxEaWdpdChjaCA9IHN0YXRlLmN1cnJlbnQoKSkpIHtcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAxMCAqIHN0YXRlLmxhc3RJbnRWYWx1ZSArIChjaCAtIDB4MzAgLyogMCAqLyk7XG4gICAgc3RhdGUuYWR2YW5jZSgpO1xuICB9XG4gIHJldHVybiBzdGF0ZS5wb3MgIT09IHN0YXJ0XG59O1xuZnVuY3Rpb24gaXNEZWNpbWFsRGlnaXQoY2gpIHtcbiAgcmV0dXJuIGNoID49IDB4MzAgLyogMCAqLyAmJiBjaCA8PSAweDM5IC8qIDkgKi9cbn1cblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtSGV4RGlnaXRzXG5wcCQxLnJlZ2V4cF9lYXRIZXhEaWdpdHMgPSBmdW5jdGlvbihzdGF0ZSkge1xuICB2YXIgc3RhcnQgPSBzdGF0ZS5wb3M7XG4gIHZhciBjaCA9IDA7XG4gIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDA7XG4gIHdoaWxlIChpc0hleERpZ2l0KGNoID0gc3RhdGUuY3VycmVudCgpKSkge1xuICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IDE2ICogc3RhdGUubGFzdEludFZhbHVlICsgaGV4VG9JbnQoY2gpO1xuICAgIHN0YXRlLmFkdmFuY2UoKTtcbiAgfVxuICByZXR1cm4gc3RhdGUucG9zICE9PSBzdGFydFxufTtcbmZ1bmN0aW9uIGlzSGV4RGlnaXQoY2gpIHtcbiAgcmV0dXJuIChcbiAgICAoY2ggPj0gMHgzMCAvKiAwICovICYmIGNoIDw9IDB4MzkgLyogOSAqLykgfHxcbiAgICAoY2ggPj0gMHg0MSAvKiBBICovICYmIGNoIDw9IDB4NDYgLyogRiAqLykgfHxcbiAgICAoY2ggPj0gMHg2MSAvKiBhICovICYmIGNoIDw9IDB4NjYgLyogZiAqLylcbiAgKVxufVxuZnVuY3Rpb24gaGV4VG9JbnQoY2gpIHtcbiAgaWYgKGNoID49IDB4NDEgLyogQSAqLyAmJiBjaCA8PSAweDQ2IC8qIEYgKi8pIHtcbiAgICByZXR1cm4gMTAgKyAoY2ggLSAweDQxIC8qIEEgKi8pXG4gIH1cbiAgaWYgKGNoID49IDB4NjEgLyogYSAqLyAmJiBjaCA8PSAweDY2IC8qIGYgKi8pIHtcbiAgICByZXR1cm4gMTAgKyAoY2ggLSAweDYxIC8qIGEgKi8pXG4gIH1cbiAgcmV0dXJuIGNoIC0gMHgzMCAvKiAwICovXG59XG5cbi8vIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvOC4wLyNwcm9kLWFubmV4Qi1MZWdhY3lPY3RhbEVzY2FwZVNlcXVlbmNlXG4vLyBBbGxvd3Mgb25seSAwLTM3NyhvY3RhbCkgaS5lLiAwLTI1NShkZWNpbWFsKS5cbnBwJDEucmVnZXhwX2VhdExlZ2FjeU9jdGFsRXNjYXBlU2VxdWVuY2UgPSBmdW5jdGlvbihzdGF0ZSkge1xuICBpZiAodGhpcy5yZWdleHBfZWF0T2N0YWxEaWdpdChzdGF0ZSkpIHtcbiAgICB2YXIgbjEgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XG4gICAgaWYgKHRoaXMucmVnZXhwX2VhdE9jdGFsRGlnaXQoc3RhdGUpKSB7XG4gICAgICB2YXIgbjIgPSBzdGF0ZS5sYXN0SW50VmFsdWU7XG4gICAgICBpZiAobjEgPD0gMyAmJiB0aGlzLnJlZ2V4cF9lYXRPY3RhbERpZ2l0KHN0YXRlKSkge1xuICAgICAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSBuMSAqIDY0ICsgbjIgKiA4ICsgc3RhdGUubGFzdEludFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUubGFzdEludFZhbHVlID0gbjEgKiA4ICsgbjI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmxhc3RJbnRWYWx1ZSA9IG4xO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufTtcblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtT2N0YWxEaWdpdFxucHAkMS5yZWdleHBfZWF0T2N0YWxEaWdpdCA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcbiAgaWYgKGlzT2N0YWxEaWdpdChjaCkpIHtcbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSBjaCAtIDB4MzA7IC8qIDAgKi9cbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAwO1xuICByZXR1cm4gZmFsc2Vcbn07XG5mdW5jdGlvbiBpc09jdGFsRGlnaXQoY2gpIHtcbiAgcmV0dXJuIGNoID49IDB4MzAgLyogMCAqLyAmJiBjaCA8PSAweDM3IC8qIDcgKi9cbn1cblxuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtSGV4NERpZ2l0c1xuLy8gaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi84LjAvI3Byb2QtSGV4RGlnaXRcbi8vIEFuZCBIZXhEaWdpdCBIZXhEaWdpdCBpbiBodHRwczovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzguMC8jcHJvZC1IZXhFc2NhcGVTZXF1ZW5jZVxucHAkMS5yZWdleHBfZWF0Rml4ZWRIZXhEaWdpdHMgPSBmdW5jdGlvbihzdGF0ZSwgbGVuZ3RoKSB7XG4gIHZhciBzdGFydCA9IHN0YXRlLnBvcztcbiAgc3RhdGUubGFzdEludFZhbHVlID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBjaCA9IHN0YXRlLmN1cnJlbnQoKTtcbiAgICBpZiAoIWlzSGV4RGlnaXQoY2gpKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBzdGF0ZS5sYXN0SW50VmFsdWUgPSAxNiAqIHN0YXRlLmxhc3RJbnRWYWx1ZSArIGhleFRvSW50KGNoKTtcbiAgICBzdGF0ZS5hZHZhbmNlKCk7XG4gIH1cbiAgcmV0dXJuIHRydWVcbn07XG5cbi8vIE9iamVjdCB0eXBlIHVzZWQgdG8gcmVwcmVzZW50IHRva2Vucy4gTm90ZSB0aGF0IG5vcm1hbGx5LCB0b2tlbnNcbi8vIHNpbXBseSBleGlzdCBhcyBwcm9wZXJ0aWVzIG9uIHRoZSBwYXJzZXIgb2JqZWN0LiBUaGlzIGlzIG9ubHlcbi8vIHVzZWQgZm9yIHRoZSBvblRva2VuIGNhbGxiYWNrIGFuZCB0aGUgZXh0ZXJuYWwgdG9rZW5pemVyLlxuXG52YXIgVG9rZW4gPSBmdW5jdGlvbiBUb2tlbihwKSB7XG4gIHRoaXMudHlwZSA9IHAudHlwZTtcbiAgdGhpcy52YWx1ZSA9IHAudmFsdWU7XG4gIHRoaXMuc3RhcnQgPSBwLnN0YXJ0O1xuICB0aGlzLmVuZCA9IHAuZW5kO1xuICBpZiAocC5vcHRpb25zLmxvY2F0aW9ucylcbiAgICB7IHRoaXMubG9jID0gbmV3IFNvdXJjZUxvY2F0aW9uKHAsIHAuc3RhcnRMb2MsIHAuZW5kTG9jKTsgfVxuICBpZiAocC5vcHRpb25zLnJhbmdlcylcbiAgICB7IHRoaXMucmFuZ2UgPSBbcC5zdGFydCwgcC5lbmRdOyB9XG59O1xuXG4vLyAjIyBUb2tlbml6ZXJcblxudmFyIHBwID0gUGFyc2VyLnByb3RvdHlwZTtcblxuLy8gTW92ZSB0byB0aGUgbmV4dCB0b2tlblxuXG5wcC5uZXh0ID0gZnVuY3Rpb24oaWdub3JlRXNjYXBlU2VxdWVuY2VJbktleXdvcmQpIHtcbiAgaWYgKCFpZ25vcmVFc2NhcGVTZXF1ZW5jZUluS2V5d29yZCAmJiB0aGlzLnR5cGUua2V5d29yZCAmJiB0aGlzLmNvbnRhaW5zRXNjKVxuICAgIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsIFwiRXNjYXBlIHNlcXVlbmNlIGluIGtleXdvcmQgXCIgKyB0aGlzLnR5cGUua2V5d29yZCk7IH1cbiAgaWYgKHRoaXMub3B0aW9ucy5vblRva2VuKVxuICAgIHsgdGhpcy5vcHRpb25zLm9uVG9rZW4obmV3IFRva2VuKHRoaXMpKTsgfVxuXG4gIHRoaXMubGFzdFRva0VuZCA9IHRoaXMuZW5kO1xuICB0aGlzLmxhc3RUb2tTdGFydCA9IHRoaXMuc3RhcnQ7XG4gIHRoaXMubGFzdFRva0VuZExvYyA9IHRoaXMuZW5kTG9jO1xuICB0aGlzLmxhc3RUb2tTdGFydExvYyA9IHRoaXMuc3RhcnRMb2M7XG4gIHRoaXMubmV4dFRva2VuKCk7XG59O1xuXG5wcC5nZXRUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm5leHQoKTtcbiAgcmV0dXJuIG5ldyBUb2tlbih0aGlzKVxufTtcblxuLy8gSWYgd2UncmUgaW4gYW4gRVM2IGVudmlyb25tZW50LCBtYWtlIHBhcnNlcnMgaXRlcmFibGVcbmlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiKVxuICB7IHBwW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGhpcyQxJDEgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcyQxJDEuZ2V0VG9rZW4oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiB0b2tlbi50eXBlID09PSB0eXBlcyQxLmVvZixcbiAgICAgICAgICB2YWx1ZTogdG9rZW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTsgfVxuXG4vLyBUb2dnbGUgc3RyaWN0IG1vZGUuIFJlLXJlYWRzIHRoZSBuZXh0IG51bWJlciBvciBzdHJpbmcgdG8gcGxlYXNlXG4vLyBwZWRhbnRpYyB0ZXN0cyAoYFwidXNlIHN0cmljdFwiOyAwMTA7YCBzaG91bGQgZmFpbCkuXG5cbi8vIFJlYWQgYSBzaW5nbGUgdG9rZW4sIHVwZGF0aW5nIHRoZSBwYXJzZXIgb2JqZWN0J3MgdG9rZW4tcmVsYXRlZFxuLy8gcHJvcGVydGllcy5cblxucHAubmV4dFRva2VuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJDb250ZXh0ID0gdGhpcy5jdXJDb250ZXh0KCk7XG4gIGlmICghY3VyQ29udGV4dCB8fCAhY3VyQ29udGV4dC5wcmVzZXJ2ZVNwYWNlKSB7IHRoaXMuc2tpcFNwYWNlKCk7IH1cblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3M7XG4gIGlmICh0aGlzLm9wdGlvbnMubG9jYXRpb25zKSB7IHRoaXMuc3RhcnRMb2MgPSB0aGlzLmN1clBvc2l0aW9uKCk7IH1cbiAgaWYgKHRoaXMucG9zID49IHRoaXMuaW5wdXQubGVuZ3RoKSB7IHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuZW9mKSB9XG5cbiAgaWYgKGN1ckNvbnRleHQub3ZlcnJpZGUpIHsgcmV0dXJuIGN1ckNvbnRleHQub3ZlcnJpZGUodGhpcykgfVxuICBlbHNlIHsgdGhpcy5yZWFkVG9rZW4odGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpKTsgfVxufTtcblxucHAucmVhZFRva2VuID0gZnVuY3Rpb24oY29kZSkge1xuICAvLyBJZGVudGlmaWVyIG9yIGtleXdvcmQuICdcXHVYWFhYJyBzZXF1ZW5jZXMgYXJlIGFsbG93ZWQgaW5cbiAgLy8gaWRlbnRpZmllcnMsIHNvICdcXCcgYWxzbyBkaXNwYXRjaGVzIHRvIHRoYXQuXG4gIGlmIChpc0lkZW50aWZpZXJTdGFydChjb2RlLCB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikgfHwgY29kZSA9PT0gOTIgLyogJ1xcJyAqLylcbiAgICB7IHJldHVybiB0aGlzLnJlYWRXb3JkKCkgfVxuXG4gIHJldHVybiB0aGlzLmdldFRva2VuRnJvbUNvZGUoY29kZSlcbn07XG5cbnBwLmZ1bGxDaGFyQ29kZUF0UG9zID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb2RlID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgaWYgKGNvZGUgPD0gMHhkN2ZmIHx8IGNvZGUgPj0gMHhkYzAwKSB7IHJldHVybiBjb2RlIH1cbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcbiAgcmV0dXJuIG5leHQgPD0gMHhkYmZmIHx8IG5leHQgPj0gMHhlMDAwID8gY29kZSA6IChjb2RlIDw8IDEwKSArIG5leHQgLSAweDM1ZmRjMDBcbn07XG5cbnBwLnNraXBCbG9ja0NvbW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YXJ0TG9jID0gdGhpcy5vcHRpb25zLm9uQ29tbWVudCAmJiB0aGlzLmN1clBvc2l0aW9uKCk7XG4gIHZhciBzdGFydCA9IHRoaXMucG9zLCBlbmQgPSB0aGlzLmlucHV0LmluZGV4T2YoXCIqL1wiLCB0aGlzLnBvcyArPSAyKTtcbiAgaWYgKGVuZCA9PT0gLTEpIHsgdGhpcy5yYWlzZSh0aGlzLnBvcyAtIDIsIFwiVW50ZXJtaW5hdGVkIGNvbW1lbnRcIik7IH1cbiAgdGhpcy5wb3MgPSBlbmQgKyAyO1xuICBpZiAodGhpcy5vcHRpb25zLmxvY2F0aW9ucykge1xuICAgIGZvciAodmFyIG5leHRCcmVhayA9ICh2b2lkIDApLCBwb3MgPSBzdGFydDsgKG5leHRCcmVhayA9IG5leHRMaW5lQnJlYWsodGhpcy5pbnB1dCwgcG9zLCB0aGlzLnBvcykpID4gLTE7KSB7XG4gICAgICArK3RoaXMuY3VyTGluZTtcbiAgICAgIHBvcyA9IHRoaXMubGluZVN0YXJ0ID0gbmV4dEJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAodGhpcy5vcHRpb25zLm9uQ29tbWVudClcbiAgICB7IHRoaXMub3B0aW9ucy5vbkNvbW1lbnQodHJ1ZSwgdGhpcy5pbnB1dC5zbGljZShzdGFydCArIDIsIGVuZCksIHN0YXJ0LCB0aGlzLnBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TG9jLCB0aGlzLmN1clBvc2l0aW9uKCkpOyB9XG59O1xuXG5wcC5za2lwTGluZUNvbW1lbnQgPSBmdW5jdGlvbihzdGFydFNraXApIHtcbiAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gIHZhciBzdGFydExvYyA9IHRoaXMub3B0aW9ucy5vbkNvbW1lbnQgJiYgdGhpcy5jdXJQb3NpdGlvbigpO1xuICB2YXIgY2ggPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKz0gc3RhcnRTa2lwKTtcbiAgd2hpbGUgKHRoaXMucG9zIDwgdGhpcy5pbnB1dC5sZW5ndGggJiYgIWlzTmV3TGluZShjaCkpIHtcbiAgICBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCgrK3RoaXMucG9zKTtcbiAgfVxuICBpZiAodGhpcy5vcHRpb25zLm9uQ29tbWVudClcbiAgICB7IHRoaXMub3B0aW9ucy5vbkNvbW1lbnQoZmFsc2UsIHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQgKyBzdGFydFNraXAsIHRoaXMucG9zKSwgc3RhcnQsIHRoaXMucG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMb2MsIHRoaXMuY3VyUG9zaXRpb24oKSk7IH1cbn07XG5cbi8vIENhbGxlZCBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhcnNlIGFuZCBhZnRlciBldmVyeSB0b2tlbi4gU2tpcHNcbi8vIHdoaXRlc3BhY2UgYW5kIGNvbW1lbnRzLCBhbmQuXG5cbnBwLnNraXBTcGFjZSA9IGZ1bmN0aW9uKCkge1xuICBsb29wOiB3aGlsZSAodGhpcy5wb3MgPCB0aGlzLmlucHV0Lmxlbmd0aCkge1xuICAgIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgc3dpdGNoIChjaCkge1xuICAgIGNhc2UgMzI6IGNhc2UgMTYwOiAvLyAnICdcbiAgICAgICsrdGhpcy5wb3M7XG4gICAgICBicmVha1xuICAgIGNhc2UgMTM6XG4gICAgICBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkgPT09IDEwKSB7XG4gICAgICAgICsrdGhpcy5wb3M7XG4gICAgICB9XG4gICAgY2FzZSAxMDogY2FzZSA4MjMyOiBjYXNlIDgyMzM6XG4gICAgICArK3RoaXMucG9zO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpIHtcbiAgICAgICAgKyt0aGlzLmN1ckxpbmU7XG4gICAgICAgIHRoaXMubGluZVN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgNDc6IC8vICcvJ1xuICAgICAgc3dpdGNoICh0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKSkge1xuICAgICAgY2FzZSA0MjogLy8gJyonXG4gICAgICAgIHRoaXMuc2tpcEJsb2NrQ29tbWVudCgpO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSA0NzpcbiAgICAgICAgdGhpcy5za2lwTGluZUNvbW1lbnQoMik7XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhayBsb29wXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoY2ggPiA4ICYmIGNoIDwgMTQgfHwgY2ggPj0gNTc2MCAmJiBub25BU0NJSXdoaXRlc3BhY2UudGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGNoKSkpIHtcbiAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrIGxvb3BcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIENhbGxlZCBhdCB0aGUgZW5kIG9mIGV2ZXJ5IHRva2VuLiBTZXRzIGBlbmRgLCBgdmFsYCwgYW5kXG4vLyBtYWludGFpbnMgYGNvbnRleHRgIGFuZCBgZXhwckFsbG93ZWRgLCBhbmQgc2tpcHMgdGhlIHNwYWNlIGFmdGVyXG4vLyB0aGUgdG9rZW4sIHNvIHRoYXQgdGhlIG5leHQgb25lJ3MgYHN0YXJ0YCB3aWxsIHBvaW50IGF0IHRoZVxuLy8gcmlnaHQgcG9zaXRpb24uXG5cbnBwLmZpbmlzaFRva2VuID0gZnVuY3Rpb24odHlwZSwgdmFsKSB7XG4gIHRoaXMuZW5kID0gdGhpcy5wb3M7XG4gIGlmICh0aGlzLm9wdGlvbnMubG9jYXRpb25zKSB7IHRoaXMuZW5kTG9jID0gdGhpcy5jdXJQb3NpdGlvbigpOyB9XG4gIHZhciBwcmV2VHlwZSA9IHRoaXMudHlwZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy52YWx1ZSA9IHZhbDtcblxuICB0aGlzLnVwZGF0ZUNvbnRleHQocHJldlR5cGUpO1xufTtcblxuLy8gIyMjIFRva2VuIHJlYWRpbmdcblxuLy8gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgdG8gZmV0Y2ggdGhlIG5leHQgdG9rZW4uIEl0XG4vLyBpcyBzb21ld2hhdCBvYnNjdXJlLCBiZWNhdXNlIGl0IHdvcmtzIGluIGNoYXJhY3RlciBjb2RlcyByYXRoZXJcbi8vIHRoYW4gY2hhcmFjdGVycywgYW5kIGJlY2F1c2Ugb3BlcmF0b3IgcGFyc2luZyBoYXMgYmVlbiBpbmxpbmVkXG4vLyBpbnRvIGl0LlxuLy9cbi8vIEFsbCBpbiB0aGUgbmFtZSBvZiBzcGVlZC5cbi8vXG5wcC5yZWFkVG9rZW5fZG90ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XG4gIGlmIChuZXh0ID49IDQ4ICYmIG5leHQgPD0gNTcpIHsgcmV0dXJuIHRoaXMucmVhZE51bWJlcih0cnVlKSB9XG4gIHZhciBuZXh0MiA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpO1xuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDYgJiYgbmV4dCA9PT0gNDYgJiYgbmV4dDIgPT09IDQ2KSB7IC8vIDQ2ID0gZG90ICcuJ1xuICAgIHRoaXMucG9zICs9IDM7XG4gICAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5lbGxpcHNpcylcbiAgfSBlbHNlIHtcbiAgICArK3RoaXMucG9zO1xuICAgIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuZG90KVxuICB9XG59O1xuXG5wcC5yZWFkVG9rZW5fc2xhc2ggPSBmdW5jdGlvbigpIHsgLy8gJy8nXG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XG4gIGlmICh0aGlzLmV4cHJBbGxvd2VkKSB7ICsrdGhpcy5wb3M7IHJldHVybiB0aGlzLnJlYWRSZWdleHAoKSB9XG4gIGlmIChuZXh0ID09PSA2MSkgeyByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLmFzc2lnbiwgMikgfVxuICByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLnNsYXNoLCAxKVxufTtcblxucHAucmVhZFRva2VuX211bHRfbW9kdWxvX2V4cCA9IGZ1bmN0aW9uKGNvZGUpIHsgLy8gJyUqJ1xuICB2YXIgbmV4dCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpO1xuICB2YXIgc2l6ZSA9IDE7XG4gIHZhciB0b2tlbnR5cGUgPSBjb2RlID09PSA0MiA/IHR5cGVzJDEuc3RhciA6IHR5cGVzJDEubW9kdWxvO1xuXG4gIC8vIGV4cG9uZW50aWF0aW9uIG9wZXJhdG9yICoqIGFuZCAqKj1cbiAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA3ICYmIGNvZGUgPT09IDQyICYmIG5leHQgPT09IDQyKSB7XG4gICAgKytzaXplO1xuICAgIHRva2VudHlwZSA9IHR5cGVzJDEuc3RhcnN0YXI7XG4gICAgbmV4dCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpO1xuICB9XG5cbiAgaWYgKG5leHQgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYXNzaWduLCBzaXplICsgMSkgfVxuICByZXR1cm4gdGhpcy5maW5pc2hPcCh0b2tlbnR5cGUsIHNpemUpXG59O1xuXG5wcC5yZWFkVG9rZW5fcGlwZV9hbXAgPSBmdW5jdGlvbihjb2RlKSB7IC8vICd8JidcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcbiAgaWYgKG5leHQgPT09IGNvZGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDEyKSB7XG4gICAgICB2YXIgbmV4dDIgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAyKTtcbiAgICAgIGlmIChuZXh0MiA9PT0gNjEpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5hc3NpZ24sIDMpIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmluaXNoT3AoY29kZSA9PT0gMTI0ID8gdHlwZXMkMS5sb2dpY2FsT1IgOiB0eXBlcyQxLmxvZ2ljYWxBTkQsIDIpXG4gIH1cbiAgaWYgKG5leHQgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYXNzaWduLCAyKSB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKGNvZGUgPT09IDEyNCA/IHR5cGVzJDEuYml0d2lzZU9SIDogdHlwZXMkMS5iaXR3aXNlQU5ELCAxKVxufTtcblxucHAucmVhZFRva2VuX2NhcmV0ID0gZnVuY3Rpb24oKSB7IC8vICdeJ1xuICB2YXIgbmV4dCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpO1xuICBpZiAobmV4dCA9PT0gNjEpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5hc3NpZ24sIDIpIH1cbiAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5iaXR3aXNlWE9SLCAxKVxufTtcblxucHAucmVhZFRva2VuX3BsdXNfbWluID0gZnVuY3Rpb24oY29kZSkgeyAvLyAnKy0nXG4gIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XG4gIGlmIChuZXh0ID09PSBjb2RlKSB7XG4gICAgaWYgKG5leHQgPT09IDQ1ICYmICF0aGlzLmluTW9kdWxlICYmIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpID09PSA2MiAmJlxuICAgICAgICAodGhpcy5sYXN0VG9rRW5kID09PSAwIHx8IGxpbmVCcmVhay50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLCB0aGlzLnBvcykpKSkge1xuICAgICAgLy8gQSBgLS0+YCBsaW5lIGNvbW1lbnRcbiAgICAgIHRoaXMuc2tpcExpbmVDb21tZW50KDMpO1xuICAgICAgdGhpcy5za2lwU3BhY2UoKTtcbiAgICAgIHJldHVybiB0aGlzLm5leHRUb2tlbigpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuaW5jRGVjLCAyKVxuICB9XG4gIGlmIChuZXh0ID09PSA2MSkgeyByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLmFzc2lnbiwgMikgfVxuICByZXR1cm4gdGhpcy5maW5pc2hPcCh0eXBlcyQxLnBsdXNNaW4sIDEpXG59O1xuXG5wcC5yZWFkVG9rZW5fbHRfZ3QgPSBmdW5jdGlvbihjb2RlKSB7IC8vICc8PidcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcbiAgdmFyIHNpemUgPSAxO1xuICBpZiAobmV4dCA9PT0gY29kZSkge1xuICAgIHNpemUgPSBjb2RlID09PSA2MiAmJiB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAyKSA9PT0gNjIgPyAzIDogMjtcbiAgICBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgc2l6ZSkgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYXNzaWduLCBzaXplICsgMSkgfVxuICAgIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuYml0U2hpZnQsIHNpemUpXG4gIH1cbiAgaWYgKG5leHQgPT09IDMzICYmIGNvZGUgPT09IDYwICYmICF0aGlzLmluTW9kdWxlICYmIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpID09PSA0NSAmJlxuICAgICAgdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMykgPT09IDQ1KSB7XG4gICAgLy8gYDwhLS1gLCBhbiBYTUwtc3R5bGUgY29tbWVudCB0aGF0IHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBhIGxpbmUgY29tbWVudFxuICAgIHRoaXMuc2tpcExpbmVDb21tZW50KDQpO1xuICAgIHRoaXMuc2tpcFNwYWNlKCk7XG4gICAgcmV0dXJuIHRoaXMubmV4dFRva2VuKClcbiAgfVxuICBpZiAobmV4dCA9PT0gNjEpIHsgc2l6ZSA9IDI7IH1cbiAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5yZWxhdGlvbmFsLCBzaXplKVxufTtcblxucHAucmVhZFRva2VuX2VxX2V4Y2wgPSBmdW5jdGlvbihjb2RlKSB7IC8vICc9ISdcbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKTtcbiAgaWYgKG5leHQgPT09IDYxKSB7IHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuZXF1YWxpdHksIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpID09PSA2MSA/IDMgOiAyKSB9XG4gIGlmIChjb2RlID09PSA2MSAmJiBuZXh0ID09PSA2MiAmJiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24gPj0gNikgeyAvLyAnPT4nXG4gICAgdGhpcy5wb3MgKz0gMjtcbiAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmFycm93KVxuICB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKGNvZGUgPT09IDYxID8gdHlwZXMkMS5lcSA6IHR5cGVzJDEucHJlZml4LCAxKVxufTtcblxucHAucmVhZFRva2VuX3F1ZXN0aW9uID0gZnVuY3Rpb24oKSB7IC8vICc/J1xuICB2YXIgZWNtYVZlcnNpb24gPSB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb247XG4gIGlmIChlY21hVmVyc2lvbiA+PSAxMSkge1xuICAgIHZhciBuZXh0ID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSk7XG4gICAgaWYgKG5leHQgPT09IDQ2KSB7XG4gICAgICB2YXIgbmV4dDIgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAyKTtcbiAgICAgIGlmIChuZXh0MiA8IDQ4IHx8IG5leHQyID4gNTcpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5xdWVzdGlvbkRvdCwgMikgfVxuICAgIH1cbiAgICBpZiAobmV4dCA9PT0gNjMpIHtcbiAgICAgIGlmIChlY21hVmVyc2lvbiA+PSAxMikge1xuICAgICAgICB2YXIgbmV4dDIkMSA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDIpO1xuICAgICAgICBpZiAobmV4dDIkMSA9PT0gNjEpIHsgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5hc3NpZ24sIDMpIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEuY29hbGVzY2UsIDIpXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzLmZpbmlzaE9wKHR5cGVzJDEucXVlc3Rpb24sIDEpXG59O1xuXG5wcC5yZWFkVG9rZW5fbnVtYmVyU2lnbiA9IGZ1bmN0aW9uKCkgeyAvLyAnIydcbiAgdmFyIGVjbWFWZXJzaW9uID0gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uO1xuICB2YXIgY29kZSA9IDM1OyAvLyAnIydcbiAgaWYgKGVjbWFWZXJzaW9uID49IDEzKSB7XG4gICAgKyt0aGlzLnBvcztcbiAgICBjb2RlID0gdGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpO1xuICAgIGlmIChpc0lkZW50aWZpZXJTdGFydChjb2RlLCB0cnVlKSB8fCBjb2RlID09PSA5MiAvKiAnXFwnICovKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnByaXZhdGVJZCwgdGhpcy5yZWFkV29yZDEoKSlcbiAgICB9XG4gIH1cblxuICB0aGlzLnJhaXNlKHRoaXMucG9zLCBcIlVuZXhwZWN0ZWQgY2hhcmFjdGVyICdcIiArIGNvZGVQb2ludFRvU3RyaW5nKGNvZGUpICsgXCInXCIpO1xufTtcblxucHAuZ2V0VG9rZW5Gcm9tQ29kZSA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gIC8vIFRoZSBpbnRlcnByZXRhdGlvbiBvZiBhIGRvdCBkZXBlbmRzIG9uIHdoZXRoZXIgaXQgaXMgZm9sbG93ZWRcbiAgLy8gYnkgYSBkaWdpdCBvciBhbm90aGVyIHR3byBkb3RzLlxuICBjYXNlIDQ2OiAvLyAnLidcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fZG90KClcblxuICAvLyBQdW5jdHVhdGlvbiB0b2tlbnMuXG4gIGNhc2UgNDA6ICsrdGhpcy5wb3M7IHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEucGFyZW5MKVxuICBjYXNlIDQxOiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnBhcmVuUilcbiAgY2FzZSA1OTogKyt0aGlzLnBvczsgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5zZW1pKVxuICBjYXNlIDQ0OiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmNvbW1hKVxuICBjYXNlIDkxOiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJyYWNrZXRMKVxuICBjYXNlIDkzOiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJyYWNrZXRSKVxuICBjYXNlIDEyMzogKyt0aGlzLnBvczsgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5icmFjZUwpXG4gIGNhc2UgMTI1OiArK3RoaXMucG9zOyByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJyYWNlUilcbiAgY2FzZSA1ODogKyt0aGlzLnBvczsgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5jb2xvbilcblxuICBjYXNlIDk2OiAvLyAnYCdcbiAgICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uIDwgNikgeyBicmVhayB9XG4gICAgKyt0aGlzLnBvcztcbiAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmJhY2tRdW90ZSlcblxuICBjYXNlIDQ4OiAvLyAnMCdcbiAgICB2YXIgbmV4dCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpO1xuICAgIGlmIChuZXh0ID09PSAxMjAgfHwgbmV4dCA9PT0gODgpIHsgcmV0dXJuIHRoaXMucmVhZFJhZGl4TnVtYmVyKDE2KSB9IC8vICcweCcsICcwWCcgLSBoZXggbnVtYmVyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2KSB7XG4gICAgICBpZiAobmV4dCA9PT0gMTExIHx8IG5leHQgPT09IDc5KSB7IHJldHVybiB0aGlzLnJlYWRSYWRpeE51bWJlcig4KSB9IC8vICcwbycsICcwTycgLSBvY3RhbCBudW1iZXJcbiAgICAgIGlmIChuZXh0ID09PSA5OCB8fCBuZXh0ID09PSA2NikgeyByZXR1cm4gdGhpcy5yZWFkUmFkaXhOdW1iZXIoMikgfSAvLyAnMGInLCAnMEInIC0gYmluYXJ5IG51bWJlclxuICAgIH1cblxuICAvLyBBbnl0aGluZyBlbHNlIGJlZ2lubmluZyB3aXRoIGEgZGlnaXQgaXMgYW4gaW50ZWdlciwgb2N0YWxcbiAgLy8gbnVtYmVyLCBvciBmbG9hdC5cbiAgY2FzZSA0OTogY2FzZSA1MDogY2FzZSA1MTogY2FzZSA1MjogY2FzZSA1MzogY2FzZSA1NDogY2FzZSA1NTogY2FzZSA1NjogY2FzZSA1NzogLy8gMS05XG4gICAgcmV0dXJuIHRoaXMucmVhZE51bWJlcihmYWxzZSlcblxuICAvLyBRdW90ZXMgcHJvZHVjZSBzdHJpbmdzLlxuICBjYXNlIDM0OiBjYXNlIDM5OiAvLyAnXCInLCBcIidcIlxuICAgIHJldHVybiB0aGlzLnJlYWRTdHJpbmcoY29kZSlcblxuICAvLyBPcGVyYXRvcnMgYXJlIHBhcnNlZCBpbmxpbmUgaW4gdGlueSBzdGF0ZSBtYWNoaW5lcy4gJz0nICg2MSkgaXNcbiAgLy8gb2Z0ZW4gcmVmZXJyZWQgdG8uIGBmaW5pc2hPcGAgc2ltcGx5IHNraXBzIHRoZSBhbW91bnQgb2ZcbiAgLy8gY2hhcmFjdGVycyBpdCBpcyBnaXZlbiBhcyBzZWNvbmQgYXJndW1lbnQsIGFuZCByZXR1cm5zIGEgdG9rZW5cbiAgLy8gb2YgdGhlIHR5cGUgZ2l2ZW4gYnkgaXRzIGZpcnN0IGFyZ3VtZW50LlxuICBjYXNlIDQ3OiAvLyAnLydcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fc2xhc2goKVxuXG4gIGNhc2UgMzc6IGNhc2UgNDI6IC8vICclKidcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fbXVsdF9tb2R1bG9fZXhwKGNvZGUpXG5cbiAgY2FzZSAxMjQ6IGNhc2UgMzg6IC8vICd8JidcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fcGlwZV9hbXAoY29kZSlcblxuICBjYXNlIDk0OiAvLyAnXidcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fY2FyZXQoKVxuXG4gIGNhc2UgNDM6IGNhc2UgNDU6IC8vICcrLSdcbiAgICByZXR1cm4gdGhpcy5yZWFkVG9rZW5fcGx1c19taW4oY29kZSlcblxuICBjYXNlIDYwOiBjYXNlIDYyOiAvLyAnPD4nXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX2x0X2d0KGNvZGUpXG5cbiAgY2FzZSA2MTogY2FzZSAzMzogLy8gJz0hJ1xuICAgIHJldHVybiB0aGlzLnJlYWRUb2tlbl9lcV9leGNsKGNvZGUpXG5cbiAgY2FzZSA2MzogLy8gJz8nXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX3F1ZXN0aW9uKClcblxuICBjYXNlIDEyNjogLy8gJ34nXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoT3AodHlwZXMkMS5wcmVmaXgsIDEpXG5cbiAgY2FzZSAzNTogLy8gJyMnXG4gICAgcmV0dXJuIHRoaXMucmVhZFRva2VuX251bWJlclNpZ24oKVxuICB9XG5cbiAgdGhpcy5yYWlzZSh0aGlzLnBvcywgXCJVbmV4cGVjdGVkIGNoYXJhY3RlciAnXCIgKyBjb2RlUG9pbnRUb1N0cmluZyhjb2RlKSArIFwiJ1wiKTtcbn07XG5cbnBwLmZpbmlzaE9wID0gZnVuY3Rpb24odHlwZSwgc2l6ZSkge1xuICB2YXIgc3RyID0gdGhpcy5pbnB1dC5zbGljZSh0aGlzLnBvcywgdGhpcy5wb3MgKyBzaXplKTtcbiAgdGhpcy5wb3MgKz0gc2l6ZTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZSwgc3RyKVxufTtcblxucHAucmVhZFJlZ2V4cCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXNjYXBlZCwgaW5DbGFzcywgc3RhcnQgPSB0aGlzLnBvcztcbiAgZm9yICg7Oykge1xuICAgIGlmICh0aGlzLnBvcyA+PSB0aGlzLmlucHV0Lmxlbmd0aCkgeyB0aGlzLnJhaXNlKHN0YXJ0LCBcIlVudGVybWluYXRlZCByZWd1bGFyIGV4cHJlc3Npb25cIik7IH1cbiAgICB2YXIgY2ggPSB0aGlzLmlucHV0LmNoYXJBdCh0aGlzLnBvcyk7XG4gICAgaWYgKGxpbmVCcmVhay50ZXN0KGNoKSkgeyB0aGlzLnJhaXNlKHN0YXJ0LCBcIlVudGVybWluYXRlZCByZWd1bGFyIGV4cHJlc3Npb25cIik7IH1cbiAgICBpZiAoIWVzY2FwZWQpIHtcbiAgICAgIGlmIChjaCA9PT0gXCJbXCIpIHsgaW5DbGFzcyA9IHRydWU7IH1cbiAgICAgIGVsc2UgaWYgKGNoID09PSBcIl1cIiAmJiBpbkNsYXNzKSB7IGluQ2xhc3MgPSBmYWxzZTsgfVxuICAgICAgZWxzZSBpZiAoY2ggPT09IFwiL1wiICYmICFpbkNsYXNzKSB7IGJyZWFrIH1cbiAgICAgIGVzY2FwZWQgPSBjaCA9PT0gXCJcXFxcXCI7XG4gICAgfSBlbHNlIHsgZXNjYXBlZCA9IGZhbHNlOyB9XG4gICAgKyt0aGlzLnBvcztcbiAgfVxuICB2YXIgcGF0dGVybiA9IHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIHRoaXMucG9zKTtcbiAgKyt0aGlzLnBvcztcbiAgdmFyIGZsYWdzU3RhcnQgPSB0aGlzLnBvcztcbiAgdmFyIGZsYWdzID0gdGhpcy5yZWFkV29yZDEoKTtcbiAgaWYgKHRoaXMuY29udGFpbnNFc2MpIHsgdGhpcy51bmV4cGVjdGVkKGZsYWdzU3RhcnQpOyB9XG5cbiAgLy8gVmFsaWRhdGUgcGF0dGVyblxuICB2YXIgc3RhdGUgPSB0aGlzLnJlZ2V4cFN0YXRlIHx8ICh0aGlzLnJlZ2V4cFN0YXRlID0gbmV3IFJlZ0V4cFZhbGlkYXRpb25TdGF0ZSh0aGlzKSk7XG4gIHN0YXRlLnJlc2V0KHN0YXJ0LCBwYXR0ZXJuLCBmbGFncyk7XG4gIHRoaXMudmFsaWRhdGVSZWdFeHBGbGFncyhzdGF0ZSk7XG4gIHRoaXMudmFsaWRhdGVSZWdFeHBQYXR0ZXJuKHN0YXRlKTtcblxuICAvLyBDcmVhdGUgTGl0ZXJhbCN2YWx1ZSBwcm9wZXJ0eSB2YWx1ZS5cbiAgdmFyIHZhbHVlID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gRVNUcmVlIHJlcXVpcmVzIG51bGwgaWYgaXQgZmFpbGVkIHRvIGluc3RhbnRpYXRlIFJlZ0V4cCBvYmplY3QuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VzdHJlZS9lc3RyZWUvYmxvYi9hMjcwMDNhZGY0ZmQ3YmZhZDQ0ZGU5Y2VmMzcyYTJlYWNkNTI3YjFjL2VzNS5tZCNyZWdleHBsaXRlcmFsXG4gIH1cblxuICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnJlZ2V4cCwge3BhdHRlcm46IHBhdHRlcm4sIGZsYWdzOiBmbGFncywgdmFsdWU6IHZhbHVlfSlcbn07XG5cbi8vIFJlYWQgYW4gaW50ZWdlciBpbiB0aGUgZ2l2ZW4gcmFkaXguIFJldHVybiBudWxsIGlmIHplcm8gZGlnaXRzXG4vLyB3ZXJlIHJlYWQsIHRoZSBpbnRlZ2VyIHZhbHVlIG90aGVyd2lzZS4gV2hlbiBgbGVuYCBpcyBnaXZlbiwgdGhpc1xuLy8gd2lsbCByZXR1cm4gYG51bGxgIHVubGVzcyB0aGUgaW50ZWdlciBoYXMgZXhhY3RseSBgbGVuYCBkaWdpdHMuXG5cbnBwLnJlYWRJbnQgPSBmdW5jdGlvbihyYWRpeCwgbGVuLCBtYXliZUxlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWwpIHtcbiAgLy8gYGxlbmAgaXMgdXNlZCBmb3IgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZXMuIEluIHRoYXQgY2FzZSwgZGlzYWxsb3cgc2VwYXJhdG9ycy5cbiAgdmFyIGFsbG93U2VwYXJhdG9ycyA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMiAmJiBsZW4gPT09IHVuZGVmaW5lZDtcblxuICAvLyBgbWF5YmVMZWdhY3lPY3RhbE51bWVyaWNMaXRlcmFsYCBpcyB0cnVlIGlmIGl0IGRvZXNuJ3QgaGF2ZSBwcmVmaXggKDB4LDBvLDBiKVxuICAvLyBhbmQgaXNuJ3QgZnJhY3Rpb24gcGFydCBub3IgZXhwb25lbnQgcGFydC4gSW4gdGhhdCBjYXNlLCBpZiB0aGUgZmlyc3QgZGlnaXRcbiAgLy8gaXMgemVybyB0aGVuIGRpc2FsbG93IHNlcGFyYXRvcnMuXG4gIHZhciBpc0xlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWwgPSBtYXliZUxlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWwgJiYgdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PT0gNDg7XG5cbiAgdmFyIHN0YXJ0ID0gdGhpcy5wb3MsIHRvdGFsID0gMCwgbGFzdENvZGUgPSAwO1xuICBmb3IgKHZhciBpID0gMCwgZSA9IGxlbiA9PSBudWxsID8gSW5maW5pdHkgOiBsZW47IGkgPCBlOyArK2ksICsrdGhpcy5wb3MpIHtcbiAgICB2YXIgY29kZSA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyksIHZhbCA9ICh2b2lkIDApO1xuXG4gICAgaWYgKGFsbG93U2VwYXJhdG9ycyAmJiBjb2RlID09PSA5NSkge1xuICAgICAgaWYgKGlzTGVnYWN5T2N0YWxOdW1lcmljTGl0ZXJhbCkgeyB0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5wb3MsIFwiTnVtZXJpYyBzZXBhcmF0b3IgaXMgbm90IGFsbG93ZWQgaW4gbGVnYWN5IG9jdGFsIG51bWVyaWMgbGl0ZXJhbHNcIik7IH1cbiAgICAgIGlmIChsYXN0Q29kZSA9PT0gOTUpIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMucG9zLCBcIk51bWVyaWMgc2VwYXJhdG9yIG11c3QgYmUgZXhhY3RseSBvbmUgdW5kZXJzY29yZVwiKTsgfVxuICAgICAgaWYgKGkgPT09IDApIHsgdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMucG9zLCBcIk51bWVyaWMgc2VwYXJhdG9yIGlzIG5vdCBhbGxvd2VkIGF0IHRoZSBmaXJzdCBvZiBkaWdpdHNcIik7IH1cbiAgICAgIGxhc3RDb2RlID0gY29kZTtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gOTcpIHsgdmFsID0gY29kZSAtIDk3ICsgMTA7IH0gLy8gYVxuICAgIGVsc2UgaWYgKGNvZGUgPj0gNjUpIHsgdmFsID0gY29kZSAtIDY1ICsgMTA7IH0gLy8gQVxuICAgIGVsc2UgaWYgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgeyB2YWwgPSBjb2RlIC0gNDg7IH0gLy8gMC05XG4gICAgZWxzZSB7IHZhbCA9IEluZmluaXR5OyB9XG4gICAgaWYgKHZhbCA+PSByYWRpeCkgeyBicmVhayB9XG4gICAgbGFzdENvZGUgPSBjb2RlO1xuICAgIHRvdGFsID0gdG90YWwgKiByYWRpeCArIHZhbDtcbiAgfVxuXG4gIGlmIChhbGxvd1NlcGFyYXRvcnMgJiYgbGFzdENvZGUgPT09IDk1KSB7IHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnBvcyAtIDEsIFwiTnVtZXJpYyBzZXBhcmF0b3IgaXMgbm90IGFsbG93ZWQgYXQgdGhlIGxhc3Qgb2YgZGlnaXRzXCIpOyB9XG4gIGlmICh0aGlzLnBvcyA9PT0gc3RhcnQgfHwgbGVuICE9IG51bGwgJiYgdGhpcy5wb3MgLSBzdGFydCAhPT0gbGVuKSB7IHJldHVybiBudWxsIH1cblxuICByZXR1cm4gdG90YWxcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ1RvTnVtYmVyKHN0ciwgaXNMZWdhY3lPY3RhbE51bWVyaWNMaXRlcmFsKSB7XG4gIGlmIChpc0xlZ2FjeU9jdGFsTnVtZXJpY0xpdGVyYWwpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCA4KVxuICB9XG5cbiAgLy8gYHBhcnNlRmxvYXQodmFsdWUpYCBzdG9wcyBwYXJzaW5nIGF0IHRoZSBmaXJzdCBudW1lcmljIHNlcGFyYXRvciB0aGVuIHJldHVybnMgYSB3cm9uZyB2YWx1ZS5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyLnJlcGxhY2UoL18vZywgXCJcIikpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQmlnSW50KHN0cikge1xuICBpZiAodHlwZW9mIEJpZ0ludCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIGBCaWdJbnQodmFsdWUpYCB0aHJvd3Mgc3ludGF4IGVycm9yIGlmIHRoZSBzdHJpbmcgY29udGFpbnMgbnVtZXJpYyBzZXBhcmF0b3JzLlxuICByZXR1cm4gQmlnSW50KHN0ci5yZXBsYWNlKC9fL2csIFwiXCIpKVxufVxuXG5wcC5yZWFkUmFkaXhOdW1iZXIgPSBmdW5jdGlvbihyYWRpeCkge1xuICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgdGhpcy5wb3MgKz0gMjsgLy8gMHhcbiAgdmFyIHZhbCA9IHRoaXMucmVhZEludChyYWRpeCk7XG4gIGlmICh2YWwgPT0gbnVsbCkgeyB0aGlzLnJhaXNlKHRoaXMuc3RhcnQgKyAyLCBcIkV4cGVjdGVkIG51bWJlciBpbiByYWRpeCBcIiArIHJhZGl4KTsgfVxuICBpZiAodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uID49IDExICYmIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT09IDExMCkge1xuICAgIHZhbCA9IHN0cmluZ1RvQmlnSW50KHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIHRoaXMucG9zKSk7XG4gICAgKyt0aGlzLnBvcztcbiAgfSBlbHNlIGlmIChpc0lkZW50aWZpZXJTdGFydCh0aGlzLmZ1bGxDaGFyQ29kZUF0UG9zKCkpKSB7IHRoaXMucmFpc2UodGhpcy5wb3MsIFwiSWRlbnRpZmllciBkaXJlY3RseSBhZnRlciBudW1iZXJcIik7IH1cbiAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5udW0sIHZhbClcbn07XG5cbi8vIFJlYWQgYW4gaW50ZWdlciwgb2N0YWwgaW50ZWdlciwgb3IgZmxvYXRpbmctcG9pbnQgbnVtYmVyLlxuXG5wcC5yZWFkTnVtYmVyID0gZnVuY3Rpb24oc3RhcnRzV2l0aERvdCkge1xuICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgaWYgKCFzdGFydHNXaXRoRG90ICYmIHRoaXMucmVhZEludCgxMCwgdW5kZWZpbmVkLCB0cnVlKSA9PT0gbnVsbCkgeyB0aGlzLnJhaXNlKHN0YXJ0LCBcIkludmFsaWQgbnVtYmVyXCIpOyB9XG4gIHZhciBvY3RhbCA9IHRoaXMucG9zIC0gc3RhcnQgPj0gMiAmJiB0aGlzLmlucHV0LmNoYXJDb2RlQXQoc3RhcnQpID09PSA0ODtcbiAgaWYgKG9jdGFsICYmIHRoaXMuc3RyaWN0KSB7IHRoaXMucmFpc2Uoc3RhcnQsIFwiSW52YWxpZCBudW1iZXJcIik7IH1cbiAgdmFyIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICBpZiAoIW9jdGFsICYmICFzdGFydHNXaXRoRG90ICYmIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSAxMSAmJiBuZXh0ID09PSAxMTApIHtcbiAgICB2YXIgdmFsJDEgPSBzdHJpbmdUb0JpZ0ludCh0aGlzLmlucHV0LnNsaWNlKHN0YXJ0LCB0aGlzLnBvcykpO1xuICAgICsrdGhpcy5wb3M7XG4gICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KHRoaXMuZnVsbENoYXJDb2RlQXRQb3MoKSkpIHsgdGhpcy5yYWlzZSh0aGlzLnBvcywgXCJJZGVudGlmaWVyIGRpcmVjdGx5IGFmdGVyIG51bWJlclwiKTsgfVxuICAgIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEubnVtLCB2YWwkMSlcbiAgfVxuICBpZiAob2N0YWwgJiYgL1s4OV0vLnRlc3QodGhpcy5pbnB1dC5zbGljZShzdGFydCwgdGhpcy5wb3MpKSkgeyBvY3RhbCA9IGZhbHNlOyB9XG4gIGlmIChuZXh0ID09PSA0NiAmJiAhb2N0YWwpIHsgLy8gJy4nXG4gICAgKyt0aGlzLnBvcztcbiAgICB0aGlzLnJlYWRJbnQoMTApO1xuICAgIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICB9XG4gIGlmICgobmV4dCA9PT0gNjkgfHwgbmV4dCA9PT0gMTAxKSAmJiAhb2N0YWwpIHsgLy8gJ2VFJ1xuICAgIG5leHQgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQoKyt0aGlzLnBvcyk7XG4gICAgaWYgKG5leHQgPT09IDQzIHx8IG5leHQgPT09IDQ1KSB7ICsrdGhpcy5wb3M7IH0gLy8gJystJ1xuICAgIGlmICh0aGlzLnJlYWRJbnQoMTApID09PSBudWxsKSB7IHRoaXMucmFpc2Uoc3RhcnQsIFwiSW52YWxpZCBudW1iZXJcIik7IH1cbiAgfVxuICBpZiAoaXNJZGVudGlmaWVyU3RhcnQodGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpKSkgeyB0aGlzLnJhaXNlKHRoaXMucG9zLCBcIklkZW50aWZpZXIgZGlyZWN0bHkgYWZ0ZXIgbnVtYmVyXCIpOyB9XG5cbiAgdmFyIHZhbCA9IHN0cmluZ1RvTnVtYmVyKHRoaXMuaW5wdXQuc2xpY2Uoc3RhcnQsIHRoaXMucG9zKSwgb2N0YWwpO1xuICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLm51bSwgdmFsKVxufTtcblxuLy8gUmVhZCBhIHN0cmluZyB2YWx1ZSwgaW50ZXJwcmV0aW5nIGJhY2tzbGFzaC1lc2NhcGVzLlxuXG5wcC5yZWFkQ29kZVBvaW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyksIGNvZGU7XG5cbiAgaWYgKGNoID09PSAxMjMpIHsgLy8gJ3snXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDYpIHsgdGhpcy51bmV4cGVjdGVkKCk7IH1cbiAgICB2YXIgY29kZVBvcyA9ICsrdGhpcy5wb3M7XG4gICAgY29kZSA9IHRoaXMucmVhZEhleENoYXIodGhpcy5pbnB1dC5pbmRleE9mKFwifVwiLCB0aGlzLnBvcykgLSB0aGlzLnBvcyk7XG4gICAgKyt0aGlzLnBvcztcbiAgICBpZiAoY29kZSA+IDB4MTBGRkZGKSB7IHRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKGNvZGVQb3MsIFwiQ29kZSBwb2ludCBvdXQgb2YgYm91bmRzXCIpOyB9XG4gIH0gZWxzZSB7XG4gICAgY29kZSA9IHRoaXMucmVhZEhleENoYXIoNCk7XG4gIH1cbiAgcmV0dXJuIGNvZGVcbn07XG5cbnBwLnJlYWRTdHJpbmcgPSBmdW5jdGlvbihxdW90ZSkge1xuICB2YXIgb3V0ID0gXCJcIiwgY2h1bmtTdGFydCA9ICsrdGhpcy5wb3M7XG4gIGZvciAoOzspIHtcbiAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5pbnB1dC5sZW5ndGgpIHsgdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LCBcIlVudGVybWluYXRlZCBzdHJpbmcgY29uc3RhbnRcIik7IH1cbiAgICB2YXIgY2ggPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgIGlmIChjaCA9PT0gcXVvdGUpIHsgYnJlYWsgfVxuICAgIGlmIChjaCA9PT0gOTIpIHsgLy8gJ1xcJ1xuICAgICAgb3V0ICs9IHRoaXMuaW5wdXQuc2xpY2UoY2h1bmtTdGFydCwgdGhpcy5wb3MpO1xuICAgICAgb3V0ICs9IHRoaXMucmVhZEVzY2FwZWRDaGFyKGZhbHNlKTtcbiAgICAgIGNodW5rU3RhcnQgPSB0aGlzLnBvcztcbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDIwMjggfHwgY2ggPT09IDB4MjAyOSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA8IDEwKSB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJVbnRlcm1pbmF0ZWQgc3RyaW5nIGNvbnN0YW50XCIpOyB9XG4gICAgICArK3RoaXMucG9zO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jdXJMaW5lKys7XG4gICAgICAgIHRoaXMubGluZVN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc05ld0xpbmUoY2gpKSB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJVbnRlcm1pbmF0ZWQgc3RyaW5nIGNvbnN0YW50XCIpOyB9XG4gICAgICArK3RoaXMucG9zO1xuICAgIH1cbiAgfVxuICBvdXQgKz0gdGhpcy5pbnB1dC5zbGljZShjaHVua1N0YXJ0LCB0aGlzLnBvcysrKTtcbiAgcmV0dXJuIHRoaXMuZmluaXNoVG9rZW4odHlwZXMkMS5zdHJpbmcsIG91dClcbn07XG5cbi8vIFJlYWRzIHRlbXBsYXRlIHN0cmluZyB0b2tlbnMuXG5cbnZhciBJTlZBTElEX1RFTVBMQVRFX0VTQ0FQRV9FUlJPUiA9IHt9O1xuXG5wcC50cnlSZWFkVGVtcGxhdGVUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmluVGVtcGxhdGVFbGVtZW50ID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICB0aGlzLnJlYWRUbXBsVG9rZW4oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciA9PT0gSU5WQUxJRF9URU1QTEFURV9FU0NBUEVfRVJST1IpIHtcbiAgICAgIHRoaXMucmVhZEludmFsaWRUZW1wbGF0ZVRva2VuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHRoaXMuaW5UZW1wbGF0ZUVsZW1lbnQgPSBmYWxzZTtcbn07XG5cbnBwLmludmFsaWRTdHJpbmdUb2tlbiA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICh0aGlzLmluVGVtcGxhdGVFbGVtZW50ICYmIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA5KSB7XG4gICAgdGhyb3cgSU5WQUxJRF9URU1QTEFURV9FU0NBUEVfRVJST1JcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJhaXNlKHBvc2l0aW9uLCBtZXNzYWdlKTtcbiAgfVxufTtcblxucHAucmVhZFRtcGxUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0ID0gXCJcIiwgY2h1bmtTdGFydCA9IHRoaXMucG9zO1xuICBmb3IgKDs7KSB7XG4gICAgaWYgKHRoaXMucG9zID49IHRoaXMuaW5wdXQubGVuZ3RoKSB7IHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJVbnRlcm1pbmF0ZWQgdGVtcGxhdGVcIik7IH1cbiAgICB2YXIgY2ggPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgIGlmIChjaCA9PT0gOTYgfHwgY2ggPT09IDM2ICYmIHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpID09PSAxMjMpIHsgLy8gJ2AnLCAnJHsnXG4gICAgICBpZiAodGhpcy5wb3MgPT09IHRoaXMuc3RhcnQgJiYgKHRoaXMudHlwZSA9PT0gdHlwZXMkMS50ZW1wbGF0ZSB8fCB0aGlzLnR5cGUgPT09IHR5cGVzJDEuaW52YWxpZFRlbXBsYXRlKSkge1xuICAgICAgICBpZiAoY2ggPT09IDM2KSB7XG4gICAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmRvbGxhckJyYWNlTClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiB0aGlzLmZpbmlzaFRva2VuKHR5cGVzJDEuYmFja1F1b3RlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvdXQgKz0gdGhpcy5pbnB1dC5zbGljZShjaHVua1N0YXJ0LCB0aGlzLnBvcyk7XG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLnRlbXBsYXRlLCBvdXQpXG4gICAgfVxuICAgIGlmIChjaCA9PT0gOTIpIHsgLy8gJ1xcJ1xuICAgICAgb3V0ICs9IHRoaXMuaW5wdXQuc2xpY2UoY2h1bmtTdGFydCwgdGhpcy5wb3MpO1xuICAgICAgb3V0ICs9IHRoaXMucmVhZEVzY2FwZWRDaGFyKHRydWUpO1xuICAgICAgY2h1bmtTdGFydCA9IHRoaXMucG9zO1xuICAgIH0gZWxzZSBpZiAoaXNOZXdMaW5lKGNoKSkge1xuICAgICAgb3V0ICs9IHRoaXMuaW5wdXQuc2xpY2UoY2h1bmtTdGFydCwgdGhpcy5wb3MpO1xuICAgICAgKyt0aGlzLnBvcztcbiAgICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09PSAxMCkgeyArK3RoaXMucG9zOyB9XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBvdXQgKz0gXCJcXG5cIjtcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9jYXRpb25zKSB7XG4gICAgICAgICsrdGhpcy5jdXJMaW5lO1xuICAgICAgICB0aGlzLmxpbmVTdGFydCA9IHRoaXMucG9zO1xuICAgICAgfVxuICAgICAgY2h1bmtTdGFydCA9IHRoaXMucG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICArK3RoaXMucG9zO1xuICAgIH1cbiAgfVxufTtcblxuLy8gUmVhZHMgYSB0ZW1wbGF0ZSB0b2tlbiB0byBzZWFyY2ggZm9yIHRoZSBlbmQsIHdpdGhvdXQgdmFsaWRhdGluZyBhbnkgZXNjYXBlIHNlcXVlbmNlc1xucHAucmVhZEludmFsaWRUZW1wbGF0ZVRva2VuID0gZnVuY3Rpb24oKSB7XG4gIGZvciAoOyB0aGlzLnBvcyA8IHRoaXMuaW5wdXQubGVuZ3RoOyB0aGlzLnBvcysrKSB7XG4gICAgc3dpdGNoICh0aGlzLmlucHV0W3RoaXMucG9zXSkge1xuICAgIGNhc2UgXCJcXFxcXCI6XG4gICAgICArK3RoaXMucG9zO1xuICAgICAgYnJlYWtcblxuICAgIGNhc2UgXCIkXCI6XG4gICAgICBpZiAodGhpcy5pbnB1dFt0aGlzLnBvcyArIDFdICE9PSBcIntcIikge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgIGNhc2UgXCJgXCI6XG4gICAgICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlcyQxLmludmFsaWRUZW1wbGF0ZSwgdGhpcy5pbnB1dC5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLnBvcykpXG5cbiAgICAvLyBubyBkZWZhdWx0XG4gICAgfVxuICB9XG4gIHRoaXMucmFpc2UodGhpcy5zdGFydCwgXCJVbnRlcm1pbmF0ZWQgdGVtcGxhdGVcIik7XG59O1xuXG4vLyBVc2VkIHRvIHJlYWQgZXNjYXBlZCBjaGFyYWN0ZXJzXG5cbnBwLnJlYWRFc2NhcGVkQ2hhciA9IGZ1bmN0aW9uKGluVGVtcGxhdGUpIHtcbiAgdmFyIGNoID0gdGhpcy5pbnB1dC5jaGFyQ29kZUF0KCsrdGhpcy5wb3MpO1xuICArK3RoaXMucG9zO1xuICBzd2l0Y2ggKGNoKSB7XG4gIGNhc2UgMTEwOiByZXR1cm4gXCJcXG5cIiAvLyAnbicgLT4gJ1xcbidcbiAgY2FzZSAxMTQ6IHJldHVybiBcIlxcclwiIC8vICdyJyAtPiAnXFxyJ1xuICBjYXNlIDEyMDogcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5yZWFkSGV4Q2hhcigyKSkgLy8gJ3gnXG4gIGNhc2UgMTE3OiByZXR1cm4gY29kZVBvaW50VG9TdHJpbmcodGhpcy5yZWFkQ29kZVBvaW50KCkpIC8vICd1J1xuICBjYXNlIDExNjogcmV0dXJuIFwiXFx0XCIgLy8gJ3QnIC0+ICdcXHQnXG4gIGNhc2UgOTg6IHJldHVybiBcIlxcYlwiIC8vICdiJyAtPiAnXFxiJ1xuICBjYXNlIDExODogcmV0dXJuIFwiXFx1MDAwYlwiIC8vICd2JyAtPiAnXFx1MDAwYidcbiAgY2FzZSAxMDI6IHJldHVybiBcIlxcZlwiIC8vICdmJyAtPiAnXFxmJ1xuICBjYXNlIDEzOiBpZiAodGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PT0gMTApIHsgKyt0aGlzLnBvczsgfSAvLyAnXFxyXFxuJ1xuICBjYXNlIDEwOiAvLyAnIFxcbidcbiAgICBpZiAodGhpcy5vcHRpb25zLmxvY2F0aW9ucykgeyB0aGlzLmxpbmVTdGFydCA9IHRoaXMucG9zOyArK3RoaXMuY3VyTGluZTsgfVxuICAgIHJldHVybiBcIlwiXG4gIGNhc2UgNTY6XG4gIGNhc2UgNTc6XG4gICAgaWYgKHRoaXMuc3RyaWN0KSB7XG4gICAgICB0aGlzLmludmFsaWRTdHJpbmdUb2tlbihcbiAgICAgICAgdGhpcy5wb3MgLSAxLFxuICAgICAgICBcIkludmFsaWQgZXNjYXBlIHNlcXVlbmNlXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpblRlbXBsYXRlKSB7XG4gICAgICB2YXIgY29kZVBvcyA9IHRoaXMucG9zIC0gMTtcblxuICAgICAgdGhpcy5pbnZhbGlkU3RyaW5nVG9rZW4oXG4gICAgICAgIGNvZGVQb3MsXG4gICAgICAgIFwiSW52YWxpZCBlc2NhcGUgc2VxdWVuY2UgaW4gdGVtcGxhdGUgc3RyaW5nXCJcbiAgICAgICk7XG4gICAgfVxuICBkZWZhdWx0OlxuICAgIGlmIChjaCA+PSA0OCAmJiBjaCA8PSA1NSkge1xuICAgICAgdmFyIG9jdGFsU3RyID0gdGhpcy5pbnB1dC5zdWJzdHIodGhpcy5wb3MgLSAxLCAzKS5tYXRjaCgvXlswLTddKy8pWzBdO1xuICAgICAgdmFyIG9jdGFsID0gcGFyc2VJbnQob2N0YWxTdHIsIDgpO1xuICAgICAgaWYgKG9jdGFsID4gMjU1KSB7XG4gICAgICAgIG9jdGFsU3RyID0gb2N0YWxTdHIuc2xpY2UoMCwgLTEpO1xuICAgICAgICBvY3RhbCA9IHBhcnNlSW50KG9jdGFsU3RyLCA4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9zICs9IG9jdGFsU3RyLmxlbmd0aCAtIDE7XG4gICAgICBjaCA9IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICBpZiAoKG9jdGFsU3RyICE9PSBcIjBcIiB8fCBjaCA9PT0gNTYgfHwgY2ggPT09IDU3KSAmJiAodGhpcy5zdHJpY3QgfHwgaW5UZW1wbGF0ZSkpIHtcbiAgICAgICAgdGhpcy5pbnZhbGlkU3RyaW5nVG9rZW4oXG4gICAgICAgICAgdGhpcy5wb3MgLSAxIC0gb2N0YWxTdHIubGVuZ3RoLFxuICAgICAgICAgIGluVGVtcGxhdGVcbiAgICAgICAgICAgID8gXCJPY3RhbCBsaXRlcmFsIGluIHRlbXBsYXRlIHN0cmluZ1wiXG4gICAgICAgICAgICA6IFwiT2N0YWwgbGl0ZXJhbCBpbiBzdHJpY3QgbW9kZVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShvY3RhbClcbiAgICB9XG4gICAgaWYgKGlzTmV3TGluZShjaCkpIHtcbiAgICAgIC8vIFVuaWNvZGUgbmV3IGxpbmUgY2hhcmFjdGVycyBhZnRlciBcXCBnZXQgcmVtb3ZlZCBmcm9tIG91dHB1dCBpbiBib3RoXG4gICAgICAvLyB0ZW1wbGF0ZSBsaXRlcmFscyBhbmQgc3RyaW5nc1xuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY2gpXG4gIH1cbn07XG5cbi8vIFVzZWQgdG8gcmVhZCBjaGFyYWN0ZXIgZXNjYXBlIHNlcXVlbmNlcyAoJ1xceCcsICdcXHUnLCAnXFxVJykuXG5cbnBwLnJlYWRIZXhDaGFyID0gZnVuY3Rpb24obGVuKSB7XG4gIHZhciBjb2RlUG9zID0gdGhpcy5wb3M7XG4gIHZhciBuID0gdGhpcy5yZWFkSW50KDE2LCBsZW4pO1xuICBpZiAobiA9PT0gbnVsbCkgeyB0aGlzLmludmFsaWRTdHJpbmdUb2tlbihjb2RlUG9zLCBcIkJhZCBjaGFyYWN0ZXIgZXNjYXBlIHNlcXVlbmNlXCIpOyB9XG4gIHJldHVybiBuXG59O1xuXG4vLyBSZWFkIGFuIGlkZW50aWZpZXIsIGFuZCByZXR1cm4gaXQgYXMgYSBzdHJpbmcuIFNldHMgYHRoaXMuY29udGFpbnNFc2NgXG4vLyB0byB3aGV0aGVyIHRoZSB3b3JkIGNvbnRhaW5lZCBhICdcXHUnIGVzY2FwZS5cbi8vXG4vLyBJbmNyZW1lbnRhbGx5IGFkZHMgb25seSBlc2NhcGVkIGNoYXJzLCBhZGRpbmcgb3RoZXIgY2h1bmtzIGFzLWlzXG4vLyBhcyBhIG1pY3JvLW9wdGltaXphdGlvbi5cblxucHAucmVhZFdvcmQxID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29udGFpbnNFc2MgPSBmYWxzZTtcbiAgdmFyIHdvcmQgPSBcIlwiLCBmaXJzdCA9IHRydWUsIGNodW5rU3RhcnQgPSB0aGlzLnBvcztcbiAgdmFyIGFzdHJhbCA9IHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbiA+PSA2O1xuICB3aGlsZSAodGhpcy5wb3MgPCB0aGlzLmlucHV0Lmxlbmd0aCkge1xuICAgIHZhciBjaCA9IHRoaXMuZnVsbENoYXJDb2RlQXRQb3MoKTtcbiAgICBpZiAoaXNJZGVudGlmaWVyQ2hhcihjaCwgYXN0cmFsKSkge1xuICAgICAgdGhpcy5wb3MgKz0gY2ggPD0gMHhmZmZmID8gMSA6IDI7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gOTIpIHsgLy8gXCJcXFwiXG4gICAgICB0aGlzLmNvbnRhaW5zRXNjID0gdHJ1ZTtcbiAgICAgIHdvcmQgKz0gdGhpcy5pbnB1dC5zbGljZShjaHVua1N0YXJ0LCB0aGlzLnBvcyk7XG4gICAgICB2YXIgZXNjU3RhcnQgPSB0aGlzLnBvcztcbiAgICAgIGlmICh0aGlzLmlucHV0LmNoYXJDb2RlQXQoKyt0aGlzLnBvcykgIT09IDExNykgLy8gXCJ1XCJcbiAgICAgICAgeyB0aGlzLmludmFsaWRTdHJpbmdUb2tlbih0aGlzLnBvcywgXCJFeHBlY3RpbmcgVW5pY29kZSBlc2NhcGUgc2VxdWVuY2UgXFxcXHVYWFhYXCIpOyB9XG4gICAgICArK3RoaXMucG9zO1xuICAgICAgdmFyIGVzYyA9IHRoaXMucmVhZENvZGVQb2ludCgpO1xuICAgICAgaWYgKCEoZmlyc3QgPyBpc0lkZW50aWZpZXJTdGFydCA6IGlzSWRlbnRpZmllckNoYXIpKGVzYywgYXN0cmFsKSlcbiAgICAgICAgeyB0aGlzLmludmFsaWRTdHJpbmdUb2tlbihlc2NTdGFydCwgXCJJbnZhbGlkIFVuaWNvZGUgZXNjYXBlXCIpOyB9XG4gICAgICB3b3JkICs9IGNvZGVQb2ludFRvU3RyaW5nKGVzYyk7XG4gICAgICBjaHVua1N0YXJ0ID0gdGhpcy5wb3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGZpcnN0ID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdvcmQgKyB0aGlzLmlucHV0LnNsaWNlKGNodW5rU3RhcnQsIHRoaXMucG9zKVxufTtcblxuLy8gUmVhZCBhbiBpZGVudGlmaWVyIG9yIGtleXdvcmQgdG9rZW4uIFdpbGwgY2hlY2sgZm9yIHJlc2VydmVkXG4vLyB3b3JkcyB3aGVuIG5lY2Vzc2FyeS5cblxucHAucmVhZFdvcmQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdvcmQgPSB0aGlzLnJlYWRXb3JkMSgpO1xuICB2YXIgdHlwZSA9IHR5cGVzJDEubmFtZTtcbiAgaWYgKHRoaXMua2V5d29yZHMudGVzdCh3b3JkKSkge1xuICAgIHR5cGUgPSBrZXl3b3Jkc1t3b3JkXTtcbiAgfVxuICByZXR1cm4gdGhpcy5maW5pc2hUb2tlbih0eXBlLCB3b3JkKVxufTtcblxuLy8gQWNvcm4gaXMgYSB0aW55LCBmYXN0IEphdmFTY3JpcHQgcGFyc2VyIHdyaXR0ZW4gaW4gSmF2YVNjcmlwdC5cbi8vXG4vLyBBY29ybiB3YXMgd3JpdHRlbiBieSBNYXJpam4gSGF2ZXJiZWtlLCBJbmd2YXIgU3RlcGFueWFuLCBhbmRcbi8vIHZhcmlvdXMgY29udHJpYnV0b3JzIGFuZCByZWxlYXNlZCB1bmRlciBhbiBNSVQgbGljZW5zZS5cbi8vXG4vLyBHaXQgcmVwb3NpdG9yaWVzIGZvciBBY29ybiBhcmUgYXZhaWxhYmxlIGF0XG4vL1xuLy8gICAgIGh0dHA6Ly9tYXJpam5oYXZlcmJla2UubmwvZ2l0L2Fjb3JuXG4vLyAgICAgaHR0cHM6Ly9naXRodWIuY29tL2Fjb3JuanMvYWNvcm4uZ2l0XG4vL1xuLy8gUGxlYXNlIHVzZSB0aGUgW2dpdGh1YiBidWcgdHJhY2tlcl1bZ2hidF0gdG8gcmVwb3J0IGlzc3Vlcy5cbi8vXG4vLyBbZ2hidF06IGh0dHBzOi8vZ2l0aHViLmNvbS9hY29ybmpzL2Fjb3JuL2lzc3Vlc1xuLy9cbi8vIFt3YWxrXTogdXRpbC93YWxrLmpzXG5cblxudmFyIHZlcnNpb24gPSBcIjguMTEuMlwiO1xuXG5QYXJzZXIuYWNvcm4gPSB7XG4gIFBhcnNlcjogUGFyc2VyLFxuICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICBkZWZhdWx0T3B0aW9uczogZGVmYXVsdE9wdGlvbnMsXG4gIFBvc2l0aW9uOiBQb3NpdGlvbixcbiAgU291cmNlTG9jYXRpb246IFNvdXJjZUxvY2F0aW9uLFxuICBnZXRMaW5lSW5mbzogZ2V0TGluZUluZm8sXG4gIE5vZGU6IE5vZGUsXG4gIFRva2VuVHlwZTogVG9rZW5UeXBlLFxuICB0b2tUeXBlczogdHlwZXMkMSxcbiAga2V5d29yZFR5cGVzOiBrZXl3b3JkcyxcbiAgVG9rQ29udGV4dDogVG9rQ29udGV4dCxcbiAgdG9rQ29udGV4dHM6IHR5cGVzLFxuICBpc0lkZW50aWZpZXJDaGFyOiBpc0lkZW50aWZpZXJDaGFyLFxuICBpc0lkZW50aWZpZXJTdGFydDogaXNJZGVudGlmaWVyU3RhcnQsXG4gIFRva2VuOiBUb2tlbixcbiAgaXNOZXdMaW5lOiBpc05ld0xpbmUsXG4gIGxpbmVCcmVhazogbGluZUJyZWFrLFxuICBsaW5lQnJlYWtHOiBsaW5lQnJlYWtHLFxuICBub25BU0NJSXdoaXRlc3BhY2U6IG5vbkFTQ0lJd2hpdGVzcGFjZVxufTtcblxuLy8gVGhlIG1haW4gZXhwb3J0ZWQgaW50ZXJmYWNlICh1bmRlciBgc2VsZi5hY29ybmAgd2hlbiBpbiB0aGVcbi8vIGJyb3dzZXIpIGlzIGEgYHBhcnNlYCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgY29kZSBzdHJpbmcgYW5kXG4vLyByZXR1cm5zIGFuIGFic3RyYWN0IHN5bnRheCB0cmVlIGFzIHNwZWNpZmllZCBieSBbTW96aWxsYSBwYXJzZXJcbi8vIEFQSV1bYXBpXS5cbi8vXG4vLyBbYXBpXTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9TcGlkZXJNb25rZXkvUGFyc2VyX0FQSVxuXG5mdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuICByZXR1cm4gUGFyc2VyLnBhcnNlKGlucHV0LCBvcHRpb25zKVxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGEgc2luZ2xlIGV4cHJlc3Npb24gYXQgYSBnaXZlblxuLy8gb2Zmc2V0IGluIGEgc3RyaW5nLiBVc2VmdWwgZm9yIHBhcnNpbmcgbWl4ZWQtbGFuZ3VhZ2UgZm9ybWF0c1xuLy8gdGhhdCBlbWJlZCBKYXZhU2NyaXB0IGV4cHJlc3Npb25zLlxuXG5mdW5jdGlvbiBwYXJzZUV4cHJlc3Npb25BdChpbnB1dCwgcG9zLCBvcHRpb25zKSB7XG4gIHJldHVybiBQYXJzZXIucGFyc2VFeHByZXNzaW9uQXQoaW5wdXQsIHBvcywgb3B0aW9ucylcbn1cblxuLy8gQWNvcm4gaXMgb3JnYW5pemVkIGFzIGEgdG9rZW5pemVyIGFuZCBhIHJlY3Vyc2l2ZS1kZXNjZW50IHBhcnNlci5cbi8vIFRoZSBgdG9rZW5pemVyYCBleHBvcnQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIHRvIHRoZSB0b2tlbml6ZXIuXG5cbmZ1bmN0aW9uIHRva2VuaXplcihpbnB1dCwgb3B0aW9ucykge1xuICByZXR1cm4gUGFyc2VyLnRva2VuaXplcihpbnB1dCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IHsgTm9kZSwgUGFyc2VyLCBQb3NpdGlvbiwgU291cmNlTG9jYXRpb24sIFRva0NvbnRleHQsIFRva2VuLCBUb2tlblR5cGUsIGRlZmF1bHRPcHRpb25zLCBnZXRMaW5lSW5mbywgaXNJZGVudGlmaWVyQ2hhciwgaXNJZGVudGlmaWVyU3RhcnQsIGlzTmV3TGluZSwga2V5d29yZHMgYXMga2V5d29yZFR5cGVzLCBsaW5lQnJlYWssIGxpbmVCcmVha0csIG5vbkFTQ0lJd2hpdGVzcGFjZSwgcGFyc2UsIHBhcnNlRXhwcmVzc2lvbkF0LCB0eXBlcyBhcyB0b2tDb250ZXh0cywgdHlwZXMkMSBhcyB0b2tUeXBlcywgdG9rZW5pemVyLCB2ZXJzaW9uIH07XG4iXSwKICAibWFwcGluZ3MiOiAiQUFDQSxJQUFJLHdCQUF3QixDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLE1BQU0sSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUc7QUFHM2hDLElBQUksNkJBQTZCLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sSUFBSSxHQUFHLE1BQU0sS0FBSyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxLQUFLLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJ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QUFDMUIsTUFBSSxPQUFPLFFBQVE7QUFDbkIsTUFBSSxLQUFLLFNBQVMsS0FBSyxJQUFJLEdBQUc7QUFDNUIsV0FBTyxTQUFTLElBQUk7QUFBQSxFQUN0QjtBQUNBLFNBQU8sS0FBSyxZQUFZLE1BQU0sSUFBSTtBQUNwQztBQW1CQSxJQUFJLFVBQVU7QUFFZCxPQUFPLFFBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsVUFBVTtBQUFBLEVBQ1YsY0FBYztBQUFBLEVBQ2Q7QUFBQSxFQUNBLGFBQWE7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFTQSxTQUFTUCxPQUFNLE9BQU8sU0FBUztBQUM3QixTQUFPLE9BQU8sTUFBTSxPQUFPLE9BQU87QUFDcEM7QUFNQSxTQUFTUSxtQkFBa0IsT0FBTyxLQUFLLFNBQVM7QUFDOUMsU0FBTyxPQUFPLGtCQUFrQixPQUFPLEtBQUssT0FBTztBQUNyRDtBQUtBLFNBQVNDLFdBQVUsT0FBTyxTQUFTO0FBQ2pDLFNBQU8sT0FBTyxVQUFVLE9BQU8sT0FBTztBQUN4QzsiLAogICJuYW1lcyI6IFsiVG9rZW5UeXBlIiwgIlBvc2l0aW9uIiwgIlNvdXJjZUxvY2F0aW9uIiwgIm9mZnNldCIsICJQYXJzZXIiLCAicmVmIiwgInBhcnNlIiwgIkRlc3RydWN0dXJpbmdFcnJvcnMiLCAiVG9rQ29udGV4dCIsICJTY29wZSIsICJOb2RlIiwgIlJlZ0V4cFZhbGlkYXRpb25TdGF0ZSIsICJjdXJyZW50IiwgIlRva2VuIiwgInBhcnNlRXhwcmVzc2lvbkF0IiwgInRva2VuaXplciJdCn0K
