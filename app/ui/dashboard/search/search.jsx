"use client"

import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"
import { usePathname, useSearchParams, useRouter } from "next/navigation";


const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();


const handleSearch = (e) => {
  const params = new URLSearchParams(searchParams);


  if (e.target.value) {
    params.set("q", e.target.value);
  } else {
    params.delete("q");
  }
  replace(`${pathname}?${params}`);
};

  console.log(searchParams)
  console.log(pathname)



    return (
        <div className={styles.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    )
}

export default Search