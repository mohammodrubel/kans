"use server"

export const bannerAPi = async () => {
    try {
        const res = await fetch('https://egg.dordham.com/api/v1/banners', {
            cache: 'force-cache'
        });
      
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return { error: true, message: error.message };
    }
}