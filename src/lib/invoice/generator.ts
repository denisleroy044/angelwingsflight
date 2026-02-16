import { CartItem } from '@/store/cartStore'

export interface Invoice {
  invoiceNumber: string
  bookingId: string
  date: string
  customer: {
    name: string
    email: string
    phone?: string
    address?: string
  }
  items: CartItem[]
  subtotal: number
  tax: number
  total: number
  status: 'pending' | 'paid' | 'cancelled'
  paymentMethod?: string
}

export class InvoiceGenerator {
  static generateInvoiceNumber(): string {
    return 'INV-' + Date.now().toString().slice(-8) + '-' + Math.random().toString(36).substring(2, 6).toUpperCase()
  }

  static createInvoice(
    bookingId: string,
    items: CartItem[],
    customer: {
      name: string
      email: string
      phone?: string
      address?: string
    },
    paymentMethod?: string
  ): Invoice {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax = subtotal * 0.1 // 10% tax
    const total = subtotal + tax

    return {
      invoiceNumber: this.generateInvoiceNumber(),
      bookingId,
      date: new Date().toISOString(),
      customer,
      items,
      subtotal,
      tax,
      total,
      status: 'pending',
      paymentMethod
    }
  }

  static formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  static formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  static generateHTML(invoice: Invoice): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Invoice ${invoice.invoiceNumber}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #333; }
          .invoice-container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { text-align: center; margin-bottom: 30px; }
          .header h1 { color: #2563eb; margin: 0; font-size: 32px; }
          .header p { color: #666; margin: 5px 0 0; }
          .invoice-details { display: flex; justify-content: space-between; margin-bottom: 30px; padding: 15px; background: #f9fafb; border-radius: 8px; }
          .invoice-details div p { margin: 5px 0; }
          .label { font-weight: bold; color: #666; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          th { background: #2563eb; color: white; padding: 12px; text-align: left; }
          td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
          .totals { text-align: right; margin-top: 20px; }
          .totals div { margin: 5px 0; }
          .grand-total { font-size: 20px; font-weight: bold; color: #2563eb; }
          .footer { margin-top: 30px; text-align: center; color: #666; font-size: 14px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
          .status { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
          .status-pending { background: #fef3c7; color: #92400e; }
          .status-paid { background: #d1fae5; color: #065f46; }
          .status-cancelled { background: #fee2e2; color: #991b1b; }
        </style>
      </head>
      <body>
        <div class="invoice-container">
          <div class="header">
            <h1>Angel Wings Flight Company</h1>
            <p>Invoice</p>
          </div>

          <div class="invoice-details">
            <div>
              <p><span class="label">Invoice Number:</span> ${invoice.invoiceNumber}</p>
              <p><span class="label">Booking ID:</span> ${invoice.bookingId}</p>
              <p><span class="label">Date:</span> ${this.formatDate(invoice.date)}</p>
            </div>
            <div>
              <p><span class="label">Status:</span> <span class="status status-${invoice.status}">${invoice.status.toUpperCase()}</span></p>
              <p><span class="label">Payment Method:</span> ${invoice.paymentMethod || 'Not specified'}</p>
            </div>
          </div>

          <div class="customer-details" style="margin-bottom: 30px;">
            <h3>Bill To:</h3>
            <p><strong>${invoice.customer.name}</strong></p>
            <p>${invoice.customer.email}</p>
            ${invoice.customer.phone ? `<p>${invoice.customer.phone}</p>` : ''}
            ${invoice.customer.address ? `<p>${invoice.customer.address}</p>` : ''}
          </div>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${invoice.items.map(item => `
                <tr>
                  <td><strong>${item.name}</strong><br><small>${item.description || ''}</small></td>
                  <td>${item.type.toUpperCase()}</td>
                  <td>${item.quantity}</td>
                  <td>${this.formatCurrency(item.price)}</td>
                  <td>${this.formatCurrency(item.price * item.quantity)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="totals">
            <div><span class="label">Subtotal:</span> ${this.formatCurrency(invoice.subtotal)}</div>
            <div><span class="label">Tax (10%):</span> ${this.formatCurrency(invoice.tax)}</div>
            <div class="grand-total"><span class="label">Total:</span> ${this.formatCurrency(invoice.total)}</div>
          </div>

          <div class="footer">
            <p>Thank you for choosing Angel Wings Flight Company!</p>
            <p>For any questions, please contact us at support@angelwings.com</p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  static downloadPDF(invoice: Invoice) {
    // In a real app, you would use a library like jsPDF
    // For demo, we'll download as HTML
    const html = this.generateHTML(invoice)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `invoice-${invoice.invoiceNumber}.html`
    a.click()
    URL.revokeObjectURL(url)
  }
}
