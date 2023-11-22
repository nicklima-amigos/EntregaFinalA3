export default function Modal({ id, title, handleSubmit, loading, children }) {
  return (
    <div
      className="modal"
      id={id}
      tabIndex="-1"
      aria-labelledby={id}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={id}>
              {title}
            </h1>
          </div>
          <div className="modal-body d-flex justify-content-around">
            {children}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              loading={loading}
              onClick={handleSubmit}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
