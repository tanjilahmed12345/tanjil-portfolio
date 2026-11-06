/**
 * Competitive programming / developer profiles. Entries with an empty
 * `link` are hidden automatically, so new handles can be filled in later.
 */
import { PUBLIC_URL } from "./paths";

const ICON_DIR = `${PUBLIC_URL}/images/coding-profiles/`;
export const codingProfiles = [
  { name: "GitHub", link: "https://github.com/tanjilahmed12345", icon: ICON_DIR + "github.svg" },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/tanjil-ahmed",
    icon: ICON_DIR + "codeforces.png",
  },
  { name: "LeetCode", link: "", icon: ICON_DIR + "leetcode.png" },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/tanjilvai",
    icon: ICON_DIR + "codechef.jpg",
  },
  {
    name: "LightOJ",
    link: "https://lightoj.com/user/ahmedtanjil1",
    icon: ICON_DIR + "lightoj.svg",
  },
  { name: "AtCoder", link: "", icon: ICON_DIR + "atcoder.png" },
  { name: "GeeksforGeeks", link: "", icon: ICON_DIR + "gfg.png" },
];
