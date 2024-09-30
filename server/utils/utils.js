// moment 현재시간 가져오기
// yarn add moment/npm i moment
import moment from "moment";

const getCurrentTime = () => {
    const now = moment().format("YYYY-MM-DD HH:mm:ss");
    return now;
};

export { getCurrentTime };
