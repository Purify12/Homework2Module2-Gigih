
const FormCreatePlaylist = () => {
    return (
        <form>
            <label className="form-label" htmlFor="playlist-title"><b>Title : </b></label>
            <br />
            <input
                type="text"
                className="input-title"
                id="playlist-title"
                defaultValue=""
                placeholder="Input your playlist title"
            />
            <br />
            <label className="form-label" htmlFor="playlist-desc"><b>Description : </b></label>
            <br />
            <textarea
                type="text"
                className="input-desc"
                id="playlist-desc"
                defaultValue=""
                placeholder="Input the description"
            ></textarea>
            <input id="submit" className="submit-button" type="button" defaultValue="Submit" />
        </form>
    )
}

export default FormCreatePlaylist;