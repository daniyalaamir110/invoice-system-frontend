import useMenu from "./useMenu"
import useOtherRoutes from "./useOtherRoutes"

const useAllRoutes = () => {
    const menu = useMenu()
    const otherRoutes = useOtherRoutes()
    
    return [...menu, ...otherRoutes]
}

export default useAllRoutes