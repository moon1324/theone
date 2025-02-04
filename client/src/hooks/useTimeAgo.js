import { useMemo } from "react";

const useTimeAgo = (date) => {
    const getTimeAgo = (inputDate) => {
        const now = new Date();
        const pastDate = new Date(inputDate);
        const diffMs = now - pastDate;

        if (diffMs < 60000) {
            return "방금 전";
        } else if (diffMs < 3600000) {
            const minutes = Math.floor(diffMs / 60000);
            return `${minutes}분 전`;
        } else if (diffMs < 86400000) {
            const hours = Math.floor(diffMs / 3600000);
            return `${hours}시간 전`;
        } else if (diffMs < 172800000) {
            return "하루 전";
        } else if (diffMs < 604800000) {
            const days = Math.floor(diffMs / 86400000);
            return `${days}일 전`;
        } else if (diffMs < 2678400000) {
            const weeks = Math.floor(diffMs / 604800000);
            return `${weeks}주 전`;
        } else if (diffMs < 32140800000) {
            const months = Math.floor(diffMs / 2678400000);
            return `${months}달 전`;
        } else {
            const years = Math.floor(diffMs / 32140800000);
            return `${years}년 전`;
        }
    };

    return useMemo(() => getTimeAgo(date), [date]);
};

export default useTimeAgo;
