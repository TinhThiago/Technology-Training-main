
import React from 'react';
import type { Module, SubTopic } from '../types';
import { xuatKhoData, chatData, donBanData, exportData } from '../data/mockupData'; // Đã thay đổi: Import dữ liệu từ file riêng

interface MockupViewProps {
    module: Module;
    activeSubTopic: SubTopic | null;
}



// --- Refactored Print Components ---
const PrintHeader: React.FC = () => (
    <header className="flex justify-between items-start pb-6 border-b dark:border-border">
        <div>
            <h2 className="text-2xl font-bold">TinhDV</h2>
            <p className="text-xs mt-2">Địa chỉ: TpHCM</p>
            <p className="text-xs">Số điện thoại: 0123456789</p>
            <p className="text-xs">MST: XXXXXXXXXX</p>
            <p className="text-xs">Website: https://tinhdv.com.vn</p>
        </div>
        <div className="text-right">
            <p className="text-sm">TpHCM, ngày 01 tháng 4 năm 2026</p>
        </div>
    </header>
);

const PrintFooter: React.FC<{ roles: string[] }> = ({ roles }) => (
    <footer className="pt-12 mt-auto text-center text-sm font-semibold">
        <div className="grid grid-cols-3 gap-8">
            {roles.map(role => (
                <div key={role}>
                    <p>{role}</p>
                    <p className="mt-16 text-xs italic">(Ký, họ tên)</p>
                </div>
            ))}
        </div>
    </footer>
);

const PrintLayout: React.FC<{ children: React.ReactNode; footerRoles: string[] }> = ({ children, footerRoles }) => (
    <div className="bg-gray-200 dark:bg-background p-8 flex justify-center">
        <div className="w-full max-w-4xl bg-white dark:bg-card shadow-lg p-12 text-gray-900 dark:text-foreground min-h-[1123px] flex flex-col">
            <div className="flex-grow">
                <PrintHeader />
                {children}
            </div>
            <PrintFooter roles={footerRoles} />
        </div>
    </div>
);


// --- Mockup Components ---
const DonBanPrintMockup: React.FC = () => {
    const donBanPrintData = donBanData;

    return (
        <PrintLayout footerRoles={['Người lập phiếu', 'Người giao hàng', 'Khách hàng']}>
            <section className="my-8">
                <div className="text-center mb-6">
                    <h3 className="text-lg font-bold border-2 border-gray-700 dark:border-border inline-block px-4 py-2">
                        SO_10126473_31-03-2025_GL-Điện Nước Bảy Khang (Chuprong)_ĐH 31/3_ĐH
                    </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><strong>Tên khách hàng:</strong> GL-Điện Nước Bảy Khang (Chuprong)</p>
                    <p><strong>SĐT:</strong> 0354842567</p>
                    <p className="col-span-2"><strong>Địa chỉ:</strong> Ngã 3 Mỹ Hạnh, Chuprong, Gia Lai</p>
                </div>
            </section>
            <table className="w-full text-xs border-collapse border border-gray-400 dark:border-border">
                <thead className="bg-gray-100 dark:bg-secondary text-foreground">
                    <tr>
                        <th className="border border-gray-300 dark:border-border p-2">STT</th>
                        <th className="border border-gray-300 dark:border-border p-2">Tên sản phẩm</th>
                        <th className="border border-gray-300 dark:border-border p-2">VAT</th>
                        <th className="border border-gray-300 dark:border-border p-2">CK</th>
                        <th className="border border-gray-300 dark:border-border p-2">ĐVT</th>
                        <th className="border border-gray-300 dark:border-border p-2">Số lượng</th>
                        <th className="border border-gray-300 dark:border-border p-2">Đơn giá</th>
                        <th className="border border-gray-300 dark:border-border p-2">Đơn giá sau CK</th>
                        <th className="border border-gray-300 dark:border-border p-2">Đơn giá sau VAT</th>
                        <th className="border border-gray-300 dark:border-border p-2">Thành tiền</th>
                        <th className="border border-gray-300 dark:border-border p-2">Ngày giao dự kiến</th>
                    </tr>
                </thead>
                <tbody>
                    {donBanPrintData.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 dark:border-border p-2">{item.name}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.vat}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.ck}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.unit}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.qty}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right">{item.price} đ</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right">{item.priceAfterCK} đ</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right">{item.priceAfterVAT} đ</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right font-semibold">{item.total}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.date}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={9} className="border border-gray-300 dark:border-border p-2 text-right font-bold">Tổng cộng:</td>
                        <td className="border border-gray-300 dark:border-border p-2 text-right font-bold">25,358,400</td>
                        <td className="border border-gray-300 dark:border-border p-2"></td>
                    </tr>
                </tbody>
            </table>
            <p className="text-xs mt-4 italic">Bằng chữ: Hai mươi lăm triệu ba trăm năm mươi tám ngàn bốn trăm đồng</p>
        </PrintLayout>
    );
};

const XuatKhoPrintMockup: React.FC = () => (
    <PrintLayout footerRoles={['Người lập phiếu', 'Thủ kho', 'Người nhận hàng']}>
        <section className="my-8">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold">PHIẾU XUẤT KHO</h3>
                <p className="text-sm mt-1">Ngày xuất: {new Date().toLocaleDateString('vi-VN')}</p>
            </div>
            <table className="w-full text-xs border-collapse border border-gray-400 dark:border-border">
                <thead className="bg-gray-100 dark:bg-secondary text-foreground">
                    <tr>
                        <th className="border border-gray-300 dark:border-border p-2">STT</th>
                        <th className="border border-gray-300 dark:border-border p-2 text-left">Tên hàng</th>
                        <th className="border border-gray-300 dark:border-border p-2">ĐVT</th>
                        <th className="border border-gray-300 dark:border-border p-2">Số lượng</th>
                        <th className="border border-gray-300 dark:border-border p-2">Đóng gói</th>
                    </tr>
                </thead>
                <tbody>
                    {exportData.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 dark:border-border p-2">{item.name}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.unit}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right">{item.exportQty || '-'}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.packaging}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </PrintLayout>
);

const XuatKhoMockup: React.FC = () => (
    <PrintLayout footerRoles={['Người lập phiếu', 'Thủ kho', 'Người nhận hàng']}>
        <section className="my-8">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold">PHIẾU XUẤT KHO</h3>
                <p className="text-sm mt-1">Ngày xuất: {new Date().toLocaleDateString('vi-VN')}</p>
            </div>
            <table className="w-full text-xs border-collapse border border-gray-400 dark:border-border">
                <thead className="bg-gray-100 dark:bg-secondary text-foreground">
                    <tr>
                        <th className="border border-gray-300 dark:border-border p-2">STT</th>
                        <th className="border border-gray-300 dark:border-border p-2 text-left">Tên hàng</th>
                        <th className="border border-gray-300 dark:border-border p-2">ĐVT</th>
                        <th className="border border-gray-300 dark:border-border p-2">SL Yêu cầu</th>
                        <th className="border border-gray-300 dark:border-border p-2">SL Xuất</th>
                        <th className="border border-gray-300 dark:border-border p-2">Đóng gói</th>
                        <th className="border border-gray-300 dark:border-border p-2">Đã kiểm</th>
                    </tr>
                </thead>
                <tbody>
                    {xuatKhoData.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 dark:border-border p-2">{item.name}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.unit}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right">{item.orderQty}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-right">{item.exportQty || '-'}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.packaging}</td>
                            <td className="border border-gray-300 dark:border-border p-2 text-center">{item.checked ? '✓' : '✗'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </PrintLayout>
);

const ChatBotMockup: React.FC = () => (
    <div className="flex flex-col h-full bg-white dark:bg-card rounded-lg shadow-xl p-6">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {chatData.map((msg, index) => (
                <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                        className={`max-w-md p-3 rounded-lg ${msg.from === 'user'
                            ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-muted text-gray-800 dark:text-foreground'}
              `}
                    >
                        {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-6 flex items-center border-t border-gray-200 dark:border-border pt-4">
            <input
                type="text"
                placeholder="Nhập tin nhắn của bạn..."
                className="flex-1 p-3 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-background dark:text-foreground"
            />
            <button className="ml-3 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Gửi
            </button>
        </div>
    </div>
);


export const MockupView: React.FC<MockupViewProps> = ({ activeSubTopic }) => {
    if (!activeSubTopic) {
        return <p className="text-center text-gray-500 dark:text-muted-foreground p-4">Chọn một giao diện mẫu từ thanh điều hướng.</p>;
    }

    switch (activeSubTopic.id) {
        case 'mockup-xuat-kho':
            return <XuatKhoMockup />;
        case 'mockup-chatbot':
            return <ChatBotMockup />;
        case 'mockup-don-ban-print':
            return <DonBanPrintMockup />;
        case 'mockup-xuat-kho-print':
            return <XuatKhoPrintMockup />;
        default:
            return <p className="text-center text-gray-500 dark:text-muted-foreground p-4">Giao diện mẫu này hiện không có sẵn.</p>;
    }
};