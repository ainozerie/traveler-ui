export const modifyDate = (date) => {
    return date.toISOString().split('T')[0]
}

export default modifyDate;