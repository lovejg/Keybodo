use keybodo;
DROP Table `T_keyboard`;
DROP Table `T_switch`;
DROP Table `T_barebone`;


CREATE Table T_switch (
    switch_id INT PRIMARY KEY NOT NULL,
    switch_name VARCHAR(50) NOT NULL,
    switch_method VARCHAR(20) NOT NULL,
    switch_type VARCHAR(20) NOT NULL,
    switch_pitch VARCHAR(20) NOT NULL,
    switch_price INT NOT NULL,
    maker VARCHAR(20) NOT NULL,
    infolink VARCHAR(255) NOT NULL
);

CREATE Table T_keyboard (
    kb_id INT PRIMARY KEY NOT NULL,
    kb_name VARCHAR(50) NOT NULL,
    kc_type VARCHAR(20) NOT NULL,
    kc_profile VARCHAR(20) NOT NULL,
    material VARCHAR(10) NOT NULL,
    switch_id INT NOT NULL,
    layout INT NOT NULL,
    kb_price INT NOT NULL,
    kb_mod VARCHAR(50) NOT NULL,
    hotswap CHAR NOT NULL,
    infolink VARCHAR(255) NOT NULL,
    Foreign Key (switch_id) REFERENCES T_switch(switch_id)
);

CREATE Table T_barebone (
    bb_id INT PRIMARY KEY NOT NULL,
    bb_name VARCHAR(50) NOT NULL,
    material VARCHAR(10) NOT NULL,
    layout INT NOT NULL,
    direction VARCHAR(10) NOT NULL,
    bb_price INT NOT NULL,
    bb_mod VARCHAR(50) NOT NULL,
    infolink VARCHAR(255) NOT NULL
);

CREATE Table T_spring (
    switch_id INT,
    spring_force INT,
    PRIMARY KEY(switch_id,spring_force),
    Foreign Key (switch_id) REFERENCES T_switch(switch_id)
);

INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (1,'하이무 미드나이트 스위치','기계식','리니어','로우',200,'Haimu','https://smartstore.naver.com/swagkey/products/9108467540');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (2,'TTC 저소음 월백 기계식 키보드 스위치','기계식','택타일','저소음',620,'TTC','https://smartstore.naver.com/swagkey/products/6915158555');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (3,'Gazzew U4T 기계식 키보드 스위치','기계식','택타일','로우-미들',750,'Outemu','https://smartstore.naver.com/swagkey/products/5543913860');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (4,'체리 MX 기계식 키보드 스위치 적축','기계식','리니어','미들',380,'Cherry','https://smartstore.naver.com/swagkey/products/5050039244');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (5,'체리 MX 기계식 키보드 스위치 청축','기계식','클릭','미들',380,'Cherry','https://smartstore.naver.com/swagkey/products/5050039244');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (6,'체리 MX 기계식 키보드 스위치 갈축','기계식','택타일','미들',380,'Cherry','https://smartstore.naver.com/swagkey/products/5050039244');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (7,'체리 MX 기계식 키보드 스위치 흑축','기계식','리니어','미들',380,'Cherry','https://smartstore.naver.com/swagkey/products/5050039244');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (8,'체리 MX 기계식 키보드 스위치 저소음 적축','기계식','저소음 리니어','저소음',580,'Cherry','https://smartstore.naver.com/swagkey/products/5050039244');
INSERT INTO T_switch(switch_id,switch_name,switch_method,switch_type,switch_pitch,switch_price,maker,infolink) VALUES (9,'NIZ EC switch','무접점','무접점','저소음',0,'Noppoo','https://www.nizkeyboard.com/');

INSERT INTO T_spring(switch_id,spring_force) VALUES (1,60);
INSERT INTO T_spring(switch_id,spring_force) VALUES (2,50);
INSERT INTO T_spring(switch_id,spring_force) VALUES (3,62);
INSERT INTO T_spring(switch_id,spring_force) VALUES (3,65);
INSERT INTO T_spring(switch_id,spring_force) VALUES (3,68);
INSERT INTO T_spring(switch_id,spring_force) VALUES (4,54);
INSERT INTO T_spring(switch_id,spring_force) VALUES (5,60);
INSERT INTO T_spring(switch_id,spring_force) VALUES (6,55);
INSERT INTO T_spring(switch_id,spring_force) VALUES (7,80);
INSERT INTO T_spring(switch_id,spring_force) VALUES (8,60);
INSERT INTO T_spring(switch_id,spring_force) VALUES (9,45);
INSERT INTO T_spring(switch_id,spring_force) VALUES (9,55);

INSERT INTO T_keyboard (kb_id,kb_name,kc_type,kc_profile,material,switch_id,layout,kb_price,kb_mod,hotswap,infolink) VALUES (1, 'CHERRY G80-3000S TKL 청축', 'pbt','cherry','abs',5,80,99000,'일체형 케이블','X','https://brand.naver.com/cherry/products/5121196302');
INSERT INTO T_keyboard (kb_id,kb_name,kc_type,kc_profile,material,switch_id,layout,kb_price,kb_mod,hotswap,infolink) VALUES (2, 'CHERRY G80-3000S TKL 적축', 'pbt','cherry','abs',4,80,99000,'일체형 케이블','X','https://brand.naver.com/cherry/products/5121196545');
INSERT INTO T_keyboard (kb_id,kb_name,kc_type,kc_profile,material,switch_id,layout,kb_price,kb_mod,hotswap,infolink) VALUES (3, '앱코 무접점 키보드 87키 텐키리스 KN01 PBT RGB', 'pbt','cherry','abs',9,80,99000,'유선(C-type)','X','https://smartstore.naver.com/whatkey/pro"ducts/8470675872"');
INSERT INTO T_keyboard (kb_id,kb_name,kc_type,kc_profile,material,switch_id,layout,kb_price,kb_mod,hotswap,infolink) VALUES (6, '체리키보드 MX 3.0S 무보강 체리축 게이밍 기계식 키보드 블랙 저소음적축', 'abs','cherry','alu',8,100,129000,'유선(micro)','X','https://brand.naver.com/cherry/products/4895438999');

INSERT INTO T_barebone (bb_id,bb_name,material,layout,direction,bb_price,bb_mod,infolink) VALUES (1,'gmk67','abs',65,'정방향',35000,'2.4GHz, 블루투스5.0, USB(Type-C)','https://ko.aliexpress.com/w/wholesale-gmk67.html?spm=a2g0o.detail.search.0');
INSERT INTO T_barebone (bb_id,bb_name,material,layout,direction,bb_price,bb_mod,infolink) VALUES (2,'tester68','abs',75,'역방향',20000,'2.4GHz, 블루투스5.0','https://ko.aliexpress.com/w/wholesale-tester68.html?spm=a2g0o.detail.search.0');
INSERT INTO T_barebone (bb_id,bb_name,material,layout,direction,bb_price,bb_mod,infolink) VALUES (3,'LEOBOG Hi75 ','alu',75,'정방향',65000,'유선(C-type)','https://ko.aliexpress.com/w/wholesale-hi75.html?spm=a2g0o.detail.search.0');
