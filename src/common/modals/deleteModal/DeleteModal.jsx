const DeleteModal = () => {
    return <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-64 p-6 rounded shadow-lg">
                {/* Popup content */}
                <h2 className="text-xl mb-4">Popup Content</h2>
                <p>This is the content of the popup.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={togglePopup}>
                    Close
                </button>
            </div>
        </div>
    </>
}

export default DeleteModal