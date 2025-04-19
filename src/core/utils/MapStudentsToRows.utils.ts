import avatar from "assets/avatar-Image.png";
import { StudentsListDataTypes } from "core/types";

export const MapStudentsToRows = (students: StudentsListDataTypes[]) => {
    return students.map((item, index) => ({
        id: index + 1,
        fullName: {
            id: index + 1,
            imageSrc: item.user.profile || avatar,
            fullName: `${item.user.first_name} ${item.user.last_name}`,
            status: item.process.current_level, // use your logic here
        },
        currentGrade: {
            grade: item.process.current_level_display || "-",
        },
        studentIncome: {
            income: "۵۰۰٬۰۰۰", // Replace with real data if available
            percent: "+25%", // Replace with real data if available
        },
        groupStatus: {
            status: "در حال کسب درآمد", // Replace with real data if available
        },
        studentStatus: {
            status: "تایید شده", // Replace with real data if available
        },
        action: 1, // or any logic you want
    }));
};