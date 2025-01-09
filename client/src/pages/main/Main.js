import React, { useEffect, useRef } from "react";
import S from "./style";

const Main = () => {
    const mapRef = useRef(null);
    // 더온누리교회 위도 경도
    const lat = 35.8430691;
    const lng = 127.0805343;

    useEffect(() => {
        const { naver } = window;
        if (mapRef.current && naver) {
            const location = new naver.maps.LatLng(lat, lng);
            const map = new naver.maps.Map(mapRef.current, {
                center: location,
                zoom: 16, // 지도 확대 정도
            });
            const marker = new naver.maps.Marker({
                position: location,
                map,
                title: "더온누리교회",
                clickable: true,
            });

            const contentString = [
                '<div class="iw_inner" style="padding:1rem">',
                '   <p style="font-weight: 600">더온누리교회</p>',
                "   <br>",
                '   <p style="font-weight: 600">전북 전주시 덕진구 만성동로 84-9<br>',
                "   <br>",
                '   <div style="display:flex; justify-content:center;">',
                '       <a href=https://map.naver.com/p/directions/-/14146547.2475576,4279057.3992888,%EB%8D%94%EC%98%A8%EB%88%84%EB%A6%AC%EA%B5%90%ED%9A%8C,1054782529,PLACE_POI/-/transit?c=15.00,0,0,0,dh" target="_blank" style="font-weight: 600; font-size: 16px; text-decoration: underline;">교회가는길 찾기</a>',
                "   </div>",
                "   </p>",
                "</div>",
            ].join("");

            const infoWindow = new naver.maps.InfoWindow({
                content: contentString,

                maxWidth: 400,
                backgroundColor: "#eee",
                borderColor: "#000000",
                borderWidth: 1,
                anchorSize: new naver.maps.Size(30, 30),
                anchorSkew: true,
                anchorColor: "#eee",

                // pixelOffset: new naver.maps.Point(20, -20),
            });

            naver.maps.Event.addListener(marker, "click", (e) => {
                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker);
                }
            });
        }
    }, []);

    return (
        <div>
            <S.MainSection>
                <S.MainContainer>
                    <S.MainCatchPhraseWrapper>
                        <S.MainContentH3>
                            우리는 <span>하나님나라</span>를
                        </S.MainContentH3>
                        <S.MainContentH3>오늘, 여기에서 함께 세우는 공동체입니다</S.MainContentH3>
                    </S.MainCatchPhraseWrapper>
                    <S.MainImageWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/main_image.JPG"} alt="main_image" />
                    </S.MainImageWrapper>
                </S.MainContainer>
            </S.MainSection>
            <S.OurPrayerSection>
                <S.OurPrayerContainer>
                    <S.OurPrayerH2>OUR PRAYER</S.OurPrayerH2>
                    <S.OurPrayerH3>우리의 기도</S.OurPrayerH3>
                    <S.OurPrayerP>아버지, 아버지께서 내 안에 계시고,</S.OurPrayerP>
                    <S.OurPrayerP>내가 아버지 안에 있는 것과 같이,</S.OurPrayerP>
                    <S.OurPrayerP>그들도 하나가 되어서 우리 안에 있게 하여 주십시오.</S.OurPrayerP>
                    <S.OurPrayerP>그래서 아버지께서 나를 보내셨다는 것을,</S.OurPrayerP>
                    <S.OurPrayerP>세상이 믿게 하여 주십시오.</S.OurPrayerP>
                    <S.OurPrayerP>요한복음 17:21</S.OurPrayerP>
                </S.OurPrayerContainer>
            </S.OurPrayerSection>
            <S.CoreValuesSection>
                <S.CoreValuesSectionContainer>
                    <S.MainContentH2>Core Values</S.MainContentH2>
                    <S.MainContentH3>핵심 가치</S.MainContentH3>
                    <S.CoreValuesMainImageWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/core_values.png"} alt="core_values" />
                    </S.CoreValuesMainImageWrapper>
                    <S.CoreValuesItemsWrapper>
                        <S.CoreValuesItemsColumn>
                            <S.CoreValuesItem>
                                <S.CoreValuesItemImageWrapper>
                                    <img src={process.env.PUBLIC_URL + "global/images/focus_on_seekers.JPG"} alt="focus_on_seekers" />
                                </S.CoreValuesItemImageWrapper>
                                <S.CoreValuesItemScriptsWrapper>
                                    <S.MainContentH4>찾는이 중심</S.MainContentH4>
                                    <S.MainContentP>모든 사역의 최우선 순위는</S.MainContentP>
                                    <S.MainContentP>삶의 의미를 모르는 나의 친구들입니다.</S.MainContentP>
                                </S.CoreValuesItemScriptsWrapper>
                            </S.CoreValuesItem>
                            <S.CoreValuesItem>
                                <S.CoreValuesItemImageWrapper>
                                    <img src={process.env.PUBLIC_URL + "global/images/balanced_growth.jpg"} alt="balanced_growth" />
                                </S.CoreValuesItemImageWrapper>
                                <S.CoreValuesItemScriptsWrapper>
                                    <S.MainContentH4>균형있는 성장</S.MainContentH4>
                                    <S.MainContentP>하나님 | 나자신 | 공동체 | 세상 속에서</S.MainContentP>
                                    <S.MainContentP>균형있는 성장을 추구합니다.</S.MainContentP>
                                </S.CoreValuesItemScriptsWrapper>
                            </S.CoreValuesItem>
                            <S.CoreValuesItem>
                                <S.CoreValuesItemImageWrapper>
                                    <img src={process.env.PUBLIC_URL + "global/images/desirable_worship.JPG"} alt="desirable_worship" />
                                </S.CoreValuesItemImageWrapper>
                                <S.CoreValuesItemScriptsWrapper>
                                    <S.MainContentH4>소망하는 예배</S.MainContentH4>
                                    <S.MainContentP>하나님의 통치를 소망하며,</S.MainContentP>
                                    <S.MainContentP>마음을 다하여 예배드립니다.</S.MainContentP>
                                </S.CoreValuesItemScriptsWrapper>
                            </S.CoreValuesItem>
                        </S.CoreValuesItemsColumn>
                        <S.CoreValuesItemsColumn>
                            <S.CoreValuesItem>
                                <S.CoreValuesItemImageWrapper>
                                    <img src={process.env.PUBLIC_URL + "global/images/true_community.jpg"} alt="true_community" />
                                </S.CoreValuesItemImageWrapper>
                                <S.CoreValuesItemScriptsWrapper>
                                    <S.MainContentH4>진실한 공동체</S.MainContentH4>
                                    <S.MainContentP>약육강식의 세상 속에서,</S.MainContentP>
                                    <S.MainContentP>함께 울고 함께 웃는 공동체를 꿈꿉니다.</S.MainContentP>
                                </S.CoreValuesItemScriptsWrapper>
                            </S.CoreValuesItem>
                            <S.CoreValuesItem>
                                <S.CoreValuesItemImageWrapper>
                                    <img src={process.env.PUBLIC_URL + "global/images/go_beyond_for_the_world.JPG"} alt="go_beyond_for_the_world" />
                                </S.CoreValuesItemImageWrapper>
                                <S.CoreValuesItemScriptsWrapper>
                                    <S.MainContentH4>안팎의 변혁</S.MainContentH4>
                                    <S.MainContentP>우리의 변화를 넘어,</S.MainContentP>
                                    <S.MainContentP>이 세상의 변화를 향하여 기꺼이 도전합니다.</S.MainContentP>
                                </S.CoreValuesItemScriptsWrapper>
                            </S.CoreValuesItem>
                        </S.CoreValuesItemsColumn>
                    </S.CoreValuesItemsWrapper>
                </S.CoreValuesSectionContainer>
            </S.CoreValuesSection>
            <S.OurStrategiesSection>
                <S.OurStrategiesSectionContainer>
                    <S.MainContentH2>Our Strategies</S.MainContentH2>
                    <S.MainContentH3>우리의 전략</S.MainContentH3>

                    <S.OurStrategiesItemsContainer>
                        <S.OurStrategiesItem>
                            <S.OurStrategiesImageWrapper>
                                <img src={process.env.PUBLIC_URL + "global/images/scripture.JPG"} alt="scripture" />
                            </S.OurStrategiesImageWrapper>
                            <S.OurStrategiesScriptsWrapper>
                                <S.MainContentH4>말씀</S.MainContentH4>
                                <S.MainContentPWrapper>
                                    <S.MainContentP>전 공동체원의 말씀 묵상의 체질화</S.MainContentP>
                                    <S.MainContentP>모일때마다 말씀에 대한 나눔</S.MainContentP>
                                </S.MainContentPWrapper>
                            </S.OurStrategiesScriptsWrapper>
                        </S.OurStrategiesItem>
                        <S.OurStrategiesItem>
                            <S.OurStrategiesImageWrapper>
                                <img src={process.env.PUBLIC_URL + "global/images/prayer.JPG"} alt="prayer" />
                            </S.OurStrategiesImageWrapper>
                            <S.OurStrategiesScriptsWrapper>
                                <S.MainContentH4>기도</S.MainContentH4>
                                <S.MainContentP>모임의 모든 자리에서 함께 기도</S.MainContentP>
                                <S.MainContentP>공통의 기도제목을 두고 함께 나눔</S.MainContentP>
                            </S.OurStrategiesScriptsWrapper>
                        </S.OurStrategiesItem>
                        <S.OurStrategiesItem>
                            <S.OurStrategiesImageWrapper>
                                <img src={process.env.PUBLIC_URL + "global/images/nurturing.JPG"} alt="nurturing" />
                            </S.OurStrategiesImageWrapper>
                            <S.OurStrategiesScriptsWrapper>
                                <S.MainContentH4>양육</S.MainContentH4>
                                <S.MainContentP>&#91;풍성한 삶의로의 초대/첫걸음/기초&#93;를 중심으로 한 양육</S.MainContentP>
                            </S.OurStrategiesScriptsWrapper>
                        </S.OurStrategiesItem>
                        <S.OurStrategiesItem>
                            <S.OurStrategiesImageWrapper>
                                <img src={process.env.PUBLIC_URL + "global/images/community.JPG"} alt="community" />
                            </S.OurStrategiesImageWrapper>
                            <S.OurStrategiesScriptsWrapper>
                                <S.MainContentH4>공동체</S.MainContentH4>
                                <S.MainContentP>전 공동체가 같은 가치를 품고,</S.MainContentP>
                                <S.MainContentP>동일한 훈련의 과정을 반복</S.MainContentP>
                            </S.OurStrategiesScriptsWrapper>
                        </S.OurStrategiesItem>
                    </S.OurStrategiesItemsContainer>
                </S.OurStrategiesSectionContainer>
            </S.OurStrategiesSection>
            <S.LocationAndTimeSection>
                <S.LocationAndTimeContainer>
                    <S.LocationAndTimeTextWrapper>
                        <S.MainContentH2>Location and Time</S.MainContentH2>
                        <S.MainContentH3>장소와 시간</S.MainContentH3>
                        <S.LocationAndTimeContentContainer>
                            <S.LocationAndTimeContentWrapper>
                                <S.LocationWrapper>
                                    <S.MainContentH4>위치</S.MainContentH4>
                                    <S.MainContentP>전북특별자치도 전주시 덕진구 만성동로 84-9</S.MainContentP>
                                </S.LocationWrapper>
                                <S.LocationWrapper>
                                    <S.MainContentH4>주일 예배</S.MainContentH4>
                                    <S.MainContentP>주일 오후 2시 30분</S.MainContentP>
                                    <S.MainContentP>더온누리교회 지하 1층 다윗의 노래</S.MainContentP>
                                </S.LocationWrapper>
                                <S.LocationWrapper>
                                    <S.MainContentH4>더원공동체 커뮤니티 룸</S.MainContentH4>
                                    <S.MainContentP>더온누리교회 2층 사무엘의 소리 옆</S.MainContentP>
                                </S.LocationWrapper>
                            </S.LocationAndTimeContentWrapper>
                        </S.LocationAndTimeContentContainer>
                    </S.LocationAndTimeTextWrapper>
                    <S.LocationAndTimeMapWrapper>
                        <div id="map" ref={mapRef}></div>
                    </S.LocationAndTimeMapWrapper>
                </S.LocationAndTimeContainer>
            </S.LocationAndTimeSection>
        </div>
    );
};

export default Main;
