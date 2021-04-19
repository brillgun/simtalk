Date.prototype.tz = function(f) {
    return new Date(this.getTime() + 1000 * 60 * 60 * f);
};
Date.prototype.addDays = function(n) {
    return new Date(this.getTime() + 1000 * 60 * 60 * 24 * n);
};
Date.prototype.format = function(f) {
    if (!this.valueOf()) return ' ';
    var weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var weekShortName = ['일', '월', '화', '수', '목', '금', '토'];
    var d = this,
        h;
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case 'yyyy':
                return d.getFullYear();
            case 'yy':
                return (d.getFullYear() % 1000).zf(2);
            case 'MM':
                return (d.getMonth() + 1).zf(2);
            case 'dd':
                return d.getDate().zf(2);
            case 'E':
                return weekName[d.getDay()];
            case 'e':
                return weekShortName[d.getDay()];
            case 'HH':
                return d.getHours().zf(2);
            case 'hh':
                //eslint-disable-next-line no-cond-assign
                return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case 'mm':
                return d.getMinutes().zf(2);
            case 'ss':
                return d.getSeconds().zf(2);
            case 'a/p':
                return d.getHours() < 12 ? 'AM' : 'PM';
            default:
                return $1;
        }
    });
};
String.prototype.string = function(len) {
    var s = '',
        i = 0;
    while (i++ < len) {
        s += this;
    }
    return s;
};
String.prototype.cutBySpace = function(maxSize) {
    var mSize = maxSize || 12;
    if (mSize >= this.length || this.indexOf(' ') < 0) return this.substr(0, mSize);
    var s = this;
    while (s.lastIndexOf(' ') > mSize || s.length > mSize) {
        s = s.substr(0, s.lastIndexOf(' '));
    }
    return s;
};
if (!String.prototype.includes) {
    String.prototype.includes = function(str) {
        return this.indexOf(str) !== -1;
    };
}
String.prototype.zf = function(len) {
    return '0'.string(len - this.length) + this;
};
String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.ltrim = function() {
    return this.replace(/^\s+/, '');
};
String.prototype.rtrim = function() {
    return this.replace(/\s+$/, '');
};
String.prototype.onlyNumber = function() {
    //return this.replace( /^\d+$/, "" );
    return this.replace(/[^0-9]/g, '');
};
String.prototype.cut = function(n, delimeter) {
    return this.length > n ? this.substr(0, n) + delimeter : this;
};
String.prototype.cutByByte = function(n, delimeter) {
    var b, i, c;
    //eslint-disable-next-line no-cond-assign
    for (b = i = 0; (c = this.charCodeAt(i)); ) {
        b += c >> 7 ? 2 : 1;
        if (b > n) break;
        i++;
    }
    return this.substring(0, i) + delimeter;
};
Number.prototype.zf = function(len) {
    return this.toString().zf(len);
};
Number.prototype.format = function() {
    if (this === 0) return 0;
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = this + '';
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
    return n;
};
String.prototype.format = function() {
    var num = parseFloat(this);
    if (isNaN(num)) return '0';
    return num.format();
};
Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};
Array.prototype.remove = function(index) {
    this.splice(index, 1);
};

export default {
    install(Vue) {
        // 1. 전역 메소드 또는 속성 추가
        // 4. 인스턴스 메소드 추가
        Vue.prototype.$common = {
            pushView(url){
                window.location.href = url;
            }
        }
    }
}