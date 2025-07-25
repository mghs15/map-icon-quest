const GLOBAL = {};
const SETTING = {};

// 難易度設定
SETTING.version = "v.0.4.0";

// 難易度設定
SETTING.mode = {
  defult: {mode:1, range:0.5, adj:1, qNum:5},
  list: [
    {mode:0, range:1,   adj:0,   qNum:3},
    {mode:1, range:0,   adj:0, qNum:5},
    {mode:2, range:0.5, adj:1,   qNum:5},
    {mode:3, range:1,   adj:2,   qNum:5},
    {mode:4, range:1,   adj:3,   qNum:7},
    {mode:5, range:1,   adj:10,  qNum:3},
  ]
};

// 地理院地図の検索機能で
// 「振興局」「府庁舎」「都庁舎」「県庁舎」を
// 検索した結果を加工
SETTING.startPointList = [
  [141.7665101,43.19760924],
  [140.75653433,42.90229698],
  [140.972226,42.320372],
  [140.75331378,41.81975173],
  [142.4398433,43.80782076],
  [141.700818,45.397466],
  [144.260705,44.026615],
  [143.208357,42.929783],
  [144.384912,42.976657],
  [141.3458069,43.06455462],
  [142.768295,42.172535],
  [140.128071,41.859412],
  [141.65589,43.934641],
  [145.58446644,43.33041451],
  
  [135.7556129, 35.02124244],
  [135.52003732, 34.68634426],
  
  [139.69172242, 35.68950067],
  
  [134.04329144,34.34011187],
  [135.86856827,35.00451284],
  [135.1830778,34.69125701],
  [135.83286117,34.68527418],
  [135.1675,34.22611111],
  [134.2382614,35.50344908],
  [133.05052,35.47229297],
  [133.9350321,34.66173908],
  [132.45964629,34.39655824],
  [131.4706537,34.1860411],
  [134.55928559,34.06576057],
  [136.5086111,34.73027778],
  [132.7656816,33.84164208],
  [133.5311111,33.55972222],
  [130.41796764,33.60638879],
  [130.29879185,33.24935118],
  [129.8672514,32.75003952],
  [130.74158447,32.7898],
  [131.61264456,33.23812986],
  [131.42388686,31.91103415],
  [130.55802486,31.56017126],
  [127.6809218,26.21244491],
  [139.64253682,35.44773404],
  [141.15269555,39.7035257],
  [140.87207222,38.26857887],
  [140.10238069,39.71862641],
  [140.36369034,38.24043378],
  [140.46777103,37.75002873],
  [140.44682363,36.34173699],
  [139.88359211,36.56591154],
  [139.06045298,36.39068771],
  [139.6490115,35.85703302],
  [140.12315397,35.60456013],
  [140.7405482,40.82458882],
  [139.0232446,37.90245146],
  [137.21130526,36.69526476],
  [136.62566904,36.59460555],
  [136.22171994,36.06520851],
  [138.56845518,35.66410789],
  [138.1809036,36.65130564],
  [136.72365686,35.39117408],
  [138.3830556,34.97694444],
  [136.90658224,35.18020877],
];

//注記分類コード・地物種別コード一覧
//https://maps.gsi.go.jp/help/pdf/vector/optbv_featurecodes.pdf
SETTING.featureSet = [
  
  "Anno,110,市区町村,4",
  "Anno,120,飛び地,4",
  "Anno,210,公称（町字名）,4",
  "Anno,220,集落名称（通称）,4",
  "Anno,311,山の総称,4",
  "Anno,312,山、岳、峰等,4",
  "Anno,313,尖峰、丘、塚等,4",
  "Anno,321,湖、沼、池、浦等,4",
  "Anno,322,河川、用水等,4",
  "Anno,323,沢、瀬、淵、瀞、谷、峡、雪渓、河原、州、滝、浜、崎、半島、尻、島等,4",
  "Anno,331,高原、原、森、林、砂丘、湿原,4",
  "Anno,332,岩、溶岩、崖、鍾乳洞、温泉、湧水、噴泉、噴火口、峠、坂等,4",
  "Anno,341,海、湾、灘、淵、浦、瀬、海峡、瀬戸等,4",
  "Anno,342,海岸、浜、半島,4",
  "Anno,343,岬、鼻、崎、磯、敷等,4",
  "Anno,352,島,4",
  "Anno,353,はえ、岩礁等,4",
  "Anno,411,道路名,4",
  "Anno,412,道路施設（ＩＣ、PA、道の駅等）,4",
  "Anno,413,道路構造物（橋、トンネル等）,4",
  "Anno,421,鉄道路線名,4",
  "Anno,422,鉄道駅名,4",
  "Anno,423,鉄道構造物（橋、トンネル、操車場等）,4",
  "Anno,431,港湾,4",
  "Anno,432,港湾施設（フェリー発着所、埠頭等）,4",
  "Anno,441,空港名,4",
  "Anno,511,構造物名称（高塔、煙突等）,4",
  "Anno,521,ダム,4",
  "Anno,522,堰,4",
  "Anno,523,河川・海岸施設（水門、堤防）,4",
  "Anno,531,土地利用名（演習場、ゴルフ場、遊園地、建設予定地等）,4",
  "Anno,532,史跡名勝天然記念物,4",
  "Anno,533,漁港,4",
  "Anno,534,公園,4",
  "Anno,611,合同庁舎,4",
  "Anno,612,国の機関（合同庁舎、矯正施設及び自衛隊を除く）,4",
  "Anno,613,矯正施設（刑務所、少年院等）,4",
  "Anno,615,自衛隊・米軍,4",
  "Anno,621,都道府県庁、北海道の総合振興局・振興局、支庁,4",
  "Anno,631,大学・大学院,4",
  "Anno,632,短期大学,4",
  "Anno,633,高等専門学校,4",
  "Anno,634,特殊学校,4",
  "Anno,651,水族館・動植物園,4",
  "Anno,653,発電所,4",
  "Anno,661,神社,4",
  "Anno,662,寺院,4",
  "Anno,671,商業施設,4",
  "Anno,673,文教施設,4",
  "Anno,681,その他の主要・著名な建物,4",
  "Anno,720,鉱山の鉱種名,4",
  
  "Anno,2901,国道番号,2",
  "Anno,3201,官公署,1",
  "Anno,3202,裁判所,1",
  "Anno,3203,税務署,1",
  "Anno,3204,外国公館,2",
  "Anno,3205,市役所・東京都の区役所,1",
  "Anno,3206,町村役場・政令指定都市の区役所,2",
  "Anno,3211,交番,1",
  "Anno,3212,学校　高等学校・中等教育学校,1",
  "Anno,3213,学校　中学校,1",
  "Anno,3214,学校　小学校,1",
  "Anno,3215,老人ホーム,1",
  "Anno,3216,博物館法の登録博物館・博物館相当施設,1",
  "Anno,3217,図書館,1",
  "Anno,3218,郵便局,1",
  "Anno,3221,灯台,2",
  "Anno,3231,神社　通常の神社,1",
  "Anno,3232,寺院　通常の寺院,1",
  "Anno,3241,警察署,1",
  "Anno,3242,消防署,1",
  "Anno,3243,病院,1",
  "Anno,3244,保健所,1",
  "Anno,4101,煙突,2",
  "Anno,4102,風車,2",
  "Anno,4103,油井・ガス井,2",
  "Anno,4104,記念碑,1",
  "Anno,4105,自然災害伝承碑,1",
  "Anno,5801,滝（領域）,2",
  "Anno,6301,墓地,1",
  "Anno,6311,耕地植生　田,1",
  "Anno,6312,耕地植生　畑,1",
  "Anno,6313,耕地植生　茶畑,2",
  "Anno,6314,耕地植生　果樹園,1",
  "Anno,6321,未耕地植生　広葉樹林,1",
  "Anno,6322,未耕地植生　針葉樹林,1",
  "Anno,6323,未耕地植生　竹林,2",
  "Anno,6324,未耕地植生　ヤシ科樹林,2",
  "Anno,6325,未耕地植生　ハイマツ地,2",
  "Anno,6326,未耕地植生　笹地,2",
  "Anno,6327,未耕地植生　荒地,1",
  "Anno,6331,温泉,2",
  "Anno,6332,噴火口・噴気口,2",
  "Anno,6341,史跡・名勝・天然記念物,1",
  "Anno,6342,城跡,2",
  "Anno,6351,採鉱地,2",
  "Anno,6361,港湾,2",
  "Anno,6362,漁港,2",
  "Anno,7101,電子基準点,1",
  "Anno,7102,三角点,1",
  "Anno,7103,水準点,1",
  "Anno,7201,標高点（測点）,2",
  "Anno,7601,砂礫地（領域が不明瞭な場合）,2",
  "Anno,7621,雨裂（下部）,2",
  "Anno,7701,水面標高,2",
  "Anno,7711,水深,2",
  "Anno,8103,発電所等,1",
  "Anno,8105,電波塔,1",
  
  "Cntr,7352,等高線数値部,3",
  "Isbt,7372,等深線数値部,3",
  
  "AdmArea,1103,行政区画/郡市・東京都の区,3",
  "AdmArea,1104,行政区画/町村・指定都市の区,3",
  "AdmBdry,1211,行政区画界線/25000都府県界及び北海道総合振興局・振興局界,3",
  "AdmBdry,1212,行政区画界線/25000市区町村界,3",
  "AdmBdry,1221,行政区画界線/25000所属界（所属を明示する境界線）,3",
  "RdCL,2701,道路中心線/２条道路中心線 通常部/通常部,3",
  "RdCL,2702,道路中心線/２条道路中心線 通常部/雪覆い,3",
  "RdCL,2703,道路中心線/２条道路中心線 通常部/橋・高架,3",
  "RdCL,2704,道路中心線/２条道路中心線 通常部/トンネル,3",
  "RdCL,2711,道路中心線/２条道路中心線 庭園路/通常部,3",
  "RdCL,2712,道路中心線/２条道路中心線 庭園路/雪覆い,5",
  "RdCL,2713,道路中心線/２条道路中心線 庭園路/橋・高架,3",
  "RdCL,2714,道路中心線/２条道路中心線 庭園路/トンネル,3",
  "RdCL,2721,道路中心線/徒歩道　通常部/通常部,3",
  "RdCL,2722,道路中心線/徒歩道　通常部/雪覆い,5",
  "RdCL,2723,道路中心線/徒歩道　通常部/橋・高架,3",
  "RdCL,2724,道路中心線/徒歩道　通常部/トンネル,3",
  "RdCL,2731,道路中心線/石段/通常部,3",
  "RdCL,2732,道路中心線/石段/雪覆い,5",
  "RdCL,2733,道路中心線/石段/橋・高架,5",
  "RdCL,2734,道路中心線/石段/トンネル,5",
  "BldA,3101,建築物/普通建物,3",
  "BldA,3102,建築物/堅ろう建物,3",
  "BldA,3103,建築物/高層建物,3",
  "BldA,3111,建築物/普通無壁舎,3",
  "BldA,3112,建築物/堅ろう無壁舎,3",
  "StrctLine,4201,構造物線/高塔,3",
  "StrctLine,4202,構造物線/坑口,3",
  "StrctArea,4301,構造物面/巨大構造物,5",
  "StrctArea,4302,構造物面/タンク,3",
  "WA,5100,水域/海,3",
  "WA,5200,水域/河川・湖池,3",
  "Cstline,5101,海岸線/海岸線/通常部,3",
  "Cstline,5103,海岸線/海岸線/堤防等に接する部分,3",
  "WL,5201,水涯線/河川/通常部,3",
  "WL,5203,水涯線/河川/堤防等に接する部分,3",
  "WL,5231,水涯線/湖沼/通常部,3",
  "WL,5233,水涯線/湖沼/堤防等に接する部分,3",
  "RvrCL,5301,河川中心線/一条河川/通常部,3",
  "RvrCL,5302,河川中心線/一条河川/枯れ川部,3",
  "RvrCL,5321,河川中心線/人工水路/空間,3",
  "RvrCL,5322,河川中心線/人工水路/地下,3",
  "RvrCL,5331,河川中心線/用水路,3",
  "WStrA,5401,水部構造物面/ダム,3",
  "WStrA,5411,水部構造物面/桟橋（鉄、コンクリート）,3",
  "WStrL,5501,水部構造物線/ダム,3",
  "WStrL,5511,水部構造物線/桟橋（鉄、コンクリート）,3",
  "WStrL,5514,水部構造物線/せき,3",
  "WStrL,5515,水部構造物線/水門,3",
  "WStrL,5521,水部構造物線/滝,3",
  "WStrL,5532,水部構造物線/透過水制,3",
  "WRltLine,5901,水部表記線/水上・海上交通　船舶,3",
  "WRltLine,5902,水部表記線/水上・海上交通 航路の軌跡,3",
  "WRltLine,5911,水部表記線/流水方向,3",
  "SpcfArea,6101,特定地区界/特定地区界,3",
  "Cntr,7351,等高線/25000等高線,3",
  "Cntr,7352,等高線/25000等高線,3",
  "Cntr,7353,等高線/25000等高線,3",
  "Isbt,7371,等深線/25000等深線,3",
  "Isbt,7372,等深線/25000等深線,3",
  "Isbt,7373,等深線/25000等深線,3",
  "TpgphArea,7401,地形表記面/湿地,3",
  "TpgphArea,7402,地形表記面/万年雪,3",
  "TpgphArea,7403,地形表記面/砂礫地（領域が明瞭な場合）,3",
  "TpgphLine,7501,地形表記線/土崖/コンクリート、堅固な石積等斜面,3",
  "TpgphLine,7502,地形表記線/土崖/コンクリート、堅固な石積でない斜面,3",
  "TpgphLine,7509,地形表記線/土崖（不明）,3",
  "TpgphLine,7511,地形表記線/岩崖,3",
  "TpgphLine,7512,地形表記線/岩,3",
  "TpgphLine,7521,地形表記線/雨裂（上部）,3",
  "TpgphLine,7531,地形表記線/凹地方向線/大凹地（突起部）,3",
  "TpgphLine,7532,地形表記線/凹地方向線/小凹地（矢印）,3",
  "TpgphLine,7541,地形表記線/隠顕岩,3",
  "TpgphLine,7551,地形表記線/干潟界,3",
  "TpgphLine,7561,地形表記線/枯れ川水涯線,3",
  "TpgphLine,7571,地形表記線/湖底急斜面,3",
  "TpgphLine,7572,地形表記線/水部凹地方向線,3",
  "RailCL,8201,鉄道中心線/鉄道中心線,3",
  "PwrTrnsmL,8202,送電線/送電線,3",

];

