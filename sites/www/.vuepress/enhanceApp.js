import dayjs from "dayjs";
import {link} from "./utils/linker";

export default ({Vue}) => {
	Vue.filter('link', link);
	Vue.filter('date', (s, format = "DD/MM/YYYY") => {
		return dayjs(s).format(format);
	});
}
