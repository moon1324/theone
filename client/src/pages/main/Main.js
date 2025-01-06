import React from "react";
import S from "./style";

const Main = () => {
    return (
        <div>
            <S.MainSection>
                <S.MainContainer>
                    <S.MainCatchPhraseWrapper>
                        <h3>
                            우리는 <span>하나님나라</span>를
                        </h3>
                        <h3>오늘, 여기에서 함께 세우는 공동체입니다</h3>
                    </S.MainCatchPhraseWrapper>
                    <S.MainImageWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/main_image.JPG"} />
                    </S.MainImageWrapper>
                </S.MainContainer>
            </S.MainSection>
            <S.OurPrayerSection>
                <S.OurPrayerContainer>
                    <S.OurPrayerTitle>OUR PRAYER</S.OurPrayerTitle>
                    <S.OurPrayerSubtitle>우리의 기도</S.OurPrayerSubtitle>
                    <S.OurPrayerContent>아버지, 아버지께서 내 안에 계시고,</S.OurPrayerContent>
                    <S.OurPrayerContent>내가 아버지 안에 있는 것과 같이,</S.OurPrayerContent>
                    <S.OurPrayerContent>그들도 하나가 되어서 우리 안에 있게 하여 주십시오.</S.OurPrayerContent>
                    <S.OurPrayerContent>그래서 아버지께서 나를 보내셨다는 것을,</S.OurPrayerContent>
                    <S.OurPrayerContent>세상이 믿게 하여 주십시오.</S.OurPrayerContent>
                    <S.OurPrayerContent>요한복음 17:21</S.OurPrayerContent>
                </S.OurPrayerContainer>
            </S.OurPrayerSection>
            <S.CoreValuesSection>
                <S.CoreValuesSectionContainer>
                    <S.MainContentTitle>Core Values</S.MainContentTitle>
                    <S.MainContentSubtitle>핵심 가치</S.MainContentSubtitle>
                    <S.CoreValuesMainImageWrapper>
                        <img src={process.env.PUBLIC_URL + "global/images/core_values.png"} />
                    </S.CoreValuesMainImageWrapper>
                </S.CoreValuesSectionContainer>
            </S.CoreValuesSection>
            <S.OurStrategiesSection>
                <S.OurStrategiesSectionContainer>
                    <S.MainContentTitle>Our Strategies</S.MainContentTitle>
                    <S.MainContentSubtitle>우리의 전략</S.MainContentSubtitle>
                </S.OurStrategiesSectionContainer>
            </S.OurStrategiesSection>
            <S.LocationAndTimeSection>
                <S.LocationAndTimeContainer>
                    <S.LocationAndTimeTextWrapper>
                        <S.MainContentTitle>Location and Time</S.MainContentTitle>
                        <S.MainContentSubtitle>장소와 시간</S.MainContentSubtitle>
                        <S.LocationAndTimeContentContainer>
                            <S.LocationAndTimeContentWrapper>
                                <S.LocationWrapper>
                                    <S.LocationAndTimeContent>
                                        <span>위치</span>
                                    </S.LocationAndTimeContent>
                                    <S.LocationAndTimeContent>전북특별자치도 전주시 덕진구 만성동로 84-9</S.LocationAndTimeContent>
                                </S.LocationWrapper>
                                <S.LocationWrapper>
                                    <S.LocationAndTimeContent>
                                        <span>주일 예배</span>
                                    </S.LocationAndTimeContent>
                                    <S.LocationAndTimeContent>주일 오후 2시 30분</S.LocationAndTimeContent>
                                    <S.LocationAndTimeContent>더온누리교회 지하 1층 다윗의 노래</S.LocationAndTimeContent>
                                </S.LocationWrapper>
                                <S.LocationWrapper>
                                    <S.LocationAndTimeContent>
                                        <span>더원공동체 커뮤니티 룸</span>
                                    </S.LocationAndTimeContent>
                                    <S.LocationAndTimeContent>더온누리교회 2층 사무엘의 소리 옆</S.LocationAndTimeContent>
                                </S.LocationWrapper>
                            </S.LocationAndTimeContentWrapper>
                        </S.LocationAndTimeContentContainer>
                    </S.LocationAndTimeTextWrapper>
                    <S.LocationAndTimeMapWrapper></S.LocationAndTimeMapWrapper>
                </S.LocationAndTimeContainer>
            </S.LocationAndTimeSection>
        </div>
    );
};

export default Main;
