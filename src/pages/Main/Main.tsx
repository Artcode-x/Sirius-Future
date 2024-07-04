import { useDispatch, useSelector } from "react-redux"
// import { flagSelector } from "../../store/toolkitSelectors"
import { flagUpdate } from "../../store/reducersSlice"

function Main() {
  const dispatch = useDispatch()

  //   const flag = useSelector(flagSelector)

  const clicked = () => {
    dispatch(flagUpdate(true))
  }
  return <button onClick={clicked}>Нажми меня</button>
}

export default Main
