var al = {}
al.pAdd = function(v1,v2){
    return cc.v2(v1.x + v2.x, v1.y + v2.y);
}
al.pDistance = function(v1,v2){
    return v1.sub(v2).mag();
}
    
cc.p = cc.v2;
