export default function Refill({ onClick }) {
    return(<>
    <button type="button" className="btn btn-outline-natural-60 button-update me-lg-4 mb-lg-0 mb-4" onClick={ onClick }>
      重新填寫
      <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
    </button>
    </>)
}