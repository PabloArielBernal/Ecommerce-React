import axios from "axios"
import { useEffect, useState } from "react"
import { useFetch } from "../../utils/hooks/useFetch"
import Spinner from "../common/spinner/Spinner"
import ItemList from "../pages/itemListContainer/ItemList"
import { ItemListContainer } from "../pages/itemListContainer/ItemListContainer"
import { ErrorPage } from "../common/error/ErrorPage"

export const Fetch = () => {

    let { data, isLoading, errorMessage } = useFetch("https://jsonplaceholder.typicode.com/albums", [])


  return (
    <div>
        {
            isLoading ? <Spinner /> : <ItemListContainer />
        }
        {
          errorMessage && <ErrorPage/>
        }
    </div>
  )
}
