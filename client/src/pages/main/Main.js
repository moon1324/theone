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
                        <img src={process.env.PUBLIC_URL + "global/images/P3100238.JPG"} />
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
        </div>
    );
};

export default Main;
