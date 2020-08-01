export class StorageQuotaLimited extends Error {
	/**
	 * Create new StorageQuotaLimited instance.
	 *
	 * @param {string} message
	 */
	constructor(message?: string) {
		super(message || 'Storage Hit Quota')
		this.name = StorageQuotaLimited.name
	}
}
