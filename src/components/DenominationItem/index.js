import './index.css'

const DenominationItem = props => {
  const {denomination, clickDeduct} = props
  const {value} = denomination
  const onClickDeduct = () => {
    clickDeduct(value)
  }
  return (
    <l1 className="denomination-list">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDeduct}
      >
        {value}
      </button>
    </l1>
  )
}

export default DenominationItem
